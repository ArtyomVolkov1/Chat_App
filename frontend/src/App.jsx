/* eslint-disable react/function-component-definition */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import './App.css';
import Navbars from './Components/Navbar';
// import Navbar from './Components/Navbar';

const App = () => (<BrowserRouter><Navbars /><AppRouter /></BrowserRouter>);
export default App;
