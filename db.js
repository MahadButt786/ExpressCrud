// import the mysql module
var mysql = require("mysql");
// Pooling connections
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "express_crud_db",
  //multipleStatements: true
});
//// To get a connection from the pool, you use the getConnection() method:
pool.getConnection(function (err, connection) {
  try {
    if (err) {
      console.log("Database Connection Error");
      // To return a connection to the pool after you are done with it, you can call the connection.release().
      // After that, the connection will be available in the pool and ready to use again by someone else.
      connection.release();
    } else {
      console.log("Success Database Connection");
    }
  } catch (e) {
    console.log("Exception on Database Connection");
    connection.release();
  }
});
module.exports = pool;
