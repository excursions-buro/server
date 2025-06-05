import { Router } from 'express';
import { validate } from '../../middleware/validate';
import { createBooking, getBookedSeats } from './bookings.controller';
import { bookingSchema } from './bookings.schemas';

const router = Router();

router.get('/seats', getBookedSeats);
router.post('/:id/book', validate(bookingSchema), createBooking);

export default router;
