const express = require('express');
const next = require('next');
const routes = require('../routes');

const port = 3000;

const dev = process.env.NODE_ENV !== 'production';
const dir = './src';
const app = next({ dev, dir });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
    });
});
