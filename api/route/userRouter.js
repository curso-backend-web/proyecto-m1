import Router from 'express';
import userController from '../controller/userController.js';
import authHandler from '../middleware/authHandler.js';

const router = Router();

//router.use('/register', authHandler.encryptPassword);

router.route('/register')
      .post(authHandler.encryptPassword)
      .post(userController.register);

router.route('/login')
      .post(userController.login);

router.route('/savedroutes')
      .post(userController.saveRoute)
      .get(userController.getRoutes)
      .put(userController.removeRoute);

router.route('/useradministration/')
      .get(userController.getAllUsers);

router.route('/useradministration/:id')
      .delete(userController.removeUser);

export default router;