const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));


require('./routes')(app)

app.listen(process.env.APP_PORT, () => {console.log(`listening on port ${process.env.APP_PORT}`)})