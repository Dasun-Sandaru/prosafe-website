const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the root directory
app.use(express.static(__dirname));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
