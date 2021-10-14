import trips from '../data/trips.js';
import users from '../data/users.js';

class User {
    register(user) {
        users.push(user);
        return users.find(element => element.username == user.username);
    }

    login(user) {
        return users.find(element => (element.username == user.username))
    }

    saveRoute(origin, destin) {
        return trips.filter(element => element.departure_airport_iata == origin && element.arrival_airport_iata == destin);
    }

    getUser(user){
        return users.find(element => element.username == user.username);
    }

    getUserIndex(user){
        return users.findIndex(element => element.id == user);
    }

    getUserById(userId){
        return users.find(element => element.id == userId);
    }

    getRoute(user) {
        return users.filter(element => element.username == user);
    }

    getAllUsers(){
        return users;
    }
}

export default new User();