import countriesModel from '../model/countriesModel.js';

const getAllCountries = (req, res)=>{

    const countries = countriesModel.getCountries();
    res.json(countries);
}

export default{

    getAllCountries,

}
