require('dotenv').config()
const express = require('express')
const path = require('path')
const expressEjsLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const multer = require('multer')
const errorhandler = require('errorhandler')

const { dbConnection } = require('./config/db')
const { PORT, NODE_ENV } = require('./config')
const router = require('./routes')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')
app.use(expressEjsLayouts)

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(morgan('dev'))
app.use(multer({ dest: path.join(__dirname, 'public/upload/temp') }).single('image'))

if (NODE_ENV === 'development') {
  app.use(errorhandler())
}

app.use('/', router)

const main = async () => {
  await dbConnection()
  app.listen(PORT, () => console.log(`Run on PORT: ${PORT}`))
}

main()
