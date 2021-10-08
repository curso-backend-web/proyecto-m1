import countries from  '../data/countries.js';

class CountriesModel {

    getAllCountries(){
        return countries;
    }

}
export default new CountriesModel();