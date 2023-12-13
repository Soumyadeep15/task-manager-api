const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));


require('./routes')(app)

app.listen(3001, () => {console.log('listening on port 3001')})