import sixCitiesModels from "../models/sixCitiesModels.js";
import HttpError from "http-errors";
import userModel from "../models/userModel.js";
import airlines from "../data/airlines.js";
// need to match name airport with name city
// Object?

// GET routes
const getSelectedCities = (req, res, next) => {
  const origen = req.query.origen;

  const destination = req.query.destination;

  if (!origen || !destination) {

    next(HttpError(400, { message: "Missing city of origin or destination" }));
    res.send("No correct data introduced").status(400);

  } else {

    const routeSelected = sixCitiesModels.getRouteSelected(origen, destination);

    res.json(routeSelected).status(200);
  }
};

// get one city only
const getUserCityList = (req, res, next) => {
  
  // if params
  const origen      = req.query.origen;
  const destination = req.query.destination;
  // const airline     = req.query.airline;

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

    /* const routesByAirport = sixCitiesModels.getRouteByAirline(airline);
    (routesByAirport.length <= 0) ? next(HttpError(404, {message: showMessageTwo}))
                             : routesByAirport.map((el) => userModel.routes.push(el)); */
    
    // if requirements ask you to determinated a max length in the arr
    /* (cityRoutes.length <= 0) ? next(HttpError(404, {message: `No routes available for this city at the moment.`}))
                             : cityRoutes.filter((el, indx) => indx < 10).map((el) => userModel.routes.push(el)); */

    console.log(userModel.routes);
    res.json(userModel.routes).status(200);
  };

};


const deleteAllArrayUser = async (req, res, next) =>{

  try {
    const removeAll = sixCitiesModels.deleteAllArray();

    res.json(removeAll).send('All routes have been removed').status(200);
  
    console.log(userModel.routes);
  } catch (error) {
    next(HttpError(400, {message: error.message}));
  }
  
};

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
  getAllRoutesUser
};
