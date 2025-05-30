const express = require('express');
const app = express();
const PORT = process.env.PORT || 4003;

app.get('/', (req, res) => {
  res.send('Payment Service is running');
});

app.listen(PORT, () => {
  console.log(`✅ Payment Service listening on port ${PORT}`);
});
