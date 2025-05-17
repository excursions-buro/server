import { Router } from 'express';
import { validate } from '../../middleware/validate';
import { login, logout, refresh, register } from './auth.controller';
import { loginSchema } from './login.schema';
import { registerSchema } from './register.schema';

const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/refresh', refresh);
router.post('/logout', logout);

export default router;
