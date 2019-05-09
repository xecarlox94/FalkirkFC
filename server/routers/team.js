const express = require('express')
const router = new express.Router()

const Team = require("../models/team")

const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")


router.post("/", async (req, res) => {
    const body = req.body;
    const team = new Team(body)

    try {
        await team.save()
        res.send(team)
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/", async (req, res) => {
    try {
        const teams = await Team.find({})
        res.send({teams})
    } catch (error) {
        res.status(500).send()
    }
})


router.get("/table", async (req, res) => {
    try {
        const tableRows = await Team.getTable()
        res.send({
            table: tableRows
        })
    } catch (error) {
        res.status(500).send()
    }
})

// add route for away, home and overall games
router.get("/performance/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const team = await Team.findById(_id)
        
        const performance =  await team.getPerformance();

        res.send({
            team,
            performance
        })
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const team = await Team.findById(_id)

        res.send({
            team
        })
    } catch (error) {
        res.status(500).send()
    }
})



router.get("/squad/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const team = await Team.findById(_id).populate("players")

        res.send({
            squad: {
                team,
                players: team.players
            }
        })
    } catch (error) {
        res.status(500).send()
    }
})

router.patch("/:id", async (req, res) => {
    const body = req.body;
    const _id = req.params.id;
    delete body._id

    const allowedUpdates = [ "name", "manager" ]
    const updates = Object.keys(body)
    const isValid = updates.every( update => {
        return allowedUpdates.includes(update)
    })

    try {
        if(!isValid) throw new Error()

        const team = await Team.findOne({ _id })
        if(!team) throw new Error()

        updates.forEach( update => team[update] = body[update])
        
        await team.save()

        res.send({ team })
    } catch (error) {
        res.status(500).send()
    }
})

router.delete("/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const team = await Team.findByIdAndDelete({ _id })

        if(!team) throw new Error()

        res.send({ team })

    } catch (error) {
        res.status(500).send()
    }
})


module.exports = router