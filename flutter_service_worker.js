'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d234e3c6b9d83879a83193e16e6767e7",
"version.json": "eb227d71fec66ff55cf9a72088eccd29",
"index.html": "9a6b7a71fb699f260ee8ce655eb0426e",
"/": "9a6b7a71fb699f260ee8ce655eb0426e",
"CNAME": "9e50f0c1c43a14277cee25e523b6881e",
"main.dart.js": "d863e90b9df76d9e3f7cdb06db84fead",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4b175833d089b8a31d1650a250afe44",
"assets/card_images/Marsh%2520Crocodile.png": "93547e0e690c268cf6f7f4652dbe7197",
"assets/card_images/Snapping%2520Turtle.png": "2540189fa9b5afadce021726917e24a1",
"assets/card_images/Focus.png": "c93190ca1ec4f3e6acc4043aac56b926",
"assets/card_images/Lonely%2520Lizard.png": "fb95e75f427539788ceba23f770e407f",
"assets/card_images/Shaolin%2520Cane.png": "6ecb91224f813d45ae63d8dfce53a192",
"assets/card_images/Gamble.png": "3552a21c2b70d7895f9049557f4b9de5",
"assets/card_images/Sir%2520Scurry.png": "2a9f2f3167c923281cfbab8c03a88c66",
"assets/card_images/Steroids.png": "5108bcf03ae6fcd23079edf073a76dc0",
"assets/card_images/Rebirth.png": "9497ba102c1dc9e62154666d33ac4ee8",
"assets/card_images/Spawning%2520Bed.png": "5eb41f44bc0740e010cf98e5c5b88493",
"assets/card_images/Marbled%2520Salamander.png": "e394268fa87929922c1c41120b13fcdd",
"assets/card_images/Humongous%2520Spawn.png": "dea7ae9e400eb065ad9fec6b734612ed",
"assets/card_images/Desert%2520Tortoise.png": "fa433ce7f1a4a5e8dff2e2cc1479e504",
"assets/card_images/Headlock.png": "71aeee332687e16112b0004c30d1d2b4",
"assets/card_images/Wrist%2520Wraps.png": "5ba3e127516cac94e0740c709e65ac3e",
"assets/card_images/Brass%2520Knuckles.png": "c7d1ad07c7d4005a3bb81ff25e4e0f0d",
"assets/card_images/Tipsy%2520Turtle.png": "fd6082601d8e35f6669746c71f6bbe32",
"assets/card_images/Timeout.png": "b48e7c40f645e7018a1b21469b3756e6",
"assets/card_images/Shifuu%2520Kuu.png": "a42fb5c766ee28fb4ceacc96fb8022f4",
"assets/card_images/Champions%2520Belt.png": "7ee47459c07ee6cdf6f1fcab4b863148",
"assets/card_images/Mentor%2520Morphos.png": "3317dcbeeb1cec7c75400c82107c162c",
"assets/card_images/Toada.png": "491c5b480236149ac6e359f923b5fc8f",
"assets/card_images/Smoke%2520Bomb.png": "929db35496eed60bc79c0f4201d74a27",
"assets/card_images/Newt.png": "362e9310c5dd41cf6edd7b93254277ca",
"assets/card_images/Fire%2520Salamander.png": "fe6f105786406837bac5c8731a5b4f7d",
"assets/card_images/Coach%2520Nickey.png": "4db41ccb28c040072c398217726d079f",
"assets/card_images/Sucker%2520Punch.png": "6263dc50c3a6705ffc9ad3851ee9f882",
"assets/card_images/Smoog.png": "3a36e110c467e4e0cff529d455a4292f",
"assets/card_images/Coral%2520Snake.png": "09c5bd7e050b7e8bd4044737d51144d3",
"assets/card_images/Baseball%2520Bat.png": "ea891e709d69bd64f9e57ca01b02dab0",
"assets/card_images/Professor%2520Ribbitdore.png": "8c20f49e8218b3cef9fb5d1a8a82164a",
"assets/card_images/Pei%2520Mai.png": "50fca5de7e4ddedad98f20b111e2cc32",
"assets/card_images/Master%2520Shatter.png": "57518a17430468304ccd0a19e24bde92",
"assets/card_images/Brown%2520Snake.png": "8f7121643e5563d093bafdc9d9fc47d1",
"assets/card_images/Guru%2520Gooji.png": "c684a1fbe59e7d9cddac4ce62bbc9fc9",
"assets/card_images/Dwarf%2520Crocodile.png": "31ad3cc952228e3fd4b4f270f344bd13",
"assets/card_images/Bloated%2520Toad.png": "73375e4fa3776948372ad9f891a9df90",
"assets/card_images/King%2520of%2520the%2520Crocs.png": "ed43d2206f3d15e9646873ad0640b17f",
"assets/card_images/Clouded%2520Salamander.png": "da4c691b9727e6ca8e624e5429e6bdd3",
"assets/card_images/Sparring%2520Boots.png": "e6c55b002003bf5b61b92cdbcb72e37f",
"assets/card_images/Bullfrog.png": "35c67dfc179ab5b166bc343e52af1e9b",
"assets/card_images/Black%2520Belt.png": "2df5441be8606d0372aac0bbf230aedd",
"assets/card_images/White%2520Belt.png": "9b0c57d0db386d2c7ef3b94e1cdd5656",
"assets/card_images/Puff%2520Adder.png": "aa3db435d41c1f1ffbc9119bcad8293d",
"assets/card_images/Meteor%2520Hammer.png": "5efdce49940ba4f2923805bc583b0ca0",
"assets/card_images/Chameleon%2520Skin.png": "17ed6692a1f0ffa6d644577b84bbabcf",
"assets/card_images/Black%2520Mamba.png": "a087150b9024f56203d44d8de6f398a1",
"assets/card_images/Weapon%2520Rack.png": "14a7260bac87474c1f63391b9798345e",
"assets/card_images/Master%2520Toshi.png": "8a2bb66403c68c095640010215a29643",
"assets/card_images/Cane%2520Toad.png": "835cb7c69a00f19613fc35401b9ea11c",
"assets/card_images/Python%2520Emperor.png": "1abdfbe92c27d127d874fbbfe8a98601",
"assets/card_images/Roundhouse%2520Kick.png": "7ed4abb3ac9f826f1dfebe8b779f7421",
"assets/card_images/Crocodile%2520Dandoo.png": "9352758e7b3e2e726f43f66fb2c3a11c",
"assets/card_images/Komodo%2520Dragon.png": "3428b5a37fecb47b26b151614d09c74a",
"assets/card_images/Combat%2520Headgear.png": "78fb1079270e3e439c842db32c00456c",
"assets/card_images/Mass%2520Metamorphosis.png": "5f2ad1f62abcf6e6876c752590ca15ae",
"assets/card_images/Switcheroo.png": "5a4ff3a56c22789f449f12644a954e24",
"assets/card_images/Kung%2520Fu%2520Gi.png": "ad777a0649a3c10ba318294b59c6e51a",
"assets/card_images/Anaconda.png": "e07743397a17e2420a462b360caae29e",
"assets/card_images/Nunchucks.png": "cd8aacc41e8a19f85abbc9da8bbb21ea",
"assets/card_images/King%2520Cobra.png": "a811e32464a1b044e065821e4ac6f2ea",
"assets/card_images/Twin%2520Katanas.png": "1549b744d1e5e2614e6b9f0527646f23",
"assets/card_images/Tree%2520Frog.png": "270aab7b55b3b5ce2c20e4aa66199c38",
"assets/card_images/Hypnotoad.png": "308aca9b74700e04780f6e59d3adc868",
"assets/card_images/Yellow%2520Belt.png": "635e9bcf1ce17595172582e5b9f75372",
"assets/card_images/Twin%2520Sai.png": "9a4f24ee485e11b39928b518882581c9",
"assets/card_images/Axolotl.png": "512c2244660fa30b72f427b6e89ee822",
"assets/card_images/Nipple%2520Twist.png": "91740f83eeb0ec2018431ca192c14e9f",
"assets/card_images/Sumo%2520Turtle.png": "f9a72ba35b8846115f4d94172746fb04",
"assets/card_images/Concentrate.png": "b5a92c32637ac506ee56ba0c3998940a",
"assets/card_images/River%2520Crocodile.png": "648330689d5d2c100746f792c7b463ec",
"assets/card_images/Coach%2520Hulk.png": "8968a5f3f6196f0b1393946cb54ccf61",
"assets/card_images/Iron%2520Wrench.png": "e3be06b3faba873f45d56efa348d5232",
"assets/card_images/Uppercut.png": "a286d387ff3c75eac4b978fbf3e5ce0f",
"assets/card_images/Crane%2520Kick.png": "ebeef2b9a282e9ed6e9badcf3aa1fcfc",
"assets/card_images/Introduce%2520a%2520Champion.png": "a446707016cc615ca0fd7c3eb2e5cf2f",
"assets/card_images/Veiled%2520Chameleon.png": "daa3148d714e7e8043bab20fec4d7ec9",
"assets/card_images/Pygmy%2520Chameleon.png": "2000d21b4ffcbdb43822b0b834e31980",
"assets/card_images/Bo%2520Staff.png": "b6f386aa6dbd3ec7b557ec64183f5e61",
"assets/card_images/Kick%2520and%2520Punch.png": "ba948d432f4b389579a44e1433f81bd2",
"assets/card_images/Bogart%2520Toad.png": "51ef95101bf0265122cd24013a91c10e",
"assets/card_images/Siren%2520Salamander.png": "d6ecc8d7b51261973086fc9c14407191",
"assets/card_images/Tag%2520Team.png": "c168f738a1ee14c99e3672b147fa837f",
"assets/card_images/Harlequin%2520Toad.png": "cdc913353c896e7a85bb4283425ffd57",
"assets/card_images/Black%2520Toad.png": "f5c892956847c3f35c61c559306c539f",
"assets/card_images/Fists%2520of%2520Fury.png": "9bf438b6609b8cd6a55988f15fc5bcac",
"assets/card_images/Spawn.png": "1b86ec4d566f91222b0366b4699f45c0",
"assets/card_images/Mr%2520Minami.png": "18b6879cf8c0f950c962f25e9432469e",
"assets/card_images/Oak%2520Toad.png": "6395de782b43c16ecc0da1829d463fe6",
"assets/card_images/Gecko.png": "7ab0a39800b9cc0cc57f2ba5022bcf30",
"assets/card_images/Flying%2520Kick.png": "1164801f2d1b6b8c5519e5fad12b9385",
"assets/card_images/Basilisk.png": "7749878e4316aacda105824ffd18297b",
"assets/card_images/Mugger%2520Crocodile.png": "a6614559041f0e3c32286a07b30867e9",
"assets/card_images/Spawning%2520Sword.png": "811b9e0806f34f0fbc153bd86be3782d",
"assets/card_images/Tail%2520Swipe.png": "3422ee34849d81af3c62d8117c94c192",
"assets/card_images/Golden%2520Gloves.png": "8ebb0ab684df8cb45cb4e9c9e6ee7972",
"assets/card_images/Dart%2520Frog.png": "b061a584fb53987f686899bfab96929b",
"assets/card_images/Gila%2520Monster.png": "e884d4e83b046fe1f9d3d6e3aaa696e3",
"assets/card_images/Barbed%2520Wire.png": "9aa527742c9b79d710613e2a37f8e6d0",
"assets/card_images/Silent%2520Lee.png": "f9a5c4590f83fe92f342db5956412a5c",
"assets/card_images/Iguana.png": "43273fefdacd08c3e013074f5e2954e1",
"assets/card_images/Rearm.png": "6ef50e6fcfe2ba23bdafa2fc2d10174b",
"assets/card_images/Double-Headed%2520Viper.png": "c9352b5c8d2cb3fe9ede1dcc888a6fd1",
"assets/card_images/Croackers%2520Gi.png": "d4d5e36c3eba51b2095f1df38d0323b2",
"assets/card_images/Meditate.png": "02827c5c6a95c00d139c26d5cd062815",
"assets/card_images/Red-Spotted%2520Frog.png": "d4c9eccec473d377f2b19f5f67868674",
"assets/card_images/Glass%2520Frog.png": "1536e03d917eedf59339ccff5c48fa26",
"assets/card_images/Painted%2520Turtle.png": "2f3f8891fdc0c649bf5f2b1986f93598",
"assets/card_images/Metamorphosis.png": "177af7fe1b489a7524382723ec3ca730",
"assets/card_images/Alligator.png": "86a1d7fdfc40549c932620f6b54bb9d5",
"assets/card_images/Giant%2520Salamander.png": "717c4c8db107e2f32540785d8aa7c4f2",
"assets/card_images/Bokken.png": "73489fd01fd1f0e1e613cb7da678fdec",
"assets/card_images/Caiman.png": "26139d5a70f90baf6817c69a3451c993",
"assets/card_images/Goliath%2520Frog.png": "a7f7a0028e38909275b483a496c583f0",
"assets/card_images/Panther%2520Chameleon.png": "622a33a14ab20dd975b9cdf88d243922",
"assets/card_images/Spawning%2520Suit.png": "4edab348b7fd8852f91615cf18c02dd4",
"assets/card_images/Great%2520Crocodile.png": "dfcbfa396815cef2140d4fa2e38ed53e",
"assets/card_images/Boxing%2520Gloves.png": "27fcebf6f7a09b58564cbe369fc13f15",
"assets/card_images/Rain%2520Frog.png": "3329a43ff77c10b38ee48a0d76b76c9f",
"assets/card_images/Open%2520Palm%2520Strike.png": "20d2801eda0b0961bd056c2d3c8e631e",
"assets/card_images/Right%2520Hook.png": "0a2cb12eb67693cb09c79057a54903f9",
"assets/NOTICES": "8301bbf9ae882630b824db624b8bf2e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "541fbef9826a2df0a4efdf9821c10cb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "e39a500e2cafd02f8388bab9cbe0a45b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
