const jwt = require("jsonwebtoken")
const User = require("../models/user")

const findUserByToken = async (token) => {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findOne( { _id: decoded._id, "tokens.token": token })

    if(!user) throw new Error("No user found")

    return user;
}


const userAuthMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        
        req.user = await findUserByToken(token)
        req.token = token

        next()

    } catch (error) { // catches any error in the try block
        // sends 401 authentication code
        res.status(401).send({ error })
    }
}

const adminAuthMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")

        req.user = await findUserByToken(token)
        req.token = token

        if( !req.user.admin ) throw new Error("Not Admin user")

        next()

    } catch (error) { // catches any error in the try block
        // sends 401 authentication code
        res.status(401).send({ error })
    }
}

module.exports = {
    userAuthMiddleware,
    adminAuthMiddleware
}