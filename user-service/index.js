const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('User Service is running');
});

app.listen(PORT, () => {
  console.log(`User Service listening on port ${PORT}`);
});
