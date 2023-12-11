const db = require('../database')
const user = db.user
const task = db.task

//user-crud
const create = async (req, res) => {
    const userData = req.body
    await user.create(userData) 
    res.status(200).json({
        message: 'data inserted in user table',
    })
}

const showData = async (req, res) => {
    const userData = await user.findAll()
    res.status(200).json({
        userdata: userData,
    })
}

const updateUser = async (req, res) => {
    const { firstName, lastName } = req.body
    const userId = req.body.id
    await user.update({ firstName, lastName }, {
        where: {
            id: userId
        }
    })
    res.status(200).json({
        message: 'table data updated'
    })
}



const deleteUser = async (req, res) => {
    const id = req.body.id
    await user.destroy({ where: { id: id } })
    res.status(200).json({
        message: 'data removed'
    })
}

//task-crud
const createTask = async (req, res) => {
    await task.create(req.body)
    res.status(200).json({
        message: 'data inserted into task table'
    })
}

const showTaskData = async(req, res) => {
    const taskData = await task.findAll()
    res.status(200).json({
        result: taskData
    })
}

const updateTask = async (req, res) => {
    const { title, description, status, userId } = req.body
    const taskId = req.body.id
    await task.update({ title, description, status, userId }, {where: {id: taskId}})

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

const showBothData = async (req, res) => {
    const data = await user.findAll({
        include: task
    })

    res.status(200).json({
        data: data
    })
}




module.exports = { create, showData, updateUser, deleteUser, updateTask, createTask, showTaskData, deleteTask, showBothData }