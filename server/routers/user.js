const express = require('express')
const router = new express.Router()

const User = require("../models/user")

router.get("/", async (req, res) => {
    try {
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

        res.send({ user, token })

    } catch (error) {
        res.status(500).send()
    }
})


router.post("/login", async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findByCredentials(body.email, body.password)

        const token = await user.generateAuthToken()

        res.send({ user, token })
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router