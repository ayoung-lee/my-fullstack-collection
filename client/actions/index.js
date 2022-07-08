export const SET_VIDEOGAMES = 'SET_VIDEOGAMES'
export const SET_VIDEOGAMES_ERROR = 'SET_VIDEOGAMES_ERROR'
export const SET_VIDEOGAMES_LOADING = 'SET_VIDEOGAMES_LOADING'
// import * as api from '../apiClient'

export const setVideoGames = (videoGames) => {
  return {
    type: SET_VIDEOGAMES,
    payload: videoGames,
  }
}
