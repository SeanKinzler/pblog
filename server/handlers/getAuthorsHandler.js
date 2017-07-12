const sqlQuery = require('../db/config.js');

const getAuthorsHandler = (req, res) => {
  sqlQuery(`select googleId, name from Users where admin=1;`, (err, rows) => {
    if (err) {
      console.log('getAuthorError: ', err);
      res.sendStatus(500);
    } else {
      console.log(rows);
      res.send(rows);
    }
  });

}

module.exports = getAuthorsHandler;