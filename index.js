// Import required modules
const express = require('express');
// add
// Create an Express application
const app = express();
const PORT = 3000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to Node.js app in VS Code.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
