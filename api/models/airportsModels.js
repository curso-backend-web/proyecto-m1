import airports from '../data/airports.js';

class AirportsModel {

    // get them all
    getAllAirports(){
        return airports;
    }
}

export default new AirportsModel();