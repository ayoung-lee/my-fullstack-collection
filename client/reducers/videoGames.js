// Maintain local state

import {
  // SET_VIDEOGAMES,
  // SET_VIDEOGAMES_ERROR,
  // SET_VIDEOGAMES_LOADING,
  FETCH_VIDEOGAMES_SUCCESS,
} from '../actions'

const initialState = []

const videoGamesReducer = (state = initialState, action) => {
  // type = ADD_VIDEOGAMES
  // payload = the data being sent through
  // action is defined in the switch statement

  switch (action.type) {
    // case SET_VIDEOGAMES:
    //   return {
    //     ...state,
    //     data: payload,
    //     error: null,
    //     loading: false,
    //   }
    // case SET_VIDEOGAMES_ERROR:
    //   return {
    //     ...state,
    //     error: payload,
    //     loading: false,
    //   }
    // case SET_VIDEOGAMES_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //   }
    case FETCH_VIDEOGAMES_SUCCESS:
      return action.videoGames
    default:
      return state
  }
}

export default videoGamesReducer
