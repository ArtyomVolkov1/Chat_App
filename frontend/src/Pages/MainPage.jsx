import React from 'react';
import { Link } from 'react-router-dom';
import Chat from '../Components/Chat';

const MainPage = () => (
  <div>
    <Link to="/login">Start</Link>
    <Chat />
  </div>
);

export default MainPage;
