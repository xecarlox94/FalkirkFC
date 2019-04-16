const express = require('express')
const router = new express.Router()

const Match = require("../models/match")
const MatchEvent = require("../models/matchEvent")

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
        const matchReport = await Match.getMatchReport(_id)
        res.send({ matchReport })
    } catch (error) {
        console.log(error)
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

        match.save()

        res.send({match})
    } catch (error) {
        res.status(500).send()
    }
})


// CREATE, UPDATE AND DELETE MATCH EVENTS
router.get("/:id/event/", async (req, res) => {
    const _id = req.params.id;

    try {
        const match = await Match.findById({ _id }).populate("events")

        res.send({ events: match.events })
    } catch (error) {
        res.status(500).send()
    }
})

router.post("/:id/event", async (req, res) => {
    const match_id = req.params.id;
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

// router.get("/:id/event/:event_id", async (req, res) => { get specific event
// })









router.get("/round/:round", async (req, res) => {
    const round = req.params.round;
    
    try {
        const matches = await Match.find({ round }).populate("home").populate("away")
        res.send({matches})
    } catch (error) {
        res.status(500).send()
    }
})



















// MOVE THIS ROUTES TO TEAM ROUTE


// router.get("/team/away/:id", async (req, res) => {
//     const _id = req.params.id

//     try {
//         const matches = await Match.find({ away: _id }).populate("away").populate("home")
//         res.send({ matches })

//     } catch (error) {
//         res.status(500).send()
//     }
// })

// router.get("/team/home/:id", async (req, res) => {
//     const _id = req.params.id

//     try {
//         const matches = await Match.find({ home: _id }).populate("home").populate("away")
//         res.send({ matches })

//     } catch (error) {
//         res.status(500).send()
//     }
// })

// router.get("/team/:id", async (req, res) => {
//     const _id = req.params.id

//     try {
//         const matches = await Match.find({ $or: [ {away: _id}, {home: _id}] })
//         res.send({ matches })
        
//     } catch (error) {
//         res.status(500).send()
//     }
// })





module.exports = router