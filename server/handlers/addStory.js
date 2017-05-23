let sql  = require('../db/config.js');
let fs = require('fs');
let path = require('path');
const saveStoryHandler = (req, res) => {
  let query = ``;
  let newFileName = `${
        req.body.author.split(' ').join('')
      }___${
        req.body.title.split(' ').join('')
      }`
  if (req.body.id) {
    query = `UPDATE Posts SET 
      slug = "${newFileName}", 
      author = "${req.body.author}",
      title = "${req.body.title}",
      blurb = "${req.body.blurb}"
      editDate = CURRENT_TIMESTAMP 
      WHERE id=${req.body.id};`
      sql(`select html from Posts where id=${req.body.id}`, (err, data) => {
        if (err) {
          res.sendStatus(500);
        }
        fs.unlink(path.join(__dirname, `../public/${data[0].html}`), err => {
          fs.writeFileSync(path.join(__dirname, `../public/${newFileName}`), req.body.html);
          sql(query, (err, data) => {
            if (err) {
              res.sendStatus(500);
            }
            res.sendStatus(200);
          });
        })
      });

  } else {
    query = `INSERT INTO Posts (slug, author, title, blurb) values ` + 
      `("${newFileName}", "${req.body.author}", "${req.body.title}", "${req.body.blurb}");`
    fs.writeFileSync(path.join(__dirname, `../public/${newFileName}`), req.body.html);
    sql(query, (err, data) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  })
  }

  

}

module.exports = saveStoryHandler;