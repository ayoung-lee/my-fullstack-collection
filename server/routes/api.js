const express = require('express')
const router = express.Router()

const db = require('../db/db')

// Insomnia test
router.get('/', (req, res) => {
  db.getVideoGames()
    .then((videoGames) => {
      res.json(videoGames)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
