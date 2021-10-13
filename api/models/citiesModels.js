import cities from "../data/cities.js";

class CitiesModel {
  // GET
  getAllCities() {
    return cities;
  }
}
export default new CitiesModel();
