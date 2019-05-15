const express = require("express");
const router = new express.Router()

const MatchEvent = require("../models/matchEvent");


const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const matchEvent = await MatchEvent.findByIdAndDelete(_id).populate("player").populate("team")

        res.send({ matchEvent })
    } catch (error) {
        res.status(500).send()
    }
})

router.post("/", adminAuthMiddleware, async (req, res) => {
    let body =  req.body;
    try {
        const matchEvent = new MatchEvent(body);
        
        await matchEvent.save()
        
        res.send({ matchEvent })
        
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/match/:match", userAuthMiddleware, async (req, res) => {
    const match_id = req.params.match;

    try {
        const matchEvents = await MatchEvent.getEventsMatch(match_id)

        res.send(matchEvents)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})



module.exports = router;