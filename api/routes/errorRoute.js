import Router from 'express';
import  HttpError  from 'http-errors';

const router = Router();

router.all('/', (req, res, next) => {
    next(HttpError(404, {message: "No route available!"}));
})

export default router;