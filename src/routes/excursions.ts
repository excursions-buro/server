import { Router } from 'express';
import {
  getExcursionById,
  getExcursions,
} from '../controllers/excursions.controller';

const router = Router();

router.get('/', getExcursions);
router.get('/:id', getExcursionById);

export default router;
