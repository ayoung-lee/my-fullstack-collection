import React from 'react'
// import VideoGames from './VideoGames'
import AddVideoGame from './AddVideoGame'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Video Game Collection</h1>
      </header>
      <div className="main">
        {/* <VideoGames /> */}
        <AddVideoGame />
      </div>
    </>
  )
}

export default App
