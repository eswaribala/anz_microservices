/**
 * Created by BALASUBRAMANIAM on 28/08/2017.
 */
var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(request, response) {
    response.send("Login API Creation successful ....!");
});

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

    var user_name=req.body.userName;
    var password=req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    //console.log(req.body);
    res.send("received username and password"+user_name+password);


});

app.post('/reg',function(req,res){

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    var Id=req.body.customerId;
    var Name=req.body.name;
    var Address=req.body.address;
    var MobileNo=req.body.mobileNo
    console.log("Name = "+Name+", Mobile No is "+MobileNo);
    //console.log(req.body);
    res.send("received "+Name+MobileNo);


});

app.listen(3000,function(){
    console.log("Started on PORT 3000");
})