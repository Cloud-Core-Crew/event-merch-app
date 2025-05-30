const express = require('express');
const app = express();
const PORT = process.env.PORT || 4005;

app.get('/', (req, res) => {
  res.send('Catalog Service is running');
});

app.listen(PORT, () => {
  console.log(`✅ Catalog Service listening on port ${PORT}`);
});
