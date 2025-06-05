import { z } from 'zod';

const ticketSchema = z.object({
  id: z.string().uuid(),
  count: z.number().int().positive(),
});

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
});

export const bookingSchema = z.object({
  scheduleId: z.string().uuid(),
  slotTime: z.string(),
  tickets: z.array(ticketSchema).nonempty(),
  contact: contactSchema,
});
