const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (_req, result) => {
  result.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, result) => {
  const id = req.params.id;

  result.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, result) => {
  result.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (req, result) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  result.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
