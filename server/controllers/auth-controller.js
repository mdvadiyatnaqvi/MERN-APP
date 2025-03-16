const User = require("../models/user-model");

// home controller
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Home from controllers!");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

// register controller
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists!" });
    }
    const userCreated = await User.create({ username, email, phone, password });
    res.status(201).send({
      message: "Registration Successfully!",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

// login controller

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // checking user exists or not?
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // matching password is same or not
    // below we are going to create instance method to compare the password as like generateToken()
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    try {
      res.status(200).send({
        message: "Login Successfully!",
        token: await user.generateToken(),
        userId: user._id.toString(),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { home, register, login };
