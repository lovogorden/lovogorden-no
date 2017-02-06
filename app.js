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

app.use('/', express.static('static'))

// set up a route to redirect http to https
http.get('*',function(req,res){
    res.redirect('https://lovogorden.no'+req.url)
})


// app.get('/*', function(req, res, next) {
//   if (req.headers.host.match(/^www/) !== null ) {
//     res.redirect('https://' + req.headers.host.replace(/^www\./, '') + req.url);
//   } else {
//     next();
//   }
// })

app.get('/', (req, res) => {
  res.status(200).send('Dette er Neil!');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
