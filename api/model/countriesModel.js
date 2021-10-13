import countries from '../data/countries.js';


class CountriesModel{

    getCountries(){

        return countries;
    }
    
   
}

export default new CountriesModel()