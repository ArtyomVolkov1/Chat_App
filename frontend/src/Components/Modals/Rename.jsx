/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Modal, Button, Form, FormControl,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useChatApi from '../../hooks/useChatApi';
import { selectors } from '../../store/slices/channelsSlice';
import { getChannelId } from '../../store/slices/modalSlice';

const Rename = ({ onHide }) => {
  const [show, setShow] = useState(true);
  const api = useChatApi();
  const inputRef = useRef(null);
  const channels = useSelector(selectors.selectAll);
  const channelId = useSelector(getChannelId);
  const channelsName = channels.map(({ name }) => name);
  const currentChannel = channels.find((channel) => channel.id === channelId);
  const { id, name } = currentChannel;

  const handleClose = () => {
    setShow(false);
    onHide();
  };
  const handleSucces = () => {
    handleClose();
  };
  const validationSchema = yup.object().shape({
    name: yup.string()
      .required('Это обязательное поле')
      .min(3, 'от 3 до 20 символов')
      .max(20, 'от 3 до 20 символов')
      .notOneOf(channelsName, 'С таким именем канал уже создан'),
  });
  useEffect(() => {
    inputRef.current.select();
  }, []);
  const formik = useFormik({
    initialValues: {
      name,
    },
    validationSchema,
    onSubmit: ({ name }, { setSubmitting }) => {
      setTimeout(() => {
        api.updateNameChannel({ id, name }, handleSucces);
        setSubmitting(false);
      }, 500);
    },
  });
  const {
    touched, handleSubmit, handleChange, isSubmitting, values, errors,
  } = formik;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Переименовать канал ?</Modal.Title>
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
            disabled={isSubmitting}
            ref={inputRef}
            isInvalid={touched.name && !!errors.name}
          />
          <Form.Label className="visually-hidden" htmlFor="name">Имя канала</Form.Label>
          <FormControl.Feedback type="invalid">{errors.name}</FormControl.Feedback>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
            <Button disabled={isSubmitting} type="submit" variant="primary">Отправить</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
