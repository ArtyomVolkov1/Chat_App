/* eslint-disable react/function-component-definition */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import './App.css';
import Navbars from './Components/Navbar';
import ChatApiProvider from './contexts/ChatApiContext';

const App = ({ socket }) => (
  <BrowserRouter><div className="d-flex flex-column h-100 "><Navbars /><ChatApiProvider socket={socket}><AppRouter /></ChatApiProvider></div></BrowserRouter>
);
export default App;
