import React, { useState } from 'react'

export default function AddVideoGame() {
  const [game, setGame] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(game)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="videoGameName">Video Games</label>
      <input
        id="videoGameName"
        type="text"
        name="videoGames"
        value={game}
        onChange={(e) => setGame(e.target.value)}
      />
      <button>Click Me!</button>
    </form>
  )
}
