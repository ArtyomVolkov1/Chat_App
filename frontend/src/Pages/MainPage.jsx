import React from 'react';
import Container from 'react-bootstrap/Container';
// import ChatApiProvider from '../contexts/ChatApiContext';
import Chat from '../Components/Chat';
// import Sidebar from '../Components/Sidebar';

const MainPage = () => (
  // <ChatApiProvider socket={socket}>
  <Container className="h-100 my-4 overflow-hidden rounded">
    <Chat />
  </Container>
  // </ChatApiProvider>
);

export default MainPage;
