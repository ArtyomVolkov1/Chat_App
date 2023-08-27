/* eslint-disable max-len */
import React from 'react';

const MessageList = ({ messages }) => messages.map(({ username, body, id }) => (
  <div key={id} className="text-break mb-2">
    <div>
      <b>{username}</b>
      {': '} {body}
    </div>
  </div>
));

const Body = ({ messages }) => (
  <div className="chat-messages overflow-auto px-5">
    <MessageList messages={messages} />
  </div>
);
export default Body;

// const MessageList = ({ username, body }) => (
//   <div className="text-break mb-2">
//     <div><b>{username}</b>{': '} {body}</div>
//   </div>
// );

// const Body = () => {
//   const messages = useSelector(getMessages);
//   const currentChannelId = useSelector(getCurrentChannelId);
//   const messagesInChat = messages.filter(({ channelId }) => channelId === currentChannelId);
//   return (
//     <div className="chat-messages overflow-auto px-5">{messagesInChat.map(({ id, username, body }) => (
//       <MessageList key={id} username={username} body={body} />
//     ))}
//     </div>
//   );
// };
// export default Body;
