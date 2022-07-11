import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllVideoGames() {
  return request.get(rootUrl + '/videogames').then((res) => {
    return res.body
  })
}

export function addNewVideoGame(newGame) {
  return request
    .post(rootUrl + '/videogames')
    .send({ newGame })
    .then((res) => {
      return res.body
    })
}

export function delVideoGame(id) {
  console.log('delete id is', id)
  return request
    .del(rootUrl + '/videogames')
    .send(id)
    .then((res) => {
      return res.body
    })
}
