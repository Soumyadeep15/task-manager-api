const db = require('../database/database')
const user = db.user
const task = db.task




//user-task-crud
const createUserWithTasks = async (req, res) => {
    const {userData, taskData} = req.body
    await user.create(userData) 
        await task.create(taskData)
    
    res.status(200).json({
        message: 'data inserted in user & task table',
        // data: userData
    })
}

const showData = async (req, res) => {
    const userData = await user.findAll()
    const taskData = await task.findAll()
    res.status(200).json({
        userdata: userData,
        taskData: taskData
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

const updatetask = async (req, res) => {
    const { title, description, status, userId } = req.body
    const taskId = req.body.id
    await task.update({ title, description, status, userId }, {where: {id: taskId}})

    res.status(200).json({
        message: 'task data updated'
    })
}

const deleteUser = async (req, res) => {
    const id = req.body.id
    await user.destroy({ where: { id: id } })
    res.status(200).json({
        message: 'data removed'
    })
}





module.exports = { createUserWithTasks, showData, updateUser, deleteUser, updatetask }