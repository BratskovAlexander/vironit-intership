const service = require("../services/user-service");
class UserController {
  constructor() {}
  getUser = async (req, res) => {
    try {
      const result = await service.get();
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
  addUser = async (req, res) => {
    try {
      const result = await service.create(req);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
  deleteUser = async (req, res) => {
    try {
      const result = await service.del(req);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
  updateUser = async (req, res) => {
    try {
      const result = await service.update(req);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
}

module.exports = UserController;
