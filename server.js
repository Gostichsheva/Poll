var path = require('path');
var express = require('express');
var app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
	res.sendFile('index.html', { root: path.join(__dirname) });
});

app.listen(3000, function () {
	console.log('App is listening on port 3000!');
});
