const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getVideoGames,
  addVideoGame,
  delVideoGame,
  findByIds,
}

function getVideoGames(db = connection) {
  return db('videoGames').select()
}

function addVideoGame({ title, genre, platform }, db = connection) {
  console.log('from db', title, genre, platform)
  return db('videoGames').insert({ title, genre, platform })
}

function delVideoGame(id, db = connection) {
  return db('videoGames').del().where('id', id)
}

function findByIds(id, db = connection) {
  return db('videoGames')
    .select('id', 'title', 'genre', 'platform')
    .where('id', id)
    .first()
}
