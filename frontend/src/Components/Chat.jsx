import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { fetchData } from '../store/slices/dataSlice';
import routes from '../routes';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  if (userId) {
    return { Authorization: `Bearer ${userId.token}` };
  }
  return {};
};

const Chat = () => {
  const { channels } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchingData = async () => {
      const responce = await axios.get(routes.usersPath(), { headers: getAuthHeader() });
      localStorage.setItem('userData', JSON.stringify(responce.data));
      dispatch(fetchData(responce.data));
      console.log(responce);
    };
    fetchingData();
  }, [dispatch]);
  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row>
        <Col className="col-auto flex-column border-end px-0 h-100 d-flex min-vh-100 bg-light">
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-3 border-bottom">
            <b>Каналы</b>
            <Button variant="outline-primary" className="p-1"><b>+</b></Button>
          </div>
          <Nav variant="pills" as="ul" id="channels-box" className="flex-column ">
            {channels.map((channel) => (
              <Nav.Item as="li" className="w-100" key={channel.id}>
                <Button type="button" className="w-100 rounded-0 text-start btn-secondary">
                  <span className="me-1">#
                  </span>
                  {channel.name}
                </Button>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col className="p-0 h-100">
          <div className="d-flex flex-column h-100">
            <div className="bg-light mb-4 p-3 shadow-sm small">
              <p className="m-0">
                <b>#general</b>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
