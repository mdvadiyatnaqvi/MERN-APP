const express = require("express");
const router = express.Router();

// importing controllers
const { Home } = require("../controllers/auth-controllers");

router.route("/").get(Home);

module.exports = router;
