import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BACKGROUND_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
        <img
          src={BACKGROUND_URL}
          alt="logo"
        />
      </div>
        <GptSearchBar/>
        <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearch