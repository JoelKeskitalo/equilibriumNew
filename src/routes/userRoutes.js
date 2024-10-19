const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/api/account/register', userController.registerUser)

module.exports = router