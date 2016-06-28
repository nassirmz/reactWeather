var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
