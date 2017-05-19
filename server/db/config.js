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
    callback(null, results);
  });
};

module.exports = dbQuery;