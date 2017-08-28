/**
 * Created by BALASUBRAMANIAM on 28/08/2017.
 */
var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/login',function(req,res){

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    var user_name=req.body.User;
    var password=req.body.Password;
    console.log("User name = "+user_name+", password is "+password);
    //console.log(req.body);
    res.end("done");


});



app.listen(3000,function(){
    console.log("Started on PORT 3000");
})