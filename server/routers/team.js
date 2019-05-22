const express = require('express') // loads module
const router = new express.Router() // creates an router
const Team = require("../models/team") // loads Team model

// loads authentication middleware
const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

router.post("/", adminAuthMiddleware, async (req, res) => {
    try {
        const team = new Team(req.body)

        await team.save()
        res.send({ team })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/", userAuthMiddleware, async (req, res) => {
    try {
        const teams = await Team.find({})

        res.send({ teams })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/table", userAuthMiddleware, async (req, res) => {
    try {
        const table = await Team.getTable()
        // if table empty, throw error
        if(table.length === 0) throw new Error("Table not available")

        res.send({ table })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/performance/:id", userAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const team = await Team.findById(_id)
        //if no team, throw error
        if(!team) throw new Error("Team not found")

        const performance =  await team.getPerformance();

        res.send({ team, performance })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/:id", userAuthMiddleware, async (req, res) => {
    const _id = req.params.id;

    try {
        const team = await Team.findById(_id)
        //if no team, throw error
        if(!team) throw new Error("Team not found")

        res.send({ team })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})



router.get("/squad/:id", userAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const team = await Team.findById(_id).populate("players")
        //if no team, throw error
        if(!team) throw new Error("Team not found")

        res.send({
            squad: {
                team,
                players: team.players
            }
        })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.patch("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const team = await Team.findOne({ _id })
        //if no team, throw error
        if(!team) throw new Error("Team not found")
        
        const updates = Object.keys(req.body)
        updates.forEach( (update) => {
            if(update !== "_id") team[update] = req.body[update]
        })
        
        await team.save()

        res.send({ team })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const team = await Team.findByIdAndDelete({ _id })
        //if no team, throw error
        if(!team) throw new Error("Team not found")

        res.send({ team })

    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})


module.exports = router