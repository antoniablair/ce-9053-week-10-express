# Setup 

- npm init
- install express, jade
- npm install nodemon --save-dev means save for dev but don't deploy
- set up an express application, send some data, see that we can get it running
- create .bowerrc file (for controlling directory of vendor files)
- install bootstrap, angular, angular-route
- create a static route to serve vendor files
- create app.js to create an angular app
- create an angular controller
- create angular routes
- 

touch server.js and add:

var express = require("express");

var app = express();

app.get("/", function(req, res) {
    res.send("hello world");
});

app.listen(process.env.PORT);

mkdir public
mkdir public/vendor


json can be turned into a javascript object
make sure your keys are string'

touch .bowerrc 
and add this to .bowerrc:

{
"directory": "public/vendor"
}

save and bower install bootstrap

then change the "hello world" section of server.js to
res.render("index");

- add app.set("view engine", "jade"); to sever.js
- So now we're going to set up staticfiles so that bootstrap can find them
- 

Add to server.js between set and get:
app.use(express.static(__dirname + "/public"));

Add above that:
app.set("view engine", "jade");


bower install angular
run your preview and type "angular" in the console
if angular is loaded, it will return an object

Set things up so within your public folder you have a file called app.js for the 
application to live in
