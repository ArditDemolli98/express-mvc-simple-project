const productsController = require("../controllers/productsController");
const authentication = require("../middlewares/authentication");
const express = require("express");
const router = express.Router();

router.get("/", productsController.getProductsView);
router.post("/", productsController.createProduct);
router.get("/createProduct", productsController.getCreateView);
router.get("/:id", productsController.getProductById);

module.exports = router;
