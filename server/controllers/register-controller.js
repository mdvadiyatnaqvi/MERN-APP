const bcrypt = require("bcrypt");
const User = require("../models/user-model");

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // password hashing

    const hashedPassword = await bcrypt.hash(password, 10);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });
    res.status(200).json({ message: userCreated });
    // console.log(req.body);
  } catch (error) {
    res.status(404).json("Internal Server Error");
  }
};

module.exports = register;
