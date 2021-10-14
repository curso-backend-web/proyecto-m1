import airlines from '../data/airlines.js';

class airlineModel{
    getAirlines(){
        return airlines;
    }
}

export default new airlineModel();