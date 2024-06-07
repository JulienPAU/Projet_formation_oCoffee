const express = require("express");

const mainController = require("./controllers/mainController");
const catalogueController = require("./controllers/catalogueController");
const basketController = require("./controllers/basketController");

const router = express.Router();

router.get("/", mainController.homePage);

router.get("/catalogue", mainController.cataloguePage);

router.get("/catalogueall", mainController.fullCataloguePage);

router.get("/article/:id", catalogueController.articlePage);

router.get("/category/:id", mainController.categoryPage);

router.get("/boutique/add/:id", basketController.getCoffeeBasket);

router.get("/boutique/remove/:id", basketController.removeCoffeeBasket);

router.get("/boutique", mainController.boutiquePage);

router.get("/contact", mainController.contactPage);

router.post("/contact", mainController.contact);

router.get("/about", mainController.aboutPage);

module.exports = router;
