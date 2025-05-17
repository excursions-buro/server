import { Router } from 'express';
import { validate } from '../../middleware/validate';
import { getExcursionById, getExcursions } from './excursion.controller';
import { excursionFiltersSchema } from './excursion.schemas';

const router = Router();

router.get('/', validate(excursionFiltersSchema), getExcursions);
router.get('/:id', getExcursionById);

export default router;
