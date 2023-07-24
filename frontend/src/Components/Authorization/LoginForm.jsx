/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';
import * as formik from 'formik';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import routes from '../../routes';

const LoginForm = () => {
  const { Formik } = formik;
  const [authFailed, setAuthFailed] = useState(false);
  const auth = useAuth();
  const LoginSchema = yup.object().shape({
    username: yup.string().required('Это обязательное поле'),
    password: yup.string().required('Это обязательное поле'),
  });
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        setAuthFailed(false);
        try {
          const responce = await axios.post(routes.loginPath(), values);
          localStorage.setItem('userId', JSON.stringify(responce.data));
          auth.logIn();
          const { from } = location.state || { from: { pathname: '/' } };
          navigate(from);
        } catch (errors) {
          if (errors.isAxiosError && errors.responce.status === 401) {
            setAuthFailed(true);
            inputRef.current.select();
            return;
          }
          throw errors;
        }
      }}
    >
      {({
        handleSubmit, handleChange, values, errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <InputGroup hasValidation>
              <Form.Control id="username" name="username" onChange={handleChange} value={values.username} type="username" isInvalid={!!errors.username} ref={inputRef} placeholder="Enter username" />
              <Form.Control.Feedback type="invalid" tooltip>{errors.username}</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="position-relative">
            <Form.Label htmlFor="password">Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control id="password" name="password" onChange={handleChange} value={values.password} type="password" isInvalid={!!errors.password} placeholder="Enter password" />
              <Form.Control.Feedback type="invalid" tooltip>{errors.password}</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit">
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
};

/*
const LoginForm = () => {
  const { Formik } = formik;
  const auth = useAuth();
  const LoginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  // const [authFailed, setAuthFailde] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        // setAuthFailde(false);
        try {
          const responce = await axios.post(routes.loginPath(), values);
          localStorage.setItem('userId', JSON.stringify(responce.data));
          console.log(localStorage);
          auth.logIn();
          // eslint-disable-next-line quotes
          navigate('/');
        } catch (errors) {
          if (errors.isAxiosError && errors.responce.status === 401) {
            // setAuthFailde(true);
            inputRef.current.select();
            return;
          }
          throw errors;
        }
      }}
    >
      {({
        handleSubmit, handleChange, values, errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <InputGroup hasValidation>
              <Form.Control id="username" name="username" onChange={handleChange} value={values.username} type="username" isInvalid={!!errors.username} ref={inputRef} placeholder="Enter username" />
              <Form.Control.Feedback type="invalid" tooltip>{errors.username}</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="position-relative">
            <Form.Label htmlFor="password">Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control id="password" name="password" onChange={handleChange} value={values.password} type="password" isInvalid={!!errors.password} placeholder="Enter password" />
              <Form.Control.Feedback type="invalid" tooltip>{errors.password}</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit">
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
};
*/
export default LoginForm;
