const productsController = require("../controllers/productsController");
const authentication = require("../middlewares/authentication");
const express = require("express");
const router = express.Router();

router.get("/", productsController.getProductsView);
router.get(
  "/:id",
  authentication.authenticate,
  productsController.getProductById
);

module.exports = router;
