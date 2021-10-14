import Router from 'express';
import travelRouter from './routes.js';

const router = Router();

router.use('/routes',travelRouter);

export default router;

