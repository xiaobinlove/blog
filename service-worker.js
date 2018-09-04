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
    "revision": "38cbd86887d800a2c2290659b8775e57"
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
    "url": "assets/js/10.836cfb9e.js",
    "revision": "1a83f7d72d6b9aca5f5783f3fc6a5ace"
  },
  {
    "url": "assets/js/11.558f2952.js",
    "revision": "dc5d1e896db068f4e4197f6df2a330f5"
  },
  {
    "url": "assets/js/12.cde09ee4.js",
    "revision": "1d872388a2c85c50d2657042238b9456"
  },
  {
    "url": "assets/js/13.5e06d841.js",
    "revision": "1a2aebf626be464f7033be6c23471f0d"
  },
  {
    "url": "assets/js/14.4c53b406.js",
    "revision": "9b9269c781cbc21b89ff5c745d429802"
  },
  {
    "url": "assets/js/15.779a9950.js",
    "revision": "16605ab59036a9f2ac7a08effe1af78b"
  },
  {
    "url": "assets/js/2.16a4505e.js",
    "revision": "2289cf58e3a9978215fb55d0e2b9f4a7"
  },
  {
    "url": "assets/js/3.4a585775.js",
    "revision": "e1ca2ddb98952e6ee680ba4c1a9dee12"
  },
  {
    "url": "assets/js/4.41987bb0.js",
    "revision": "e09c48a10016766a52adc892f82bd48f"
  },
  {
    "url": "assets/js/5.07b611a7.js",
    "revision": "95f4f2657f3759f89d4029f6e03d357d"
  },
  {
    "url": "assets/js/6.79afbf23.js",
    "revision": "c949feb669925a42650ca5a53680ab60"
  },
  {
    "url": "assets/js/7.36d7c43c.js",
    "revision": "570bffd16ce8f5037e5050f99b8fd623"
  },
  {
    "url": "assets/js/8.0dc2132b.js",
    "revision": "b7dd2e6bff14a76c33c53bc63653a75d"
  },
  {
    "url": "assets/js/9.039196de.js",
    "revision": "a08fea60b1b77f5521df6da8d70ad79b"
  },
  {
    "url": "assets/js/app.1efcc9d7.js",
    "revision": "494f32f250ae7f3c578245a440abfa7b"
  },
  {
    "url": "blog/class2.html",
    "revision": "95fce13e075d9c5ca1f019dbe3ae13d0"
  },
  {
    "url": "blog/class3.html",
    "revision": "c804f1d2a2b236dcb0c37989bcfcc428"
  },
  {
    "url": "blog/git.html",
    "revision": "36e39948bf1f722f29382433ae6cfaa4"
  },
  {
    "url": "blog/index.html",
    "revision": "987d24c0948f9720190bb8ac4945a1c2"
  },
  {
    "url": "index.html",
    "revision": "dc3f20c9c28f99511caea8cf49e241ba"
  },
  {
    "url": "javascript/es5/class1.html",
    "revision": "1e1e4297c9d4fb206bf4d38bba0302c8"
  },
  {
    "url": "javascript/es5/class2.html",
    "revision": "6f6791402fc4f08fe68a6bfdf2ea3e72"
  },
  {
    "url": "javascript/es5/class3.html",
    "revision": "b01350433825b2d055b59ddf6ed24c52"
  },
  {
    "url": "javascript/es5/class4.html",
    "revision": "6a362c1f169b1afaa487930f15a75f2f"
  },
  {
    "url": "javascript/es5/index.html",
    "revision": "e0068517eebdbeda08f3b3ac34453cf9"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "7bc534805016a140163c818fa100c71a"
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
