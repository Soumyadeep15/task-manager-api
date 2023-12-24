const db = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv')
const user = db.user

const create = async (req, res) => {
    let {firstName, lastName, password} = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    password = hashedPassword
    await user.create({firstName, lastName, password})
    const saved_user = await user.findOne({ where: { firstName } })
    const token = jwt.sign({userId: saved_user.id, firstName: saved_user.firstName}, process.env.JWT_SECRET_KEY, {expiresIn: '10d'})
    res.status(200).json({
        message: 'data inserted in user table',
        token: token
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

const userLogin = async (req, res) => {
    const { firstName, password } = req.body
    if(firstName && password) {
        const userData = await user.findOne({ where: { firstName } })
        const isCheck = bcrypt.compare(password, userData.password)
        const token = jwt.sign({userId: userData.id, firstName: userData.firstName}, process.env.JWT_SECRET_KEY, {expiresIn: '10d'})
        if((userData.firstName == firstName) && isCheck) {
            res.status(200).json({
               status: 'success',
               message: 'logged in successfully',
               token: token
            })
        } else {
            res.status(400).json({
                status: 'failed',
                message: 'wrong name and password'
            })
        }
    } else {
        res.status(400).json({
            status: 'failed',
            message: 'filled your details first'
        })
    }
}

module.exports = {
    create,
    showData,
    updateUser,
    deleteUser,
    userLogin
}