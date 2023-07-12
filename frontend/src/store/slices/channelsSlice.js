/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  currentChannelId: 1,
  defaultChannelId: 1,
};

const channelsSlice = createSlice({
  name: 'channelInfo',
  initialState,
  reducers: {
    addChannel: (state, { payload }) => {
        state.channels.push(payload)
    },
    setChannelId: (state, { payload }) => {
      state.currentChannelId = payload.currentChannelId;
      state.channels = payload.channels;
    },
    setDefaultChannelId: (state, { payload }) => {
      if (payload === state.currentChannelId) {
        state.currentChannelId = state.defaultChannelId;
      }
    },
  },
});

export const { addChannel, setChannelId, setDefaultChannelId } = channelsSlice.actions;

export default channelsSlice.reducer;
