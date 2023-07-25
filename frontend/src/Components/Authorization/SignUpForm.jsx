/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
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
  const validationSchema = yup.object().shape({
    username: yup.string().required('Это обязательное поле').min(3, 'От 3 до 20 символов').max(20, 'От 3 до 20 символов'),
    password: yup.string().required('Это обязательно поле').min(6, 'Не менее 6 символов'),
    passwordConfirm: yup.string().required('Это обязательно поле').oneOf([yup.ref('password'), null], 'Пароли не совпали'),
  });
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: '',
      password: '',
      passwordConfirm: '',
    },
    // eslint-disable-next-line consistent-return
    onSubmit: async (values) => {
      try {
        const responce = await axios.post(routes.signUp(), values);
        localStorage.setItem('userId', JSON.stringify(responce.data));
        auth.logIn();
        navigate('/');
      } catch (error) {
        if (error.isAxiosError && error.responce.status === 401) {
          inputRef.current.select();
          setAuthFailed(true);

          return false;
        }

        if (error.isAxiosError && error.responce.status === 409) {
          inputRef.current.select();
          setAuthFailed(true);
          setFoundUser(true);

          return false;
        }

        throw error;
      }
    },
  });
  const {
    touched, handleSubmit, handleChange, values, errors,
  } = formik;
  const onChange = (e) => {
    if (foundUser) {
      setFoundUser(false);
    }
    handleChange(e);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Регистрация</h2>
      <Form.Group className="form-floating mb-3">
        <Form.Control
          id="username"
          name="username"
          onChange={onChange}
          value={values.username}
          type="text"
          isInvalid={
            (touched.username && !!errors.username || foundUser)
            || authFailed
}
          ref={inputRef}
        />
        <Form.Label htmlFor="username">Ваш ник</Form.Label>
        {(foundUser || !!errors.username) && (
        <Form.Control.Feedback type="invalid" tooltip>
          {foundUser ? 'Пользователь уже есть' : errors.username}
        </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="form-floating mb-4">
        <Form.Control id="password" name="password" onChange={handleChange} value={values.password} type="password" isInvalid={(touched.password && !!errors.password) || authFailed} />
        <Form.Label htmlFor="password">Пароль</Form.Label>
        {!!errors.password && (
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.password}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="form-floating mb-4">
        <Form.Control id="passwordConfirm" name="passwordConfirm" onChange={handleChange} value={values.passwordConfirm} type="password" isInvalid={(touched.passwordConfirm && !!errors.passwordConfirm) || authFailed} />
        <Form.Label htmlFor="passwordConfirm">Подтвердите пароль</Form.Label>
        {!!errors.passwordConfirm && (
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.passwordConfirm}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Button className="w-100 mb-3" variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};

export default SignUpForm;
