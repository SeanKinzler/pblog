let sql  = require('../db/config.js');

const editStoryHandler = (req, res) => {
  let query = ``;
  query = `select * from Posts where id=${req.body.id};`;

  sql(query, (err, data) => {
    console.log(data);
    if (err) {
      res.sendStatus(404)
    }
    res.send(data)
  })

}

const allStoriesHandler = (req, res) => {
  let query = ``;
  query = `select * from Posts;`
  sql(query, (err, data) => {
    console.log('getPosts:', data);
    if (err) {
      res.sendStatus(404)
    }
    res.send(data);
  })
}

module.exports = { 
  editStoryHandler,
  allStoriesHandler,
};