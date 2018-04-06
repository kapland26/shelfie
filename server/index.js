const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const sc = require('./controller.js');

app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then( connection => app.set('db', connection));

const baseUrl = "/api/shelf";

const port = process.env.PORT || 3005;
app.listen(port, ()=> console.log("Done Listening!"));