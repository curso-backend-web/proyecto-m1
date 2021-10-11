import userModel from "../models/userModel.js";
import users from '../data/users.js';
import  HttpError  from "http-errors";
import bcrypt from 'bcrypt';


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
            /*const choices = {
                caseOne: (findMe),
                caseTwo: (result == undefined),
                caseThree : (result == null),
                caseFour: (!findMe && (result != undefined) && (result != null))
            };
             const result = userModel.createUser(user);
            switch (true) {
                case choices.caseOne:
                    next(res.send({message: 'User already in DDBB'}).status(400));
                    next(HttpError(403,{message: 'User already in DDBB'}));
                    break;
                case choices.caseTwo:
                    next(res.send({message: 'Failed register'}).status(400));
                    next(HttpError(400,{message: 'Failed Register'}));
                    break;
                case choices.caseThree:
                    next(res.send({message: 'Failed register'}).status(400));
                    next(HttpError(400,{message: 'Failed Register'}));
                    break;
                case choices.caseOne:
                    res.json(result).status(200);
                    break;
            
                default:
                    next(error);
                    break;
            } */
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

}
// utility
const checkUsers = (obj) => userModel.checkUserExits(obj);

export default {
    signUpUser,
    loginUser,
    checkUsers
}