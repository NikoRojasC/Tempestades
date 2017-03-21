var express = require("express");
var bodyParser = require("body-parser");
var swaggerJSDoc = require('swagger-jsdoc');
var app = express();

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'API de gestión de memos',
    version: '1.0.0',
    description: 'Descripción del API del servicio de memos a la cual se accede'
      + ' a traves de usuario y contraseña.'
  },
  host: 'localhost:8080',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require("./app/routers/router.js")(app, swaggerSpec);

var server = app.listen(8080, function () {
  console.log(" --- Server started in port: %s", server.address().port);
});
