"use strict";

const cors = require('cors');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const { PORT = 5000 } = process.env;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Nodejs express reactjs');
});

server.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server ready at http://localhost:${PORT}`)
  }
});
