import users from '../data/users.js';

class Admin {

    getAllUsers(){
        // we take out admin from the array
        return users;
    };

    getOneUserById(id){
        return users.find(element => element.userId ==id);
    }
    removeMovie(id){
        const index = users.findIndex(element => element.userId ==id);
        const userremove= users.splice(index,1);
        return userremove;
    }
    
}

export default new Admin();