const express = require('express');
const morgan = require('morgan');
const path = require('path');

const PORT = 4000;

const app = express();

app.use(express.static(__dirname + '/public'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'))

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
})