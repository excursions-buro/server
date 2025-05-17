import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import { errorHandler } from './middleware/errorHandler';
import { authRoutes } from './modules/auth';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(errorHandler);

app.use('/api/auth', authRoutes);

export default app;
