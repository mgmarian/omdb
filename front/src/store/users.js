import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('GET_USERS', (value, thunkAPI) => {
  const loginToken = thunkAPI.getState().loginUser.token
  return axios.get(`http://localhost:3000/api/users`,
  {
    headers: { Authorization: `Bearer ${loginToken}` },
  }
  ).then(r => r.data)
})  

const usersReducer = createReducer([], {
  [getUsers.fulfilled]: (state, action) => action.payload
})

export default usersReducer
