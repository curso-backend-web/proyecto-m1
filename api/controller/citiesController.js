import citiesModel from '../model/citiesModel.js';

const getAllCities = (req, res)=>{

    const cities = citiesModel.getCities();
    res.json(cities);
}

export default{

    getAllCities,

}
