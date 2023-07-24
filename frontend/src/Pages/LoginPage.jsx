import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import LoginForm from '../Components/Authorization/LoginForm';

const LoginPage = () => (
  <div className="d-flex justify-content-center align-items-center h100">
    <Card style={{ width: '18rem' }} className="text-center">
      <Card.Body>
        <LoginForm />
      </Card.Body>
      <Card.Footer className="text-muted p-4">
        <div>
          <span className="px-1">Нет аккаунта?</span>
          <Link to="/signup">Регистрация</Link>
        </div>
      </Card.Footer>
    </Card>
  </div>
);

export default LoginPage;
