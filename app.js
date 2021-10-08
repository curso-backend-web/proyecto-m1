import express from 'express';
import airlinesRoute from './api/routes/airlinesRoute.js';
import airportsRoute from './api/routes/airportsRoute.js';
import citiesRoute from './api/routes/citiesRoute.js';
import countriesRoute from './api/routes/countriesRoute.js';
import sixCitiesRoute from './api/routes/sixCitiesRoute.js';
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

// routes In&Out
app.use('/api/routes', sixCitiesRoute);

// routes in params
//app.use('/api/routes/?origin=:name&destination=:name', sixCitiesRoute);
// userPersonalRoutes
    // CRUD


// users



export default app;