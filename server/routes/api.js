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
      res.json(results.map((videoGame) => videoGame.name))
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.delete('/', (req, res) => {
  const id = req.body
  db.delVideoGame(id)
    .then((videoGame) => {
      res.status(200).send(`${videoGame} deleted`)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server Error')
    })
})

module.exports = router
