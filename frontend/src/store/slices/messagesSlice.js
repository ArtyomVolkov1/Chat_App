/* eslint-disable */
import { createSlice, createEntityAdapter, createSelector  } from '@reduxjs/toolkit';
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
    builder.addCase(removeChannel, (state, action) => {
      const filteredMessages = Object.values(state.entities)
      .filter(({ channelId }) => channelId === action.payload)
      .map((message) => message.id);

      messagesAdapter.removeMany(state, filteredMessages);
    })
  }
});

export const { addMessage, addMessages } = messagesSlice.actions;

export const selectors = messagesAdapter.getSelectors((state) => state.messages);

const selectMessage = state => state.messages;
export const getMessages = createSelector([selectMessage], messages => 
  messages.ids.map((id) => messages.entities[id]));

export default messagesSlice.reducer;
