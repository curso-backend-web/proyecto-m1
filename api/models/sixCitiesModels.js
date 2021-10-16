import routes from  '../data/routes.js';


class RoutesModel {

    getSixRoutes(){
        return routes;
    };

    getRouteSelected(origen, destination){
        const result = routes.filter((el) => (el.departure_airport_iata == origen) && (el.arrival_airport_iata == destination));   
        return Promise.resolve(result)         
    };

    getRouteByCityName(str){
        const result = routes.filter((el) => (el.departure_airport_iata == str) || (el.arrival_airport_iata == str));
        return Promise.resolve(result);
    ;}

    getRouteByAirline(str){

        return routes.filter((el) => (el.airline_iata == str));
    };

    deleteOneRoute(airline, origen, destination){
        const findMyIndex = routes.findIndex((el) => (el.airline_iata === airline) && (el.departure_airport_iata === origen) && (el.arrival_airport_iata === destination));
        let answerBack = [];
        (findMyIndex < 0) ? answerBack = undefined : answerBack = routes.splice(findMyIndex, 1);
        return answerBack;
    };
    deleteAllArray(){
        let emptyArr = [];
        return Promise.resolve(emptyArr);
    };


}
export default new RoutesModel();
