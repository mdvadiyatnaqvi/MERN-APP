// controller for home route

const Home = async (req, res) => {
  try {
    res.status(200).send("Hello from home route and controller!");
  } catch (error) {
    res.status(404).send({ msg: "Page not found!" });
  }
};

module.exports = { Home };
