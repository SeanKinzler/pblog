const jwt = require('./jwtFns');
const key = require('./credentials/jwtKey.js');
console.log('process.env.deploy: ', process.env.deploy);
const googleClientId = process.env.GOOGLE_ID || require('./credentials/googleApiKeys')['googleClientId'];
const googleClientSecret = process.env.GOOGLE_SECRET || require('./credentials/googleApiKeys')['googleClientSecret'];
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const sqlQuery = require('../db/config.js');

let token;
passport.use(new GoogleStrategy({
    clientID:     googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: "https://localhost:8000/auth/google/callback",
  },
  (accessToken, refreshToken, profile, done) => {
    sqlQuery(`select * from Users where googleId = ${profile.id}`, (err, rows) => {
      if (err) {
        console.log(`login error: ${err}`);
        done()
      } else if (rows !== undefined) {
        token = jwt.createToken(rows[0].name);
        done()
      } else {
        done();
      }
    })
  }
));

const pasteToken = () => {
  let toRet = token;
  token = null;
  return toRet;
}


module.exports = {
  passport,
  pasteToken
};