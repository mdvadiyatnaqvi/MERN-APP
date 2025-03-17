const Contact = require("../models/contact-model");

const contact = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    res.status(200).send("Feedback Sent Successfully!");
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = contact;
