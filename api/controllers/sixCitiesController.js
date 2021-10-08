import sixCitiesModels from "../models/sixCitiesModels.js";
// need to match name airport with name city
// Object?

// GET routes
const getRoutes = (req, res, next)=>{
const routes = sixCitiesModels.getSixRoutes();

const nameOrigin = req.params.departure_airport_iata;

const nameDeparture = sixCitiesModels.getOneName(nameOrigin);
console.log(nameDeparture);
res.json(nameDeparture).status(200);

// get now the origin city in routes
 // res.json((routes)).status(200);  
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
    getRoutes
}