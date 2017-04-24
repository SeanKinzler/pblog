const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.ROOTUSER,
  password: process.env.DBPASSWORD,
  database: 'PBBlog'
});


const dbQuery = (query, callback) => {
  db.query(query, () => {

  })
}