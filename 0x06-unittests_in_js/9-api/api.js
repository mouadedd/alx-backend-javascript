const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_, result) => {
  result.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, result) => {
  const id = req.params.id;

  result.send(`Payment methods for cart ${id}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
