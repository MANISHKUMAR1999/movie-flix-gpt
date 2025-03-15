import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { movieList } from "../utils/data";


const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const getUpcomingMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      if(json.results){
        dispatch(addUpcomingMovies(json.results))
      }
     
      else{
        dispatch(addUpcomingMovies(movieList.results))

      }
    
    
    };
  
    useEffect(() => {
        getUpcomingMovie();
    }, [])
}

export default useUpcomingMovies