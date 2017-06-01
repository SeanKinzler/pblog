let sql  = require('../db/config.js');
const fs = require('fs');
const path = require('path');
let getObject= require('../config/awsConfig.js').getObject;

const editStoryHandler = (req, res) => {
  let query = ``;
  query = `select * from Posts where id=${req.body.id};`;

  sql(query, (err, data) => {
    data[0].html = fs.readFile(path.join(__dirname, `../public/${data[0].slug}`), (err, htmlData) => {
      if (err) {
        res.sendStatus(404)
      }
      data.slug = data[0].html;
      data.html = htmlData;
      res.send({slug: data.slug, html: data.html})
    })
  })

}

const allStoriesHandler = (req, res) => {
  let query = ``;
  query = `select * from Posts;`
  sql(query, (err, data) => {
    let count = 0;
    data.forEach(post => {
      let tempKey = `html/${post.slug}.html`.split('\"').join('\\\"');
      getObject(tempKey, (err, htmlData) => {
        if (err || htmlData === undefined) {
          console.log('get err: ', err);
          post.html = '<p>Load Error</p>';
        } else {
          post.html = htmlData.Body.toString('utf-8');
        }
        count = count + 1
        if (count === data.length) {
          res.send(data);
        }
      })
      // fs.readFile(path.join(__dirname, `../public/${post.slug}`), 'utf-8', (err, htmlData) => {
      //   if (err || htmlData === undefined) {
      //     post.html = '<p>Load Error</p>';
      //   } else {
      //     post.html = htmlData;
      //   }
      //   count = count + 1
      //   if (count === data.length) {
      //     res.send(data);
      //   }
      // })
    })
    
  })
}

module.exports = { 
  editStoryHandler,
  allStoriesHandler,
};