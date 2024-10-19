const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

// base url: http://localhost:5000/api/todo
router.post('/', todoController.createTodo)






module.exports = router