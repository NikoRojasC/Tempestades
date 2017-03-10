var http = require("http");
var url = require("url");

function start(route, handle){
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received!");
    route(handle, pathname, response, request);
  }

  function execute(someFunction, value){
    someFunction(value);
  }

  http.createServer(onRequest).listen(8080);
  execute(function(word) { console.log(word) }, " --- Server has started!");
}

exports.start = start;
