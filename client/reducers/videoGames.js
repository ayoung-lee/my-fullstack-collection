import {
  SET_VIDEOGAMES,
  SET_VIDEOGAMES_ERROR,
  SET_VIDEOGAMES_LOADING,
} from '../actions'

const initialState = {
  data: {
    id: '1',
    title: 'Drive Club',
    genre: 'Racing',
    platform: 'ps4',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Driveclub_box_art.jpg/250px-Driveclub_box_art.jpg',
  },
  error: null,
  loading: false,
}

const videoGamesReducer = (state = initialState, action) => {
  const { type, payload } = action

  // type = ADD_VIDEOGAMES
  // payload = the data being sent through
  // action is defined in the switch statement

  switch (type) {
    case SET_VIDEOGAMES:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
      }
    case SET_VIDEOGAMES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    case SET_VIDEOGAMES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    default:
      return state
  }
}

export default videoGamesReducer
