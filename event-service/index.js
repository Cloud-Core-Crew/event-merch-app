const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Event Service is running');
});

app.listen(PORT, () => {
  console.log(`✅ Event Service listening on port ${PORT}`);
});
