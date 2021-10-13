import airlinesModel from "../models/airlinesModels.js";

// GET
const getAllplanes = (req, res, next) => {
  const airplanes = airlinesModel.getAllAirlines();
  res.json(airplanes).status(200);
};

export default {
  getAllplanes,
};
