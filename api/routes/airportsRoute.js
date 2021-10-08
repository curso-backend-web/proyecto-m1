import  { Router } from "express";
import airportsController from '../controllers/airportsController.js';

const router = Router();

router.route('/').get(airportsController.allAirports);

export default router;