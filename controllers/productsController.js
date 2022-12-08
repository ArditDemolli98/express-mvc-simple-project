const express = require("express");
const path = require("path");
const router = express.Router();

function authenticate(req, res, next) {
  console.log("authenticated");
  next();
}

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/products.html"));
  console.log(res);
});

router.get("/:id", authenticate, (req, res) => {
  const id = req.params.id;
  res.send(`Product with id ${id}`);
});

module.exports = router;
