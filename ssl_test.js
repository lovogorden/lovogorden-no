//https://aghassi.github.io/ssl-using-express-4/

//openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 999
// LOCALHOST!!! Common Name (e.g. server FQDN or YOUR name) []:

/*
Trying second time:

openssl req -newkey rsa:2048 -new -nodes -keyout key2.pem -out csr2.pem
openssl x509 -req -days 365 -in csr2.pem -signkey key2.pem -out server2.crt

*/

var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');


var server = express();
http.createServer(server).listen(8000);


server.get('/', function (req, res) {
    res.send("Hello World!");
});

var sslOptions = {
  key: fs.readFileSync('key2.pem'),
  cert: fs.readFileSync('server2.crt')
};


https.createServer(sslOptions, server).listen(443);
