const express = require("express");
const route = express.Router();

const unitController = require("../controllers/unit.controller");

route.get("/", unitController.getAllUnits);
route.get("/:id", unitController.getUnitById);
route.post("/", unitController.createUnit);
route.put("/:id", unitController.updateUnit);
route.delete("/:id", unitController.deleteUnit);

module.exports = route;
