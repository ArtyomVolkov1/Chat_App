import LoginPage from '../Pages/LoginPage';
import SignUp from '../Pages/SignUpPage';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: SIGNUP_ROUTE,
    Component: SignUp,
  },
];
export const authRoutes = [];
// export const authRoutes = [
//     {
//         path: CHAT_ROUTE,
//         Component: Chat,
//     }
// ];
