/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// const userToken = JSON.parse(localStorage.getItem('userId')).token;

const initialState = {
  userInfo: {},
  token: null,
  userToken: JSON.parse(localStorage.getItem('userId')),
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.token = payload;
      state.loggedIn = true;
    },
    logOut: (state) => {
      localStorage.removeItem('userId');
      state.loggedIn = false;
    },
    checkAuth: (state) => {
      if (state.userToken || state.token) {
        state.loggedIn = true;
      } else {
        state.loggedIn = false;
      }
    },
  },
});

export const { logIn, logOut, checkAuth } = userSlice.actions;
export default userSlice.reducer;
