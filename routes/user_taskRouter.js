const { createJunction, showBothData } = require('../controller').user_task

const router = require('express').Router()

router.post('/createJunction', createJunction)
router.get('/showUserTask', showBothData)

module.exports = router