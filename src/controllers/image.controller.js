const moment = require('moment')
const md5 = require('md5')
const { Image, Comment } = require('../models')

module.exports = {
  main: async (req, res) => {
    const image = await Image.findById(req.params.image_id)
    try {
      if (image) {
        image.views += 1
        await image.save()
        const comments = await Comment.find({ image: image._id }).sort({ createdAt: -1 })
        const dateNow = new Date()
        res.render('image', {
          image,
          comments,
          dateNow,
          moment
        })
      }
    } catch (error) {
      res.redirect('/home')
    }
  },
  create: async (req, res) => {
    try {
      const image = new Image(req.body)
      image.filename = req.file.filename
      image.urlImage = req.file.path.split('src')[1]
      await image.save()
      res.redirect(`/images/${image._id}`)
    } catch (error) {
      res.status(500).json({ error: req.fileValidationError })
    }
  },
  like: async (req, res) => {
    const image = await Image.findById(req.params.image_id)
    try {
      if (image) {
        image.likes += 1
        await image.save()
        res.status(200).json({ likes: image.likes })
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Error Server' })
    }
  },
  comment: async (req, res) => {
    const image = await Image.findById(req.params.image_id)
    try {
      if (image) {
        const comment = new Comment(req.body)
        comment.gravatar = md5(comment.email)
        comment.image = image._id
        await comment.save()
        res.redirect(`/images/${image._id}`)
      }
    } catch (error) {
      console.log(error)
    }
  },
  remove: (req, res) => {}
}
