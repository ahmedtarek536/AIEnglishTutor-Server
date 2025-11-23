const express = require("express");
const route = express.Router();

const languageController = require("../controllers/language.controller");

route.get("/", languageController.getAllLanguages);
route.post("/", languageController.createLanguage);
route.get("/:id", languageController.getLanguageById);
route.put("/:id", languageController.updateLanguage);
route.delete("/:id", languageController.deleteLanguage);

module.exports = route;
