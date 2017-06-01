let sql  = require('../db/config.js');
let fs = require('fs');
let path = require('path');
let saveImageToS3 = require('../config/awsConfig.js').saveImageToS3;
let saveHtmlToS3 = require('../config/awsConfig.js').saveHtmlToS3;

const saveStoryHandler = (req, res) => {
  let query = ``;
  req.body.title = req.body.title.split('\"').join('\\\"')
  let newFileName = `${
    req.body.author.split(' ').join('')
    }___${
    req.body.title.split(' ').join('').slice(0,20)
  }`
  let bannerPath = '';
  let thumbPath = '';
  if (req.body.banner !== undefined) {
    bannerPath = saveImageToS3(req.body.banner, `images/${newFileName.split('\\\"').join('')}__banner.jpg`);
  }
  if (req.body.thumbnail !== undefined) {
    thumbPath = saveImageToS3(req.body.thumbnail, `images/${newFileName.split('\\\"').join('')}__thumbnail.jpg`);
  }
  if (req.body.blurb) {
    req.body.blurb = req.body.blurb.split('\"').join('\\\"')
  }
  if (req.body.bannerRights) {
    req.body.bannerRights = req.body.bannerRights.split('\"').join('\\\"')
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
    console.log('bannerPath: ', bannerPath);
    const htmlPath = saveHtmlToS3(req.body.html, `html/${newFileName}.html`);
    query = `INSERT INTO Posts (slug, author, title, blurb, bannerPath, thumbPath, bannerRights, thumbRights, htmlPath) 
      values ("${newFileName}", "${req.body.author}", "${req.body.title}", "${req.body.blurb}", 
      "${bannerPath.length !== 0 ? bannerPath : null}", 
      "${thumbPath.length !== 0 ? thumbPath : null}", 
      "${req.body.bannerRights}", "${req.body.thumbRights}", "html/${newFileName}.html");`
    sql(query, (err, data) => {
      if (err) {
        res.sendStatus(500);
      }
      res.sendStatus(200);
    })
  }

  

}

module.exports = saveStoryHandler;