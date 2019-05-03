const express = require("express");
const router = new express.Router()

const MatchEvent = require("../models/matchEvent");


router.post("/match/:match", async (req, res) => {
    const match_id = req.params.match;
    let body =  req.body;
    body.match = match_id;

    try {
        const updates = Object.keys(body)
        const allowedUpdates = [ "typeEvent", "minute", "match", "player", "team" ];
        const isvalidOperation = updates.every( (update) => allowedUpdates.includes(update) )
        if(!isvalidOperation) throw new Error()
        
        const matchEvent = new MatchEvent(body);

        await matchEvent.save()

        res.send({ matchEvent })
        
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

router.get("/match/:match", async (req, res) => {
    const match_id = req.params.match;

    try {
        const matchEvents = await MatchEvent.find({ match: match_id })

        res.send(matchEvents)
    } catch (error) {
        res.status(500).send()
    }
})



module.exports = router;