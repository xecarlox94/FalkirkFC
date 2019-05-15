const express = require('express')
const router = new express.Router()

const User = require("../models/user")

const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

// USER AUTHENTICATION

router.post("/", async (req, res) => {

    try {
        const newUser = new User(req.body)

        if( newUser.admin ) {
            if( req.body._adminSecret === process.env.ADMIN_SECRET ) newUser.typeSubscription = "platinum"
            else throw new Error("Secret is wrong")
        }

        await newUser.save()

        const user = await User.findByCredentials(req.body.email, req.body.password)

        const token = await user.generateAuthToken()

        res.status(201).send({ user, token })

    } catch (error) {
        res.status(500).send({ error })
    }
})


router.patch("/", userAuthMiddleware, async (req, res) => {
    try {

        const isAdminCurrently = req.user.admin;
    
        const updates = Object.keys(req.body)
        updates.forEach( (update) => {
            if(req.body[update] !== null) req.user[update] = req.body[update]
        })



        if( !isAdminCurrently && req.user.admin ) {
            if( req.body._adminSecret === process.env.ADMIN_SECRET ) req.user.typeSubscription = "platinum"
            else throw new Error("Secret is wrong")
        }
        
        if( isAdminCurrently && !req.user.admin ) {
            if(req.body._adminSecret === process.env.ADMIN_SECRET) req.user.typeSubscription = "partial"
            else throw new Error("Secret is wrong")
        }
        
        
        await req.user.save()

        res.send({ user: req.user })
        
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.get("/me", userAuthMiddleware, async(req, res) => res.send({ user: req.user }) )

router.post("/login", async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findByCredentials(body.email, body.password)

        const token = await user.generateAuthToken()

        res.status(200).send({ user, token })
    } catch (error) {
        res.status(500).send({error})
    }
})


router.delete("/logout", userAuthMiddleware, async (req, res) => {
    try {

        req.user.tokens = req.user.tokens.filter( (token) => {
            return token.token !== req.token;
        })

        await req.user.save()

        res.send({ user: req.user })
        
    } catch (error) {
        res.status(500).send()
    }
})


router.delete("/logoutAll", userAuthMiddleware, async (req, res) => {
    try {
        req.user.tokens = []

        await req.user.save()

        res.send({ user: req.user })

    } catch (error) {
        res.status(500).send()
    }
})


// USER RESOURCES

router.get("/", adminAuthMiddleware, async (req, res) => {
    try {
        const users = await User.find({})

        res.send({users})
    } catch (error) {
        res.status(500).send()
    }
})


module.exports = router