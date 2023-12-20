const { createTask, showTaskData, updateTask, deleteTask } = require('../controller').task

const routerTask = require('express').Router()

routerTask.post('/createTask', createTask)

routerTask.get('/readTaskTable', showTaskData)

routerTask.put('/updateTask', updateTask)

routerTask.delete('/deleteTask', deleteTask)

module.exports = routerTask