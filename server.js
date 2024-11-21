const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Welcome to In-class activity 3!');
});

app.listen(port, () => {
  console.log(`Active Server on Port ${port}`);
});
