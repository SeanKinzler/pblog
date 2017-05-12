const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.ROOTUSER,
  password: process.env.DBPASSWORD,
  database: 'PBlog'
});
db.connect();

const dbQuery = (query, callback) => {
  db.query(query, (error, results, fields) => {
    if (error) throw error;
    console.log('results:', results[0]);
    callback(null, results[0]);
  });
};

module.exports = dbQuery;