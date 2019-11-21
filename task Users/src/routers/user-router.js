const express = require("express");
const addUserValidation = require("../middlewares/validation/user-validate");

const UserController = require("../controllers/user-controller");
const user_controller = new UserController();

const router = new express.Router();

router.get("/", user_controller.getUsers);
router.get("/:name", user_controller.getUser);
router.post("/", addUserValidation, user_controller.addUser);
router.put("/:id", user_controller.upDataUser);
router.delete("/:id", user_controller.deleteUser);

module.exports = router;
