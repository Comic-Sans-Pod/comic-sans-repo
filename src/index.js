'use strict';

const $ = require('jquery');
const express = require('express');


const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("src/static"));

app.get('/login', (req, res) => res.send('Hello World!'));

app.post('/login', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));