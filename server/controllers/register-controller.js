const register = async (req, res) => {
  try {
    res
      .status(200)
      .send("Seperate register controller is created successfully");
  } catch (error) {
    res.status(404).send({ msg: "Page not found!" });
  }
};

module.exports = register;
