const jwt = require('jsonwebtoken');
const key = process.env.JWT_KEY || require('./credentials/jwtKey.js');
const sqlQuery = require('../db/config.js');

const createToken = (body) => {
  return jwt.sign(body, key);
};

const verifyToken = (token, callback) => {
  if (token)
  return jwt.verify(token, key, callback) 
};

const jwtMiddleware = (req, res, next) => {
  if (req.path.slice(0, 4) !== '/api') {
    next();
  } else if(!req.headers.jwt) {
    res.send(403);
  } else {
    let decoded = verifyToken(req.headers.jwt);
    if (decoded !== undefined) {
      sqlQuery(`select * from Users where googleId=${decoded.split('%%')[0]}`, (err, rows) => {
        if (!!err) {
          res.send(403);
        } else {
          next()
        }
      })
    } else {
      res.send(403)
    }
  }
};

const checkToken = (req, res) => {
  if (!req.headers.jwt) {
    res.send(301);
  } else {
    verifyToken(req.headers.jwt, (error, decoded) => {
      console.log('in checkToken: ', decoded)
    //check if its an admin here if needed
      if (!!error) {
        //respond with access denied if invalid
        console.log('ERROR CONSOLE LOG: ', error);
        res.sendStatus(301);
      } else {
        //respond with username if valid
        res.send(decoded.split('%%')[1]);
      }
      
    });
    
  }
};

const checkAdminToken = (req, res) => {
  if (!req.headers.jwt) {
    res.send(301);
  } else {
    verifyToken(req.headers.jwt, (error, decoded) => {
      sqlQuery(`select * from Users where googleId=${decoded.split('%%')[0]}`, (err, rows) => {
        if (!!error) {
          //respond with access denied if invalid
          console.log('ERROR CONSOLE LOG: ', error);
          res.sendStatus(301);
        } else if (rows && rows[0].admin === 1){
          //respond with username if valid
          res.send(decoded).split('%%')[1];
        } else {
          console.log('Insufficient Privledges');
          res.sendStatus(301);
        }       
      })
      
    });
    
  }
};

module.exports = {
  createToken,
  verifyToken,
  checkToken,
  jwtMiddleware,
  checkAdminToken,
};