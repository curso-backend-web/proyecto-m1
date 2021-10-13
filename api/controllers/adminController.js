import adminModel from "../models/adminModel.js";
// import users from '../data/users.js';
 import  HttpError  from "http-errors";
// import bcrypt from 'bcrypt';
// import authHandler from "../middlewares/authHandler.js";



//GET  
const getList = (req, res, next) =>{
    const users = adminModel.getAllUsers();
    res.json((users)).status(200);
}

//POST  
const removeOne = (req, res, next) =>{
try {
    const body=req.body;
    if(!body.userId){
      next(HttpError(401, {message: "id user invalid!"})) 
    } else{

    const userRemove= adminModel.getOneUserById(body.userId);
    res.json(userRemove).status(200);
    }

} catch (error) {
    //  we allow next to deal with the error
    next(HttpError(400, {message: error.message})); 
}


}

export default {
    getList,
    removeOne
}