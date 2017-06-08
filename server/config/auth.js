const jwt = require('./jwtFns');
if (process.env.JWT_KEY !== undefined) {
  const key = process.env.JWT_KEY;
} else {
  const key = require('./credentials/jwtKey.js');
}
const googleClientId = process.env.GOOGLE_ID || require('./credentials/googleApiKeys')['googleClientId'];
const googleClientSecret = process.env.GOOGLE_SECRET || require('./credentials/googleApiKeys')['googleClientSecret'];
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const sqlQuery = require('../db/config.js');
const callbackURL = process.env.url !== undefined ? `${process.env.url}/auth/google/callback` : "https://localhost:8000/auth/google/callback"

let token;
passport.use(new GoogleStrategy({
    clientID:     googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: callbackURL,
  },
  (accessToken, refreshToken, profile, done) => {
    sqlQuery(`select * from Users where googleId = ${profile.id}`, (err, rows) => {
      if (err) {
        console.log(`login error: ${err}`);
        done(`login error: ${err}`)
      } else if (rows[0] !== undefined) {
        token = jwt.createToken(`${rows[0].googleId}%%${rows[0].name}`);
        done(null, rows[0])
      } else {
        console.log('attempted Login from: ', profile)
        done(null);
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