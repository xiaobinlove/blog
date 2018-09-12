/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5eafdef0f24fb3d7a8e92f9002060bdb"
  },
  {
    "url": "assets/css/0.styles.b84ed307.css",
    "revision": "9b058f4fde14ebc5372c707b48c10a6c"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/remote.d13350d5.png",
    "revision": "d13350d511227733a016c874d98031f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.08a0cf44.js",
    "revision": "6e38c6e25b371a4d24d87963dfad96d5"
  },
  {
    "url": "assets/js/11.1bc48cc3.js",
    "revision": "4ac48099bcf5bd93c34aefec78b02ae6"
  },
  {
    "url": "assets/js/12.4c2c5048.js",
    "revision": "9f9a32696f1946964f71072ba933d5d2"
  },
  {
    "url": "assets/js/13.16b587e5.js",
    "revision": "66e9ee1bfe206291935661986938087b"
  },
  {
    "url": "assets/js/14.da59c6cc.js",
    "revision": "23173dcf39e2f364f53b6f19f653e750"
  },
  {
    "url": "assets/js/15.c6fd73d4.js",
    "revision": "e4a739fd046c3b83e09a56f2e79d9838"
  },
  {
    "url": "assets/js/16.c9446da3.js",
    "revision": "7ed0f0f5145e2a16cf5f1ac4704593fe"
  },
  {
    "url": "assets/js/2.16a4505e.js",
    "revision": "2289cf58e3a9978215fb55d0e2b9f4a7"
  },
  {
    "url": "assets/js/3.92a72697.js",
    "revision": "78e7ec782ac4204d7ca7df4f90a0e23a"
  },
  {
    "url": "assets/js/4.bc4da638.js",
    "revision": "3727d249f06b3250b2adddc8d3f6dcf7"
  },
  {
    "url": "assets/js/5.1eaa136d.js",
    "revision": "fdcdb73d05cbc8f1d655f95cffcde6e8"
  },
  {
    "url": "assets/js/6.a065ffc7.js",
    "revision": "f4a3178c70c35059e59f1221011cb6a3"
  },
  {
    "url": "assets/js/7.bb80f003.js",
    "revision": "d3aa03d521f5592a17e7f061c138aef4"
  },
  {
    "url": "assets/js/8.c32630fb.js",
    "revision": "8e81f0e329f35d61e4825fb64701ea2f"
  },
  {
    "url": "assets/js/9.036ca0ce.js",
    "revision": "f52afaa19d67dfefb5558f8b0b35dbf9"
  },
  {
    "url": "assets/js/app.070e880b.js",
    "revision": "a07799628627f230d2149faef038a04c"
  },
  {
    "url": "blog/class2.html",
    "revision": "83c4d5e9c4b5cf16ca4218516fab774b"
  },
  {
    "url": "blog/class3.html",
    "revision": "0cc0371c219b9ac31c05d396ac7f35da"
  },
  {
    "url": "blog/code.html",
    "revision": "af7765b90d73c1d32e5609b8b00d3238"
  },
  {
    "url": "blog/git.html",
    "revision": "18b5ffd3d14a0a7776fb8cfc176efab4"
  },
  {
    "url": "blog/index.html",
    "revision": "33551f04bb9e2efd1835f691725984cf"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "ad402f60b47946b85668a605dd6b95c0"
  },
  {
    "url": "javascript/es5/class1.html",
    "revision": "750128cb852c720efd00fa98d0ec5656"
  },
  {
    "url": "javascript/es5/class2.html",
    "revision": "977b19eff98587f1aa7be452f28f248b"
  },
  {
    "url": "javascript/es5/class3.html",
    "revision": "f6a8423c1cbaf842a218128e0a6643b9"
  },
  {
    "url": "javascript/es5/class4.html",
    "revision": "b24d802f9ab6e127e22512d9c05051ff"
  },
  {
    "url": "javascript/es5/index.html",
    "revision": "817b66b88e125e315e09b3ce44ff2199"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "9b51524c9053c30306d780b7c13c0627"
  },
  {
    "url": "logo.jpg",
    "revision": "f0fe33c5f5d92c7ea6e71e2677b06a5d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
