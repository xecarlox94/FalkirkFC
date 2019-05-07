const express = require("express");
const router = new express.Router()

const MatchEvent = require("../models/matchEvent");

router.delete("/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const matchEvent = await MatchEvent.findByIdAndDelete(_id).populate("player").populate("team")

        res.send({ matchEvent })
    } catch (error) {
        res.status(500).send()
    }
})

router.post("/", async (req, res) => {
    let body =  req.body;
    try {
        const matchEvent = new MatchEvent({
            typeEvent: body.typeEvent,
            minute: body.minute,
            match:  body.match,
            team:  body.team,
            player: body.player
        });
        
        await matchEvent.save()
        
        res.send({ matchEvent })
        
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/match/:match", async (req, res) => {
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