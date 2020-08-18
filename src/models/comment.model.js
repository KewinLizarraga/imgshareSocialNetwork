const { Schema, model } = require('mongoose')

const CommentSchema = new Schema(
  {
    email: String,
    name: String,
    comment: String,
    gravatar: String,
    image: { type: Schema.Types.ObjectId, ref: 'Image' }
  },
  {
    timestamps: true
  }
)

module.exports = model('Comment', CommentSchema)
