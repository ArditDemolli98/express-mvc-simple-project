const express = require("express");
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/products.html"));
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Product with id ${id}`);
})

module.exports = router;