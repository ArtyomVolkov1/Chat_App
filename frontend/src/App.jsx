/* eslint-disable react/function-component-definition */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import './App.css';
import Navbars from './Components/Navbar';
// import AuthContext from './contexts';
// import Navbar from './Components/Navbar';
// const AuthProvider = ({ children }) => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const logIn = () => setLoggedIn(true);
//   const logOut = () => {
//     localStorage.removeItem('userId');
//     setLoggedIn(false);
//   };
//   const checkAuth = () => {
//     const userId = JSON.parse(localStorage.getItem('userId'));
//     if (userId.token) {
//       setLoggedIn(true);
//     }
//   };
//   return (
//     <AuthContext.Provider
//       // eslint-disable-next-line react/jsx-no-constructed-context-values
//       value={{
//         loggedIn,
//         logIn,
//         logOut,
//         checkAuth,
//       }}
//     >{children}
//     </AuthContext.Provider>
//   );
// };

const App = () => (
  <BrowserRouter><Navbars /><AppRouter /></BrowserRouter>
);
export default App;
