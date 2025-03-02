// controller for home route

const home = async (req, res) => {
  try {
    res.status(200).send("Hello from home route and controller!");
  } catch (error) {
    res.status(404).send({ msg: "Page not found!" });
  }
};

module.exports = home;
