// Import the Express library
const express = require("express");
const routes = require("./routes/auth-route");
// Create a new Express application
const app = express();
app.use(routes);

// Define the port number
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server is running
  console.log(`Server is running on http://localhost:${PORT}`);
});
