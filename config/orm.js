// Import MySQL connection.
const connection = require("../config/connection.js");

// to get all burgers
const orm = {
  all: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  //to create a new burger
  create: (table, newRowData, cb) => {
    console.log("table, newRowData :",table, newRowData)
    const queryString = "INSERT INTO ?? SET ?";
    const values = [table, newRowData];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //to update an existing burger
  // update: (table, updateValues, condition, cb) => {
  //   const queryString = "UPDATE ?? SET ? WHERE ?";
  //   const values = [table, updateValues, condition];

  //   console.log(queryString);
  //   connection.query(queryString, values, (err, result) => {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });
  // }
  update: (table, condition, cb) => {
    const queryString = "UPDATE ? SET devoured=true WHERE id= ?";
    const values = ["burgers", condition.toString()];
    console.log(queryString);
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object
module.exports = orm;
