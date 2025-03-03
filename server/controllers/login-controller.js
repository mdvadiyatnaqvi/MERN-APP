const bcrypt = require("bcrypt");
const User = require("../models/user-model");
const Register = require("../controllers/register-controller");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (!userExists) {
      res.status(400).json({ message: "Invalid Credentials!" });
    }

    const isPassMatched = await bcrypt.compare(password, userExists.password);
    if (isPassMatched) {
      res.status(200).json({
        msg: "Login Successfully",
        token: await Register.userCreated.generateToken(),
        userId: Register.userCreated._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error!");
  }
};

module.exports = login;
