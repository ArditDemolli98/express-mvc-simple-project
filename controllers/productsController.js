const Products = require("../models/products");

module.exports = {
  getProductsView: (req, res) => {
    res.render("products", { title: "Products", produktet: Products.products });
  },
  getProductById: (req, res) => {
    const id = req.params.id;
    res.send(`Product with id ${id}`);
  },
};
