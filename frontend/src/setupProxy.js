const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://159.203.132.174:4000',
      changeOrigin: true,
    })
  );
};