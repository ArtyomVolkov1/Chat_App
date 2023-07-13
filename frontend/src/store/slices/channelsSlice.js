/* eslint-disable */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();
const initialState = channelsAdapter.getInitialState(
  {
    currentChannelId: 1,
    defaultChannelId: 1,
  }
);

const channelsSlice = createSlice({
  name: 'channelInfo',
  initialState,
  reducers: {
    addChannel: channelsAdapter.addOne,
    addChannels: channelsAdapter.addMany,
    renameChannel: channelsAdapter.updateOne,
    removeChannel: channelsAdapter.removeOne,
    setChannelId: (state, { payload }) => {
      state.currentChannelId = payload;
    },
    setDefaultChannelId: (state, { payload }) => {
      if (payload === state.currentChannelId) {
        state.currentChannelId = state.defaultChannelId;
      }
    },
  },
});

export const { addChannel, addChannels, renameChannel, removeChannel, setChannelId, setDefaultChannelId  } = channelsSlice.actions;

export const selectors = channelsAdapter.getSelectors((state) => state.channelInfo);

export const getCurrentChannel = (state) => {
  const { currentChannelId } = state.channelInfo;
  return state.channelInfo.entities[currentChannelId]
};
export const getChannelsNames = ({ channels }) =>
  channels.ids
    .map((id) => channels.entities[id].name);

export default channelsSlice.reducer;
