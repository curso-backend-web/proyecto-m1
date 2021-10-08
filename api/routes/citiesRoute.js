import { Router } from "express";
import citiesController from "../controllers/citiesController.js";

const router = Router();

router.route('/').get(citiesController.allCities);

export default router;