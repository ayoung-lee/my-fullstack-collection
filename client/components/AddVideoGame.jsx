import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchVideoGames, addVideoGame } from '../actions'

export default function AddVideoGame() {
  const [game, setGame] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideoGames)
  }, [])

  function handleChange(e) {
    setGame({
      ...game,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addVideoGame(game))
    setGame('')
    dispatch(fetchVideoGames())
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        name="title"
        value={game.title}
        onChange={handleChange}
      />
      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        name="genre"
        id="genre"
        value={game.genre}
        onChange={handleChange}
      />
      <label htmlFor="platform">Platform:</label>
      <input
        type="text"
        name="platform"
        id="platform"
        value={game.platform}
        onChange={handleChange}
      />
      <button type="submit">Click Me!</button>
    </form>
  )
}
