const Todo = require('../models/todoModel')

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body

        if(!title) {
            res.status(400).json({ message: 'Please fill in the required forms'})
        }

        const existingTitle = await Todo.findOne({title:title})

        if(existingTitle) {
            res.status(400).json({ message: 'A todo with that title already exists'})
        }

        const todo = new Todo({
            title,
            description,
            user: req.user._id
        })

        await todo.save()

        res.status(200).json({
            message: 'Todo created successfully',
            todo: todo
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}