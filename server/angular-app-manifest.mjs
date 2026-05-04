
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-ecommerce-final/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/angular-ecommerce-final"
  },
  {
    "renderMode": 1,
    "route": "/angular-ecommerce-final/product/*"
  },
  {
    "renderMode": 1,
    "route": "/angular-ecommerce-final/categories"
  },
  {
    "renderMode": 1,
    "route": "/angular-ecommerce-final/category/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 691, hash: '7c0138ac27662fec1f8d6848bad1a0f2e10640ce8324d79e9fe20fc2d57c2a78', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 978, hash: 'ac1522b06c24f6fbba0b962e5ee80c33db2dbdba0db72690a7cc52de55b8b9d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EFRJXCO4.css': {size: 1513, hash: '1QD4RDBU82s', text: () => import('./assets-chunks/styles-EFRJXCO4_css.mjs').then(m => m.default)}
  },
};
