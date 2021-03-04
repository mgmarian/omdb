import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('GET_USERS', () => {
    return axios.get(`http://localhost:3000/api/users`)
    .then(r => r.data)
})


const userReducer = createReducer ([], {
    [getUsers.fulfilled]: (state, action) => action.payload,
})

export default userReducer
