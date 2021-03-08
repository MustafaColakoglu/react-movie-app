/* eslint-disable no-restricted-globals */

var CACHE_STATIC_NAME = "static-v3";
var CACHE_DYNAMIC_NAME = "dynamic";

// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", function (e) {
  console.log(e);
  e.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function (cache) {
      console.log("service worker precaching app shell");
      //   cache.addAll([
      //     "/",
      //     "/index.html",
      //     "/src/js/app.js",
      //     "/src/js/feed.js",
      //     "src/js/promise.js",
      //     "/src/js/fetch.js",
      //     "/src/js/material.min.js",
      //     "/src/css/feed.css",
      //     "/src/images/main-image.jpg",
      //     "https://fonts.googleapis.com/css?family=Roboto:400,700",
      //     "https://fonts.googleapis.com/icon?family=Material+Icons",
      //     "https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css",
      //   ]);
      // cache.add("/");
      // cache.add("/index.html");
      // cache.add("/src/js/app.js");
    })
  );
});

self.addEventListener("activate", function (e) {
  console.log(e);

  e.waitUntil(caches.keys().then(function (keyList) {}));
  return self.clients.claim();
});
