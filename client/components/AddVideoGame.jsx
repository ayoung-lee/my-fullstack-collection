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
    setGame(e.target.value)
  }

  function handleClick() {
    dispatch(addVideoGame(game))
    setGame('')
  }

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
      <button onClick={handleClick}>Click Me!</button>
    </form>
  )
}
