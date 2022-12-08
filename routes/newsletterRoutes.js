const newsletterController = require("../controllers/newsletterController");
const express = require("express");
const router = express.Router();

router.get("/", newsletterController.getNewsletterView);

module.exports = router;
