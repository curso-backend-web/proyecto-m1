import countries from '../data/countries.js';

class countryModel{
    getCountries(){
        return countries;
    }
}

export default new countryModel();