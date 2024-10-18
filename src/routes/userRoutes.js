const express = require('express')
const router = express.Router()
const userController = require('....') // placeholder

router.post('/api/account/register', userController.registerUser)