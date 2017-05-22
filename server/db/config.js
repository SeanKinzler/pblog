const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.ROOTUSER,
  password: process.env.DBPASSWORD,
  database: 'PBlog',
  ssl: 'Amazon RDS',
});
db.connect(err => {
  console.log(err.code);
  console.log(err.fatal);
});

const dbQuery = (query, callback) => {
  db.query(query, (error, results, fields) => {
    if (error) {
      console.log('DB QUERY ERROR: ', error);
    };
    callback(null, results);
  });
};

module.exports = dbQuery;