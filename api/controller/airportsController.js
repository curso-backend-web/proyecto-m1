import airportsModel from '../model/airportsModel.js';

const getAllAirports = (req, res)=>{

    const airlines = airportsModel.getAirports();
    res.json(airlines);
}

export default{

    getAllAirports,

}
