const express = require('express')
const router = express.Router()

const db = require('../db/db')

// Insomnia test
// setTimeout to make the api slow
router.get('/', (req, res) => {
  setTimeout(() => {
    db.getVideoGames()
      .then((results) => {
        res.json(results)
        return null
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
      })
  }, 500)
})

router.post('/', (req, res) => {
  const videoGame = req.body
  if (!videoGame) {
    res.status(500).json({ message: 'New game was invalid' })
    return null
  }
  db.addVideoGame(videoGame)
    .then((results) => {
      res.json({ videoGames: results.map((videoGame) => videoGame.name) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
