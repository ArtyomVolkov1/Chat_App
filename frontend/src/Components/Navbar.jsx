/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import useAuth from '../hooks/useAuth';

const Navbars = () => {
  const auth = useAuth();
  return auth.loggedIn ? (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/'>Chat</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" />
        <Button onClick={auth.logOut}>Выйти</Button>
      </Container>
    </Navbar>
  ) : (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/'>Chat</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
};

export default Navbars;
