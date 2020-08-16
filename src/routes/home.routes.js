const { Router } = require('express')
const router = Router()

const { HomeController } = require('../controllers')

router.get('/home', HomeController.home)

module.exports = router
