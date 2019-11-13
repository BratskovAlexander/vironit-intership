const service = require("../services/user-service");

class UserController {
  constructor() {}
  getUsers = (req, res) => {
    try {
      const result = service.get();
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  addUsers = (req, res) => {
    try {
      const result = service.post(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  upDataUsers = (req, res) => {
    try {
      const result = service.put(req.body, req.params.id);
    //   console.log(req.body, req.params.id);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  deleteUser = (req, res) => {
    try {
      const result = service.del(req.params.id);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}

module.exports = UserController;
