/**
 * Created by BALASUBRAMANIAM on 27/08/2017.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'vignesh',
    database : 'nessu'
});

connection.connect();

connection.query('SELECT * from employee', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.');
});

connection.end();