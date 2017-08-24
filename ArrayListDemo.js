/**
 * Created by BALASUBRAMANIAM on 24/08/2017.
 */
Data=[];
Data.push(4937);
Data.push("Prakash");
Data.push(true);
Data.push(4937.437956);
Data.push(new Date());
console.log(Data)
for(i=0;i<10;i++)
{
    Data.push((Math.random()))
}
console.log(Data)

var result = Array.from("RPS Consulting");
console.log(result);


function isBigEnough(value) {
    return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);

//var args

function restParam(...data)
{
    console.log(data.join(','));
}

restParam('TN',"KL",'KN');
restParam(new Array('TN',"KL"));
restParam(new Array('TN'));
