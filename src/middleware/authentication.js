const jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {

    const token = req.header('Authorization').replace('Bearer ', '')

    if(!token) {
        res.status(401).json({ message: 'Not a valid token'})
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decodedToken
        next()

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = authentication