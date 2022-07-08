import request from 'superagent'

export function getAllVideoGames() {
  return request.get('/api/v1/videogames').then((res) => {
    const allVideoGames = res.body
    console.log(allVideoGames)
    return allVideoGames
  })
}
