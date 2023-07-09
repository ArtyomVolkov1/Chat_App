import LoginPage from '../Pages/LoginPage';
import MainPage from '../Pages/MainPage';
import ErrorPage from '../Pages/ErrorPage';
// import SignUp from '../Pages/SignUpPage';
import { GHOST_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: GHOST_ROUTE,
    Component: ErrorPage,
  },
];

export const authRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: GHOST_ROUTE,
    Component: ErrorPage,
  },
];
