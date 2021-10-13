import Router from 'express';
import airlinesController from '../controller/airlinesController.js';

const router = Router();



router.route('/')
    .get(airlinesController.getAllAirlines)

export default router;