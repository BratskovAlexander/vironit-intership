const express = require("express");
const upDateUserSchema = require("../middlewares/validation/userUpdate-validate");
const addUserSchema = require("../middlewares/validation/user-validate");
const validationMiddleware = require("../middlewares/validation/common-validation");
const auth = require("../middlewares/auth");

const UserController = require("../controllers/user-controller");
const user_controller = new UserController();

const router = new express.Router();

router.get("/", user_controller.getUsers);
router.get("/user", auth, user_controller.getUser);
router.post("/", validationMiddleware(addUserSchema), user_controller.addUser);
router.post("/login", user_controller.authUser);
router.put(
  "/:id",
  validationMiddleware(upDateUserSchema),
  user_controller.upDataUser
);
router.delete("/:id", user_controller.deleteUser);

module.exports = router;
