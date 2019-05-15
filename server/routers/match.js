const express = require('express')
const router = new express.Router()

const Match = require("../models/match")


const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

router.post("/", adminAuthMiddleware, async (req, res) => {
    const body = req.body;
    
    try {
        const match = new Match(body)
        
        await match.save()
        res.send(match)
    } catch (error) {
        res.status(500).send()
    }
})


router.get("/", userAuthMiddleware, async (req, res) => {
    try {
        const matches = await Match.getMatches()
        if(!matches) throw new Error()

        res.send({ matches })

    } catch (error) {
        res.status(500).send()
    }
})


router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const match = await Match.findByIdAndDelete({ _id })
        if(!match) throw new Error()

        res.send({match})
    } catch (error) {
        res.status(500).send()
    }
})


router.get("/:id", userAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const matchReport = await Match.getMatchReport(_id)

        res.send({ matchReport })
    } catch (error) {
        res.status(500).send()
    }
})


router.patch("/:id", adminAuthMiddleware, async (req, res) => {
    const body = req.body
    const _id = req.params.id;
    

    try {
        const updates = Object.keys(body)
        
        const match = await Match.findById({ _id })
        updates.forEach( (update) => {
            if(update !== "_id") req.user[update] = req.body[update]
        })

        await match.save()

        res.send({ match })
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})


router.get("/round/:round", userAuthMiddleware, async (req, res) => {
    const round = Number(req.params.round);
    
    try {
        const matches = await Match.getRoundMatches(round)

        res.send({ matches })

    } catch (error) {
        res.status(500).send()
    }
})


module.exports = router