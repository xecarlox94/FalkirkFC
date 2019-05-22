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

        // finds the user
        const user = await User.findByCredentials(req.body.email, req.body.password)

        // generates new token
        const token = await user.generateAuthToken()
        
        // sends current user and token
        res.status(201).send({ user, token })

    } catch (error) { // catches any error in the try block
        // sends 500 internal error
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
        
        // sends user
        res.send({ user: req.user })
        
    } catch (error) { // catches any error in the try block
        // sends 500 internal error
        res.status(500).send({ error })
    }
})


// return current user route
router.get("/me", userAuthMiddleware, async(req, res) => res.send({ user: req.user }) )


// login route
router.post("/login", async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findByCredentials(body.email, body.password)

        const token = await user.generateAuthToken()

        res.status(200).send({ user, token })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error
        res.status(500).send({error})
    }
})


 // logout route
router.delete("/logout", userAuthMiddleware, async (req, res) => {
    try {

        req.user.tokens = req.user.tokens.filter( (token) => {
            return token.token !== req.token;
        })

        await req.user.save()

        res.send({ user: req.user })
        
    } catch (error) { // catches any error in the try block
        // sends 500 internal error
        res.status(500).send()
    }
})


 // logout and remove all authentication tokens route
router.delete("/logoutAll", userAuthMiddleware, async (req, res) => {
    try {
        req.user.tokens = []

        await req.user.save()

        res.send({ user: req.user })

    } catch (error) { // catches any error in the try block
        // sends 500 internal error
        res.status(500).send()
    }
})


// USER RESOURCES

// return all users
router.get("/", adminAuthMiddleware, async (req, res) => {
    try {
        const fetchedUsers = await User.find({})

        const users = fetchedUsers.filter( (user) => user._id.toString() !== req.user._id.toString() )

        res.send({users})
    } catch (error) { // catches any error in the try block
        // sends 500 internal error
        res.status(500).send({ error })
    }
})

// get an user
router.get("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)

        res.send({ user })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error
        res.status(500).send()
    }
})

// update an user
router.patch("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id
    const body = req.body;
    try {
        const user = await User.findById(_id)
    
        const updates = Object.keys(body);
        const notAllowed = [ "_id", "admin", "typeSubscription", "email" ]
        updates.forEach( update => {
            if(!notAllowed.includes(update)) user[update] = body[update]
        })
        
        await user.save()

        res.send({ user })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error
        res.status(500).send({ error })
    }
})

// delete an user
router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findByIdAndDelete(_id)

        res.send({user})
    } catch (error) { // catches any error in the try block
        // sends 500 internal error
        res.status(500).send()
    }
})

module.exports = router