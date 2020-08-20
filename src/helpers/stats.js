const { Comment, Image } = require('../models')

const imagesCounter = async () => {
  return await Image.countDocuments()
}

const commentsCounter = async () => {
  return await Comment.countDocuments()
}

const viewsImagesCounter = async () => {
  /**
   * 'result' returns an object.
   * result = [{ _id: '1', viewsTotal: '12' }]
   * We only want the 'viewsTotal'
   * result[0].viewsTotal
   */
  const result = await Image.aggregate([
    {
      $group: {
        _id: '1',
        viewsTotal: { $sum: '$views' }
      }
    }
  ])
  let viewsTotal = 0
  if (result.length > 0) {
    viewsTotal += result[0].viewsTotal
  }
  return viewsTotal
}

const likesImagesCounter = async () => {
  const result = await Image.aggregate([
    {
      $group: {
        _id: '1',
        likesTotal: { $sum: '$likes' }
      }
    }
  ])
  let likesTotal = 0
  if (result.length > 0) {
    likesTotal += result[0].likesTotal
  }
  return likesTotal
}

module.exports = async () => {
  const results = await Promise.all([
    imagesCounter(),
    commentsCounter(),
    viewsImagesCounter(),
    likesImagesCounter()
  ])
  return {
    images: results[0],
    comments: results[1],
    views: results[2],
    likes: results[3]
  }
}
