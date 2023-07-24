import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Modal, Button, Form, FormControl,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useChatApi from '../../hooks/useChatApi';
import { getChannelsNames } from '../../store/slices/channelsSlice';

const Add = ({ onHide }) => {
  const [show, setShow] = useState(true);
  const api = useChatApi();
  const inputRef = useRef(null);
  const channelsName = useSelector(getChannelsNames);
  const handleClose = () => {
    setShow(false);
    onHide();
  };
  const handleSucces = () => {
    handleClose();
  };
  useEffect(() => {
    inputRef.current.focus();
  });
  const validationSchema = yup.object().shape({
    name: yup.string()
      .required('Это обязательное поле')
      .min(3, 'от 3 до 20 символов')
      .max(20, 'от 3 до 20 символов')
      .notOneOf(channelsName, 'С таким именем канал уже создан'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema,
    onSubmit: ({ name }) => {
      api.newChannel(name, handleSucces);
    },
  });
  const {
    touched, handleSubmit, handleChange, values, errors,
  } = formik;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            className="mb-2"
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            ref={inputRef}
            isInvalid={touched.name && !!errors.name}
          />
          <Form.Label className="visually-hidden" htmlFor="name">Имя канала</Form.Label>
          <FormControl.Feedback type="invalid">{errors.name}</FormControl.Feedback>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
            <Button type="submit" variant="primary">Отправить</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Add;
