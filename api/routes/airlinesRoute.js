import express, { Router } from 'express';
import airlinesController from '../controllers/airlinesController.js'

// router
const router = Router();

// route to get all airlines
router.route('/').get(airlinesController.getAllplanes);


export default router;