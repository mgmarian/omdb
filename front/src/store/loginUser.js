import { createAsyncThunk, createReducer, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendLoginRequest = createAsyncThunk('LOGIN_USER', (user) => {
    return axios.post('http://localhost:3000/api/users/login', user)
        .then(r => r.data)
        // Ataja el error desde el back y lo guarda en el estado
        .catch((err) => { return { error: 'error 404'}})
})

export const clearUser = createAction('CLEAR_USER')

const loginReducer = createReducer([], {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [clearUser]: (state, action) =>  action.payload
})

export default loginReducer

