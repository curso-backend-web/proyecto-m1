import tripModel from '../model/tripModel.js';

const getRouteById = (req, res) => {
    const origin = req.query.origin;
    const destin = req.query.destin;

    const trip = tripModel.getRouteById(origin, destin);
    res.json(trip);
}

export default { getRouteById }