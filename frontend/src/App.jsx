/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import './App.css';
import Navbars from './Components/Navbar';
import AuthContext from './contexts';
// import Navbar from './Components/Navbar';
const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>{children}</AuthContext.Provider>
  );
};
const App = () => (
  <AuthProvider><BrowserRouter><Navbars /><AppRouter /></BrowserRouter></AuthProvider>
);
export default App;
