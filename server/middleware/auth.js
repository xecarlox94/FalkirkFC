// loads the json web tokens module
const jwt = require("jsonwebtoken")
// loads the User model
const User = require("../models/user")


// finds user by auth token
const findUserByToken = async (token) => {
    // decrypts the token into an object
    // it uses the jwt secret environment variable
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // finds a user that matches the token information
    const user = await User.findOne( { _id: decoded._id, "tokens.token": token })

    // if no user throw error
    if(!user) throw new Error("No user found")

    return user;
}

// authenticates admin and subscribers
const userAuthMiddleware = async (req, res, next) => {
    try {
        // gets the token from the Bearer auth string
        const token = req.header("Authorization").replace("Bearer ", "")
        
        // sets user and token variable availabe in the request object
        req.user = await findUserByToken(token)
        req.token = token
        
        // calls the route handler function
        next()

    } catch (error) { // catches any error in the try block
        // sends 401 auth error code with error message
        res.status(401).send({ error })
    }
}

// authenticates admin
const adminAuthMiddleware = async (req, res, next) => {
    try {
        // gets the token from the Bearer auth string
        const token = req.header("Authorization").replace("Bearer ", "")

        // sets user and token variable availabe in the request object
        req.user = await findUserByToken(token)
        req.token = token

        // if user is not admin user throw error
        if( !req.user.admin ) throw new Error("Not Admin user")

        // calls the route handler function
        next()

    } catch (error) { // catches any error in the try block
        // sends 401 auth error code with error message
        res.status(401).send({ error })
    }
}

// exports all middlewares
module.exports = {
    userAuthMiddleware,
    adminAuthMiddleware
}