import airlineModel from '../model/airlineModel.js';

const getAirlines = (req, res) => {
    const airlines = airlineModel.getAirlines();
    res.json(airlines);
}

export default { getAirlines }