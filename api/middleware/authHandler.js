import HttpError from "http-errors";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from "../model/userModel.js";


const SECRET = process.env.SECRET;

const encryptPassword = async (req, res, next) => {
    try {
        const saltRounds = 10;

        const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = passwordHash;
        
        next();
    } catch (error) {
        next(error);
    }
}

const decryptPassword = token => {

        const decodedToken = jwt.decode(token);
        return decodedToken;
}

const getTokenFrom = (req) => {
    const authorization = req.get('Authorization');

    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        
        return authorization.substring(7);
    } else {
        return null;
    }
}

const tokenVerify = token => jwt.verify(token, SECRET);

const authUser = (req, res, next) => {

    const token = getTokenFrom(req);

    const decodedToken = tokenVerify(token);

    if (!token || !decodedToken.username) {
        next(HttpError(401, { message: 'token invalid or missing' }))
    } else {
        const user = userModel.getUser({username:decodedToken.username});
        user === undefined ? next(HttpError(401, { message: 'incorrect token' })) :
            next();
    }

}

const generateToken = username => {

    return jwt.sign({username: username}, SECRET);

}

export default {
    authUser,
    encryptPassword,
    generateToken,
    decryptPassword
};