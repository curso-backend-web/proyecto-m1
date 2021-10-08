import airportsModel from '../models/airportsModels.js';

// GET
const allAirports = (req, res) =>{
    const airports = airportsModel.getAllAirports();
    res.json((airports)).status(200);

}

export default {
    allAirports
}