import airportModel from '../model/airportModel.js';

const getAirports = (req, res) => {
    const airports = airportModel.getAirports();
    res.json(airports);
}

export default { getAirports }