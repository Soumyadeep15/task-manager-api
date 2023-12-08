const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const userRouter = require('./router/router')

const taskRouter = require('./router/taskRouter')
//routes
app.use('/create', userRouter)

app.use('/showData', userRouter)

app.use('/updateUser', userRouter)

app.use('/deleteUser', userRouter)

//task routes

app.use('/createTask', taskRouter)

app.use('/showTask', taskRouter)

app.use('/updateTask', taskRouter)

app.use('/deleteTask', taskRouter)

app.use('/both', taskRouter)











app.listen(3001, () => {console.log('listening on port 3001')})