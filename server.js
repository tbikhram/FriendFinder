var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Route files 
app.use(express.static("app"));

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


//listner
app.listen(process.env.PORT || 3000)


// app.listen(PORT, function(){
// 	console.log("App listening on PORT: " + PORT);
// });