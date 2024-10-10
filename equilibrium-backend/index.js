const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./database/db')

dotenv.config()

const app = express()
app.use(express.json())

connectDb()

app.get('/', (req, res) => {
    res.send('Equilibrium API is running')
})

const PORT = process.env.PORT || 5000
app.listen(PORT => () => {
    console.log(`Server running on http://localhost:${PORT}`)
})