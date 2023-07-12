/* eslint-disable no-unused-vars */
// import React, { useEffect } from 'react';
// import {
//   Routes, Route, Navigate, useNavigate,
// } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { publicRoutes, authRoutes } from '../Routes/routes';
// // import useAuth from '../hooks';
// import { GHOST_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
// import { checkAuth, logIn } from '../store/slices/userSlice';

// const AppRouter = () => {
//   const { userToken, loggedIn, userInfo } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const userId = JSON.parse(localStorage.getItem('userId'));
//     if (userId) {
//       dispatch(checkAuth());
//     }
//   });
//   return loggedIn ? (
//     <Routes>
//       { authRoutes.map(({ path, Component }) => (
//         <Route key={path} path={path} element={<Component />} />
//       ))}
//       <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
//     </Routes>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Navigate to={LOGIN_ROUTE} replace />} />
//       <Route path="*" element={<Navigate to={GHOST_ROUTE} replace />} />
//       { publicRoutes.map(({ path, Component }) => (
//         <Route key={path} path={path} element={<Component />} />
//       ))}
//     </Routes>
//   );
// };

// const AppRouter = () => {
//   const auth = useAuth();
//   console.log(auth);
//   useEffect(() => {
//     if (localStorage.getItem('userId')) {
//       auth.checkAuth();
//       console.log(localStorage);
//     }
//   });
//   return auth.loggedIn ? (
//     <Routes>
//       { authRoutes.map(({ path, Component }) => (
//         <Route key={path} path={path} element={<Component />} />
//       ))}
//       <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
//     </Routes>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Navigate to={LOGIN_ROUTE} replace />} />
//       <Route path="*" element={<Navigate to={GHOST_ROUTE} replace />} />
//       { publicRoutes.map(({ path, Component }) => (
//         <Route key={path} path={path} element={<Component />} />
//       ))}
//     </Routes>
//   );
// };

// export default AppRouter;
