const express = require("express");

const route = express.Router();

const uesersController = require("../controllers/users.controller");

route.get("/", uesersController.getAllUsers);

route.get("/:id", uesersController.getUserById);

route.post("/", uesersController.createUser);

route.put("/:id", uesersController.updateUser);

route.delete("/:id", uesersController.deleteUser);

module.exports = route;
