const path = require('path');
const express = require('express');
const bodyParser = require('body-parser').json;
const app = express();
const {pasteToken, passport} = require('./auth.js');
const sqlQuery = require('../db/config.js');
const {verifyToken, jwtMiddleware, checkToken} = require('./jwtFns.js');

const saveStoryHandler = require('../handlers/addStory.js');
const { editStoryHandler, allStoriesHandler } = require('../handlers/editStory.js');
//middlewear
app.use(bodyParser());
app.use(passport.initialize());
// app.use(passport.session());
app.use(express.static(path.join(__dirname, '../../client/')));


//openid auth
app.get('/admin',
  passport.authenticate('google', { scope: 
    ['https://www.googleapis.com/auth/plus.login']
  })
);
 
app.get('/auth/google/callback', (req, res) => {
  passport.authenticate( 'google', (err, user, info) => {
    token = pasteToken();
    console.log(token);
    if (token === undefined) {
      res.redirect(`/accessDenied`)
    } else {
      res.redirect(`/jwt/${token}%%${verifyToken(token)}`);
    }
  })(req, res)
});

app.post('/api/auth/verify', checkToken);
app.get('/api/allStories', allStoriesHandler);

//jwt middlewear for api requests.
app.use(jwtMiddleware);

app.post('/api/addStory', saveStoryHandler);

app.get('/api/editStory', editStoryHandler);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/', 'index.html'));
});

module.exports = app;