var express = require('express');
var bodyParser = require('body-parser');
var hellobot = require('./hellobot');

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));


// test route
app.get('/',  (req, res) => { res.status(200).send('Hello world!') });

app.post('/hello', hellobot);

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, () => {
  console.log('Slack bot listening on port ' + port);
});
