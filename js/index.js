const express = require('express');

const api = express();
api.listen(/TO-DO/, () => {
  console.log('API up and running');
});

api.get('/', (req, res) => {
  console.log(req);
  res.send('hallo, world');
});
