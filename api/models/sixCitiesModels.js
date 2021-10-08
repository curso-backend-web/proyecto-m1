import routes from  '../data/routes.js';

class RoutesModel {

    getSixRoutes(){
        return routes;
    }

    getRouteSelected(origen, destination){
        const myRoute = routes.filter((el) => {
            el.departure_airport_iata == (origen) && el.arrival_airport_iata == (destination);
            console.log(el.departure_airport_iata.includes(origen) && el.arrival_airport_iata.includes(destination));
        
        });
            console.log(myRoute);
            return myRoute;
    }
}
export default new RoutesModel();