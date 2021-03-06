const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.listen(3000, () => {
    console.log('SERVER UP')
})

require('./routes/products')(app)

module.exports = app
