exports.handler = async function (event, context) {
  // Dynamically import node-fetch
  const fetch = (await import('node-fetch')).default;

  console.log("Function triggered");

  try {
    // Your function logic here
    // Example of an API call using fetch
    const response = await fetch("https://script.google.com/macros/s/AKfycbwvWcEikRpNHjj05BxeWgKJY-1JxNZY2Anzs4MeyxEx8SwsXoUkGmHQpKmn6CBelrg/exec", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: event.body }),
    });
    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("Error in function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Function error" }),
    };
  }
};
