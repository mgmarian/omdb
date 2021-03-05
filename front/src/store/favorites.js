import { createReducer, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setFavorites = createAction("SET_FAVORITES");

export const addToFavorites = createAsyncThunk("ADD_TO_FAVORITE",(favoriteId, thunkAPI) =>{
    const userId = thunkAPI.getState().user.id;
    if (!user._id) {
    console.log(`To add a favorite you need to be logged in.`);
}
    return axios
    .post(`/api/favorites`, {userId, favoriteId})
    .then((res) => console.log(res))
});

export const favoritesReducer = createReducer({}, {
    [setFavorites] : (state, action) => action.payload,
    [addToFavorites.fulfilled]: (state, action) => action.payload,
    // [fetchUsers.fulfilled]: (state, action)=> action.payload

});

export default favoritesReducer;