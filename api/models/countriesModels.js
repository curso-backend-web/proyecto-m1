import countries from "../data/countries.js";

class CountriesModel {
    // GET
  getAllCountries() {
    return countries;
  }
}
export default new CountriesModel();
