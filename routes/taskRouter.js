const { createTask, showTaskData, updateTask, deleteTask, showBothData } = require('../controller').task

const routerTask = require('express').Router()

routerTask.post('/createTask', createTask)

routerTask.get('/readTaskTable', showTaskData)

routerTask.get('/getBothTable', showBothData)

routerTask.put('/updateTask', updateTask)

routerTask.delete('/deleteTask', deleteTask)

module.exports = routerTask