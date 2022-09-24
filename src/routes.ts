import { Home } from './components/HomePage';
import { Login } from './components/Login';
import { SignIn } from './components/Signup';

const routes = [
  {
    show: true,
    path: '/login',
    component: Login,
  },
  {
    show: true,
    path: '/signup',
    component: SignIn,
  },
  {
    show: true,
    path: '/home',
    component: Home,
  },
];

export default routes;
