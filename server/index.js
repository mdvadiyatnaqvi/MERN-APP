require("dotenv").config();

// Import the Express library and other dependencies
const express = require("express");
const connectDB = require("./utils/db");
const authRoutes = require("./routes/auth-route");

// Create the new Express Application
const app = express();

// Middleware Configuration
app.use(express.json()); // Parse JSON request bodies
app.use(authRoutes); // Use authentication routes

// Server Configuration
const PORT = process.env.PORT || 5500;

// Server Initialization
connectDB()
  .then(() => {
    // Start the server and listen on the specified port
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
