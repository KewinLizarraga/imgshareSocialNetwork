const { Image } = require('../models')

module.exports = {
  home: async (req, res) => {
    const images = await Image.find().sort({ createdAt: -1 })
    res.render('home', {
      pageName: 'Pagina principal',
      images
    })
  }
}
