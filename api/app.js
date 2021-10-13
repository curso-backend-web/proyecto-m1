import express from 'express';
import airlinesRoutes from './route/airlinesRoutes.js';
import airportsRoutes from './route/airportsRoutes.js';
import citiesRoutes from './route/citiesRoutes.js';
import countriesRoutes from './route/countriesRoutes.js';
import routeRouter from './route/routeRouter.js';
import userRouter from './route/userRouter.js';
import errorRouter from './route/errorRouter.js';
import clientErrorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

app.use('/api/airlines', airlinesRoutes);
app.use('/api/airports', airportsRoutes);
app.use('/api/cities', citiesRoutes);
app.use('/api/countries', countriesRoutes);

app.use('/api/users', userRouter);
app.use('/api/routes', routeRouter);

app.use('*', errorRouter)

app.use(clientErrorHandler);


export default app;