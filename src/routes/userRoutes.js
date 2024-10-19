const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// base url: http://localhost:5000/api/account/
router.post('/register', userController.createUser)
router.get('/users', userController.getAllUsers)
router.delete('/users', userController.deleteUser)
router.get('/users/:id', userController.getUserById)
router.get('/login', userController.loginUser)

module.exports = router