import express from 'express';
import airlinesRoute from './routes/airlinesRoute.js';
import airportsRoute from './routes/airportsRoute.js';
import citiesRoute from './routes/citiesRoute.js';
import countriesRoute from './routes/countriesRoute.js';
import sixCitiesRoute from './routes/sixCitiesRoute.js';
import userRoutes from './routes/userRoutes.js';
import errorRoute from './routes/errorRoute.js';
import usersErrorHandler from './middlewares/errorHandler.js';
import adminRoute from './routes/adminRoute.js';

const app = express();

// helper json
app.use(express.json());

// airlines
app.use('/api/airlines', airlinesRoute);

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

// api admin
app.use('/api/admin', adminRoute);


// errors MUST be the last one
app.use('*', errorRoute);
app.use(usersErrorHandler);




export default app;