const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getVideoGames,
  addVideoGame,
  delVideoGame,
}

function getVideoGames(db = connection) {
  return db('videoGames').select()
}

function addVideoGame(videoGame, db = connection) {
  return db('videoGames').insert({ title: videoGame })
}

function delVideoGame(id, db = connection) {
  return db('videoGames').del().where('id', id)
}
