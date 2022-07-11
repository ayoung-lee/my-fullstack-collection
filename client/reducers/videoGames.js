// Maintain local state

import { FETCH_VIDEOGAMES_SUCCESS, ADD_VIDEOGAMES_SUCCESS } from '../actions'

const initialState = []

const videoGamesReducer = (state = initialState, action) => {
  // type = ADD_VIDEOGAMES
  // payload = the data being sent through
  // action is defined in the switch statement
  console.log(action.payload)
  switch (action.type) {
    case FETCH_VIDEOGAMES_SUCCESS:
      return action.payload

    case ADD_VIDEOGAMES_SUCCESS:
      return [...state, action.payload]

    default:
      return state
  }
}

export default videoGamesReducer
