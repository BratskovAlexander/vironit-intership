const service = require("../services/city-service");

class CityController {
  constructor() {}
  getCities = async (req, res) => {
    try {
      const result = await service.get();
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  addCity = async (req, res) => {
    try {
      const result = await service.post(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  upDataCity = async (req, res) => {
    try {
      const result = await service.put(req.body, req.params.id);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  deleteCity = async (req, res) => {
    try {
      const result = await service.del(req.params.id);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}

module.exports = CityController;
