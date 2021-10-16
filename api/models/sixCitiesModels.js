import routes from  '../data/routes.js';


class RoutesModel {

    getSixRoutes(){
        return Promise.resolve(routes);
    };

    getRouteSelected(origen, destination){
        return Promise.resolve(routes.filter((el) => (el.departure_airport_iata == origen) && (el.arrival_airport_iata == destination)))         
    };

    getRouteByOrigenCityName(str){
        return Promise.resolve(routes.filter((el) => (el.departure_airport_iata == str)));
    };
    getRouteByDestinationCityName(str){
        return Promise.resolve(routes.filter((el) => (el.arrival_airport_iata == str)));
    };

    getRouteByAirline(str){
        return Promise.resolve(routes.filter((el) => (el.airline_iata == str)));
    };

    deleteOneRoute(airline, origen, destination){
        const findMyIndex = routes.findIndex((el) => (el.airline_iata === airline) && (el.departure_airport_iata === origen) && (el.arrival_airport_iata === destination));
        let answerBack = [];
        (findMyIndex < 0) ? answerBack = undefined : answerBack = routes.splice(findMyIndex, 1);
        return Promise.resolve(answerBack);
    };
    deleteAllArray(){
        let emptyArr = [];
        return Promise.resolve(emptyArr);
    };


}
export default new RoutesModel();
