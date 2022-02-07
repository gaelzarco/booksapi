//dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//config
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to',process.env.MONGO) }
)

//routes
app.get('/', (req, res) => {
    res.send('Books-api beginning')
})

//books
const booksController = require('./controllers/books_controllers.js')
app.use('/books', booksController)

// CATCH-ALL
app.get('*', (req, res) => {
    res.status('404')
})

//listen
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})