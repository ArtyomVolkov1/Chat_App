/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
// import useAuth from '../hooks';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../store/slices/userSlice';

const Navbars = () => {
  const navigate = useNavigate();
  const {
    userToken, token, loggedIn, userInfo,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return loggedIn ? (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/'>Chat</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" />
        <Button onClick={() => dispatch(logOut())}>Выйти</Button>
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
