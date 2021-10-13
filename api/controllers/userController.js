import userModel from "../models/userModel.js";
import users from '../data/users.js';
import  HttpError  from "http-errors";
import authHandler from "../middlewares/authHandler.js";


//POST register
const signUpUser = (req, res, next) =>{
    // async for the bcrypt
    try {
        const body = req.body;
        
        if(!body.username || !body.password){
           
            next(HttpError(401, {message: 'Username or Password invalid!'}));

        } else {
            const user = {
                userId: users.length + 1,
                username: body.username,
                password: body.password,
                rol: "user",
                routes: []
            };
            
            const findMe = checkUsers(user);
            
            if (findMe){

                next(HttpError(403,{message: 'User already in DDBB'}));
            } else {
                const result = userModel.createUser(user);
                res.json(result).status(200);
            }

        }
    } catch (error) {
       
       next(HttpError(400, {message: error.message})); 
    }
};

// POST login
const loginUser = async (req, res, next) => {

    try {
        const body = req.body;
        
        if(!body.username || !body.password) {

            next(HttpError(400, {message: "Error in the incoming data"}));

        } else {
            
            const user = ({username: body.username, password: body.password});
           
            const theUser = userModel.getOneUser(user);
        
          if(theUser === undefined) {

              next(HttpError(400, {message: "Username or Password incorrect"}));

          } else {
             
                const passWordCorrect = checkUsers(theUser)
        
        if(!passWordCorrect){

            next(HttpError(404, {message: "Password Incorrect"}));

        } else {
          
           const token = authHandler.generateToken(body.username, body.password);
            res
             .json({ token: token })
             .send(`${body.username} Welcome to your page`)
             .status(200);
        }
          }
        }

        
    } catch (error) {
        next(HttpError(400, {message: error.message}));
        
    }
}
// utility
const checkUsers = (obj) => userModel.checkUserExist(obj);

export default {
    signUpUser,
    loginUser,
    checkUsers
}