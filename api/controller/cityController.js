import cityModel from '../model/cityModel.js';

const getCities = (req, res) => {
    const cities = cityModel.getCities();
    res.json(cities);
}

export default { getCities }