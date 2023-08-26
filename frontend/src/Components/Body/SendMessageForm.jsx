import React, { useRef, useEffect } from 'react';
import * as formik from 'formik';
import * as yup from 'yup';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useChatApi from '../../hooks/useChatApi';
import { getCurrentChannelId } from '../../store/slices/channelsSlice';

const SendMessageForm = () => {
  const { t } = useTranslation();
  const { Formik } = formik;
  const api = useChatApi();
  const inputRef = useRef(null);
  const currentChannelId = useSelector(getCurrentChannelId);
  const { username } = JSON.parse(localStorage.getItem('userId'));
  const validationSchema = yup.object().shape({
    message: yup.string().trim().required('required'),
  });
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Formik
      initialValues={{
        message: '',
      }}
      validationSchema={validationSchema}
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
      {({ values, handleSubmit, handleChange }) => (
        <div className="mt-auto px-5 py-3">
          <div>
            <Form
              noValidate
              className="py-1 border rounded-2"
              onSubmit={handleSubmit}
            >
              <InputGroup>
                <Form.Control
                  className="border-0 p-0 ps-2"
                  onChange={handleChange}
                  placeholder="Введите ваше сообщение..."
                  name="message"
                  value={values.message}
                  ref={inputRef}
                />
                <Button
                  type="submit"
                  variant="link"
                  className="btn-group-vertical text-dark"
                >
                  {t('message.sayHi')}
                </Button>
              </InputGroup>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SendMessageForm;
