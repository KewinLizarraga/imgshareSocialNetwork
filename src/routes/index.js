const { Router } = require('express')
const router = Router()

const HomeRoutes = require('./home.routes')

router.use('/', HomeRoutes)

module.exports = router
