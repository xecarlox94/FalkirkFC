const express = require('express')
const router = new express.Router()

const Player = require("../models/player")

const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

router.get("/", userAuthMiddleware, async (req, res) => {
    try {
        const players = await Player.find({})
        res.send({ players })
    } catch (error) {
        res.status(500).send()
    }
})

router.post("/", adminAuthMiddleware, async (req, res) => {
    const body = req.body;
    try {
        const player = new Player(body)
        await player.save()
        res.send({ player })
    } catch (error) {
        console.log(error)
        res.status(500).send({error})
    }
})

router.get("/:id", userAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const player = await Player.findById({ _id })
        res.send({player})
    } catch (error) {
        res.status(500).send()
    }
})


router.patch("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    
    const updates = Object.keys(body)

    try {

        const player = await Player.findById({ _id })

        updates.forEach( (update) => {
            if(update !== "_id") req.user[update] = req.body[update]
        })

        await player.save()

        res.send({player})

    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {

        const player = await Player.findByIdAndDelete({ _id })

        res.send({player})
        
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router