const express = require('express')
const router = new express.Router()

const Match = require("../models/match")

router.post("/", async (req, res) => {
    const body = req.body;
    const match = new Match({
        home: body.home,
        away: body.away
    })
    
    try {
        await match.save()
        res.send(match)
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/", async (req, res) => {
    try {
        const matches = await Match.find({})
        await 
        res.send({matches})
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const match = await Match.findById({ _id })
        res.send({match})
    } catch (error) {
        res.status(500).send()
    }
})

router.patch("/:id", async (req, res) => {
    const body = req.body
    const _id = req.params.id;
    

    try {
        const updates = Object.keys(body)
        const allowedUpdates = ["homeScore", "awayScore", "time", "round", "away", "home"];
        const isvalidOperation = updates.every( (update) => allowedUpdates.includes(update) )
        if(!isvalidOperation) throw new Error()
        
        const match = await Match.findById({ _id })
        updates.forEach( update =>  match[update] = body[update]);

        match.save()

        res.send({match})
    } catch (error) {
        res.status(500).send()
    }
})


router.get("/round/:round", async (req, res) => {
    const round = req.params.round;
    
    try {
        const matches = await Match.find({ round }).populate("home").populate("away")
        res.send({matches})
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/team/away/:id", async (req, res) => {
    const _id = req.params.id

    try {
        const matches = await Match.find({ away: _id }).populate("away").populate("home")
        res.send({ matches })

    } catch (error) {
        res.status(500).send()
    }
})

router.get("/team/home/:id", async (req, res) => {
    const _id = req.params.id

    try {
        const matches = await Match.find({ home: _id }).populate("home").populate("away")
        res.send({ matches })

    } catch (error) {
        res.status(500).send()
    }
})

router.get("/team/:id", async (req, res) => {
    const _id = req.params.id

    try {
        const matches = await Match.find({ $or: [ {away: _id}, {home: _id}] })
        res.send({ matches })
        
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router