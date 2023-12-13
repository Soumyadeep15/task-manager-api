const { createJunction } = require('../controller')

const router = require('express').Router()

router.post('/createJunction', createJunction)

module.exports = router