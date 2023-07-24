import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Modal, Button,
} from 'react-bootstrap';
import useChatApi from '../../hooks/useChatApi';
import { getChannelId } from '../../store/slices/modalSlice';

const Remove = ({ onHide }) => {
  const [show, setShow] = useState(true);
  const api = useChatApi();
  const channelId = useSelector(getChannelId);
  const handleClose = () => {
    setShow(false);
    onHide();
  };
  const handleSucces = () => {
    handleClose();
  };
  const handleDelete = () => {
    api.deleteChannel(channelId, handleSucces);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">Уверены?</p>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
          <Button type="submit" onClick={handleDelete} variant="danger">Удалить</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;
