import Router from 'express';
import routesController from '../controller/routeController.js';

const router = Router();


router.route('/') 
    
    .get(routesController.getAllSelectedRoutes);
    
export default router;