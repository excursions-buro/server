import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import { errorHandler } from './middleware/errorHandler';
import { authRoutes } from './modules/auth';
import { excursionsRoutes } from './modules/excursion';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);

app.use('/api/auth', authRoutes);
app.use('/api/excursions', excursionsRoutes);

export default app;
