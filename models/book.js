//require mongoose
const mongoose = require('mongoose')
// deconstructing Schema from mongoose 
const { Schema } = mongoose 

// schema
const bookSchema = new Schema({
    name: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: { type: String, default: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.thrfun.com%2Fimg%2F224%2F464%2Fvalue_of_the_book_of_knowledge_4_x6.jpg&f=1&nofb=1' }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book