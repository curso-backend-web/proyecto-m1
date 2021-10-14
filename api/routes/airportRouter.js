import Router from 'express';
import airportController from '../controller/airportController.js';

const router = Router();

router.route('/')
    .get(airportController.getAirports)

export default router;