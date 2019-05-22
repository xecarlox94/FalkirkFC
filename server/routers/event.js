const express = require('express')

const router = new express.Router()

const Event = require("../models/event")

const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")


router.post("/", adminAuthMiddleware, async (req, res) => {
    try {
        // creates a new event
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
        // gets all events
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

        if(!event) throw new Error("Event not found")

        res.send({ event })
    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})


router.patch("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    const body = req.body;

    try {
        const event = await Event.findById(_id)

        if(!event) throw new Error("Event not found")

        updates = Object.keys(body)

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

        if(!event) throw new Error("Event not found")

        res.send({ event })

    } catch (error) { // catches any error in the try block
        // sends 500 internal error with the error message
        res.status(500).send({ error })
    }
})


module.exports = router