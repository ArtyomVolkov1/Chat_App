import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentChannel } from '../../store/slices/channelsSlice';
import { getMessages } from '../../store/slices/messagesSlice';

const Header = () => {
  const messages = useSelector(getMessages);
  const { currentChannelId } = useSelector((state) => state.channelInfo);
  const currentChannelName = useSelector(getCurrentChannel);
  const count = messages.filter(({ channelId }) => channelId === currentChannelId);
  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>#{' '}{currentChannelName?.name}</b>
      </p>
      <span className="text-muted">
        {' '}
        {count.length}
        {' '}сообщений
      </span>
    </div>
  );
};

export default Header;
