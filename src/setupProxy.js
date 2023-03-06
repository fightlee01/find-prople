const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://192.168.31.153:8080/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    })
  )
}
