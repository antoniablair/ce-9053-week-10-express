var express = require("express");

var app = express();

app.set("view engine", "jade");

// Use this app.use as middleware. Middleware has to be a function. A next 
// parameter is being called somewhere.

// If you're using app.use, the thing that you have to pass to it is a function

// A higher order function is a function used as middleware (they take another
// function or return another function) -- you know it's returning another
// function because otherwise it won't work. It's calling next
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    // res.send("hello world");
    
    //rendering means there's a view engine that's specified
    res.render("index");
});

app.listen(process.env.PORT);