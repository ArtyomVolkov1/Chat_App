import LoginPage from '../Pages/LoginPage';
import MainPage from '../Pages/MainPage';
import SignUp from '../Pages/SignUpPage';
import { LOGIN_ROUTE, SIGNUP_ROUTE, MAIN_ROUTE } from '../utils/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: SIGNUP_ROUTE,
    Component: SignUp,
  },
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
];
export const authRoutes = [];
// export const authRoutes = [
//     {
//         path: CHAT_ROUTE,
//         Component: Chat,
//     }
// ];
