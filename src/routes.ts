import { Home } from './components/home-page';
import { Login } from './components/login';
import { SignIn } from './components/signup';

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
