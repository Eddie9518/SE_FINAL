'use strict';

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT || 3000, function() {
    console.log('listening on *:3000');
});
