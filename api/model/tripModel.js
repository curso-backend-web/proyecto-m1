import trips from '../data/trips.js';

class tripModel{
    getRouteById(origin, destin){    
        // return trips.filter(element => element.departure_airport_iata == origin);  
        return trips.filter(element => element.departure_airport_iata == origin && element.arrival_airport_iata == destin);
    }
}

export default new tripModel();