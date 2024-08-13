import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import gptReducers from "./gptSlice"
import configReducer from "./configSlice"
const appStore = configureStore({
    reducer:{
user:userReducer,
movie : moviesReducer,
gpt : gptReducers,
config:configReducer
    }
})

export default appStore