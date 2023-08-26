import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LoginForm from '../Components/Authorization/LoginForm';

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-items-center h100">
        <Card style={{ width: '18rem' }} className="text-center">
          <Card.Body>
            <LoginForm />
          </Card.Body>
          <Card.Footer className="text-muted p-4">
            <div className="text-center">
              <span className="px-1">{t('login.notAcc')}</span>
              <Link to="/signup">{t('registration.registration')}</Link>
            </div>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  );
};

export default LoginPage;
