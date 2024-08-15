import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
//import { model } from "../utils/gemini";
import { genAI } from "../utils/gemini";
import { safetySettings } from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";


const GptSearchBar = () => {
  const langType = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch()

  const searchMovieTmdb = async(movie)=>{

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;

  }

  const handleGptSearchClick = async () => {

    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      body: JSON.stringify({
        safety_settings: safetySettings
      }),
    });

    const query =
       "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const result = await model.generateContent(query);
   
    if(!result.response){

    }
    const gptMoviesList = result?.response?.candidates[0]?.content?.parts[0]?.text.split(',')
    const promiseArray = gptMoviesList.map((movie) => searchMovieTmdb(movie));

  const tmdbResult = await Promise.all(promiseArray)
  dispatch(addGptMoviesResult({ movieNames: gptMoviesList, movieResults: tmdbResult }))

  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 rounded-lg col-span-9"
          ref={searchText}
          placeholder={lang[langType].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-6 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langType].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
