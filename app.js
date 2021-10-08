import express from 'express';
import airlinesRoute from './api/routes/airlinesRoute.js';
import airportsRoute from './api/routes/airportsRoute.js';
const app = express();

// helper json
app.use(express.json());

// airlines
app.use('/api/airlines', airlinesRoute)
// airports
app.use('/api/airports', airportsRoute);
// cities
//app.use('api/cities', citiesRoute)
// countries
//app.use('api/countries', countriesRoute)

// routes In&Out

// userPersonalRoutes
    // CRUD


// users



export default app;