import {createAsyncThunk, createReducer} from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = "9bcd5f8d7a9165bb7f785ab7e82a5143";

export const getPopularMovies = createAsyncThunk ("POPULAR_MOVIES", () => {
return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-EN&page=1`)
    .then((r) => r.data.results);
});

const moviesReducer = createReducer([], {
    [getPopularMovies.fulfilled]: (state, action) => action.payload 
})

export default moviesReducer;