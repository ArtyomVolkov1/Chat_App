import { useContext } from 'react';
import { ChatApiContext } from '../contexts/ChatApiContext';

const useChatApi = () => {
  const api = useContext(ChatApiContext);
  return api;
};

export default useChatApi;
