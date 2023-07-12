import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import userReducer from './slices/userSlice';
import messageReducer from './slices/messagesSlice';
import channelReducer from './slices/channelsSlice';
// import webSocketReducer from './slices/webSocketSlice';
// import { socketMiddleware } from './middleware/webSocketMiddleware';

export default configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
    channelInfo: channelReducer,
    messages: messageReducer,
  },
});
