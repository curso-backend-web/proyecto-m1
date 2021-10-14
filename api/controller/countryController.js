import countryModel from '../model/countryModel.js';

const getCountries = (req, res) => {
    const countries = countryModel.getCountries();
    res.json(countries);
}

export default { getCountries }