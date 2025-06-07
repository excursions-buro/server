import { Router } from 'express';
import { getOrderById, getOrdersByUser } from './order.controller';

const router = Router();

router.get('/order/:id', getOrderById);
router.get('/:userId', getOrdersByUser);

export default router;
