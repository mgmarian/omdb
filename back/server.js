const express = require('express');
const morgan = require('morgan');
const path = require('path');

const routes = require('./api/routes')
const  {db}   = require('./api/models')
const PORT = 3000;

const app = express();

app.use(express.static(__dirname + '/public'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'))

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});

app.use('/api', routes);

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});



db.sync({force:false})
  .then(app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
  }))