const express = require('express')
const router = new express.Router()

const User = require("../models/user")

const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

router.get("/", adminAuthMiddleware, async (req, res) => {
    try {
        
        const users = await User.find({})

        res.send({users})
    } catch (error) {
        res.status(500).send()
    }
})

router.post("/", async (req, res) => {

    try {
        const newUser = new User(req.body)

        console.log("ADMIN_SECRET: ",process.env.ADMIN_SECRET)
        console.log("new User: ", newUser)

        if( newUser.admin ) {
            if( req.body._adminSecret === process.env.ADMIN_SECRET ) newUser.typeSubscription = "platinum"
            else throw new Error("incorrect secret!!")
        }

        await newUser.save()

        const user = await User.findByCredentials(req.body.email, req.body.password)

        const token = await user.generateAuthToken()

        res.status(201).send({ user, token })

    } catch (error) {
        console.log(error)
        res.status(500).send({ error })
    }
})


router.patch("/", userAuthMiddleware, async (req, res) => {
    const updates = Object.keys(req.body)
    try {
        updates.forEach( (update) => req.user[update] = req.body[update] )

        if( req.user.admin ) {
            if( req.body._adminSecret === process.env.ADMIN_SECRET ) req.user.typeSubscription = "platinum"
            else throw new Error()
        }

        await req.user.save()

        res.send({ user: req.user })
        
    } catch (error) {
        res.status(500).send()
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
        console.log(error)
        res.status(500).send()
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
        res.send()
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

module.exports = router