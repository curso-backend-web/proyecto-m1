import Router from 'express';
import tripController from '../controller/tripController.js';

const router = Router();

router.route('/')
    .get(tripController.getRouteById)

export default router;