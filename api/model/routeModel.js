import routesSelected from '../data/routesJs.js';

class RoutesModel{
    
    getSelectedRoutesFound(origin, destination){
        const routesSelection = routesSelected.filter(x => x.departure_airport_iata == origin && x.arrival_airport_iata == destination);
        return routesSelection;
    }
}

export default new RoutesModel()