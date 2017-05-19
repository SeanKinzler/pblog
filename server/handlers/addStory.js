let sql  = require('../db/config.js');

const saveStoryHandler = (req, res) => {
  let query = ``;
  if (req.body.id) {
    query = `UPDATE Posts SET 
      html = "${req.body.html}", 
      author = "${req.body.author}",
      title = "${req.body.title}",
      editDate = CURRENT_TIMESTAMP 
      WHERE id=${req.body.id};`
  } else {
    query = `INSERT INTO Posts (html, author, title) values ` + 
      `("${req.body.html}", "${req.body.author}", "${req.body.title}");`
  }
  console.log(query);

  sql(query, (err, data) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  })

}

module.exports = saveStoryHandler;