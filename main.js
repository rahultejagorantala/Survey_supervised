const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(express.json());

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'firstPage.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files (images)
app.use('/images_50', express.static(path.join(__dirname, 'images_50')));

// Store the results
const results = [];

// Handle POST request to '/results'
app.post('/results_supervised', (req, res) => {
  const { data } = req.body;
  results.push(data);
  res.status(200).send('Results received successfully.');
});

// Display the JSON results at '/results'
app.get('/results_supervised', (req, res) => {
  res.json(results);
});

// Start the server
app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
