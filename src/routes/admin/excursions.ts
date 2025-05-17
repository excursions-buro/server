import { Router } from 'express';
import {
  deleteExcursion,
  getAllExcursionsAdmin,
  updateExcursion,
} from '../../controllers/admin/excursions.controller';

const router = Router();

router.get('/', getAllExcursionsAdmin);
router.put('/:id', updateExcursion);
router.delete('/:id', deleteExcursion);

export default router;
