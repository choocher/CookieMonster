var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
  extended: false 
}))

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "public"));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them. Connecting to "Controllers folder"
var routes = require("./controllers/cookiesController.js");
app.use('/',routes);

// Start our server so that it can begin listening to client requests.
var PORT = process.env.PORT || 8080

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
