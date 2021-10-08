import countriesController from "../controllers/countriesController.js";
import { Router } from 'express';

const router = Router();

router.route('/').get(countriesController.allCountries);

export default router;