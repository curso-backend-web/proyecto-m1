import Router from 'express';
import userController from '../controllers/userController.js';

const router = Router();

router.route('/signup').post(userController.signUpUser);


export default router;