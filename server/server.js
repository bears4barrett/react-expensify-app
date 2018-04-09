const path = require('path');
const publicPath = path.join('__dirname', '..', 'public');

const express = require('express');
const app = express();

app.use(express.static(publicPath));

app.get('*', (request, response) => {
  response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});