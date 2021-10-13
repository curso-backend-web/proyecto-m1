import users from '../data/users.js';
import routes from '../data/routesJs.js';

class Admin{

    getUser(user){
        return users.find(element => (element.username == user.username))
    }

    findUserIndex(user){
        const findIndex = users.findIndex(element => element.id == user);
        return findIndex;
    }

    getSelectedRoutes(userSelected){
        const routesSelectedFound = users.find(element => (element.route == userSelected.route))
        return routesSelectedFound;
    }

}

export default new Admin();