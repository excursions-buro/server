import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import authRoutes from './routes/auth';

const app = express();

app.use(cookieParser());

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

export default app;
