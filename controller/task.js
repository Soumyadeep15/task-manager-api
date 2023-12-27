const db = require('../database')
// const bcrypt = require('bcrypt')
const task = db.task
const user = db.user
const jwt = require('jsonwebtoken')

const createTask = async (req, res) => {
    try {
        const { authorization } = req.headers
        const token = authorization
        const decodedData = jwt.decode(token)
        const userId = decodedData.userId
        const firstName = decodedData.firstName
        const { title, description, status } = req.body
        if (title && description && status && userId) {
            await task.create({ title, description, status, userId })
            res.status(200).json({
                status: "success",
                message: `${firstName} logged in and task created for ${firstName}`
            })
        } else {
            res.status(400).json({
                status: 'failed',
                message: 'filled out all the fields'
            })
        }

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'failed to create task'
        })
    }
}

const showBothData = async (req, res) => {
    try {
        const token = req.headers.authorization
        const decodedData = jwt.decode(token)
        console.log(decodedData)
        const userId = decodedData.userId
        const data = await user.findAll({
            include: {
                model: task,
                where: { userId }
            }
        })
        res.status(200).json({
            status: 'success',
            message: `all data fetched for ${decodedData.firstName}`,
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'failed to fetch the data'
        })
    }
}

// const showTaskData = async (req, res) => {
//     const taskData = await task.findAll()
//     res.status(200).json({
//         result: taskData
//     })
// }

const updateTask = async (req, res) => {
    try {
        const token = req.headers.authorization
        const decodedData = jwt.decode(token)
        const userId = decodedData.userId
        const taskData = await task.findOne({ where: { userId: userId, id: req.params.id } })
        if (!taskData) {
            res.status(400).json({
                status: 'failed',
                message: 'task or user not found'
            })
        } else {
            await taskData.update(req.body)
            res.status(200).json({
                message: `task data updated for ${decodedData.firstName}`
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'failed to update'
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const token = req.headers.authorization
        const decodedData = jwt.decode(token)
        const userId = decodedData.userId
        const taskData = await task.findOne({ where: { userId: userId, id: req.params.id } })
        if (!taskData) {
            res.status(400).json({
                status: 'failed',
                message: 'task or user not found'
            })} else {
                taskData.destroy()
                res.status(200).json({
                    status: 'success',
                    message: `task deleted for ${decodedData.firstName} and task id was ${req.params.id}`
                })
            }
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'failed to delete task data'
        })
    }
}

module.exports = {
    createTask,
    // showTaskData,
    updateTask,
    deleteTask,
    showBothData
}