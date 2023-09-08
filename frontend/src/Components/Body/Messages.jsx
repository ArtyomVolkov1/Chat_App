import React from 'react';
import { useSelector } from 'react-redux';
import Body from './MessageList';
import SendMessageForm from './SendMessageForm';
import Header from './Header';
import { getMessagesForCurrentChannel } from '../../store/selectors';

const Messages = () => {
  const channelMessages = useSelector(getMessagesForCurrentChannel);
  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <Header />
        <Body messages={channelMessages} />
        <SendMessageForm />
      </div>
    </div>
  );
};

export default Messages;
