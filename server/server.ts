import Hapi from '@hapi/hapi';
import { router } from './router';

export const server = Hapi.server({
  port: 5000,
  host: 'localhost'
});

router.forEach((path) => server.route(path));
