const apiPath = '/api/v1';

export default {
  loginPath: () => [apiPath, 'login'].join('/'),
  signUp: () => [apiPath, 'signup'].join('/'),
  data: () => [apiPath, 'data'].join('/'),
  loginPage: () => '/login',
  mainPage: () => '/',
  errorPage: () => '*',
  signUpPage: () => '/signup',
};
