var fs = require("fs");

var appRouter = function(app, swaggerSpec) {
  // serve swagger
  app.get('/swagger.json', function(request, response) {
    console.log(" --- Request handler '/swagger.json' was called with method GET!");

    response.setHeader('Content-Type', 'application/json');
    response.send(swaggerSpec);
  });

  app.get("/", function(request, response) {
    console.log(" --- Request handler '/' was called with method GET!");

    fs.readFile('app/views/index.html', function (error, data) {
        response.writeHead(200, {"Content-Type": "text/html",
          "Content-Length": data.length});
        response.write(data);
        response.end();
    });
  });
}

module.exports = appRouter;
