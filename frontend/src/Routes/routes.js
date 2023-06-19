import Login from '../Pages/login';
import SignUp from '../Pages/signup';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
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
