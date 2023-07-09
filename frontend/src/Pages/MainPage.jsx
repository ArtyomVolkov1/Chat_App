import React from 'react';
import Container from 'react-bootstrap/Container';
import Chat from '../Components/Chat';
// import Sidebar from '../Components/Sidebar';

const MainPage = () => (
  <Container className="h-100 my-4 overflow-hidden rounded">
    <Chat />
  </Container>
);

export default MainPage;
