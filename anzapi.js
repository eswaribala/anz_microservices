/**
 * Created by BALASUBRAMANIAM on 28/08/2017.
 */
var express        =         require("express");
var bodyParser     =         require("body-parser");
var mysql      = require('mysql');
var app            =         express();
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'vignesh',
    database : 'anz_financedb'
});
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

    connection.connect();

    var insertRecord = 'INSERT INTO customer(Customer_Id,Name,Address,MobileNo) VALUE(?,?,?,?)';
//Incsert a record.
    connection.query(insertRecord,[Id,Name,Address,MobileNo], function(err,res){
        if(err) throw err;
        else {
            console.log('A new customer has been added.');
        }
    });

    connection.end();
    //console.log(req.body);
    res.send("Data added to mysql db");


});

app.listen(3000,function(){
    console.log("Started on PORT 3000");
})