fetch('https://script.google.com/macros/s/AKfycbwcW0hZM5qjKrv032k13vpKWgK2z_BTgEY84OEd0In4zHKPvZvNrJ2wdXluidKESG08/exec', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
  }),
})
  .then((res) => res.json())
  .then((data) => console.log('Success:', data))
  .catch((error) => console.error('Error:', error));
