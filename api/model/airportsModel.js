import airports from '../data/airports.js';


class AirportsModel{

    getAirports(){

        return airports;
    }
}

export default new AirportsModel()