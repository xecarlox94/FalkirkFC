const express = require('express')

const router = new express.Router()


const { userAuthMiddleware, adminAuthMiddleware } = require("../middleware/auth")


module.exports = router