import Router from 'express';
import countryController from '../controller/countryController.js';

const router = Router();

router.route('/')
    .get(countryController.getCountries)

export default router;