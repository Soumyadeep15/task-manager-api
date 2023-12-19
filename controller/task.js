const db = require('../database')
const task = db.task

const createTask = async (req, res) => {
    await task.create(req.body)
    res.status(200).json({
        message: 'data inserted into task table'
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
    deleteTask
}