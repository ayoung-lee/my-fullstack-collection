const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getVideoGames(db = connection) {
  return db('videoGames').select('id', 'title', 'genre', 'platform', 'image')
}

module.exports = {
  getVideoGames,
}
