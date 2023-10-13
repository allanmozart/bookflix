import { createProxyMiddleware } from 'http-proxy-middleware';

export function setupProxy(app) {
  app.use(
    '/api/v1/book',
    createProxyMiddleware({
      target: 'http://5.22.217.225:8081',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      },
    })
  );
}
