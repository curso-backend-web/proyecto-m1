import citiesModels from "../models/citiesModels.js";

const allCities = (req, res, next) => {
  const cities = citiesModels.getAllCities();
  res.json(cities).status(200);
};

export default {
  allCities,
};
