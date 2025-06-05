import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import * as bookingsService from './bookings.service';

export const getBookedSeats = catchAsync(
  async (req: Request, res: Response) => {
    const { scheduleId, slotTime } = req.query;

    if (!scheduleId || !slotTime) {
      res.status(400).json({ error: 'Необходимы scheduleId и slotTime' });
      return;
    }

    const bookedSeats = await bookingsService.getBookedSeats(
      scheduleId as string,
      slotTime as string
    );

    res.json(bookedSeats);
  }
);

export const createBooking = catchAsync(async (req: Request, res: Response) => {
  const excursionId = req.params.id;
  const bookingData = req.body;

  const order = await bookingsService.createBooking(excursionId, bookingData);
  res.status(201).json(order);
});
