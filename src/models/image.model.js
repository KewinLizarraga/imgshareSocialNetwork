const { Schema, model } = require('mongoose')

const ImageSchema = new Schema(
  {
    title: String,
    description: String,
    filename: { type: String, unique: true },
    urlImage: { type: String, unique: true },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
)

module.exports = model('Image', ImageSchema)
