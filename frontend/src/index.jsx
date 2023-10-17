import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { io } from 'socket.io-client';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import init from './init';

const app = async () => {
  const socket = io();
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const vdom = await init(socket);
  root.render(<React.StrictMode>{vdom}</React.StrictMode>);
};

app();
