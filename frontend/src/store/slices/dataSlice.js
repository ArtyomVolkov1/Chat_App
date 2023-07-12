/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  currentChannelId: null,
  inputMessage: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchData: (state, { payload }) => {
      state.channels = payload.channels;
      state.currentChannelId = payload.currentChannelId;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { fetchData } = dataSlice.actions;

export default dataSlice.reducer;
