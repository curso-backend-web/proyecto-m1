import Router from "express";
import adminController from "../controllers/adminController.js";
import authHandler from "../middlewares/authHandler.js";

const router = Router();

router
  .route("/list")
  .all(authHandler.authUser)
  .get(adminController.getList);


  router
  .route("/remove")
  .all(authHandler.authUser)
  .delete(adminController.removeOne);

export default router;
