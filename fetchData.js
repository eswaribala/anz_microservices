/**
 * Created by BALASUBRAMANIAM on 29/08/2017.
 */
var mongoose = require('mongoose');
var config=require('./config')
mongoose.connect(config.url,config.mongodb,
    config.mongoport);
//mongoose.connect('mongodb://localhost:27017/accountsdb');

var db = mongoose.connection;

module.exports.fetchCustomers=function()
{
    db.once('open',function()
    {
        console.log("connected.....");
    });

    var schema =new mongoose.Schema(
        {
            id:Number,
            name:String,
            startDate:Date,
            balance:Number,
            type:String

        });

    CustomerModel = mongoose.model('customer',schema);
   data= CustomerModel.find({},function(err,res)
    {
        console.log("reaching...");
        console.log(err);
        //console.log(res);
        return (res);
    })
    //console.log(data);
return data;
}

result=module.exports.fetchCustomers();



/*

/*
var customerData = new CustomerModel ({
    id:56789,
    name:"Samarth",
    startDate:new Date(),
    balance:10000,
    type:"savings"
});

customerData.save(function(err, customerData) {
    if (err) return console.error(err);
    console.log("saving......");
});


 */
