// Import the Express library
const express = require("express");
const app = express();
const routes = require("./routes/auth-route");

// Use middleware to parse JSON request bodies
app.use(express.json());
app.use(routes);

// Define the port number
const PORT = 5500;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server is running
  console.log(`Server is running on http://localhost:${PORT}`);
});
