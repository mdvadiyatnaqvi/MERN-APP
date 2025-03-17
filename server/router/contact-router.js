const express = require("express");
const router = express.Router();

// importing the controller
const contactController = require("../controllers/contact-controller");

router.route("/contact").post(contactController);

module.exports = router;
