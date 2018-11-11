/**
 * Copyright 2018, Lov og orden AS
 */

 // [START app]
'use strict';

const express = require('express');
const app = express();

var nodemailer = require('nodemailer');

app.use('/', express.static('static'))

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
