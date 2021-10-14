import Router from 'express';
import cityController from '../controller/cityController.js';

const router = Router();

router.route('/')
    .get(cityController.getCities)

export default router;