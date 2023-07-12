/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
        const { message } = payload;
        state.messages.push(payload);
      },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
