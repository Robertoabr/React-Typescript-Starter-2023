import { userRoutes } from './routes/user/user';

export const router = [
  ...userRoutes,
  {
    method: 'GET',
    path: '/api',
    handler: () => {
      return 'Server base route!!';
    }
  }
];
