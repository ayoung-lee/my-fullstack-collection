import React from 'react'

export default function VideoGame(props) {
  const { id, title, genre, platform, image } = props.videoGame

  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{genre}</p>
      <p>{platform}</p>
      <p>{image}</p>
    </div>
  )
}
