const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getVideoGames(db = connection) {
  return db('videoGames').select()
}

function addVideoGame(videoGame, db = connection) {
  return db('videoGames').insert({ title: videoGame })
}

module.exports = {
  getVideoGames,
  addVideoGame,
}
