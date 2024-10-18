const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./database/db')
const path = require('path')

const userRoutes = require('..') // placeholder

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.static('public'));

connectDb();


const userRoutes = require('..') // placeholder
app.use('/api/account/register', userRoutes) // placeholder





app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});