const express = require('express') // loads module
const router = new express.Router() // creates an router
const MatchEvent = require("../models/matchEvent"); // loads match event model

// loads authentication middleware
const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const matchEvent = await MatchEvent.findByIdAndDelete(_id).populate("player").populate("team")

        res.send({ matchEvent })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.post("/", adminAuthMiddleware, async (req, res) => {
    let body =  req.body;
    try {
        const matchEvent = new MatchEvent(body);
        
        await matchEvent.save()
        
        res.send({ matchEvent })
        
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/match/:match", userAuthMiddleware, async (req, res) => {
    const match_id = req.params.match;

    try {
        const matchEvents = await MatchEvent.getEventsMatch(match_id)

        res.send(matchEvents)
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})



module.exports = router;