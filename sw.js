importScripts('/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "FujirockArtist2018",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.819a5a134a43d0745359.js",
    "revision": "bac07603fb9d234e8ebde1b6e7346f67"
  },
  {
    "url": "/_nuxt/layouts_default.ba39150e8a27abd5fda4.js",
    "revision": "62462e591c0d26dd8c3d1618d1fc638e"
  },
  {
    "url": "/_nuxt/layouts_fujirock.0afe5b6d8e4291c86da7.js",
    "revision": "127a9d7f3f0a9dd4150b0d626775b110"
  },
  {
    "url": "/_nuxt/manifest.d68946aeb975248e86e1.js",
    "revision": "7b8e8aa08f00522ae5f8ba9b5ea28f95"
  },
  {
    "url": "/_nuxt/pages_Callback.39a6a195866252fe38ec.js",
    "revision": "05e73524687b0a15048d6c41ef47fb8a"
  },
  {
    "url": "/_nuxt/pages_genre_index.e5fdb6719ba5743a1419.js",
    "revision": "02cb3074f3fb5b46d1498d3ca3ec9503"
  },
  {
    "url": "/_nuxt/pages_index.588c1fdfea1b1d12dfac.js",
    "revision": "b91d4915d7e5d17e023e8be2572cfc10"
  },
  {
    "url": "/_nuxt/vendor.0d7163392b63977908a9.js",
    "revision": "222102ed282e5fa7c11bbf41b093ec61"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

