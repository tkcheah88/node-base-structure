var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
});

app.listen(3000, function(){
    console.log("App started at port 3000");
});