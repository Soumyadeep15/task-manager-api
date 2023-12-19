const db = require('../database')
const user = db.user

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

module.exports = {
    create,
    showData,
    updateUser,
    deleteUser
}