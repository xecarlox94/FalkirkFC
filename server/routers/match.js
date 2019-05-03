const express = require('express')
const router = new express.Router()

const Match = require("../models/match")

router.post("/", async (req, res) => {
    const body = req.body;
    const match = new Match({
        home: body.home,
        away: body.away,
        round: body.round
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
        const matches = await Match.find({}).populate("home").populate("away")
        

        res.send({ matches })

    } catch (error) {
        res.status(500).send()
    }
})


router.delete("/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const match = await Match.findByIdAndDelete({ _id })
        
        if(!match) throw new Error()

        res.send({match})
    } catch (error) {
        res.status(500).send()
    }
})


router.get("/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const matchReport = await Match.getMatchReport(_id)

        res.send({ matchReport })
    } catch (error) {
        res.status(500).send()
    }
})


router.patch("/:id", async (req, res) => {
    const body = req.body
    const _id = req.params.id;
    

    try {
        const updates = Object.keys(body)
        const allowedUpdates = ["time", "round", "away", "home"];
        const isvalidOperation = updates.every( (update) => allowedUpdates.includes(update) )
        if(!isvalidOperation) throw new Error()
        
        const match = await Match.findById({ _id })
        updates.forEach( update =>  match[update] = body[update]);

        await match.save()

        res.send({ match })
    } catch (error) {
        res.status(500).send()
    }
})


router.get("/round/:round", async (req, res) => {
    const round = Number(req.params.round);
    
    try {
        const matches = await Match.getRoundMatches(round)

        res.send({ matches })

    } catch (error) {
        res.status(500).send()
    }
})


module.exports = router