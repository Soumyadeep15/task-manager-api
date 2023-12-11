const {showData, updateUser, deleteUser, create} = require('../controller')
const router = require('express').Router()

//user-routes
router.post('/', create)
router.get('/', showData)
router.put('/', updateUser)
router.delete('/', deleteUser)



module.exports = router