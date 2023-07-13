/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import { addMessages } from '../store/slices/messagesSlice';
import { addChannels, setChannelId } from '../store/slices/channelsSlice';
import fetchData from '../api/fetchData';
import Channels from './Sidebar/Channels';
import { openModal } from '../store/slices/modalSlice';
import Messages from './Body/Messages';

const Chat = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const handleOpen = (type, id = null) => {
    dispatch(openModal({ type, id }));
  };
  useEffect(() => {
    fetchData(auth.getAuthHeader).then((data) => {
      const { channels, currentChannelId, messages } = data;
      dispatch(addMessages(messages));
      dispatch(addChannels(channels));
      dispatch(setChannelId(currentChannelId));
    });
  });
  return (
    <Container className="h-100 my-4 overflow-hidden rounded">
      <Row className="h-100 bg-white flex-md-row w-100">
        <Channels handleOpen={handleOpen} />
        <Messages />
      </Row>
    </Container>
  );
};

export default Chat;
