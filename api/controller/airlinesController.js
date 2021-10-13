import airlinesModel from '../model/airlinesModel.js';

const getAllAirlines = (req, res)=>{

    const airlines = airlinesModel.getAirlines();
    res.json(airlines);
}

export default{

    getAllAirlines,

}
