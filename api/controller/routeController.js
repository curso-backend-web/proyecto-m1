import routesModel from '../model/routeModel.js';

const getAllSelectedRoutes = (req, res) =>{

        const origin = req.query.origin;
        const destination = req.query.destination;

        const routesFound = routesModel.getSelectedRoutesFound(origin, destination);

        res.json(routesFound);
}

export default{

    getAllSelectedRoutes
    
}