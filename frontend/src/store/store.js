import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import userReducer from './slices/userSlice';
import messageReducer from './slices/messagesSlice';
import channelReducer from './slices/channelsSlice';
import modalReducer from './slices/modalSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
    channels: channelReducer,
    messages: messageReducer,
    modal: modalReducer,
  },
});
