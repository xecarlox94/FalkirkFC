const express = require('express')

const router = new express.Router()

const Event = require("../models/event")

const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")


router.post("/", adminAuthMiddleware, async (req, res) => {
    try {
        const event = new Event(req.body)

        await event.save()

        res.send({ event })
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.get("/", userAuthMiddleware, async (req, res) => {
    try {
        const events = await Event.find({})

        if(events.length === 0) throw new Error("Events not available")

        res.send({ events })
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.get("/:id", userAuthMiddleware, async (req, res) => {
    const _id = req.params.id;

    try {
        const event = await Event.findById(_id)

        if(!event) throw new Error("Event not found")

        res.send({ event })
    } catch (error) {
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

        await event.save()

        res.send({ event })

    } catch (error) {
        res.status(500).send({ error })
    }
})

router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;

    try {
        const event = await Event.findByIdAndDelete(_id)

        if(!event) throw new Error("Event not found")

        res.send({ event })

    } catch (error) {
        res.status(500).send({ error })
    }
})


module.exports = router