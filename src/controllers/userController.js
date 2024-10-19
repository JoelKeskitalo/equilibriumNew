const User = require('../models/userModel')

exports.createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body

        if(!username || !password || !email) {
            res.status(400).json({ message: 'Please fill in the required forms'})
        }

        const existingUser = await User.findOne({email})

        if(existingUser) {
            res.status(400).json({ message: 'A username with that email already exists'})
        }

        const user = new User({ username, password, email})
        await user.save()

        res.status(201).json({ message: 'User created successfully'})


    } catch(error) {
        res.status(500).json({ error: error.message})
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()

        if(!allUsers) {
            res.status(404).json({ message: 'No users found in the database'})
        }

        res.status(200).json({
            message: 'Users in the database: ',
            users: allUsers
        })

    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { email } = req.body

        if(!email) {
            res.status(400).json({ message: 'Please enter the email of the user you want to remove'})
        }

        await User.deleteOne({ email })

        res.status(200).json({
            message: 'User deleted successfully',
            user: email
        })

    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}
