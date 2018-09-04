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
    "revision": "ff9eeb8ab358b1c459cbb17fca5959d5"
  },
  {
    "url": "assets/css/0.styles.023f5813.css",
    "revision": "d1b2152e8baf80cebeebebf0f32afd93"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7cc731fc.js",
    "revision": "fb0ca287c6d9ed03b986098c3ee68483"
  },
  {
    "url": "assets/js/11.ee3ef6c6.js",
    "revision": "59f49b86f702e51c14b2ae233a8729b4"
  },
  {
    "url": "assets/js/12.e9543cb5.js",
    "revision": "0c696e00c60a3f2bd0a87eeca5bc89df"
  },
  {
    "url": "assets/js/13.0f14096c.js",
    "revision": "cf95bb2598524007a2d825600b186491"
  },
  {
    "url": "assets/js/14.74cc4030.js",
    "revision": "1f41de113ae8fa242ce67cb13409731b"
  },
  {
    "url": "assets/js/15.2d2024ad.js",
    "revision": "d4adf8d5db659d38706873561aa2fa9e"
  },
  {
    "url": "assets/js/2.2166b12e.js",
    "revision": "2962ae2eff44bfba4addb49507a655d1"
  },
  {
    "url": "assets/js/3.d0a87521.js",
    "revision": "f3bf01ef414723ac6d0d73db07be4a71"
  },
  {
    "url": "assets/js/4.816c5836.js",
    "revision": "d4eb12895a3bcf165b929a891bdcfa5e"
  },
  {
    "url": "assets/js/5.0c2117a9.js",
    "revision": "99852758f60c36deabcbde66644b9b6a"
  },
  {
    "url": "assets/js/6.d6f1f98b.js",
    "revision": "1d077bfad862441da78620ea63554005"
  },
  {
    "url": "assets/js/7.03ac3186.js",
    "revision": "6cabdd1fe6f8b0c6ce54d4681fba854b"
  },
  {
    "url": "assets/js/8.a4330633.js",
    "revision": "1dd417da86770e0a43a69bd9e36e9b12"
  },
  {
    "url": "assets/js/9.1686c228.js",
    "revision": "12a28a1190e65bbd9ddf002e2ce5e353"
  },
  {
    "url": "assets/js/app.be522f5c.js",
    "revision": "7d9511340b6b4da67c3b04c839e9f56d"
  },
  {
    "url": "blog/class1.html",
    "revision": "bf2db2db7cc3dcfa57e83dca1370e96e"
  },
  {
    "url": "blog/class2.html",
    "revision": "615686a577ee96b7f43d7fc9692a7faa"
  },
  {
    "url": "blog/class3.html",
    "revision": "70d76fae66707d5001b0c5cdc768bafa"
  },
  {
    "url": "blog/index.html",
    "revision": "f39e163814d248e33aab2b5b4ca7e259"
  },
  {
    "url": "index.html",
    "revision": "5a247c7350b9b9e097e394c0fbcbdb08"
  },
  {
    "url": "javascript/es5/class1.html",
    "revision": "d0b674195880058acd6cf71714a06a7f"
  },
  {
    "url": "javascript/es5/class2.html",
    "revision": "1ad47715e20ead901761d38a878000f0"
  },
  {
    "url": "javascript/es5/class3.html",
    "revision": "8a0bbfc69f1c65ddc0ee39ff955f10d5"
  },
  {
    "url": "javascript/es5/class4.html",
    "revision": "ba6e27e61fa8041626e36ce651a11189"
  },
  {
    "url": "javascript/es5/index.html",
    "revision": "96651977b19cbbcd34ddee285bf41cb4"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "61ca99e2b8a16eecdd1424570524fe00"
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
