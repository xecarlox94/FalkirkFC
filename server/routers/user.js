const express = require('express') // loads module
const router = new express.Router() // creates an router
const User = require("../models/user") // loads user model

// loads authentication middleware
const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

// USER AUTHENTICATION

// registration route
router.post("/", async (req, res) => { 

    try {
        // create new user with the body request data
        const newUser = new User(req.body) 

        // gives a platinum subs type to an admin
        // throws error if secret is wrong
        if( newUser.admin ) {
            if( req.body._adminSecret === process.env.ADMIN_SECRET ) newUser.typeSubscription = "platinum"
            else throw new Error("Secret is wrong")
        }

        // saves user
        await newUser.save()

        // finds the user and generates new token
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        
        // sends current user and token
        res.status(201).send({ user, token })

    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})


// login route
router.post("/login", async (req, res) => {
    const body = req.body;
    try {
        // finds the user and generates auth token
        const user = await User.findByCredentials(body.email, body.password)
        const token = await user.generateAuthToken()

        // sends current user and token
        res.status(200).send({ user, token })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

// update route
router.patch("/", userAuthMiddleware, async (req, res) => { 
    const body = req.body; // body request data stored
    try {
        // stores if the logged in user is admin
        const isAdminCurrently = req.user.admin;
    
        const updates = Object.keys(body);
        const notAllowed = [ "_id", "email" ]

        // updates every property allowed
        updates.forEach( update => {
            if(!notAllowed.includes(update)) req.user[update] = body[update]
        })

        // gives a platinum subs type to an admin
        // throws error if secret is wrong
        if( !isAdminCurrently && req.user.admin ) {
            if( req.body._adminSecret === process.env.ADMIN_SECRET ) req.user.typeSubscription = "platinum"
            else throw new Error("Secret is wrong")
        }

        // gives a platinum subs type to an updated subscriber
        // throws error if secret is wrong
        if( isAdminCurrently && !req.user.admin ) {
            if(req.body._adminSecret === process.env.ADMIN_SECRET) req.user.typeSubscription = "partial"
            else throw new Error("Secret is wrong")
        }
        
        // saves changes
        await req.user.save()
        
        // sends current updated user
        res.send({ user: req.user })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})




 // logout route
 router.delete("/logout", userAuthMiddleware, async (req, res) => {
    try {
        // returns an array with all tokens, without current token
        req.user.tokens = req.user.tokens.filter( (token) => {
            return token.token !== req.token;
        })

        // saves changes
        await req.user.save()
        
        // sends current user
        res.send({ user: req.user })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})


 // logout and remove all authentication tokens route
router.delete("/logoutAll", userAuthMiddleware, async (req, res) => {
    try {
        // erases all tokens
        req.user.tokens = []

        // saves changes
        await req.user.save()

        // sends current user
        res.send({ user: req.user })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})


// return current user route
router.get("/me", userAuthMiddleware, async(req, res) => {
    // sends current user
    res.send({ user: req.user })
})



// USER RESOURCES

// return all users
router.get("/", adminAuthMiddleware, async (req, res) => {
    try {
        // gets all users
        const fetchedUsers = await User.find({})
        // if no users found, throw error
        if(fetchedUsers.length === 0) throw new Error("No users found")

        // returns all users, without the current user
        const users = fetchedUsers.filter( (user) => user._id.toString() !== req.user._id.toString() )

        // send all users
        res.send({ users })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

// get an user
router.get("/:id", adminAuthMiddleware, async (req, res) => {
    // stores the id parameter
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        // if no user found, throw error
        if(!user) throw new Error("User not found")

        res.send({ user })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

// update an user
router.patch("/:id", adminAuthMiddleware, async (req, res) => {
    // stores the id parameter and the body request
    const _id = req.params.id
    try {
        // gets the user by id
        const user = await User.findById(_id)
        // if no user found, throw error
        if(!user) throw new Error("User not found")
        
        // updates all user allowed fields
        const updates = Object.keys(req.body);
        const notAllowed = [ "_id", "admin", "typeSubscription", "email" ]
        updates.forEach( update => {
            if(!notAllowed.includes(update)) user[update] = req.body[update]
        })
        
        // user changes saved
        await user.save()

        // send updated user
        res.send({ user })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

// delete an user
router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    // stores the id parameter
    const _id = req.params.id
    try {
        // finds the user by id and deletes it
        const user = await User.findByIdAndDelete(_id)
        // if no user found, throw error
        if(!user) throw new Error("User not found")

        // sends deleted user
        res.send({ user })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

module.exports = router