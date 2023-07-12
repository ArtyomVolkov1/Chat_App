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
        const { channel } = payload;
        state.channels.push(channel)
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

export const { setChannelId, setDefaultChannelId } = channelsSlice.actions;

export default channelsSlice.reducer;
