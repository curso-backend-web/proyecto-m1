import countriesModels from "../models/countriesModels.js";

const allCountries = (req, res, next) =>{
const countries = countriesModels.getAllCountries();
res.json(countries).status(200);
};

export default {
    allCountries
};