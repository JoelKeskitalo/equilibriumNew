const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const connectDb = require('./database/db')
const path = require('path')

const authenication = require('./middleware/authentication')
const userRoutes = require('./routes/userRoutes')
const todoRoutes = require('./routes/todoRoutes')



const app = express()
app.use(express.json())
app.use(express.static('public'));

connectDb();


app.use('/api/account', userRoutes)
app.use('/api/todo', authenication, todoRoutes)




app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// npm run dev <-- backend startup
// npm run frontend:dev
// git push dokku main
