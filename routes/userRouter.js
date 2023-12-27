const {showData, updateUser, deleteUser, create, userLogin} = require('../controller').user
const router = require('express').Router()

//user-routes
router.post('/createUser', create)

router.get('/readUserData', showData)

router.put('/updateUser/:id', updateUser)

router.delete('/deleteUser/:id', deleteUser)

router.post('/login', userLogin)



module.exports = router