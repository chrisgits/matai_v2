const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  if (event.httpMethod === 'POST') {
    try {
      const data = JSON.parse(event.body);  // Parse incoming request body

      // Replace this with your Google Apps Script Web App URL
      const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwvWcEikRpNHjj05BxeWgKJY-1JxNZY2Anzs4MeyxEx8SwsXoUkGmHQpKmn6CBelrg/exec';

      // Send a POST request to your Google Apps Script URL
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();  // Parse response from Google Apps Script

      return {
        statusCode: 200,
        body: JSON.stringify(result),  // Return success response
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error submitting form' }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }
};
