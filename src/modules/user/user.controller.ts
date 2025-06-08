import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import * as UserService from './user.service';

export const getCurrentUser = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const user = await UserService.getUserByIdWithOrders(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json({ user });
  }
);

export const updateCurrentUser = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    const { name } = req.body;

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    if (!name) {
      res.status(400).json({ error: 'Name is required' });
      return;
    }

    const updatedUser = await UserService.updateUserName(userId, name);
    res.status(200).json({ user: updatedUser });
  }
);
