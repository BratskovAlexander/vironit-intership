const express = require("express");

const CityController = require("../controllers/city-controller");
const city_controller = new CityController();

const router = new express.Router();

router.get("/", city_controller.getCities);
router.post("/", city_controller.addCity);
router.put("/:id", city_controller.upDataCity);
router.delete("/:id", city_controller.deleteCity);

module.exports = router;
