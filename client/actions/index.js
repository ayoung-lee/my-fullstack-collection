export const FETCH_VIDEOGAMES_SUCCESS = 'FETCH_VIDEOGAMES_SUCCESS'
export const FETCH_VIDEOGAMES_PENDING = 'FETCH_VIDEOGAMES_PENDING'
export const ADD_VIDEOGAMES_PENDING = 'ADD_VIDEOGAMES_PENDING'
export const ADD_VIDEOGAMES_SUCCESS = 'ADD_VIDEOGAMES_SUCCESS'
export const DEL_VIDEOGAMES_SUCCESS = 'DEL_VIDEOGAMES_SUCCESS'
export const DEL_VIDEOGAMES_PENDING = 'DEL_VIDEOGAMES_PENDING'
export const SET_ERROR = 'SET_ERROR'

import {
  getAllVideoGames,
  addNewVideoGame,
  delVideoGame,
} from '../apis/apiClient'

export const fetchVideoGamesPending = () => {
  return {
    type: FETCH_VIDEOGAMES_PENDING,
  }
}

export const fetchVideoGamesSuccess = (videoGames) => {
  return {
    type: FETCH_VIDEOGAMES_SUCCESS,
    payload: videoGames,
  }
}

export function addVideoGamePending() {
  return {
    type: ADD_VIDEOGAMES_PENDING,
  }
}

export function addVideoGameSuccess(videoGame) {
  return {
    type: ADD_VIDEOGAMES_SUCCESS,
    videoGame,
  }
}

export function deleteVideoGamePending() {
  return {
    type: DEL_VIDEOGAMES_PENDING,
  }
}

export function deleteVideoGameSuccess(id) {
  return {
    type: DEL_VIDEOGAMES_SUCCESS,
    id,
  }
}

export const fetchVideoGames = () => {
  return (dispatch) => {
    dispatch(fetchVideoGamesPending())
    return getAllVideoGames()
      .then((videoGames) => {
        dispatch(fetchVideoGamesSuccess(videoGames))
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

export function addVideoGame(newGame) {
  return (dispatch) => {
    return addNewVideoGame(newGame)
      .then((videoGames) => {
        dispatch(fetchVideoGamesSuccess(videoGames))
        return null
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

export function deleteVideoGame(id) {
  return (dispatch) => {
    dispatch(deleteVideoGamePending())
    return delVideoGame(id)
      .then(() => {
        dispatch(deleteVideoGameSuccess(id))
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

// export function setError(errMessage) {
//   return {
//     type: SET_ERROR,
//     errMessage,
//   }
// }
