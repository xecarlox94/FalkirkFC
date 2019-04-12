const express = require('express')
const router = new express.Router()

const Team = require("../models/team")


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



router.get("/performance/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const team = await Team.findById(_id).populate("awayMatches").populate("homeMatches")

        res.send({
            team,
            performance: team.performance,
            awayMatches: team.awayMatches,
            homeMatches: team.homeMatches
        })
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/table", async (req, res) => {
    try {
        const tableRows = await Team.getTable()
        console.log(tableRows)
        res.send({
            table: tableRows
        })
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

router.get("/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const team = await Team.findById(_id).populate("awayMatches").populate("homeMatches")

        res.send({
            team
        })
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router