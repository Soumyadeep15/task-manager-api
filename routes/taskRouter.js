const { createTask,  updateTask, deleteTask, showBothData } = require('../controller').task

const routerTask = require('express').Router()

routerTask.post('/createTask', createTask)

// routerTask.get('/readTaskTable', showTaskData)

routerTask.get('/getBothTable', showBothData)

routerTask.put('/updateTask/:id', updateTask)

routerTask.delete('/deleteTask/:id', deleteTask)

module.exports = routerTask