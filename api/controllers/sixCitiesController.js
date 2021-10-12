import sixCitiesModels from "../models/sixCitiesModels.js";
import HttpError from "http-errors";
import userModel from "../models/userModel.js";
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
  const origen = req.query.origen;
  const destination = req.query.destination;

  // if body
  /*const body = req.body; 
  const origen = body.origen;
const destination = body.destination; */

  const cityRoutes = sixCitiesModels.getCityByName(origen || destination);

  // checks
  if (!origen && !destination) {
    next(HttpError(400, { message:"No data introduced.Please introduce either origen or destination city"}));

    res.send( "No data introduced.Please introduce either origen or destination city")
       .status(400);
  } else {
    (cityRoutes.length <= 0) ? next(HttpError(404, {message: `No routes available for this city at the moment.`}))
                             : cityRoutes.map((el) => userModel.routes.push(el));
    
    // if requirements ask you to determinated a max length in the arr
    /* (cityRoutes.length <= 0) ? next(HttpError(404, {message: `No routes available for this city at the moment.`}))
                             : cityRoutes.filter((el, indx) => indx < 10).map((el) => userModel.routes.push(el)); */

    console.log(userModel.routes);
    res.json(userModel.routes).status(200);
  }
};
export default {
  getSelectedCities,
  getUserCityList,
};
