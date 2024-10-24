// https://script.google.com/macros/s/AKfycbyugjdzlpE-LZrHZo6SGM6Pb7YOjfIgKjsCTVJQ3CGrnHMRNfojo-ufE91tj4OEJDMY/exec 3rd test

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000; // You can change this port as needed

// Middleware
app.use(cors()); // Allow all CORS requests
app.use(express.json()); // Parse JSON body

// Endpoint to handle the form submission
app.post('/submit', async (req, res) => {
  const { name, email, pdfData } = req.body; // Extract data from the request body

  // Log the request body for debugging
  console.log('Received data:', req.body);

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbyugjdzlpE-LZrHZo6SGM6Pb7YOjfIgKjsCTVJQ3CGrnHMRNfojo-ufE91tj4OEJDMY/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, pdfData }),
    });

    // Check if the response is ok (status 200-299)
    if (!response.ok) {
      const errorText = await response.text(); // Get the error response body
      console.error('Error response from Apps Script:', errorText);
      return res.status(response.status).send('Error communicating with the server.');
    }

    // Parse the response as JSON
    const jsonResponse = await response.json();
    console.log('Response from Apps Script:', jsonResponse);

    // Send the JSON response back to the client
    return res.status(200).json(jsonResponse);
  } catch (error) {
    console.error('Fetch error:', error);
    return res.status(500).send('Server error.');
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});


