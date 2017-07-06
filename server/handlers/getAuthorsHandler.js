const sqlQuery = require('../db/config.js');

const getAuthorHandler = (req, res) => {
  sqlQuery(`select * from Users where admin=1;`, (rows, err) => {
    if (err) {
      console.log('getAuthorError: ', err);
      res.sendStatus(500);
    }
    res.send(rows);
  });

}