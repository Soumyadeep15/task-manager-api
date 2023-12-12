const {showData, updateUser, deleteUser, create} = require('../controller')
const router = require('express').Router()

//user-routes
router.post('/createUser', create)

router.get('/readUserData', showData)

router.put('/updateUser', updateUser)

router.delete('/deleteUser', deleteUser)



module.exports = router