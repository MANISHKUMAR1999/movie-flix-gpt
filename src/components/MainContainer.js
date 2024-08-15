import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'


const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  

    if(movies === null){
        return
    }
    const mainMovies = movies[0]

  const {original_title,overview,id} = mainMovies

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer