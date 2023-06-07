var mysql = require('mysql2');




exports.con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "car"
}).promise()

// exports.pool = mysql.createPool(
//     {
//         host:     '127.0.0.1',
//         port:     '3306',
//         user:     'root',
//         password: 'root',
//         database: 'car'  // <== name of schema
//     }).promise()


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "car"
// });



// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM car  where car_id=6", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// exports.module = con;