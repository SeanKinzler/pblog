const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const httpsPort = process.env.httpsPORT || 8000
const httpPort = process.env.httpPORT || 8080
const url = process.env.url || 'localhost'

//https certs
var serverConfig = {
  key: fs.readFileSync(path.join(__dirname, './config/credentials/stunnel.pem')),
  cert: fs.readFileSync(path.join(__dirname, './config/credentials/stunnel.cert')),
};

//render react app
app.use(express.static(path.join(__dirname, '../client/')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/', 'index.html'));
});

const httpsServer = require('https').createServer(serverConfig, app);

httpsServer.listen(httpsPort, () => {
  console.log('https connection on ' + httpsPort);
})


//http forwards to https
var http = require('express')();

http.get('*', function (req, res) {
  res.redirect(`https://${url}:${httpsPort}${req.url}`);
});

http.listen(httpPort, () => {
  console.log('http listening on ', httpPort);
});
