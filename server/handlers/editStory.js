let sql  = require('../db/config.js');
const fs = require('fs');
const path = require('path');

const editStoryHandler = (req, res) => {
  let query = ``;
  query = `select * from Posts where id=${req.body.id};`;

  sql(query, (err, data) => {
    console.log('disData', data);
    data[0].html = fs.readFile(path.join(__dirname, `../public/${data[0].html}`), (err, htmlData) => {
      if (err) {
        res.sendStatus(404)
      }
      console.log('htmlData', htmlData);
      data.slug = data[0].html;
      data.html = htmlData;
      res.send(data)
    })
  })

}

const allStoriesHandler = (req, res) => {
  let query = ``;
  query = `select * from Posts;`
  sql(query, (err, data) => {
    let count = 0;
    data.forEach(post => {
      fs.readFile(path.join(__dirname, `../public/${post.html}`), 'utf-8', (err, htmlData) => {
        if (err || htmlData === undefined) {
          post.slug = post.html;
          post.html = '<p>Load Error</p>';
        } else {
          post.slug = post.html;
          post.html = htmlData;
        }
        count = count + 1
        if (count === data.length) {
          res.send(data);
        }
      })
    })
    console.log('getPosts:', data);
    
  })
}

module.exports = { 
  editStoryHandler,
  allStoriesHandler,
};