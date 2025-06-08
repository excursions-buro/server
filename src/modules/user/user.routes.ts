import { Router } from 'express';
import { authenticate } from '../../middleware/authenticate';
import { getCurrentUser, updateCurrentUser } from './user.controller';

const router = Router();

router.get('/', authenticate, getCurrentUser);
router.patch('/', authenticate, updateCurrentUser);

export default router;
