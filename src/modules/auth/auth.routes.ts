import { Router } from 'express';
import { validate } from '../../middleware/validate';
import {
  login,
  logout,
  refresh,
  register,
  sendVerificationCode,
  verifyCode,
} from './auth.controller';
import { loginSchema, registerSchema } from './auth.schemas';

const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/refresh', refresh);
router.post('/logout', logout);
router.post('/send-code', sendVerificationCode);
router.post('/verify-code', verifyCode);

export default router;
