import Router from 'express';
import citiesController from '../controller/citiesController.js';

const router = Router();



router.route('/')
    .get(citiesController.getAllCities)

export default router;