var express = require('express');
server = express();
var http = require('http').createServer(server);
var io = require('socket.io')(http);



/*var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http); */


var bodyParser = require("body-parser");
/*var r = require("rethinkdbdash")();
require("rethink-config")({
  "r": r,
  "database": "simisite",
  "tables" : ["articles"]
}); */

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

server.use(express.static('./public'));

server.get("*", function(request, result){
  result.sendFile(__dirname + "/public/index.html");
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

var PORT = process.env.PORT || 3000;
http.listen(PORT);

console.log("Simisite is running on " + PORT);
