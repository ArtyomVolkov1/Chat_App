/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connect: false,

};

const webSocketSlice = createSlice({
  name: 'webSocket',
  initialState,
  reducers: {
    connect: (state) => {
      state.connect = true;
    },
    disconnect: (state) => {
      state.connect = false;
    },
  },
});

export const { connect, disconnect } = webSocketSlice.actions;
export default webSocketSlice.reducer;
