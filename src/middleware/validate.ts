import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const source = req.method === 'GET' ? req.query : req.body;

    const result = schema.safeParse(source);
    if (!result.success) {
      res.status(400).json({ errors: result.error.errors });
      return;
    }
    next();
  };
