const moment = require('moment')
const { Image } = require('../models')
const { sidebar } = require('../helpers')

module.exports = {
  home: async (req, res) => {
    const images = await Image.find().sort({ createdAt: -1 })
    let viewModel = { images: [] }
    viewModel.images = images
    viewModel = await sidebar(viewModel)
    res.render('home', {
      pageName: 'Pagina principal',
      viewModel,
      moment
    })
  }
}
