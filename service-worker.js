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
    "revision": "cbbe2af5da0d78c7e40d64147182da7b"
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
    "url": "assets/js/app.8cac3254.js",
    "revision": "29681fa4b6b8b62e25ba46809e2d8eb1"
  },
  {
    "url": "blog/class2.html",
    "revision": "f14d325ddb2cbd671a40b4428f09c1e4"
  },
  {
    "url": "blog/class3.html",
    "revision": "45b97baef7d36d588a0b535b20368a37"
  },
  {
    "url": "blog/code.html",
    "revision": "6d823891fca42f029d3d50e86434ebb6"
  },
  {
    "url": "blog/git.html",
    "revision": "7384d8de246b2f71110a1e6cc9463ae9"
  },
  {
    "url": "blog/index.html",
    "revision": "d65eddefd63d834f2de57334bf476593"
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
    "revision": "3bf4768f94b1131ac9b85a6142648e77"
  },
  {
    "url": "javascript/es5/class1.html",
    "revision": "782f4f0aac4c171a91e2b4cca4884446"
  },
  {
    "url": "javascript/es5/class2.html",
    "revision": "cb00051b5cd13d1f812e976531d36cdd"
  },
  {
    "url": "javascript/es5/class3.html",
    "revision": "1b672385148c6ea389d75caef76280a1"
  },
  {
    "url": "javascript/es5/class4.html",
    "revision": "96983aded4ccf5ac7e56afbbcf3ac190"
  },
  {
    "url": "javascript/es5/index.html",
    "revision": "647baa986f50707d0ecc6a087e812be5"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "469d36533471b451a23143005454c7e6"
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
