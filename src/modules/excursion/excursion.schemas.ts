import { z } from 'zod';

export const excursionFiltersSchema = z.object({
  typeId: z.string().uuid().optional(),
  priceMin: z
    .string()
    .regex(/^\d+(\.\d+)?$/)
    .optional(),
  priceMax: z
    .string()
    .regex(/^\d+(\.\d+)?$/)
    .optional(),
  date: z.string().datetime().optional(),
  title: z.string().optional(),
  peopleCount: z.string().regex(/^\d+$/).optional(),
});
