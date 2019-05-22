const express = require('express') // loads module
const router = new express.Router() // creates an router
const Match = require("../models/match") // loads Match model

// loads authentication middleware
const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

router.post("/", adminAuthMiddleware, async (req, res) => {
    try {
        const match = new Match(req.body)
        
        await match.save()
        res.send(match)
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/", userAuthMiddleware, async (req, res) => {
    try {
        const matches = await Match.getMatches({})
        if(!matches) throw new Error()

        res.send({ matches })

    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const match = await Match.findByIdAndDelete({ _id })
        if(!match) throw new Error()

        res.send({match})
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/:id", userAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const matchReport = await Match.getMatchReport(_id)

        res.send({ matchReport })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.patch("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const updates = Object.keys(req.body)
        
        const match = await Match.findById({ _id })
        updates.forEach( (update) => {
            if(update !== "_id") match[update] = req.body[update]
        })

        await match.save()

        res.send({ match })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/round/:round", userAuthMiddleware, async (req, res) => {
    const round = Number(req.params.round);
    try {
        const matches = await Match.getRoundMatches(round)

        res.send({ matches })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})


module.exports = router