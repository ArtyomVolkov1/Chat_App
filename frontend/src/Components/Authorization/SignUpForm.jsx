/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import * as yup from 'yup';
import {
  Form, Button, InputGroup,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import useAuth from '../../hooks/useAuth';
import routes from '../../routes';

const SignUpForm = () => {
  const [authFailed, setAuthFailed] = useState(false);
  const [foundUser, setFoundUser] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const signupSchema = yup.object().shape({
    username: yup.string().required('Это обязательное поле').min(3, 'От 3 до 20 символов').max(20, 'От 3 до 20 символов'),
    password: yup.string().required('Это обязательно поле').min(6, 'Не менее 6 символов'),
    passwordConfirm: yup.string().required('Это обязательно поле').oneOf([yup.ref('password'), null]),
  });
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirm: '',
    },
    signupSchema,
    onSubmit: async (values) => {
      setAuthFailed(false);
      try {
        const responce = await axios.post(routes.signUp(), values);
        localStorage.setItem('userId', JSON.stringify(responce.data));
        auth.logIn();
        navigate('/');
      } catch (errors) {
        if (errors.isAxiosError && errors.responce.status === 401) {
          inputRef.current.select();
          setAuthFailed(true);
          return false;
        }
        if (errors.isAxiosError && errors.responce.status === 409) {
          inputRef.current.select();
          setAuthFailed(true);
          setFoundUser(true);
          return false;
        }
        throw errors;
      }
    },
  });
  const {
    touched, handleSubmit, handleChange, values, errors,
  } = formik;
  const onChange = (e) => {
    if (foundUser) {
      setFoundUser(true);
    }
    handleChange(e);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="mb-4 fs-2 text-center ">Регистрация</h1>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          id="username"
          name="username"
          onChange={onChange}
          value={values.username}
          type="text"
          isInvalid={(touched.username && !!errors.username || foundUser) || authFailed}
          ref={inputRef}
          placeholder="Enter username"
        />
        <Form.Control.Feedback type="invalid" tooltip>{ (foundUser ? 'Пользователь уже существует' : errors.username) }</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="position-relative">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control id="password" name="password" onChange={handleChange} value={values.password} type="password" isInvalid={(touched.password && !!errors.password) || authFailed} placeholder="Enter password" />
        {!!errors.password && (
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.password}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="position-relative">
        <Form.Label htmlFor="passwordConfirm">Confirm Password</Form.Label>
        <Form.Control id="passwordConfirm" name="passwordConfirm" onChange={handleChange} value={values.passwordConfirm} type="passwordConfirm" isInvalid={(touched.passwordConfirm && !!errors.passwordConfirm) || authFailed} placeholder="Enter passwordConfirm" />
        {!!errors.passwordConfirm && (
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.passwordConfirm}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Button className="mb-2" variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};

export default SignUpForm;
