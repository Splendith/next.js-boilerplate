const routes = require('next-routes')();

module.exports = routes;

// routes.add(name, pattern = /name, page = name) <- recommend
// routes.add(pattern, page)
// routes.add(object)

routes.add('testurl', '/test/:id');
// .add('another', '/pattern');
