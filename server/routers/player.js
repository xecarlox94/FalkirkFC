const express = require('express')
const router = new express.Router()

const Player = require("../models/player")

router.get("/", async (req, res) => {
    try {
        const players = await Player.find({})
        res.send({ players })
    } catch (error) {
        res.status(500).send()
    }
})

router.post("/", async (req, res) => {
    const body = req.body;
    try {
        const player = new Player(body)
        await player.save()
        res.send({ player })
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const player = await Player.findById({ _id })
        res.send({player})
    } catch (error) {
        res.status(500).send()
    }
})


router.patch("/:id", async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    
    const updates = Object.keys(body)

    try {

        const player = await Player.findById({ _id })
        console.log("player before" + player)

        updates.forEach( update => player[update] = body[update] )

        await player.save()

        res.send({player})

    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

module.exports = router