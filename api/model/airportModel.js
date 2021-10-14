import airports from '../data/airports.js';

class airportModel{
    getAirports(){
        return airports;
    }
}

export default new airportModel();