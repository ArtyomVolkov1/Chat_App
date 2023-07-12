/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  messages: [],
  currentChannelId: null,
  inputMessage: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchData: (state, { payload }) => {
      state.channels = payload.channels;
      state.messages = payload.messages;
      state.currentChannelId = payload.currentChannelId;
    },
    changeInputMessage: (state, { payload }) => {
      state.inputMessage = payload;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { fetchData, changeInputMessage } = dataSlice.actions;

export default dataSlice.reducer;
