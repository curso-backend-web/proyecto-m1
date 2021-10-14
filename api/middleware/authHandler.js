import HttpError from 'http-errors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../model/userModel.js';

// const secret = "mi secreto";

// función asíncrona (bcrypt requiere de promesa)
// la encriptación se realiza en el programa del middleware de autenticación
const encryptPassword = async (req, res, next) => {
    try {
        const saltRounds = 10;

        const passwordHash = await bcrypt.hash(req.body.password, saltRounds);

        req.body.password = passwordHash;
        next();
    }

    catch (error) {
        next(error);
    }
}

const decryptPassword = token => {
    return jwt.decode(token);
}

const getTokenFrom = request => {
    const authorization = request.get('authorization');

    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7);
    }

    else {
        return null;
    }
}

const verifyToken = token => jwt.verify(token, process.env.secret);

const authUser = async (req, res, next) => {
    // Recuperamos el token de la función getTokenFrom
    const token = getTokenFrom(req);

    // Decodificamos el token llamando a la función verifyToken
    const decodedToken = await verifyToken(token);

    // Condición de error por token inválido o ausencia del mismo
    if (!token || decodedToken.username) {
        next(HttpError(401, { message: 'token invalid or missing' }));
    }

    else {
        // Recuperamos el valor de usuario creado en userModels, como objeto, mediante decodificación de token
        const user = userModels.login({ username: decodedToken.username });

        // Si no encuentra el usuario devuelve error
        user === undefined ? next(HttpError(401, { message: 'El token no es correcto' })) : next();
    }
}

const generateToken = username => {

    return jwt.sign({username: username}, process.env.secret);

}

export default { encryptPassword, decryptPassword, getTokenFrom, verifyToken, authUser, generateToken }