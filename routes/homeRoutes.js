const homeController = require("../controllers/homeController");
const express = require("express");
const router = express.Router();

router.get("/", homeController.getHomeView);

module.exports = router;
