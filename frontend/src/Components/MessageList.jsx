import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

const MessageList = () => {
  const messageRef = useRef(null);
  const { messages } = useSelector((state) => state.messages);
  const { currentChannelId } = useSelector((state) => state.channelInfo);
  const messagesInChat = messages.filter(({ channelId }) => channelId === currentChannelId);
  console.log(messages);
  return (messagesInChat.map(({ body, username, id }) => (
    <div key={id} className="text-break mb-2" ref={messageRef}>
      <div><b>{username}</b>:{' '} {body}</div>
    </div>
  ))
  );
};

const Body = () => (
  <div className="chat-messages overflow-auto px-5"><MessageList /></div>
);

export default Body;

// { messages.map(({ body, id, username }) => (
//   <div key={id} className="chat-messages overflow-auto px-5">
//     <div className="text-break mb-2">{ username }:{' '} { body }</div>
//   </div>
// )); }
