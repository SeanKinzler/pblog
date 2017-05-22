const jwt = require('jsonwebtoken');
const key = process.env.JWT_KEY || require('./credentials/jwtKey.js');

const createToken = (body) => {
  return jwt.sign(body, key);
};

const verifyToken = (token, callback) => {
  return jwt.verify(token, key, callback) 
};

const jwtMiddleware = (req, res, next) => {
  if (req.path.slice(0, 4) !== '/api') {
    next();
  } else if(!req.headers.jwt) {
    res.send(403);
  } else {
    let decoded = verifyToken(req.headers.jwt);
    console.log('decoded:', decoded);
    if (decoded !== undefined) {
      console.log(decoded);
      next()
    } else {
      res.send(403)
    }
  }
};

const checkToken = (req, res) => {
  console.log(req.headers.jwt);
  if (!req.headers.jwt) {
    res.send(301);
  } else {
    verifyToken(req.headers.jwt, (error, decoded) => {
    //check if its an admin here if needed
      if (!!error) {
        //respond with access denied if invalid
        console.log('ERROR CONSOLE LOG: ', error);
        res.sendStatus(301);
      } else {
        //respond with username if valid
        console.log('DECODED:', decoded);
        res.send(decoded);
      }
      
    });
    
  }
};

module.exports = {
  createToken,
  verifyToken,
  checkToken,
  jwtMiddleware,
};