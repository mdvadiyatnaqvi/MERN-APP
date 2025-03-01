// Import the Express library
const express = require("express");

// Create a new Express application
const app = express();

// Define the port number
const PORT = 3000;

// Define the root route
app.get("/", (req, res) => {
  // Return a successful response with a message
  res.status(200).send("Hello World!");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server is running
  console.log(`Server is running on http://localhost:${PORT}`);
});
