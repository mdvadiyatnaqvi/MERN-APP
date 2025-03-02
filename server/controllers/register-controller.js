const register = async (req, res) => {
  try {
    res.status(200).json({ message: req.body });
    console.log(req.body);
  } catch (error) {
    res.status(404).json("Internal Server Error");
  }
};

module.exports = register;
