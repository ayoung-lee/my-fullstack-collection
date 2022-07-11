const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

const videoGames = require('./routes/api')
server.use('/api/v1/videogames', videoGames)

module.exports = server
