/* eslint-disable functional/no-let */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { addMessage, changeInputMessage } from '../slices/dataSlice';

let socket = null;

export const socketMiddleware = (store) => (next) => (action) => {
  const messageState = store.getState().data;
  const userState = store.getState().user;
  socket = io();
  socket.on('newMessage', (payload) => {
    store.dispatch(addMessage({ message: payload }));
  });
  const message = {
    body: messageState.inputMessage,
    channelId: messageState.channels.id,
    id: Date.now(),
    username: userState.userToken.username,
  };
  socket.emit('newMessage', (message));
  next(action);
};
