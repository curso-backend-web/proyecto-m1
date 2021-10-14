import Router from 'express';
import airlineController from '../controller/airlineController.js';

const router = Router();

router.route('/')
    .get(airlineController.getAirlines);

export default router;