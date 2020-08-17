const { Router } = require('express')
const router = Router()

const { HomeController } = require('../controllers')

router.get('/', HomeController.home)

module.exports = router
