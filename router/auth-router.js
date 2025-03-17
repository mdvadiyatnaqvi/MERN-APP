const express = require("express");
const router = express.Router();
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

// Importing controllers
const authControllers = require("../controllers/auth-controller");

router.route("/").get(authControllers.home);
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;
