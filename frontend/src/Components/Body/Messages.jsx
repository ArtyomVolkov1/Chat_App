import React from 'react';
import Body from './MessageList';
import SendMessageForm from './SendMessageForm';
import Header from './Header';

const Messages = () => (
  <div className="col p-0 h-100">
    <div className="d-flex flex-column h-100">
      <Header />
      <Body />
      <SendMessageForm />
    </div>
  </div>
);

export default Messages;
