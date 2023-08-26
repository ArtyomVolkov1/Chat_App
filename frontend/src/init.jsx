import React from 'react';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import ru from './locales/ru';

const init = async (socket) => {
  const i18n = i18next.createInstance();
  await i18n.use(initReactI18next).init({
    resources: { ru },
    fallbackLng: 'ru',
  });

  const vdom = (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App socket={socket} />
      </I18nextProvider>
    </Provider>
  );
  return vdom;
};

export default init;
