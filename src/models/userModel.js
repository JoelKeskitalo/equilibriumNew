const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        maxlength: 20,
        match: /^[A-Za-z0-9]+$/  // Tillåt endast bokstäver och siffror
    },

    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Enkel email validering
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/ // Minst en bokstav och en siffra
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User