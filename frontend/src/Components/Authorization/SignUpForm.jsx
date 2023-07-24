import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import * as yup from 'yup';
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
    passwordConfirm: yup.string().required('Это обязательно поле').oneOf(yup.ref['password', null]),
  });
  useEffect(() => {
    inputRef.current.focus();
  });
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
        if (error.isAxiosError && errors.responce.status === 401) {
          setAuthFailed(true);
          inputRef.current.select();
          return false;
        }
        if (errors.isAxiosError && errors.responce.status === 409) {
          setAuthFailed(true);
          setFoundUser(true);
          inputRef.current.select();
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
    <div>SignUpForm</div>
  );
};

export default SignUpForm;
