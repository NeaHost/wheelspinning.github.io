'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6dd3e93935add275cfc427fe52d79350",
"assets/AssetManifest.bin.json": "f2156c824fe6a362a5a42bba18b835fb",
"assets/AssetManifest.json": "dbaecce65520a90dbe1f17c63870c913",
"assets/assets/dynamic_field.json": "01ae3867438795ca8608cccdc8eedd64",
"assets/assets/fonts/Akatab-Black.ttf": "1b84fb40869a7db271054baf402d77df",
"assets/assets/fonts/Akatab-Bold.ttf": "0b73465f09f35f06f45ef7ed0f45217c",
"assets/assets/fonts/Akatab-ExtraBold.ttf": "cc09e8478f1d502f89562adea728000e",
"assets/assets/fonts/Akatab-Medium.ttf": "13a42eea125842f28de2b6db99718ee0",
"assets/assets/fonts/Akatab-Regular.ttf": "be3b6163ebea6e45254ed19ebc65eb95",
"assets/assets/fonts/Akatab-SemiBold.ttf": "b1e500cc3fe8ef5afb7a942d38067829",
"assets/assets/icons/auth/ic_eye.svg": "91d00849f1a1ea41398c384cda4ae9d5",
"assets/assets/icons/auth/ic_eye_close.svg": "e8fd3a5c70fce214eb9a0728f0bd6cf3",
"assets/assets/icons/auth/ic_mail.svg": "66a0ccd8a47aeb3975dd642164f3626c",
"assets/assets/icons/auth/ic_ph.svg": "b847c0de45d95307556e4f957bc01863",
"assets/assets/icons/auth/ic_telegram.svg": "c5d6e68fbd8e2997e5e4ee3275fb5713",
"assets/assets/icons/category.png": "f5d9c87fde0a8762bc061a9795b65325",
"assets/assets/icons/delivery.png": "2ed16f13045301fae60e229edaa990f8",
"assets/assets/icons/en.png": "44f6e2752eaaf29883a10a81ba04f9fb",
"assets/assets/icons/fb.png": "ba803196d3b7644ffb2576efd1500b6b",
"assets/assets/icons/ic_cancel.svg": "e9b9b421adb2adb98ea96207117e1795",
"assets/assets/icons/ic_error.svg": "d1d8e440de95a1e97751252370f17f9a",
"assets/assets/icons/ic_eye.svg": "91d00849f1a1ea41398c384cda4ae9d5",
"assets/assets/icons/ic_eye_close.svg": "e8fd3a5c70fce214eb9a0728f0bd6cf3",
"assets/assets/icons/ic_order.svg": "3995edf79fe7a39c4b034a2dc86aa724",
"assets/assets/icons/ic_success.svg": "73c3c09f87877a4540d30ee544c9bf02",
"assets/assets/icons/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/icons/km.png": "af166c8186b8c4f949cfb3f10e35cbde",
"assets/assets/icons/order.png": "efbc9ecffc366f46501225fdd0477c1d",
"assets/assets/icons/order_from.png": "e4b9ab4cfec57dfff579a2a3c7807f0c",
"assets/assets/icons/order_info.png": "ad0f1131bb532def7b6eb1fd1a543155",
"assets/assets/icons/product.png": "4d072e207c4b59712ec1948a36fca7ec",
"assets/assets/icons/pymType.png": "7559dace32fc8e06def7f4a18e552323",
"assets/assets/icons/telegram.png": "b37d6df3b36a74748a9bda890b3ba550",
"assets/assets/icons/through.png": "828ad28022b91467d3da651252c14c51",
"assets/assets/icons/user.png": "7aa56bc3696af1e82230f7329e2316e1",
"assets/assets/images/cart.png": "6f5aeed5aac654a511e1cacd057538e9",
"assets/assets/images/copy.png": "2257f328119a400a5b2d660a8142d48c",
"assets/assets/images/log.svg": "cfd120cd57ecc7e309112bc55467b974",
"assets/assets/images/mey.jpg": "bfc93119a3a87a5d7edc94aba264c547",
"assets/assets/images/no-content.png": "96a72285b9ff86039103e6910fb3ff2b",
"assets/assets/images/noimg.jpg": "3ea266799ac28909d4bbe79898e39485",
"assets/assets/images/pen.png": "99a8c857ae57104f982804d84e512379",
"assets/assets/images/pwd.png": "a59d86a5e7fab3a47c3fc34990732034",
"assets/assets/images/shop.png": "1ddcae767a7f263ee53757ad47ecd58e",
"assets/assets/images/trash.png": "02c4053bff2835712d55b071d0221871",
"assets/assets/lose.mp3": "fd1ffc1fac9be3ea6cf8ab186b6f353d",
"assets/assets/spin.mp3": "ba73ddbf0536b497b0f27d3eec0c302d",
"assets/assets/spin.wav": "4fc1a3125ea58d74af1b5332011c86b2",
"assets/assets/splash_screen.json": "7d9db972ffe2b369ac15ebf13a4e4876",
"assets/assets/svg/burn.svg": "1092e8ea17523e4a64cf04d56d45dd89",
"assets/assets/svg/distance.svg": "b4d02069d64d82363e7b511e777b4703",
"assets/assets/svg/exercise.svg": "a6289fddba5275f82b411a2d39c482b2",
"assets/assets/svg/history.svg": "9feef16414bc28c927c0b05b8f4d4b8a",
"assets/assets/svg/home.svg": "cc9e59a115d9b73d8e20494ede08f7a8",
"assets/assets/svg/ic_delete.svg": "35c416d41526e2d583e35d1eaad0c8cd",
"assets/assets/svg/ic_filter.svg": "65a2f15437c20ef592329f9515091ff4",
"assets/assets/svg/ic_pen.svg": "229f3ff9607daba6d614fe408110bf50",
"assets/assets/svg/more.svg": "4d37592c7894253910b8dfa105dc4992",
"assets/assets/svg/profile.svg": "5b882f7482eea8a5af6a2af2b438b56a",
"assets/assets/svg/search.svg": "af02da1f5e58690fd6ac4b1161a20a48",
"assets/assets/svg/setting.svg": "fccde2bb62dfc8654c2861f882c3de88",
"assets/assets/svg/signout.svg": "5e89bf15d17d54e4247c3cf4ee4e530b",
"assets/assets/svg/sleep.svg": "b4bf451ff1ba1a96c7c3ce9bd9677752",
"assets/assets/svg/steps.svg": "0a620e25b583f94a561c1cc51a6674e3",
"assets/assets/translations/en-US.json": "32e4c28ee6c98043a31fa8acf1cd3c06",
"assets/assets/translations/km-KH.json": "2e7461230ed2f0636068d44371dec9bb",
"assets/assets/victory.mp3": "2b66f283554e11223972c3e0af8eb069",
"assets/FontManifest.json": "d162193ba30c0a4b573ad5d8b25a1696",
"assets/fonts/MaterialIcons-Regular.otf": "333bed7d4c399145522fb1dabab812a6",
"assets/NOTICES": "d57acd6616fe0c3705074c635881db93",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "bb7cd43b0734e734c35524555fe3d78d",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "dce9f57f1e7887e2fc77cd113188fb43",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "92a452885e8b55e22c9670c50c15a503",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8cd4137ebcc761636d4ea7accefc3ee6",
"/": "8cd4137ebcc761636d4ea7accefc3ee6",
"main.dart.js": "67b70b707e573bfeacda0ec1f94df8b2",
"manifest.json": "033e099409f0da30886edfc443c95beb",
"version.json": "cc39af40c297351e16debb3461f83805"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
