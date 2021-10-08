import routes from  '../data/routes.js';

class RoutesModel {

    getSixRoutes(){
        return routes;
    }

    getOneName(str){
        return routes.filter((el) => el.departure_airport_iata == str);
    }
}
export default new RoutesModel();