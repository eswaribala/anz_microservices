/**
 * Created by BALASUBRAMANIAM on 24/08/2017.
 */
customerMap=new Map([
    ["Id",43856],
    ["Name","Param"]
]);
customerMap.set("address","Chennai")
console.log(customerMap)

for (var key of customerMap.keys()) {
    console.log(key);
}

for (var value of customerMap.values()) {
    console.log(value);
}
for (var [key, value] of myMap.entries()) {
    console.log(key + " = " + value);
}