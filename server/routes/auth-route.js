const express = require("express");
const router = express.Router();

// importing controllers
const home = require("../controllers/home-controller");
const register = require("../controllers/register-controller");

router.route("/").get(home);
router.route("/register").post(register);

module.exports = router;
