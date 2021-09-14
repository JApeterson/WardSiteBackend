require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const { PORT, DATABASE_CONNECTION_STRING } = process.env

app.use(cors())
mongoose.connect(DATABASE_CONNECTION_STRING, { useNewUrlParser: true })
const connection = mongoose.connection
connection.on('open', () => {
    console.log('connected to db')
})

app.use(express.json())
const cleanersRouter = require('./routers/cleaners')
app.use('/cleaners', cleanersRouter)
app.listen(PORT || 9000, () => { console.log('Server started') })