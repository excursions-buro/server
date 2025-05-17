import cors from 'cors';
import express from 'express';
import { authMiddleware } from './middleware/auth.middleware';
import adminExcursionsRoutes from './routes/admin/excursions';
import authRoutes from './routes/auth';
import excursionsRoutes from './routes/excursions';
import ordersRoutes from './routes/orders';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/excursions', excursionsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin/excursions', authMiddleware, adminExcursionsRoutes);

export default app;
