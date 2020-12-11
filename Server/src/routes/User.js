const {Router}= require('express')

const router = Router()

const { createUser, getUsers, updateUser ,loginUser} = require('../controllers/userController')

//route for creating user an account
router.post('/api/newUser', createUser)

//retrieving all users
router.post('/api/users', getUsers)

//logging in user 
router.post('/api/login', loginUser)

//updating user
router.put('api/userUpdate', updateUser)


module.exports = router