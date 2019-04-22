const express = require('express')
const router = new express.Router()

const User = require("../models/user")
const authMiddleware = require("../middleware/auth")

router.get("/", authMiddleware, async (req, res) => {
    try {
        console.log(req.user, req.token)
        const users = await User.find({})

        res.send({users})
    } catch (error) {
        res.status(500).send()
    }
})

router.post("/", async (req, res) => {
    const body = req.body;

    try {
        const user = new User(body)

        const token = await user.generateAuthToken()

        res.status(201).send({ user, token })

    } catch (error) {
        res.status(500).send()
    }
})


router.post("/login", async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findByCredentials(body.email, body.password)

        const token = await user.generateAuthToken()

        res.status(200).send({ user, token })
    } catch (error) {
        res.status(500).send()
    }
})


router.delete("/logout", authMiddleware, async (req, res) => {
    try {

        req.user.tokens = req.user.tokens.filter( (token) => {
            return token.token !== req.token;
        })

        await req.user.save()

        res.send();
        
    } catch (error) {
        res.send()
    }
})


router.delete("/logoutAll", authMiddleware, async (req, res) => {
    try {
        req.user.tokens = []

        await req.user.save()

        res.send()
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

module.exports = router