import { Router } from 'express';
import sixCitiesController from '../controllers/sixCitiesController.js';
import authHandler from '../middlewares/authHandler.js';
const router = Router();

router.route('/').get(sixCitiesController.getSelectedCities);

router.route('/user').all(authHandler.authUser)
                     .get(sixCitiesController.getUserCityList);   

export default router;