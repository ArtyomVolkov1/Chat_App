import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginForm from '../Components/Authorization/LoginForm';

const LoginPage = () => (<div className="d-flex justify-content-center align-items-center h100"><Card style={{ width: '18rem' }} className="text-center"><Card.Body><LoginForm /></Card.Body></Card></div>);

export default LoginPage;
