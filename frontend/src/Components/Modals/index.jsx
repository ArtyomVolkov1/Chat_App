/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import Add from './Add';
import { getModalType } from '../../store/slices/modalSlice';

const ModalComponent = (props) => {
  const { type } = props;
  const modals = {
    adding: Add,
  };
  const Component = modals[type];
  return (
    <Component {...props} />
  );
};

const Modal = (props) => {
  const type = useSelector(getModalType);
  return (
    <>
      {type && <ModalComponent type={type} {...props} />}
    </>
  );
};

export default Modal;
