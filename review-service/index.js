const express = require('express');
const app = express();
const PORT = process.env.PORT || 4004;

app.get('/', (req, res) => {
  res.send('Review Service is running');
});

app.listen(PORT, () => {
  console.log(`✅ Review Service listening on port ${PORT}`);
});
