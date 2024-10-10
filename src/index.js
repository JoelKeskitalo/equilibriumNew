const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./database/db')

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.static('public'));

connectDb();

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});