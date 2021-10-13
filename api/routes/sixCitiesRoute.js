import { Router } from 'express';
import sixCitiesController from '../controllers/sixCitiesController.js';
import authHandler from '../middlewares/authHandler.js';
const router = Router();

router.route('/').get(sixCitiesController.getSelectedCities);

router.route('/user').all(authHandler.authUser)
                     .get(sixCitiesController.getUserCityList); 

router.route('/list').all(authHandler.authUser)
                     .get(sixCitiesController.getAllRoutesUser); 

router.route('/remove').all(authHandler.authUser)
                     .delete(sixCitiesController.deleteAllArrayUser);
                     
router.route('/delete').all(authHandler.authUser)
                     .delete(sixCitiesController.removeOneRoute);   

export default router;