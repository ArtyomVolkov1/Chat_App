/* eslint-disable */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { removeChannel } from './channelsSlice';

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: messagesAdapter.addOne,
    addMessages: messagesAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder.addCase(removeChannel, (state, { payload }) => {
      const restEntities = Object.values(state.entities)
      .filter(({ channelId }) => channelId === payload)
      .map((message) => message.id);
      messagesAdapter.removeMany(state, restEntities);
    })
  }
});

export const { addMessage, addMessages } = messagesSlice.actions;

export const selectors = messagesAdapter.getSelectors((state) => state.messages);

export const getMessages = (state) => state.messages.ids.map((id) => state.messages.entities[id]);

export default messagesSlice.reducer;
