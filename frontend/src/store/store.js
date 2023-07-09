import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
  },
});
