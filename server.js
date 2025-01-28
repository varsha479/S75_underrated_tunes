const express = require('express');
const app = express();
const port = 3000;

// Basic /ping route
app.get('/ping', (req, res) => {
  res.send('Pong');
});

// Export the app for testing
module.exports = app;

// Start the server
if (require.main === module) {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }

