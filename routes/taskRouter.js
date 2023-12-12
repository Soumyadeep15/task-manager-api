const {createTask, showTaskData, updateTask, deleteTask, showBothData} = require('../controller')

const routerTask = require('express').Router()

routerTask.post('/createTask', createTask)

routerTask.get('/readBothTable', showBothData)

routerTask.put('/updateTask', updateTask)

routerTask.delete('/deleteTask', deleteTask)


module.exports = routerTask