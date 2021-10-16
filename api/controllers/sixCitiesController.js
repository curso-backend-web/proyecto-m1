import sixCitiesModels from "../models/sixCitiesModels.js";
import HttpError from "http-errors";
import userModel from "../models/userModel.js";
import routes from "../data/routes.js";

// GET 
const getSelectedCities = async (req, res, next) => {

  const origen      = req.query.origen;
  const destination = req.query.destination;
 // const {origen, destination} = req.query;

  if (!origen || !destination) 
    next(HttpError(400, { message: "Missing city of origin or destination" }));
 
    const routeSelected = await sixCitiesModels.getRouteSelected(origen, destination);

    (!routeSelected.length) ? next(HttpError(404, {message: "Route not found"})) 
                            : res.json(routeSelected).status(200);
  
};

// GET
const getUserCityList = (req, res, next) => {
  
  // if params
  const origen      = req.query.origen;
  const destination = req.query.destination;

  // checks with cities
  if (!origen && !destination) {

    let showMessageOne = "No data introduced.Please introduce either origen or destination city or Airport code";

    next(HttpError(400, { message: showMessageOne}));

    res.send( showMessageOne)
       .status(400);

  } else {

    const cityRoutes = sixCitiesModels.getRouteByCityName(origen || destination);
  
    let showMessageTwo = `No routes available for this city at the moment.`;

    (cityRoutes.length <= 0) ? next(HttpError(404, {message: showMessageTwo}))
                             : cityRoutes.map((el) => userModel.routes.push(el));

    res.json(userModel.routes).status(200);
  };

};

// DELETE
const deleteAllArrayUser =  (req, res, next) =>{

  try {
    const removeAll = sixCitiesModels.deleteAllArray();

    res.json(removeAll).status(200);
 
  } catch (error) {
    next(HttpError(400, {message: error.message}));
  }
  
};
// DELETE
const removeOneRoute = (req, res, next) => {

  try {
  const body = req.body;

  const airline   = body.airline;
  const departure = body.departure;
  const arrival   = body.arrival;

    if ((!airline) && (!departure) && (!arrival)) {

      next(HttpError(400, {message: "Missing data from the route. Please, check airline, departure and arrival cities"}));
    } else {

   
     const deleteRoute = sixCitiesModels.deleteOneRoute(airline, departure, arrival);
   
     if(deleteRoute == undefined) {
   
       next(HttpError(404, {message: 'Route no found in the DDBB'}));
   
     } else {
   
       res.json(routes).status(200);
     };
    };
  } catch (error) {

    next(HttpError(400, {message: error.message}));

  }

 


}
const getAllRoutesUser = (req, res, next) =>{

  try {
    (userModel.routes.length == 0) ? res.send(`You have no routes saved in your account`) :
                                     res.json(userModel.routes).status(200);
  } catch (error) {
    next(HttpError(400, {message: error.message}));
    
  }
}
export default {
  getSelectedCities,
  getUserCityList,
  deleteAllArrayUser,
  removeOneRoute,
  getAllRoutesUser
};
