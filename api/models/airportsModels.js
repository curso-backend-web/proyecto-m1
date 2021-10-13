import airports from "../data/airports.js";

class AirportsModel {
  // GET
  getAllAirports() {
    return airports;
  }
}

export default new AirportsModel();
