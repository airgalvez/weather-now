const express= require("express");
const bodyParser = require("body-parser");

const app = express();

//setting view engine
app.set("view engine", "ejs");

//middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false}));

/*
    ROUTES
*/ 

// GET //
app.get("/", function (req, res){
    res.render("home.ejs", {weather: "coming soon"});
}); 

app.post("/", function(req, res){
    let weatherNow = "The weather in " + req.body.city + " is 70 F"
    let err = false
    res.render("home.ejs", {weather: weatherNow, error: err});
});

app.listen(3000, function(){
    console.log("server is live on port: 3000");
});
