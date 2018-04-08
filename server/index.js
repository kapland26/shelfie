const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const sc = require('./controller.js');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then( connection => app.set('db', connection) );

app.get("/api/inventory", sc.read);
app.post("/api/product", sc.create);
app.delete("/api/product/:id", sc.delete);
app.put("/api/product/:id", sc.update);

const port = process.env.PORT || 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );