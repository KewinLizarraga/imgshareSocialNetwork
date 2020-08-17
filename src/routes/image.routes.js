const { Router } = require('express')
const router = Router()

const { ImageController } = require('../controllers')
const { upload } = require('../middlewares')

router.get('/:image_id', ImageController.main)
router.post('/', upload.single('image'), ImageController.create)
router.post('/:image_id/like', ImageController.like)
router.post('/:image_id/comment', ImageController.comment)
router.delete('/:image_id', ImageController.remove)

module.exports = router
