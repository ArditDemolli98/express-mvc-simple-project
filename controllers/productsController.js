const Product = require("../models/Products");

module.exports = {
  getProductsView: (req, res) => {
    Product.find().sort({createdAt: -1})
      .then(result =>{
        res.render("products", { title: "Products", products: result });
      })
      .catch(err=> console.log(err));
  },
  getCreateView : (req, res) =>{
    res.render("createProduct", {title: "Create product"})
  },
  createProduct: (req, res) =>{
    const product = new Product(req.body);
    product.save()
      .then(result=>{
        res.redirect("/products")
      })
      .catch(err => console.log(err));
  },

  getProductById: (req, res) => {
    const id = req.params.id;
    Product.findById(id)
      .then(result=>{
        res.render("viewProduct", {title: "Product details", product: result})
      })
      .catch(err => console.log(err));
  },
};
