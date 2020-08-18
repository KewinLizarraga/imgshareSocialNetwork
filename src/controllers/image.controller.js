const { Image } = require('../models')

module.exports = {
  main: (req, res) => {
    res.send('Llamando a la imagen')
  },
  create: async (req, res) => {
    try {
      const data = {
        tittle: req.body.tittle,
        description: req.body.description,
        filename: req.file.filename,
        urlImage: req.file.path.split('src')[1]
      }
      const image = await Image.create(data)
      // res.send('imagen enviada...')
      res.redirect(`/images/${image._id}`)
    } catch (error) {
      res.status(500).json({ error: req.fileValidationError })
    }
  },
  like: (req, res) => {},
  comment: (req, res) => {},
  remove: (req, res) => {}
}
