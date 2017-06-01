let sql  = require('../db/config.js');
let fs = require('fs');
let path = require('path');
let saveToS3 = require('../config/awsConfig.js');
const saveStoryHandler = (req, res) => {
  let query = ``;
  let newFileName = `${
    req.body.author.split(' ').join('')
    }___${
    req.body.title.split(' ').join('').slice(0,20)
  }`
  if (req.body.banner) {
    const bannerPath = saveToS3(req.body.banner, `${newFileName}__banner`);
  }
  if (req.body.thumbnail) {
    const thumbPath = saveToS3(req.body.thumbnail, `${newFileName}__thumbnail`);
  }
  if (req.body.blurb) {
    req.body.blurb = req.body.blurb.split('\"').join('\\\"')
  }
  if (req.body.id) {
    query = `UPDATE Posts SET 
      slug = "${newFileName}", 
      author = "${req.body.author}",
      title = "${req.body.title}",
      blurb = "${req.body.blurb}",
      bannerPath = "${typeof bannerPath != 'undefined' ? bannerPath : null}",
      thumbPath = "${typeof thumbPath != 'undefined' ? thumbPath : null}",
      bannerRights = "${req.body.bannerRights}",
      thumbRights = "${req.body.thumbRights}",
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
    query = `INSERT INTO Posts (slug, author, title, blurb, bannerPath, thumbPath, bannerRights, thumbRights) 
      values ("${newFileName}", "${req.body.author}", "${req.body.title}", "${req.body.blurb}", 
      "${typeof bannerPath != 'undefined' ? bannerPath : null}", 
      "${typeof thumbPath != 'undefined' ? thumbPath : null}", 
      "${req.body.bannerRights}", "${req.body.thumbRights}");`
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