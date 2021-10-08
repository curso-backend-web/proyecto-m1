import routes from  '../data/routes.js';

class RoutesModel {

    getSixRoutes(){
        return routes;
    }

    getOneName(obj){
        return routes.filter((el) => el.departure_airport_iata == obj.departure_airport_iata);
    }
}
export default new RoutesModel();