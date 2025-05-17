import { Router } from 'express';

import {
  login,
  logout,
  refresh,
  register,
} from '../controllers/auth.controller';
import { validate } from '../middleware/validate';
import { loginSchema } from '../schemas/loginSchema';
import { registerSchema } from '../schemas/registerSchema';

const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/refresh', refresh);
router.post('/logout', logout);

export default router;
