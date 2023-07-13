import React from 'react';
import { useSelector } from 'react-redux';
import { getMessages } from '../../store/slices/messagesSlice';

const MessageList = ({ username, body }) => (
  <div className="text-break mb-2">
    <div><b>{username}</b>{': '} {body}</div>
  </div>
);

const Body = () => {
  const messages = useSelector(getMessages);
  const { currentChannelId } = useSelector((state) => state.channelInfo);
  const messagesInChat = messages.filter(({ channelId }) => channelId === currentChannelId);
  return (
    <div className="chat-messages overflow-auto px-5">{messagesInChat.map(({ id, username, body }) => (
      <MessageList key={id} username={username} body={body} />
    ))}
    </div>
  );
};
export default Body;
