import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store=>store.movie)
    //const popularMovies = useSelector(store=>store.movie?.popularMovies)
    console.log(movies)
  return (
    <div className='bg-black'>
        <div className='-mt-56 pl-20 relative z-20'>
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
       
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          {/* <MovieList
            title={"Upcoming Movies"}
            movies={movies}
          />
          <MovieList title={"Horror"} movies={movies} /> */}
        </div>
       
    </div>
  )
}

export default SecondaryContainer