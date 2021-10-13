import HttpError from "http-errors";
import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt';
import authHandler from "../middleware/authHandler.js";
import jwt from "jsonwebtoken";
import users from "../data/users.js";


const SECRET = process.env.SECRET;



const register = (req, res, next) => {

    try {
        const body = req.body;

        if (!body.username || !body.password) {
            next(HttpError(400, { message: 'entry parameters error' }))
        } else {


            
            const idNumber = userModel.setIdNumber();
            const user = { id: idNumber, username: body.username, password: body.password, role: body.role, routes: body.routes};

            const result = userModel.createUser(user);

            if (result < 0)
                next(HttpError(400, { message: 'Cannot register' }))
            else
                res.status(201).json(result);
        }

    } catch (error) {
        next(error);
    }

}

const login = async (req, res, next) => {

    try {
        const body = req.body;

        if (!body.username || !body.password) {
            next(HttpError(400, { message: 'entry parameters error' }))
        } else {
            
            const result = userModel.getUser({ username: body.username });

            if (result === undefined) {
                next(HttpError(401, { message: 'Username or Password incorrect' }));
            } else {
                const passwordCorrect = await bcrypt.compare(body.password, result.password);
                if (!passwordCorrect) {
                    next(HttpError(401, { message: 'Username or Password incorrect' }));
                }
                else {
                    //GENERAMOS EL TOKEN
                    const token = authHandler.generateToken(body.username);
                    res.status(200).json({ token: token });
                }
            }
        }
    }
    catch (error) {
        next(error);
    }

}

const saveRoute = (req, res, next) =>{

        let token = req.headers['authorization'];
        token = token.replace('Bearer ', '')
    
    jwt.verify(token, SECRET, function(err, user) {
      if (err)
       { next(HttpError(400, { message: 'entry parameters error' }))
        
      } else {
          
        const usernameDec = authHandler.decryptPassword(token);

        const resultUser = userModel.getUser({ username: usernameDec.username });
        
        const routesSelected = userModel.saveSelectedRoute(req.query.origin, req.query.destination);
        
        resultUser.routes.push( {routesSelected});
        
        res.json("Data introduced successfully");

    }
})
    
}

const getRoutes = (req, res, next) =>{

    let token = req.headers['authorization'];
    token = token.replace('Bearer ', '');

    jwt.verify(token, SECRET, function(err, user) {
    if (err) { next(HttpError(400, { message: 'entry parameters error' }))
    } else {

        const usernameDec = authHandler.decryptPassword(token);
        const routeSelected = userModel.getSelectedRoutes(usernameDec.username);

        res.json(routeSelected);
    }
})
}

const removeRoute = (req, res, next) =>{

    let token = req.headers['authorization'];
    token = token.replace('Bearer ', '');

    jwt.verify(token, SECRET, function(err, user) {
    if (err) { next(HttpError(400, { message: 'entry parameters error' }))
    } else {

        const usernameDec = authHandler.decryptPassword(token);
        //const routeSelected = userModel.getSelectedRoutes(usernameDec.username);
        //const userIndex = userModel.findUserIndex(usernameDec);

        // users.routes = .splice(userIndex, 1, {id: resultUser.id, username: resultUser.username, password: resultUser.password, role: resultUser.role, routes: ''});

        const resultUser = userModel.getUser({ username: usernameDec.username });
        resultUser.routes = [];

        //const id = req.params.id;
        //const resultUser = userModel.getUserById(id);
        // index = userModel.findUserIndex(resultUser);

        //users.splice(index, 1, {id: resultUser.id, username: resultUser.username, password: resultUser.password, role: resultUser.role, routes: ''})

        res.json("routes successfully deleted");

    }
})
}

const getAllUsers = (req, res, next) =>{

    let token = req.headers['authorization'];
    token = token.replace('Bearer ', '');

    jwt.verify(token, SECRET, function(err, user) {
    if (err) { next(HttpError(400, { message: 'entry parameters error' }))
    } else {

        const usernameDec = authHandler.decryptPassword(token);
        const resultUser = userModel.getUser({ username: usernameDec.username });

        if(resultUser.role== 'admin'){
            const allUsers = userModel.getUsers();

            res.json(allUsers);
        }
    }
})
}

const removeUser = (req, res, next) =>{

    let token = req.headers['authorization'];
    token = token.replace('Bearer ', '');

    jwt.verify(token, SECRET, function(err, user) {
    if (err) { next(HttpError(400, { message: 'entry parameters error' }))
    } else {

        const usernameDec = authHandler.decryptPassword(token);
        const resultUser = userModel.getUser({ username: usernameDec.username });

        if(resultUser.role== 'admin'){
            
            const id = req.params.id;
            const resultUser = userModel.getUserById(id);
            const index = userModel.findUserIndex(resultUser);

            users.splice(index, 1);

            res.json("user successfully deleted");
        }

    }
})
}

export default {
    register,
    login,
    saveRoute,
    getRoutes,
    removeRoute,
    getAllUsers,
    removeUser
}