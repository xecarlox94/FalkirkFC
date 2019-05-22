const express = require('express') // loads module
const router = new express.Router() // creates an router
const Event = require("../models/event") // loads Event model

// loads authentication middleware
const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")

router.post("/", adminAuthMiddleware, async (req, res) => {
    try {
        const event = new Event(req.body)

        // saves the event and sends it
        await event.save()
        res.send({ event })

    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/", userAuthMiddleware, async (req, res) => {
    try {
        const events = await Event.find({})
        // if there is no events, throw error
        if(events.length === 0) throw new Error("Events not available")

        res.send({ events })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.get("/:id", userAuthMiddleware, async (req, res) => {
    const _id = req.params.id;

    try {
        const event = await Event.findById(_id)
        // if there is no events, throw error
        if(!event) throw new Error("Event not found")

        res.send({ event })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.patch("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const event = await Event.findById(_id)
        // if there is no event, throw error
        if(!event) throw new Error("Event not found")

        updates = Object.keys(req.body)
        updates.forEach( (update) => {
            if(update !== "_id") event[update] = req.body[update]
        })

        event.time = Date.now()
        await event.save()

        res.send({ event })

    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})

router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;

    try {
        const event = await Event.findByIdAndDelete(_id)
        // if there is no event, throw error
        if(!event) throw new Error("Event not found")

        res.send({ event })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})


module.exports = router