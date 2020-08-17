const multer = require('multer')
const moment = require('moment')
const shortid = require('shortid')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/upload/temp'))
  },
  filename: (req, file, cb) => {
    const name = file.fieldname
    const date = moment(Date.now()).format('YYYYMMDD')
    let ext = file.mimetype
    ext = ext.split('/').pop()
    cb(null, `${name}-${date}-${shortid.generate()}.${ext}`)
  }
})

const upload = multer({ storage })

module.exports = upload
