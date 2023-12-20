const db = require('../database')
const bcrypt = require('bcrypt')
const task = db.task
const user = db.user

const createTask = async (req, res) => {
    const { firstName, lastName, password, title, description, status } = req.body

    const data = await user.findOne({ where: { firstName } })

    if (!data) res.status(400).json({ message: 'invalid' })

    const isPasswordValid = await bcrypt.compare(password, data.password)

    if (isPasswordValid) {
        await task.create({ title, description, status })
        res.status(200).json({
            message: 'data inserted into task table'
        })
    } else res.status(400).json({ message: 'wrong password' })
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