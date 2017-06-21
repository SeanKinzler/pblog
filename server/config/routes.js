const path = require('path');
const express = require('express');
const bodyParser = require('body-parser').json;
const app = express();
const {pasteToken, passport} = require('./auth.js');
const sqlQuery = require('../db/config.js');
const {verifyToken, jwtMiddleware, checkToken, checkAdminToken} = require('./jwtFns.js');

const saveStoryHandler = require('../handlers/addStory.js');
const { editStoryHandler, allStoriesHandler } = require('../handlers/editStory.js');
const deleteStoryHandler = require('../handlers/deleteStory.js');
const subscribeHandler = require('../handlers/subscribeHandler.js');
//middlewear
app.use(bodyParser({limit: '50mb'}));
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, '../../client/')));

//openid auth
app.get('/admin',
  passport.authenticate('google', { scope: 
    ['https://www.googleapis.com/auth/plus.login']
  })
);

app.get('/subscribe',
  passport.authenticate('google', { scope: 
    ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email']
  })
);
 
app.get('/auth/google/callback', (req, res) => {
  passport.authenticate('google', (err, user, info) => {
    token = pasteToken();
    console.log(user);
    if (err) {
      console.log('Auth Err: ', err);
      res.sendStatus(500);
    } else if (user.admin === 1){
      res.redirect(`/adminJwt/${token}%%${user.name}`);
    } else if (user.admin === 0) {
      res.redirect(`/`);
    } else {
      subscribeHandler(req, res, user);
      // res.redirect(`/jwt/${token}%%${user.name}`);
      res.redirect(`/`);
    }
  })(req, res)
});

app.post('/api/auth/verify', checkToken);
app.post('/api/auth/verifyAdmin', checkAdminToken);
app.get('/api/allStories', allStoriesHandler);

//jwt middlewear for api requests.
app.use(jwtMiddleware);

app.post('/api/addStory', saveStoryHandler);

app.get('/api/editStory', editStoryHandler);

app.delete('/api/editStory', deleteStoryHandler);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/', 'index.html'));
});

module.exports = app;