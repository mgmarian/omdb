const express = require('express');
const morgan = require('morgan');
const PORT = 3000;

const app = express();

app.use(express.static(__dirname + '/public'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'))

app.use((err, req, res, next) => {
    res.status(500).send('Something broke!');
  });