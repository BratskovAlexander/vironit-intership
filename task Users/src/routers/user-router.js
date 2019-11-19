const express = require("express");

const UserController = require("../controllers/user-controller");
const user_controller = new UserController();

const router = new express.Router();

router.get("/", user_controller.getUsers);
router.get("/:name", user_controller.getUser);
router.post("/", user_controller.addUsers);
router.put("/:id", user_controller.upDataUsers);
router.delete("/:id", user_controller.deleteUser);

module.exports = router;
