import { combineReducers } from 'redux'

import videoGamesReducer from './videoGames'

// import stuff from './stuff'

export default combineReducers({
  videoGames: videoGamesReducer,
})
