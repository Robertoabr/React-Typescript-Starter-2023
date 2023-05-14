export const userRoutes = [
  {
    method: 'GET',
    path: '/api/user',
    handler: () => {
      console.log('server handler for users hit');
      return 'Joe Test';
    }
  }
];
