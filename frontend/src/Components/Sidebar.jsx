/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

// {id: 1, name: 'general', removable: false}
/* <ListGroup.Item action href="#link1">
{channels.name}
</ListGroup.Item>
<ListGroup.Item action href="#link2">
Link 2
</ListGroup.Item> */

// <Tab.Content>
//   <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>
//   <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
// </Tab.Content>;

/* <ListGroup as="ul" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
{channels.map((channel) => (
  <ListGroup.Item as="li" className="nav-item w-100" key={channel.id}>
    <Button className="w-100 rounded-0 text-start btn btn-secondary"><span className="me-1">#</span>{channel.name}</Button>
  </ListGroup.Item>
))}
</ListGroup> */

const Sidebar = () => {
  const { channels, channelId } = useSelector((state) => state.data);
  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row>
        <Col className="col-auto flex-column border-end px-0 h-100 d-flex min-vh-100 bg-light">
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-3 border-bottom">
            <b>Каналы</b>
            <Button variant="outline-primary" className="p-1"><b>+</b></Button>
          </div>
          <Nav variant="pills" as="ul" className="flex-column ">
            <Nav.Item as="li">
              <Nav.Link>
                NavLink 1 content
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link>
                NavLink 2 content
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link>
                NavLink 3 content
              </Nav.Link>
            </Nav.Item>
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
export default Sidebar;
