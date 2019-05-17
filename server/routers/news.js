const express = require('express')

const router = new express.Router()

const News = require("../models/news")


const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")


router.post("/", adminAuthMiddleware, async (req, res) => {
    try {
        const news = new News(req.body)

        await news.save()

        res.send( { news } )
    } catch (error) {
        res.status(500).send({error})
    }
})


router.get("/", userAuthMiddleware, async (req, res) => {
    try {
        const newsLetter = await News.find({})

        if(newsLetter.length === 0) throw new Error("No news available")

        res.send({ newsLetter })
    } catch (error) {
        res.status(500).send({ error })
    }
})


router.get("/:id", userAuthMiddleware, async (req, res) => {
    try {
        const news = await News.findById(req.params.id)

        if(!news) throw new Error("News article not found")

        res.send({ news })
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.patch("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const news = await News.findById(_id)

        if(!news) throw new Error("News article not found")

        const updates = Object.keys(body)

        updates.forEach( (update) => {
            if(update !== "_id") news[update] = req.body[update]
        })

        news.time = Date.now()

        await news.save()

        res.send({ news })
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.delete("/:id", adminAuthMiddleware, async (req, res) => {
    const _id = req.params.id;
    try {
        const news = await News.findByIdAndDelete(_id)

        if(!news) throw new Error("News article not found")

        res.send({ news })
    } catch (error) {
        res.status(500).send({ error })
    }
})


module.exports = router