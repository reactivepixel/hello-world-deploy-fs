const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', (req, res) => {
  console.log('route activated');
  res.send('I should really say something more professional.');
});

exports.server = app.listen(port, () => {
  console.log('Server Active On Port', port);
});
