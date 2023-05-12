import Router from 'express';

//--ROUTES--//
const todoRoutes = Router();

todoRoutes.get('/', (req, res) => {
  res.send('TODO root ROUTE');
});

export { todoRoutes };
