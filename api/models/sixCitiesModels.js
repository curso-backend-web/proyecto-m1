import routes from  '../data/routes.js';

class RoutesModel {

    getSixRoutes(){
        return routes;
    };

    getRouteSelected(origen, destination){

        return routes.filter((el) => (el.departure_airport_iata == origen) && (el.arrival_airport_iata == destination));
                   
    };

    getCityByName(str){
        
        return routes.filter((el) => (el.departure_airport_iata == str) || (el.arrival_airport_iata == str));
       
    }
}
export default new RoutesModel();

//const filterData = (array, filterValue) => array.filter(obj => (obj.boughtItems = obj.boughtItems.filter(o => o.currency === filterValue)).length)