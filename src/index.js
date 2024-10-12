const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./database/db')
const path = require('path')

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.static('public'));

connectDb();

//
// Route för att fånga allt som inte redan har processats av tidigare routes.
// Detta för att få react-routern att fungera på klientsidan.
// Alla andra routes ska ligga _före_ denna, dvs denna ligger alltid sist.
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});