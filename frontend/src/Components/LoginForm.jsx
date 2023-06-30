import React from 'react';
import * as yup from 'yup';
import * as formik from 'formik';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  const { Formik } = formik;
  const LoginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({
        handleSubmit, handleChange, values, errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <InputGroup hasValidation>
              <Form.Control id="username" name="username" onChange={handleChange} value={values.username} type="username" isInvalid={!!errors.username} placeholder="Enter username" />
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

export default LoginForm;
