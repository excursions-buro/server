import { NextFunction, Request, Response } from 'express';

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
}
