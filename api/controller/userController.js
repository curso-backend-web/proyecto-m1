import userModel from '../model/userModel.js';
import HttpError from "http-errors";
import authHandler from '../middleware/authHandler.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import users from '../data/users.js';

const register = (req, res, next) => {
    try {
        const body = req.body;

        if (!body.username || !body.password) {
            next(HttpError(400, { message: 'Error en los parámetros de entrada' }))
        } else {
            const user = { username: body.username, password: body.password, role: "user", routes: [] };

            const result = userModel.register(user);

            if (result < 0)
                next(HttpError(400, { message: 'No se pudo registrar' }))

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
            next(HttpError(400, { message: 'Error en los parámetros de entrada' }))
        } else {

            const result = userModel.login({ username: body.username });

            if (result === undefined) {
                next(HttpError(401, { message: 'Username o Password incorrect' }));
            } else {
                const passwordCorrect = await bcrypt.compare(body.password, result.password);
                if (!passwordCorrect) {
                    next(HttpError(401, { message: 'Username o Password incorrect' }));
                }
                else {
                    const token = await authHandler.generateToken(body.username);
                    res.status(200).json({ token: token });
                }
            }
        }
    }
    catch (error) {
        next(error);
    }
}


const saveRoute = (req, res) => {
    let token = req.headers['authorization'];
    token = token.replace('Bearer ', '');

    jwt.verify(token, process.env.secret, (err, user) => {
        if (err) {
            res.status(401).send({ error: 'token not valid' })
        }
        else {
            const decryptedUsername = authHandler.decryptPassword(token);

            const getUser = userModel.getUser({ username: decryptedUsername.username });
            // const index = userModel.getUserIndex(getUser);

            const selectedRoute = userModel.saveRoute(req.query.origin, req.query.destin);
            getUser.routes.push(selectedRoute);

            res.json("Route saved succesfully");
        }
    })
}

const getRoute = (req, res) => {
    let token = req.headers['authorization'];
    token = token.replace('Bearer ', '');

    jwt.verify(token, process.env.secret, (err, user) => {
        if (err) {
            res.status(401).send({ error: 'token not valid' })
        }
        else {
            const decryptedUsername = authHandler.decryptPassword(token);
            const selectedRoute = userModel.getRoute(decryptedUsername);
            res.json(selectedRoute);
        }
    })
}

const removeRoute = (req, res) => {
    let token = req.headers['authorization'];
    token = token.replace('Bearer ', '');

    jwt.verify(token, process.env.secret, (err, user) => {
        if (err) {
            res.status(401).send({ error: 'token not valid' })
        }
        else {
            const decryptedUsername = authHandler.decryptPassword(token);
            const getUser = userModel.getUser({ username: decryptedUsername.username });
            getUser.routes = [];

            res.json("route removed");
        }
    })
}

const getAllUsers = (req, res) => {
    let token = req.headers['authorization'];
    token = token.replace('Bearer ', '');

    jwt.verify(token, process.env.secret, (err, user) => {
        if (err) {
            res.status(401).send({ error: 'token not valid' })
        }

        else {
            const decryptedUsername = authHandler.decryptPassword(token);
            const getUser = userModel.getUser({ username: decryptedUsername.username });

            if (getUser.role == 'admin') {
                const getAllUsers = userModel.getAllUsers();
                res.json(getAllUsers);
            }
        }
    })
}

const removeUser = (req, res) => {
    let token = req.headers['authorization'];
    token = token.replace('Bearer ', '');

    jwt.verify(token, process.env.secret, (err, user) => {
        if (err) {
            res.status(401).send({ error: 'token not valid' })
        }
        else {
            const decryptedUsername = authHandler.decryptPassword(token);
            const getUser = userModel.getUser({ username: decryptedUsername.username });

            if (getUser.role == 'admin') {
                const getUser = userModel.getUserById(req.params.id);
                const index = userModel.getUserIndex(getUser);

                users.splice(index, 1);
                res.json("user deleted");
            }
        }
    })
}


export default { register, login, saveRoute, getRoute, removeRoute, getAllUsers, removeUser }