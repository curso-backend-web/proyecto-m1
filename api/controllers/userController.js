import userModel from "../models/userModel.js";
import users from '../data/users.js';
import  HttpError  from "http-errors";
import bcrypt from 'bcrypt';
import authHandler from "../middlewares/authHandler.js";


//POST register
const signUpUser = (req, res, next) =>{
    console.log('SignUp works');
    // don't invent the wheel
    // async for the bcrypt
    try {
        const body = req.body;
        // if neither username or password
        if(!body.username || !body.password){
            //  to deal with hhtp-errors later!
            next(res.send({message: 'Username or Password invalid!'}).status(401));
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
                next(res.send({message: 'User already in DDBB'}).status(400));
                next(HttpError(403,{message: 'User already in DDBB'}));
            } else {
                const result = userModel.createUser(user);
                res.json(result).status(200);
            }

        }
    } catch (error) {
       //  we allow next to deal with the error
       next(error); 
    }
};
// POST login
const loginUser = async (req, res, next) => {

    try {
        const body = req.body;
        // no data no inside
        if(!body.username || !body.password) {
            next(HttpError(400, {message: "Error in the incoming data"}))
        } else {
            
            const user = ({username: body.username, password: body.password});
            console.log(user);
            const theUser = userModel.getOneUser(user);
           console.log(theUser);
          // conditionals
          if(theUser === undefined) {

              next(HttpError(400, {message: "Username or Password incorrect"}));
              res.send("Username or Password incorrect").status(400);

          } else {
              // for later
              // it will aks you for either hash method or insert only strings
              // you need the hash method in the authHandler middleware
              /* const passWordCorrect = await bcrypt.compare(
                  body.password,
                  theUser.password
              ); */
                const passWordCorrect = checkUsers(theUser)
        // if pass doesn't match
        if(!passWordCorrect){

            next(HttpError(404, {message: "Password Incorrect"}));
            res.send("Password Incorrect").status(400);

        } else {
           // let token = "miToken";
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