import React from 'react';
import Container from 'react-bootstrap/Container';
import Chat from '../Components/Chat';

const MainPage = () => (
  <Container className="h-100 my-4 overflow-hidden rounded">
    <Chat />
  </Container>
);

export default MainPage;
