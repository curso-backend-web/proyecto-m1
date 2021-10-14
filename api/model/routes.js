import routes from '../data/routes.json';

export default {
    getRoutesList(origin, destination) {
        let originRegex = origin ? new RegExp(origin, 'g') : /^[A-Z]{3}/;
        let destinationRegex = destination ? new RegExp(destination, 'g') : /^[A-Z]{3}/;
        const result = routes.filter(ruta => originRegex.test(ruta.departure_airport_iata) &&
            destinationRegex.test(ruta.arrival_airport_iata))
        
        return Promise.resolve(result);
    }
}