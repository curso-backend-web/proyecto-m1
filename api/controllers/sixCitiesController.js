import sixCitiesModels from "../models/sixCitiesModels.js";
// need to match name airport with name city
// Object?

// GET routes
const getSelectedCities = (req, res, next)=>{
console.log('city origen');
const origen = req.query.origen;  
const destination = req.query.destination;

if (!origen || !destination){
  console.log('Error');
} else {
  console.log(`${origen}  ${destination}`);
  const routeSelected = sixCitiesModels.getRouteSelected(origen, destination);
  console.log(routeSelected);
  //res.json({origen : origen, destination: destination});
  res.json(routeSelected);
}
 
}
// GET origen

// GET destination
const getCityDestination = () => {

    
}

// get one city only
const getOneCity = (str) =>{
// use filter here
}
export default{
    getSelectedCities
}