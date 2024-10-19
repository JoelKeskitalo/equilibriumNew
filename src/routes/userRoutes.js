const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/register', userController.createUser)
router.get('/users', userController.getAllUsers)
router.delete('/users', userController.deleteUser)

module.exports = router