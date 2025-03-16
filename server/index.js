require("dotenv").config();
const express = require("express");
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const { config } = require("dotenv");

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5500;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
