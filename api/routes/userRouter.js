import Router from "express";
import userController from '../controller/userController.js';
import authHandler from "../middleware/authHandler.js";

const router = Router();

router.route('/register')
    .post(authHandler.encryptPassword)
    .post(userController.register);

router.route('/login')
    .post(userController.login);

router.route('/savedroutes')
    .post(userController.saveRoute)
    .get(userController.getRoute)
    .put(userController.removeRoute)

router.route('/admin')
    .get(userController.getAllUsers)
    .delete(userController.removeUser)


export default router;