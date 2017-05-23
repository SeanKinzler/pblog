let sql  = require('../db/config.js');
let fs = require('fs');
let path = require('path');

const deleteStoryHandler = (req, res) => {
  const deleteQuery = `delete from Posts where id=${req.query.id}`;
  console.log('req', req.query);
  sql(deleteQuery, (err, data2) => {
    if (err) {
      console.log('deletion sql error: ', err);
      res.sendStatus(500);
    }
    fs.unlink(path.join(__dirname, `../public/${req.query.slug}`), err => {
      console.log('file deletion error: ', err);
      res.sendStatus(200);
    })
  });
};

module.exports = deleteStoryHandler