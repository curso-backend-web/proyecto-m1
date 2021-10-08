import sixCitiesModels from "../models/sixCitiesModels.js";
// need to match name airport with name city
// Object?

// GET routes
const getCityOrigen = (req, res, next)=>{
console.log('city origen');
// must need a params name
if (!req.params.nameOne)
     console.log('Error');
    
  const origen = req.params.origen;   

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
    getCityOrigen
}