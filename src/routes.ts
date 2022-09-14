import { Login } from './components/login';
import { SignIn } from './components/signup';

const routes = [
  {
    show: true,
    path: '/login',
    component: Login,
    type: 'admin',
  },
  {
    show: true,
    path: '/signup',
    component: SignIn,
    type: 'admin',
  },
];

export default routes;
