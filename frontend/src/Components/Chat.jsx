/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useAuth from '../hooks/useAuth';
import SendMessageForm from './SendMessageForm';
// import routes from '../routes';
import { addMessage } from '../store/slices/messagesSlice';
import { addChannel, setChannelId } from '../store/slices/channelsSlice';
import Body from './MessageList';
import fetchData from '../api/fetchData';

const Chat = () => {
  const {
    channels, currentChannelId,
  } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const auth = useAuth();
  useEffect(() => {
    fetchData(auth.getAuthHeader).then((data) => {
      dispatch(addMessage(data));
      dispatch(addChannel(data));
      dispatch(setChannelId(data));
    });
  });
  return (
    <Row className="h-100 bg-white flex-md-row w-100">
      <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
        <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-3 border-bottom">
          <b>Каналы</b>
          <Button variant="group-vertical" className="p-0"><b className="pe-2">+</b></Button>
        </div>
        <Nav variant="pills" as="ul" id="channels-box" className="flex-column nav-fill px-2 mb-3 overflow-auto h-100 d-block ">
          {channels.map((channel) => (
            <Nav.Item as="li" className="w-100" key={channel.id}>
              <Button key={currentChannelId} type="button" className="w-100 rounded-0 text-start btn-secondary">
                <span className="me-1">#
                </span>
                {channel.name}
              </Button>
            </Nav.Item>
          ))}
        </Nav>
      </div>
      <Col className="col p-0 h-100">
        <div className="d-flex flex-column h-100">
          <div className="bg-light mb-4 p-3 shadow-sm small">
            <p className="m-0">
              <b>#general</b>
            </p>
          </div>
          <Body />
          <div className="mt-auto px-5 py-3">
            <SendMessageForm />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Chat;
