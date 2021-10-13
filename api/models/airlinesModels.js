import airlines from "../data/airlines.js";

// new Class
class ArilinesModel {
  // GET
  getAllAirlines() {
    return airlines;
  }
}
export default new ArilinesModel();
