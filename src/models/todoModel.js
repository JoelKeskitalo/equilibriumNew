const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        maxlength: 20
    },

    description: {
        type: String
    }

})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo