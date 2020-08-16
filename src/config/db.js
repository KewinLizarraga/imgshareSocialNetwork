const mongoose = require('mongoose')

const { DB_URI } = require('../config')

module.exports = {
  dbConnection: async () => {
    try {
      await mongoose.connect(DB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
      console.log('DB connect')
    } catch (error) {
      console.log('DB not connect', error)
    }
  }
}
