import React, { useRef, useEffect } from 'react';
import * as formik from 'formik';
import * as yup from 'yup';
import filter from 'leo-profanity';
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
  }, [Formik]);
  return (
    <Formik
      initialValues={{
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={({ message }, { resetForm }) => {
        const filterMessage = filter.clean(message);
        const data = {
          body: filterMessage,
          channelId: currentChannelId,
          username,
        };
        api.sendMessage(data);
        resetForm();
      }}
    >
      {({
        values, handleSubmit, handleChange, isValid, dirty,
      }) => (
        <div className="mt-auto px-5 py-3">
          <div>
            <Form
              className="py-1 border rounded-2"
              onSubmit={handleSubmit}
            >
              <InputGroup hasValidation>
                <Form.Control
                  className="border-0 p-0 ps-2"
                  placeholder="Введите ваше сообщение..."
                  name="message"
                  onChange={handleChange}
                  value={values.message}
                  ref={inputRef}
                />
                <Button
                  type="submit"
                  variant="link"
                  className="btn-group-vertical text-dark"
                  disabled={(!isValid || !dirty)}
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
