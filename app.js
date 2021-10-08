import express from 'express';
import airlinesRoute from './api/routes/airlinesRoute.js'

const app = express();

// helper json
app.use(express.json());

// airlines
app.use('/api/airlines', airlinesRoute)
// airports

// cities

// countries

// routes In&Out

// userPersonalRoutes
    // CRUD


// users



export default app;