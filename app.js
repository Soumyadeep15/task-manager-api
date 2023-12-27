const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.APP_PORT || 3001

require('./routes')(app)

app.listen(port, () => {console.log(`listening on port ${port}`)})