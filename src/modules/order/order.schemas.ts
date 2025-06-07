import { z } from 'zod';

export const orderIdSchema = z.object({
  id: z.string().uuid(),
});

export const userIdSchema = z.object({
  userId: z.string().uuid(),
});
