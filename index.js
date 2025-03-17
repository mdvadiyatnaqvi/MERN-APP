require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();
app.use(cors);
app.use(express.json());
app.use(authRoutes);
app.use(contactRoute);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5500;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
