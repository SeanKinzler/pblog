const mysql = require('mysql');

const database = process.env.DB || 'PBlogDev';
const db = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.ROOTUSER,
  password: process.env.DBPASSWORD,
  database: database,
  ssl: 'Amazon RDS',
});
db.connect(err => {
  if (err) {
    console.log(err.code);
    console.log(err.fatal);
  }
});

const dbQuery = (query, callback) => {
  db.query(query, (error, results, fields) => {
    if (error) {
      console.log('DB QUERY ERROR: ', error);
    };
    if (callback) 
      callback(null, results);
  });
};

module.exports = dbQuery;