/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START app]
'use strict';

const express = require('express');
const app = express();



var path = require("path")

//http://stackoverflow.com/questions/15463199/how-to-set-custom-favicon-in-express
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname,'static','favicon.ico')));

app.use('/assets', express.static('static/assets/'))


// function requireHTTPS(req, res, next) {
//     if (!req.secure) {
//         //FYI this should work for local development as well
//         return res.redirect('http://' + req.get('host') + req.url);
//     }
//     next();
// }

//app.use(requireHTTPS);


////NB Virker ikke: https://www.lovogorden.no/
////Redirects (in use clause)
/////////////// COMMENT OUT FOR DEBUG - START ///////////////

app.use (function (req, res, next) {
  var schema = (req.headers['x-forwarded-proto'] || '').toLowerCase();


  if (schema === 'https') {
    if (req.headers.host.match(/^www/) !== null ) { //If www first -> redirect
      res.redirect('https://' + req.headers.host.replace(/^www\./, '') + req.url);
    } else {
      next();
    }
  } else { //If not https -> redirect and remove www
    res.redirect('https://' + req.headers.host.replace(/^www\./, '') + req.url);
    //next();
  }
});

/////////////// COMMENT OUT FOR DEBUG - END  ///////////////



///ERROR IN FLEX ->https://groups.google.com/forum/#!topic/google-appengine/Nl3OJIEjGHY
//https://groups.google.com/forum/#!topic/google-appengine/4_2oVbRhMKY
app.get('/', (req, res) => {
  console.log(req);
  //res.status(200).send('Dette er Neil!');
  //res.sendFile('/index.html');
  res.sendFile(path.join(__dirname+'/static/index.html'));
});


app.get('/index.html', (req, res) => {
  console.log(req);
  //res.status(200).send('Dette er Neil!');
  //res.sendFile('/index.html');
  res.sendFile(path.join(__dirname+'/static/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
