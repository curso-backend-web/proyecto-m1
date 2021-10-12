import express from 'express';
import airlinesRoute from './api/routes/airlinesRoute.js';
import airportsRoute from './api/routes/airportsRoute.js';
import citiesRoute from './api/routes/citiesRoute.js';
import countriesRoute from './api/routes/countriesRoute.js';
import sixCitiesRoute from './api/routes/sixCitiesRoute.js';
import userRoutes from './api/routes/userRoutes.js';
import errorRoute from './api/routes/errorRoute.js';
import usersErrorHandler from './api/middlewares/errorHandler.js';

const app = express();

// helper json
app.use(express.json());

// airlines
app.use('/api/airlines', airlinesRoute)
// airports
app.use('/api/airports', airportsRoute);
// cities
app.use('/api/cities', citiesRoute);
// countries
app.use('/api/countries', countriesRoute);

// routes ==> selected routes open to everyone
app.use('/api/routes', sixCitiesRoute);

// users
app.use('/api/user', userRoutes);

// userPersonalRoutes
    // CRUD

// errors MUST be the last one
app.use('*', errorRoute)
app.use(usersErrorHandler);




export default app;