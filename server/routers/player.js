const express = require('express') // loads module
const router = new express.Router() // creates an router
const Player = require("../models/player") // loads Player model

// loads authentication middleware
const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

router.get("/", userAuthMiddleware, async (req, res) => {
    try {
        const players = await Player.find({})
        res.send({ players })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.post("/", adminAuthMiddleware, async (req, res) => {
    const body = req.body;
    try {
        const player = new Player(body)
        await player.save()
        res.send({ player })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/:id", userAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const player = await Player.findById({ _id })
        res.send({player})
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})


router.patch("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const player = await Player.findById({ _id })

        const updates = Object.keys(req.body)
        updates.forEach( (update) => {
            if(update !== "_id") player[update] = req.body[update]
        })

        await player.save()

        res.send({player})

    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {

        const player = await Player.findByIdAndDelete({ _id })

        res.send({player})
        
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

module.exports = router