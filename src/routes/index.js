const { Router } = require('express')
const router = Router()

const HomeRoutes = require('./home.routes')
const ImageRoutes = require('./image.routes')

router.use('/home', HomeRoutes)
router.use('/images', ImageRoutes)

module.exports = router
