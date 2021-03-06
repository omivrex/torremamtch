'use strict';
const port = process.env.PORT || 5000
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');

const infoGetter = require('./infoGetter');
const app = express()
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs')
app.use(express.json())
app.set('views', path.join(__dirname, '/assets/views'))
app.use('/styles', express.static(path.join(__dirname, '/assets/styles')))
app.use('/scripts', express.static(path.join(__dirname, '/assets/scripts')))
app.use('/images', express.static(path.join(__dirname, '/assets/images')))
app.use('/fonts', express.static(path.join(__dirname, '/assets/fonts')))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/getDevData', (req, res) => {
  if (req.body.dev1 != '' || req.body.dev1 === undefined && req.body.dev1 != '' || req.body.dev1 === undefined) {
    infoGetter.eng([req.body.dev1, req.body.dev2], res)
  }
})

app.listen(port)
console.log('server successfully started ...');
