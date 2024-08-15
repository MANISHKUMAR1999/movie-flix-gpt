import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { movieList } from "../utils/data";


const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      if(json.results){
        dispatch(addNowPlayingMovies(json.results))
      }
     
      else{
        dispatch(addNowPlayingMovies(movieList.results))

      }
    
    
    };
  
    useEffect(() => {
      getNowPlayingMovie();
    }, [])
}

export default useNowPlayingMovies