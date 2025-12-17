import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { UserProfilePage } from '@/pages/UserProfilePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { Login } from '@/pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/profile',
    Component: UserProfilePage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
