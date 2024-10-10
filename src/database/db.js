const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected')
    } catch(error) {
        console.error('MongoDb connection error: ', error)
        process.exit(1)
    }
}

module.exports = connectDb