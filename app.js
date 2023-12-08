const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const userRouter = require('./router/router')


//routes
app.use('/create', userRouter)

app.use('/showData', userRouter)

app.use('/updateUser', userRouter)

app.use('/deleteUser', userRouter)

app.use('/updateTask', userRouter)








app.listen(3001, () => {console.log('listening on port 3001')})