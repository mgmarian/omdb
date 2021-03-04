import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import moviesReducer from './movies';
import userReducer from './users'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        movies: moviesReducer,
        users: userReducer
    },
});

export default store;