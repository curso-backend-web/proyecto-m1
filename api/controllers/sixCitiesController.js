import sixCitiesModels from "../models/sixCitiesModels.js";
import HttpError from "http-errors";
import userModel from "../models/userModel.js";
import routes from "../data/routes.js";

// GET 
const getSelectedCities = async (req, res, next) => {

  try {
    const {origen, destination} = req.query;

    if (!origen || !destination) 
      next(HttpError(400, { message: "Missing city of origin or destination" }));
   
      const routeSelected = await sixCitiesModels.getRouteSelected(origen, destination);
  
      (!routeSelected.length) ? next(HttpError(404, {message: "Route not found"})) 
                              : res.json(routeSelected).status(200);
    
  } catch (error) {

    next(HttpError(400, {message: error.message}));
  }
 
  
};

// GET
const getUserCityList = async (req, res, next) => {
  
  // if params
  /* const origen      = req.query.origen;
  const destination = req.query.destination; */
  const {origen, destination} = req.query;
  try {
     // checks with cities
  if (!origen && !destination) 
    next(HttpError(400, { message: "No data introduced.Please introduce either origen or destination city or Airport code"}));
  
    if(origen)
    const cityOrigen = await sixCitiesModels.getRouteByOrigenCityName(origen);

    if(destination)
    const cityDestination = await sixCitiesModels.getRouteByDestinationCityName(destination);

    (!cityOrigen.length) ? next(HttpError(404, {message: `No origen routes available for this city at the moment.`})) 
                         : cityOrigen.map((el) => userModel.routes.push(el));

    (!cityDestination.length) ? next(HttpError(404, {message: `No destination routes available for this city at the moment.`}))
                              : cityDestination.map((el) => userModel.routes.push(el));

    res.json(userModel.routes).status(200);
  
  } catch (error) {
    
    next(HttpError(400, {message: error.message}));
  }

 

};

// DELETE
const deleteAllArrayUser = async (req, res, next) =>{

  try {
    const removeAll = await sixCitiesModels.deleteAllArray();

    res.json(removeAll).status(200);
 
  } catch (error) {
    next(HttpError(400, {message: error.message}));
  }
  
};
// DELETE
const removeOneRoute = async (req, res, next) => {

  try {
  const body = req.body;

  const airline   = body.airline;
  const departure = body.departure;
  const arrival   = body.arrival;

    if ((!airline) && (!departure) && (!arrival)) {

      next(HttpError(400, {message: "Missing data from the route. Please, check airline, departure and arrival cities"}));
    } else {

   
     const deleteRoute = await sixCitiesModels.deleteOneRoute(airline, departure, arrival);
   
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
