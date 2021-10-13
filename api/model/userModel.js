import users from '../data/users.js';
import routes from '../data/routesJs.js';

class User{

    createUser(user){
        users.push(user);
        return users.find(element => element.username == user.username);
    }

    setIdNumber(){
        const idNumber = users.length+1;
        return idNumber;
    }

    getUser(user){
        return users.find(element => (element.username == user.username))
    }

    getUserById(userId){
        return users.find(element => (element.id == userId))
    }

    saveSelectedRoute(origin, destination){
        const routeSelectedFound = routes.filter(element => element.departure_airport_iata == origin && element.arrival_airport_iata == destination);
        return routeSelectedFound;
    }

    findUserIndex(user){
        const findIndex = users.findIndex(element => element.id == user);
        return findIndex;
    }

    getSelectedRoutes(user){
        const routesFound = users.filter(element => (element.username == user));
        return routesFound;
    }

    getUsers(){
        return users;
    }

}

export default new User();