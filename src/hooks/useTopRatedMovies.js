import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { movieList } from "../utils/data";


const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

    const getTopRatedMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      if(json.results){
        dispatch(addTopRatedMovies(json.results))
      }
     
      else{
        dispatch(addTopRatedMovies(movieList.results))

      }
    
    
    };
  
    useEffect(() => {
        getTopRatedMovie();
    }, [])
}

export default useTopRatedMovies