import { Router } from 'express';
import { validate } from '../../middleware/validate';
import {
  getExcursionById,
  getExcursions,
  getExcursionTypes,
} from './excursion.controller';
import { excursionFiltersSchema } from './excursion.schemas';

const router = Router();

router.get('/types', getExcursionTypes);
router.get('/:id', getExcursionById);
router.get('/', validate(excursionFiltersSchema), getExcursions);

export default router;
