import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import moviesReducer from './movies';
import usersReducer from './users';
import loginReducer from './loginUser'
import favoritesReducer from './favorites'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        movies: moviesReducer,
        users: usersReducer,
        loginUser: loginReducer,
        favorites: favoritesReducer
    },
});

export default store;