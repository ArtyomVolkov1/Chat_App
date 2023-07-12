/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect } from 'react';
import { addMessage } from '../store/slices/messagesSlice';
import store from '../store/store';

export const ChatApiContext = createContext({});

const ChatApiProvider = ({ socket, children }) => {
  useEffect(() => {
    socket.on('newMessage', (payload) => {
      store.dispatch(addMessage(payload));
    });
  }, [socket]);

  const sendMessage = (data) => {
    socket.emit('newMessage', (data));
  };

  const value = {
    sendMessage,
  };
  return (
    <ChatApiContext.Provider value={value}>{children}</ChatApiContext.Provider>
  );
};

export default ChatApiProvider;
