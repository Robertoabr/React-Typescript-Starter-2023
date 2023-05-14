import { server } from './server';

(async () => {
  await server.start();
  console.log(`Server listening', port:${server.info.uri}`);
})();

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection');
  console.error(err);
  process.exit(1);
});
