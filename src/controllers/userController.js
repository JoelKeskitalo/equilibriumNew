const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')

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


        const userId = uuidv4()
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({ 
            username,
            password: hashedPassword,
            email,
            id: userId
        })
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
        res.status(500).json({ error: error.message })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id

        if(!userId) {
            res.status(400).json({ message: 'Please fill in the required ID'})
        }

        const user = await User.findById(userId)

        if(!user) {
            res.status(404).json({
                message: 'Could not find the user with ID search'
            })
        }

        res.status(200).json({
            message: 'User found',
            user: user
        })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            res.status(400).json({ message: 'Please fill in the required form'})
        }

        const existingUser = await User.findOne({ username })

        if(!existingUser) {
            res.status(404).json({ message: 'Username not found'})
        }

        if(existingUser.password !== password) {
            res.status(400).json({ message: 'Invalid password'})
        }

        res.status(200).json({
            message: 'Login successful',
            user: username
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.updateUserById = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['username', 'password', 'email']
        const isValidKeys = updates.every((update) => allowedUpdates.includes(update))

        if(!isValidKeys) {
            res.status(400).json({ message: 'Missing valid key'})
        }

        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])

        await user.save()

        res.status(200).json({
            message: 'User updated successfully',
            user: user
        })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}