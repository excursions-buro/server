import bcrypt from 'bcryptjs';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../../utils/jwt';
import { prisma } from '../../utils/prisma';

export const findUserByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const createUser = async (
  email: string,
  password: string,
  name: string
) => {
  const hashed = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { email, password: hashed, name },
  });
};

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const saveRefreshToken = (userId: string, token: string) => {
  return prisma.user.update({
    where: { id: userId },
    data: { refreshTokens: { push: token } },
  });
};

export const replaceRefreshToken = (
  userId: string,
  oldToken: string,
  newToken: string
) => {
  return prisma.user.findUnique({ where: { id: userId } }).then((user) => {
    if (!user) return null;
    const updatedTokens = user.refreshTokens
      .filter((t) => t !== oldToken)
      .concat(newToken);
    return prisma.user.update({
      where: { id: userId },
      data: { refreshTokens: { set: updatedTokens } },
    });
  });
};

export const removeRefreshToken = async (userId: string, token: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return null;

  return prisma.user.update({
    where: { id: userId },
    data: {
      refreshTokens: {
        set: user.refreshTokens.filter((t) => t !== token),
      },
    },
  });
};

export const decodeRefreshToken = (token: string) => {
  return verifyRefreshToken(token) as { userId: string };
};

export const createTokens = (userId: string, role: string) => ({
  accessToken: generateAccessToken(userId, role),
  refreshToken: generateRefreshToken(userId),
});
