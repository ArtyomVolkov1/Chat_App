import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

const init = async (socket) => {
  const vdom = (
    <Provider store={store}>
      <App socket={socket} />
    </Provider>
  );
  return vdom;
};

export default init;
