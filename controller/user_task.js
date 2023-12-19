const db = require('../database')
const usertask = db.user_task
const user = db.user
const task = db.task

const createJunction = async (req, res) => {
    // console.log(req.body)
    const { userId, taskId } = req.body
    await usertask.create({ userId, taskId })
    res.status(200).json({
        message: 'data inserted in junction table',
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

module.exports = {
    createJunction,
    showBothData
}