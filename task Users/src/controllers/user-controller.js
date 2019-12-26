const service = require("../services/user-service");

class UserController {
  constructor() {}
  getUsers = async (req, res) => {
    try {
      const result = await service.get();
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  getUser = async (req, res) => {
    try {
      const result = await service.getUser(req);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  addUser = async (req, res) => {
    try {
      const result = await service.post(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  };

  authUser = async (req, res) => {
    try {
      const result = await service.authUser(req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(401).send({ msg: error.message });
    }
  };

  getTokens = async (req, res) => {
    try {
      const result = await service.getTokens(req.decoded.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(401).send({ msg: error.message });
    }
  };

  upDataUser = async (req, res) => {
    try {
      const result = await service.put(req.body, req.params.id);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  deleteUser = async (req, res) => {
    try {
      const result = await service.del(req.params.id);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}

module.exports = UserController;
