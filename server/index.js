const express = require('express');
const app = express();
const db = require('../database/cocktails.js');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api', (req, res) => {
  // db.findAll((err, data) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   } else {
  //     console.log('hello from the server')
  //     res.json(data);
  //   }
  // });
});

app.listen(3000, () => {
  console.log('now listening on port 3000');
});
