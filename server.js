require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.event.PORT || 5000;
const app = express();
const { data } = require('./data');

app.use(bodyParser.json());

app.use(cors());

const players = data.map((player, index) => ({ ...player, id: index }));

app.use(express.static(__dirname + '/client/build'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
});

app.get('/api/players', (req, res) => {
  res.send(players);
});

app.listen(port, () => {
  console.log('listening on' + port);
});
