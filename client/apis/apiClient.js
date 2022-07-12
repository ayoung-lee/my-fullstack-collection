import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllVideoGames() {
  return request.get(rootUrl + '/videogames').then((res) => {
    return res.body
  })
}

export function addNewVideoGame(game) {
  console.log('This is from apiClient', game)
  return request
    .post(rootUrl + '/videogames')
    .send(game)
    .then((res) => {
      return JSON.stringify(res.body)
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
