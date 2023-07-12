import React, { useRef, useEffect } from 'react';
import * as formik from 'formik';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import useChatApi from '../hooks/useChatApi';

const SendMessageForm = () => {
  const { Formik } = formik;
  const api = useChatApi();
  const inputRef = useRef(null);
  const { currentChannelId } = useSelector((state) => state.channelInfo);
  const { username } = JSON.parse(localStorage.getItem('userId'));
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Formik
      initialValues={{
        message: '',
      }}
      onSubmit={async ({ message }, { resetForm }) => {
        const data = {
          body: message,
          channelId: currentChannelId,
          username,
        };
        try {
          await api.sendMessage(data);
          resetForm();
        } catch (err) {
          console.log(err);
        }
      }}
    >
      {
        ({
          values, handleSubmit, handleChange,
        }) => (
          <Form className="py-1 border rounded-2" onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={handleChange}
                placeholder="Введите ваше сообщение"
                name="message"
                value={values.message}
                ref={inputRef}
              />
              <Button
                type="submit"
                variant="link"
                className="btn-group-vertical text-dark"
              />
            </InputGroup>
          </Form>
        )
    }

    </Formik>
  );
};

export default SendMessageForm;
