const db = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv')
const user = db.user

const create = async (req, res) => {
    try {
        let { firstName, lastName, password } = req.body

        if (firstName && lastName && password) {
            const hashedPassword = bcrypt.hashSync(password, 10)
            password = hashedPassword
            await user.create({ firstName, lastName, password })
            res.status(200).json({
                status: 'success',
                message: 'data inserted in user table',
            })
        } else {
            res.status(400).json({ status: 'failed', message: 'fill out all the details' })
        }
    } catch (error) {
        res.status(400).json({ status: 'failed', message: 'failed to insert create user' })
    }
}

const showData = async (req, res) => {
    try {
        const userData = await user.findAll()
        res.status(200).json({
            status: 'success',
            userdata: userData,
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'failed to access user data'
        })
    }
}

const updateUser = async (req, res) => {
    try {
       const data = await user.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            status: 'success',
            message: 'table data updated',
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'failed to update user data'
        })
    }
}



const deleteUser = async (req, res) => {
    try {
        await user.destroy({ where: { id: req.params.id } })
        res.status(200).json({
            message: 'data removed'
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'failed to remove data'
        })
    }
}

const userLogin = async (req, res) => {
    try {
        const { firstName, password } = req.body
        if (firstName && password) {
            const userData = await user.findOne({ where: { firstName } })
            if (userData != null) {
                const isMatch = await bcrypt.compare(password, userData.password)
                if ((firstName == userData.firstName) && isMatch) {
                    const token = jwt.sign({ userId: userData.id, firstName: userData.firstName }, process.env.JWT_SECRET_KEY, { expiresIn: '10d' })
                    res.status(200).json({ status: 'success', message: 'login succesfully', token: token })
                } else {
                    res.status(400).json({ status: 'failed', message: 'wrong firstname or password' })
                }
            } else {
                res.status(400).json({ status: 'failed', message: 'you are not a registered user' })
            }
        } else {
            res.status(400).json({ status: 'failed', message: 'all fields are required' })
        }
    } catch (error) {
        res.status(400).json({ "status": "failed", "message": "Unable to Login" })
    }
}

module.exports = {
    create,
    showData,
    updateUser,
    deleteUser,
    userLogin
}