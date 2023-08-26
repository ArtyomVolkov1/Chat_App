/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { useTranslation } from 'react-i18next';
import useAuth from '../hooks/useAuth';

const Navbars = () => {
  const { t } = useTranslation();
  const auth = useAuth();
  return auth.loggedIn ? (
    <Navbar className="bg-body-tertiary shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <Container>
        <Navbar.Brand href='/'>{t('nav.logo')}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" />
        <Button onClick={auth.logOut}>{t('nav.exit')}</Button>
      </Container>
    </Navbar>
  ) : (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/'>{t('nav.logo')}</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
};

export default Navbars;
