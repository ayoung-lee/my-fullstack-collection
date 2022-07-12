import React from 'react'

import { useDispatch } from 'react-redux'

import { deleteVideoGame } from '../actions'

export default function VideoGame(props) {
  const { id, title, genre, platform, image } = props.videoGame
  const dispatch = useDispatch()

  function handleDelete(e) {
    e.preventDefault()
    dispatch(deleteVideoGame(id))
  }

  return (
    <div>
      <p>Game ID: {id}</p>
      <p>Title: {title}</p>
      <p>Genre: {genre}</p>
      <p>Platform: {platform}</p>
      <img src={image} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
