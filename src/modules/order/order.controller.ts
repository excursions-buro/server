import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import * as orderService from './order.service';

export const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const order = await orderService.getOrderById(id);

  if (!order) {
    res.status(404).json({ error: 'Order not found' });
    return;
  }

  res.json(order);
});

export const getOrdersByUser = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const orders = await orderService.getOrdersByUser(userId);
    res.json(orders);
  }
);
