import { NextFunction, Request, Response } from 'express';
import { verifyAccessToken } from '../utils/jwt';

type JwtUserPayload = {
  userId: string;
  role: string;
  iat?: number;
  exp?: number;
};

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    const payload = verifyAccessToken(token) as JwtUserPayload;

    req.user = {
      id: payload.userId,
      role: payload.role,
    };

    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
    return;
  }
};
