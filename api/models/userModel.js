import users from '../data/users.js';

class UsersTravellers {

    // array routes
    routes = [];

    getAllUsers(){
        // only admin
        return users;
    }

    getOneUser(obj){
        // to allow users to get to their profile 
        console.log(obj + ' ' + 'get one user');
        return users.find((el) => (el.username == obj.username) && (el.password == obj.password));
    }

    checkUserExist(obj){
        //  check if username can be used
        return users.some((el)=> (el.username == obj.username) && (el.password == obj.password));
    }

    createUser(obj){
        
        users.push(obj);
        console.log(users);
        return users;
    }
    deleteUser(name){
       
        const findMyIndex = users.findIndex((el) => el.username === name);
        let eraseMe;
        (findMyIndex < 0) ? eraseMe = name : eraseMe = users.splice(findMyIndex, 1);
        return eraseMe;
    
    }
}

export default new UsersTravellers();