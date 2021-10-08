import { Router } from 'express';
import sixCitiesController from '../controllers/sixCitiesController.js';
const router = Router();

router.route('/').get(sixCitiesController.getSelectedCities);

export default router;