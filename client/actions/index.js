export const FETCH_VIDEOGAMES_SUCCESS = 'FETCH_VIDEOGAMES_SUCCESS'
export const FETCH_VIDEOGAMES_PENDING = 'FETCH_VIDEOGAMES_PENDING'
export const SET_ERROR = 'SET_ERROR'

import { getAllVideoGames, addNewVideoGame } from '../apis/apiClient'

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

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}
