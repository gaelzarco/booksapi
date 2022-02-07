// dependencies
const router = require('express').Router()
const Book = require('../models/book.js')

// seed
// router.get('/seed', (req, res) => {
//     Book.insertMany([{
//         "title": "The Shinobi Initiative",
//         "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
//         "year": 2014,
//         "quantity": 10,
//         "imageURL": "https://imgur.com/LEqsHy5.jpeg"
//       },
//       {
//         "title": "Tess the Wonder Dog",
//         "description": "The tale of a dog who gets super powers",
//         "year": 2007,
//         "quantity": 3,
//         "imageURL": "https://imgur.com/cEJmGKV.jpg"
//       },
//       {
//         "title": "The Annals of Arathrae",
//         "description": "This anthology tells the intertwined narratives of six fairy tales.",
//         "year": 2016,
//         "quantity": 8,
//         "imageURL": "https://imgur.com/VGyUtrr.jpeg"
//       },
//       {
//         "title": "W∀RP",
//         "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
//         "year": 2010,
//         "quantity": 4,
//         "imageURL": "https://imgur.com/qYLKtPH.jpeg"
//       }])
//         .then(res.status(200).json({
//             message: 'Seed successful'
//         }))
//         .catch(res.status(400).json({
//             message: 'Seed unsuccessful'
//         }))
// })

// index
router.get('/', (req, res) => {
    Book.find()
    .then ((books) => {
        res.json(books)
    })
    .catch(err => {
        console.log('err', err)
        res.status(404)
        res.send('status: 404')
    })
})

// add
router.post('/', (req, res) => {
    Book.create(req.body)
    .then(() => {
        res.send('book created')
    })
    .catch(err => {
        console.log('err', err)
        res.status(501)
        res.send('status: 501')
    })
})

// show
router.get('/:id', (req, res) => {
    Book.findOne({ _id: req.params.id })
    .then(book => {
        res.json(book)

    })
    .catch(err => {
        console.log('err', err)
        res.status(404)
        res.send('status: 404')
    })
})

// update
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.send('update was completed')
        })
        .catch(err => {
            console.log('err', err)
            res.status(304)
            res.send('status: 304')
        })
})

// delete
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => {
        res.send('deletion completed')
    })
    .catch(err => {
        console.log('err', err)
        res.status(304)
        res.send('status: 304')
    })
})

module.exports = router