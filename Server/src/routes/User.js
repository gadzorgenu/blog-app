const {Router}= require('express')

const router = Router()

const { createUser, getUsers, updateUser } = require('../controllers/userController')

//route for creating user an account
router.post('/api/newUser', createUser)


//updating user
router.put('api/userUpdate', updateUser)


module.exports = router