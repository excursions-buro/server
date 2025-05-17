import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../utils/jwt';
import { prisma } from '../utils/prisma';

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password, name } = req.body;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    res.status(409).json({ error: 'User already exists' });
    return;
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashed, name },
  });

  const accessToken = generateAccessToken(user.id, user.role);
  const refreshToken = generateRefreshToken(user.id);

  await prisma.user.update({
    where: { id: user.id },
    data: { refreshTokens: { set: [refreshToken] } },
  });

  res
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/api/auth/refresh',
    })
    .status(201)
    .json({ accessToken });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const accessToken = generateAccessToken(user.id, user.role);
  const refreshToken = generateRefreshToken(user.id);

  await prisma.user.update({
    where: { id: user.id },
    data: { refreshTokens: { push: refreshToken } },
  });

  res
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/api/auth/refresh',
    })
    .json({ accessToken });
};

export const refresh = async (req: Request, res: Response): Promise<void> => {
  const token = req.cookies.refreshToken;
  if (!token) {
    res.status(401).json({ error: 'No refresh token' });
    return;
  }

  try {
    const payload = verifyRefreshToken(token) as { userId: number };
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (!user || !user.refreshTokens.includes(token)) {
      res.status(403).json({ error: 'Invalid refresh token' });
      return;
    }

    const newAccessToken = generateAccessToken(user.id, user.role);
    const newRefreshToken = generateRefreshToken(user.id);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        refreshTokens: {
          set: user.refreshTokens
            .filter((t) => t !== token)
            .concat(newRefreshToken),
        },
      },
    });

    res
      .cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        path: '/api/auth/refresh',
      })
      .json({ accessToken: newAccessToken });
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  const token = req.cookies.refreshToken;
  if (!token) {
    res.clearCookie('refreshToken', { path: '/api/auth/refresh' });
    res.sendStatus(204);
    return;
  }

  try {
    const payload = verifyRefreshToken(token) as { userId: number };
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          refreshTokens: {
            set: user.refreshTokens.filter((t) => t !== token),
          },
        },
      });
    }

    res
      .clearCookie('refreshToken', { path: '/api/auth/refresh' })
      .sendStatus(204);
  } catch {
    res
      .clearCookie('refreshToken', { path: '/api/auth/refresh' })
      .sendStatus(204);
  }
};
