const {showData, updateUser, deleteUser, createUserWithTasks, updatetask} = require('../controller/userController')
const router = require('express').Router()

router.post('/', createUserWithTasks)
router.get('/', showData)
router.put('/', updateUser)
router.delete('/', deleteUser)
router.put('/', updatetask)

module.exports = router