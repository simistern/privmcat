var express = require('express');
server = express();
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
})

var PORT = process.env.PORT || 3000;
server.listen(PORT);

console.log("Simisite is running on " + PORT);
