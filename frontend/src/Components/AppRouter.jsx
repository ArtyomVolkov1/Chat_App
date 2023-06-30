import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { publicRoutes } from '../Routes/routes';
// import MainPage from '../Pages/MainPage';
import useAuth from '../hooks';
import LoginPage from '../Pages/LoginPage';
import MainPage from '../Pages/MainPage';

const Test = () => (<h1>404 not found</h1>);

const AppRouter = () => {
  const auth = useAuth();
  return auth.loggedIn ? (
    <Routes>
      <Route path="*" element={<Test />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;

// return user ? (
//     <Routes>
//         {privateRoutes.map(({path, Component}) => (
//             <Route key={path} path={path} element={<Component />} />
//         ))}
//         <Route path='*' element={<Navigate to={CHAT_ROUTE} replace />} />
//     </Routes>
// ) : (
//     <Routes>
//         {publicRoutes.map(({path, Component}) => (
//             <Route key={path} path={path} element={<Component />} />
//         ))}
//         <Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
//     </Routes>
// )
