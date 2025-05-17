import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { prisma } from '../../utils/prisma';
import * as AuthService from './auth.service';

export const register = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password, name } = req.body;

    const existing = await AuthService.findUserByEmail(email);
    if (existing) {
      res.status(409).json({ error: 'User already exists' });
      return;
    }

    const user = await AuthService.createUser(email, password, name);
    const { accessToken, refreshToken } = AuthService.createTokens(
      user.id,
      user.role
    );

    await AuthService.replaceRefreshToken(user.id, '', refreshToken);

    res
      .cookie('refreshToken', refreshToken, {
        httpOnly: true,
        path: '/api/auth/refresh',
      })
      .status(201)
      .json({ accessToken });
  }
);

export const login = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    const user = await AuthService.findUserByEmail(email);
    if (
      !user ||
      !(await AuthService.comparePasswords(password, user.password))
    ) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const { accessToken, refreshToken } = AuthService.createTokens(
      user.id,
      user.role
    );
    await AuthService.saveRefreshToken(user.id, refreshToken);

    res
      .cookie('refreshToken', refreshToken, {
        httpOnly: true,
        path: '/api/auth/refresh',
      })
      .json({ accessToken });
  }
);

export const refresh = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const token = req.cookies.refreshToken;
    if (!token) {
      res.status(401).json({ error: 'No refresh token' });
      return;
    }

    const { userId } = AuthService.decodeRefreshToken(token);
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user || !user.refreshTokens.includes(token)) {
      res.status(403).json({ error: 'Invalid refresh token' });
      return;
    }

    const { accessToken, refreshToken: newRefresh } = AuthService.createTokens(
      user.id,
      user.role
    );
    await AuthService.replaceRefreshToken(user.id, token, newRefresh);

    res
      .cookie('refreshToken', newRefresh, {
        httpOnly: true,
        path: '/api/auth/refresh',
      })
      .json({ accessToken });
  }
);

export const logout = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const token = req.cookies.refreshToken;
    if (!token) {
      res.clearCookie('refreshToken', { path: '/api/auth/refresh' });
      res.sendStatus(204);
      return;
    }

    try {
      const { userId } = AuthService.decodeRefreshToken(token);
      await AuthService.removeRefreshToken(userId, token);
    } catch {
      // Игнорируем ошибки, чтобы не мешать logout
    }

    res
      .clearCookie('refreshToken', { path: '/api/auth/refresh' })
      .sendStatus(204);
  }
);
