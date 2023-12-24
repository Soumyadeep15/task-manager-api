const {showData, updateUser, deleteUser, create, userLogin} = require('../controller').user
const router = require('express').Router()

//user-routes
router.post('/createUser', create)

router.get('/readUserData', showData)

router.put('/updateUser', updateUser)

router.delete('/deleteUser', deleteUser)

router.post('/login', userLogin)



module.exports = router