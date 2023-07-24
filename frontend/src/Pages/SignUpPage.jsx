import React from 'react';
import Card from 'react-bootstrap/Card';
import SignUpForm from '../Components/Authorization/SignUpForm';

const SignUpPage = () => (<div className="d-flex justify-content-center align-items-center h100"><Card style={{ width: '18rem' }} className="text-center"><Card.Body><SignUpForm /></Card.Body></Card></div>);

export default SignUpPage;
