import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"


const useMoviesTrailer = (movieId)=>{
    const dispatch = useDispatch()

    const getMovieVideo = async()=>{
    
        const data = await fetch("https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS)
    const json = await data.json()
    console.log(json)
    
    const filterData = json.results.filter((v)=>v.type === 'Trailer')
    const trailer = filterData.length === 0 ? filterData[0] : json.results[0]
    dispatch(addTrailerVideo(trailer))
    }
    
    useEffect(()=>{
        getMovieVideo()
    
    },[])
}

export default useMoviesTrailer