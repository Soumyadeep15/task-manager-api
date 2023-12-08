const {createTask, showTaskData, updateTask, deleteTask, showBothData} = require('../controller/userController')

const routerTask = require('express').Router()

routerTask.post('/', createTask)

// routerTask.get('/', showTaskData)

routerTask.put('/', updateTask)

routerTask.delete('/', deleteTask)

routerTask.get('/', showBothData)

module.exports = routerTask