const multer = require('multer')
const moment = require('moment')
const shortid = require('shortid')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/upload'))
  },
  filename: (req, file, cb) => {
    const name = file.fieldname
    const date = moment(Date.now()).format('YYYYMMDD')
    const ext = file.mimetype.split('/').pop()
    if (['png', 'jpg', 'jpeg', 'gif'].includes(ext)) {
      cb(null, `${name}-${date}-${shortid.generate()}.${ext}`)
    }
  }
})

const fileFilter = (req, file, cb) => {
  const ext = file.mimetype.split('/').pop()
  if (!['png', 'jpg', 'jpeg', 'gif'].includes(ext)) {
    req.fileValidationError = 'Only images are allowed.'
    return cb(null, false, new Error('Only images are allowed.'))
  }
  cb(null, true)
}

const upload = multer({ storage, fileFilter })

module.exports = upload
