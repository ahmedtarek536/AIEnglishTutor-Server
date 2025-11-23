const express = require("express");
const route = express.Router();

const levelController = require("../controllers/level.controller");

route.get("/", levelController.getAllLevels);
route.post("/", levelController.createLevel);
route.get("/:id", levelController.getLevelById);
route.put("/:id", levelController.updateLevel);
route.delete("/:id", levelController.deleteLevel);

module.exports = route;
