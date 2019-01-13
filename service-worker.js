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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4ed68ddb1adfab3523cd815c9a813835"
  },
  {
    "url": "assets/css/0.styles.fb4e1c76.css",
    "revision": "06cb2f91c49211fcb4d378a4651626cf"
  },
  {
    "url": "assets/fonts/segmdl2.3d45c175.ttf",
    "revision": "3d45c1756d9e1d2d6ec2c4a7cc86e35f"
  },
  {
    "url": "assets/fonts/segmdl2.b310d020.woff2",
    "revision": "b310d020a3aac5611f4cf7886ab194f9"
  },
  {
    "url": "assets/fonts/segmdl2.e7736af1.woff",
    "revision": "e7736af16e64e0e660e289d8a615af0d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1e126636.js",
    "revision": "3949961f86aa9eabc9cb5288848e83a4"
  },
  {
    "url": "assets/js/11.8c066d1b.js",
    "revision": "ad1484a7400907207e8ed9ce940f42a0"
  },
  {
    "url": "assets/js/12.ac2e64ed.js",
    "revision": "8eff887a26ed9c1ee0972bd34a968b9c"
  },
  {
    "url": "assets/js/13.c4937025.js",
    "revision": "c866f61572604c03cb1828a32a8b62a7"
  },
  {
    "url": "assets/js/14.01baa796.js",
    "revision": "132741430d1be728eb94e9f5c4077e22"
  },
  {
    "url": "assets/js/15.40a9d2bb.js",
    "revision": "d24727490f94e3bcd4c0f67751c384be"
  },
  {
    "url": "assets/js/16.6cb8d38d.js",
    "revision": "cf9ab1089b0deae7ab1b90d35813fce8"
  },
  {
    "url": "assets/js/17.249dd980.js",
    "revision": "7ebf785c738629a31af644e6099ba81f"
  },
  {
    "url": "assets/js/18.cab0a396.js",
    "revision": "1513dc1fa54354e9a505817157a768eb"
  },
  {
    "url": "assets/js/19.8b7414ef.js",
    "revision": "25030eb88919d96d90386548b423cef0"
  },
  {
    "url": "assets/js/2.e03f09b4.js",
    "revision": "a045eb61be10c6312cbc2cd1ac7c4c97"
  },
  {
    "url": "assets/js/20.a588fed3.js",
    "revision": "b2d50c7cbb27ef3d5b540cd680568582"
  },
  {
    "url": "assets/js/21.25dac78c.js",
    "revision": "fd475bf64b09ee0010d1a4b24276988a"
  },
  {
    "url": "assets/js/3.a1232442.js",
    "revision": "6139036546221ec9c259169287512891"
  },
  {
    "url": "assets/js/4.e89c9302.js",
    "revision": "0db5359177aca43c535e863e1849f89e"
  },
  {
    "url": "assets/js/5.919d548e.js",
    "revision": "214ec8203c2b865a1e7ddf5376eb7cba"
  },
  {
    "url": "assets/js/6.cfa63b9e.js",
    "revision": "7f87eef57bd65f686a649a2ca419df38"
  },
  {
    "url": "assets/js/7.5a3e7df4.js",
    "revision": "361bc63cb797e683730cfb3c82b1c0f4"
  },
  {
    "url": "assets/js/8.590f9dba.js",
    "revision": "a2927e58c268d6fa62bde8a7537ae740"
  },
  {
    "url": "assets/js/9.b417848b.js",
    "revision": "a28d4d2f19282a2d2546992a17820ddf"
  },
  {
    "url": "assets/js/app.59714005.js",
    "revision": "68ae3225e869030f89b745a3d3fed32e"
  },
  {
    "url": "components/button.html",
    "revision": "23a86bec66563bf3aca417f8b407a80c"
  },
  {
    "url": "components/checkbox.html",
    "revision": "cf591fb7d416089270cc858b41d26fef"
  },
  {
    "url": "components/icon.html",
    "revision": "ffb034e7d0da50e8aaf5475e9b13bb93"
  },
  {
    "url": "components/input.html",
    "revision": "c1fbceec449ba7816b98894694f272ca"
  },
  {
    "url": "components/radio.html",
    "revision": "3227758ad4688713811067f0f528f819"
  },
  {
    "url": "components/select.html",
    "revision": "9956f5921348902fe559708f09cf59e8"
  },
  {
    "url": "components/slider.html",
    "revision": "50adcf93bce3a20a562f58dd414d9f2c"
  },
  {
    "url": "components/toggle.html",
    "revision": "1dbe9021e8092e16df43635b7f727d2c"
  },
  {
    "url": "components/tooltip.html",
    "revision": "5225d24825f04fab91637e06e9c319cf"
  },
  {
    "url": "en/index.html",
    "revision": "27d9cc0bb238ae6618a2610134342a1e"
  },
  {
    "url": "google42b0268709c35a51.html",
    "revision": "645dd80710f9a80b608a677ca4039287"
  },
  {
    "url": "images/homescreen128.png",
    "revision": "b64a42dcd3a28e416e3cdc73cc166b6f"
  },
  {
    "url": "images/homescreen144.png",
    "revision": "b230309c7bc504a676b8df9c9b60f3cb"
  },
  {
    "url": "images/homescreen192.png",
    "revision": "6e25a02afa1b63366ad0bbc908a707f2"
  },
  {
    "url": "images/homescreen512.png",
    "revision": "41c6e54f979625862a6907b673dd963d"
  },
  {
    "url": "images/homescreen72.png",
    "revision": "939f2562e7ee545336362281c3a787f3"
  },
  {
    "url": "images/homescreen96.png",
    "revision": "0a70d397e372ab82d58cea175e5b2f39"
  },
  {
    "url": "index.html",
    "revision": "050dca7c4329780d01098018165e167b"
  },
  {
    "url": "logo.png",
    "revision": "d48bee6cac231f721ad17dda1836a8ce"
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
