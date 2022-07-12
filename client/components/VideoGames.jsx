import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchVideoGames } from '../actions'

import VideoGame from './VideoGame'

export default function VideoGames() {
  const videoGames = useSelector((state) => state.videoGames)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideoGames())
  }, [])

  return (
    <>
      <ul className="videoGamesList">
        {videoGames?.map((videoGame) => {
          return <VideoGame key={videoGame.id} videoGame={videoGame} />
        })}
      </ul>
    </>
  )
}
