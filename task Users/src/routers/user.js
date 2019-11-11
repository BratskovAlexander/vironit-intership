const express = require("express");

const UserController = require("../controllers/user-controller");
const user_controller = new UserController();
const router = new express.Router();

router.get("/users", user_controller.getUser);
router.post("/user/:id", user_controller.addUser);
router.put("/user/:id", user_controller.updateUser);
router.delete("/user/:id", user_controller.deleteUser);

module.exports = router;
