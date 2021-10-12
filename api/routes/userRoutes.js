import Router from 'express';
import userController from '../controllers/userController.js';
import authHandler from '../middlewares/authHandler.js';

const router = Router();

router.route('/signup')
.post(userController.signUpUser);

router.route('/login').post(userController.loginUser);


export default router;