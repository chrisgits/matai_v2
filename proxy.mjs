import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';  // Ensure node-fetch v3.x is installed

const app = express();
app.use(cors());
app.use(express.json());

app.post('/proxy', async (req, res) => {

  console.log('Received request:', req.body); // Log incoming request

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzCBmpUN6MFJ-LbwAh2QJsjggf8c9EA4NMc-u3IA4Dg1p7S_4eI2GBzZT-rtyVcgZVtHg/exec';
  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

app.listen(3000, () => console.log('Proxy server running on http://localhost:3000'));
