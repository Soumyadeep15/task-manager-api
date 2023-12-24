const db = require('../database')
const bcrypt = require('bcrypt')
const task = db.task
const user = db.user
const jwt = require('jsonwebtoken')



const createTask = async (req, res) => {
    const { authorization } = req.headers
    const token = authorization
    const decodedData = jwt.decode(token)
    const userId = decodedData.userId
    const firstName = decodedData.firstName
    const {title, description, status} = req.body
    await task.create({title, description, status, userId})
    res.status(200).json({
        status: "success",
        message: `${firstName} logged in and task created for the ${firstName}`
    })  
}

const showBothData = async (req, res) => {
    const data = await user.findAll({
        include: task
    })

    res.status(200).json({
        data: data
    })
}

const showTaskData = async (req, res) => {
    const taskData = await task.findAll()
    res.status(200).json({
        result: taskData
    })
}

const updateTask = async (req, res) => {
    const { title, description, status } = req.body
    const taskId = req.body.id
    await task.update({ title, description, status }, { where: { id: taskId } })

    res.status(200).json({
        message: 'task data updated'
    })
}

const deleteTask = async (req, res) => {
    const id = req.body.id
    await task.destroy({ where: { id: id } })
    res.status(200).json({
        message: 'task deleted'
    })
}





module.exports = {
    createTask,
    showTaskData,
    updateTask,
    deleteTask,
    showBothData
}