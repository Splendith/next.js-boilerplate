const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add('/test/:id', 'testurl');

module.exports = routes;
