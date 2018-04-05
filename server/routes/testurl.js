module.exports = (app, server) => {
  server.get('/test/:id', (req, res) => {
    const actualPage = '/testurl';
    const queryParams = {
      id: req.params.id,
      queryId: req.query.queryId,
    };
    app.render(req, res, actualPage, queryParams);
  });
};
