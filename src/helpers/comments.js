const { Comment, Image } = require('../models')

module.exports = {
  async newest() {
    const comments = await Comment.find().limit(5).sort({ createdAt: -1 })
    for (const comment of comments) {
      const image = await Image.findOne({ _id: comment.image })
      comment.image = image
    }
    return comments
  }
}
