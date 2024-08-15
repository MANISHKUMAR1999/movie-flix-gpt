

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { movieList } from "../utils/data";
const usePopularMovies = ()=>{
    const dispatch = useDispatch();

    const getPopularMovie = async () => {
      const data = await fetch(
       "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      if(json.results){
        dispatch(addPopularMovies(json.results))
      }
     
      else{
        dispatch(addPopularMovies(movieList.results))

      }
  
    
    };
  
    useEffect(() => {
        getPopularMovie();
    }, [])
}

export default usePopularMovies