import Router from "express";
import {getRoutesListCtrl} from '../controller/routes.js';

const router= Router();

router.route('/')
    .get(getRoutesListCtrl);

export default router;    