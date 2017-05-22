require('dotenv').config();
const path = require('path');
const fs = require('fs');
const routes = require('./config/routes.js');
const mysql = require('./db/config.js');
const httpsPort = process.env.PORT || 8000;
const httpPort = process.env.httpPORT || 8080;
const url = process.env.url || 'localhost';

//https certs
const serverConfig = {
  key: process.env.STUNNEL_PEM || fs.readFileSync(path.join(__dirname, './config/credentials/stunnel.pem')),
  cert: process.env.STUNNEL_CERT || fs.readFileSync(path.join(__dirname, './config/credentials/stunnel.cert')),
};

const httpsServer = require('https').createServer(serverConfig, routes);

httpsServer.listen(httpsPort, () => {
  console.log('https connection on ' + httpsPort);
});


//http forwards to https
var http = require('express')();

http.get('*', function (req, res) {
  res.redirect(`https://${url}:${httpsPort}${req.url}`);
});

http.listen(httpPort, () => {
  console.log('http listening on ', httpPort);
});
