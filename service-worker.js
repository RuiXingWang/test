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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/complie/9.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/css/0.styles.d32b7143.css",
    "revision": "1eea02272af45f92fd398fbeae0ecfdb"
  },
  {
    "url": "assets/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/1.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.3828fb66.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.a0a38f3f.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/js/10.c5bbac8c.js",
    "revision": "c80336a4d9f82d79a6024e1c4de63977"
  },
  {
    "url": "assets/js/11.95a27cf8.js",
    "revision": "e174083d6fc50ab61b3a5fc714e360bb"
  },
  {
    "url": "assets/js/12.be721c4a.js",
    "revision": "d26e7d9173b2623497c2ea821c6795ae"
  },
  {
    "url": "assets/js/13.2399124f.js",
    "revision": "8d0117b3c0a87498c00457506bc08e85"
  },
  {
    "url": "assets/js/14.a5c16914.js",
    "revision": "55cdfbb3a8c0253c72aaba665c7eba90"
  },
  {
    "url": "assets/js/15.0b053e43.js",
    "revision": "e0292a781ccbb882498b36b8ccd2cf63"
  },
  {
    "url": "assets/js/16.ed406e14.js",
    "revision": "6c8334f6235ce75c7b30bb6c235ab31c"
  },
  {
    "url": "assets/js/17.701faf5e.js",
    "revision": "a29d8684d52dca2c3239baf68fb68782"
  },
  {
    "url": "assets/js/18.a373383f.js",
    "revision": "d39d8b3e31359da2b9a71eab42864cbf"
  },
  {
    "url": "assets/js/19.0f27c942.js",
    "revision": "40a9040a71a639793c5383f30110fad9"
  },
  {
    "url": "assets/js/2.6ffe3985.js",
    "revision": "8b9c6a4852a6177b45be62d6fd5a189c"
  },
  {
    "url": "assets/js/20.a5ce1e04.js",
    "revision": "0411d67bb925d6235860185b5e6430ed"
  },
  {
    "url": "assets/js/21.707b9854.js",
    "revision": "a6043bf4cc2dd8b7cebb6a67c1bf44ad"
  },
  {
    "url": "assets/js/22.028b2eec.js",
    "revision": "1dd4bd090504125ad69beeca768bad97"
  },
  {
    "url": "assets/js/23.cb4a6afb.js",
    "revision": "cc4af9e0fcc6e1109c11647f1171cfaf"
  },
  {
    "url": "assets/js/24.dc69702a.js",
    "revision": "e12790683d5126b201be236531b7bfdd"
  },
  {
    "url": "assets/js/25.428a1c44.js",
    "revision": "e6b64d61c01771836b0bba3b9b0ea28d"
  },
  {
    "url": "assets/js/26.44250e5c.js",
    "revision": "21b6496eddf7e8f3da1a2486f7937661"
  },
  {
    "url": "assets/js/27.951cfb1b.js",
    "revision": "66712915f40a7ebca5d7ab2f3b0ff463"
  },
  {
    "url": "assets/js/28.5f2fac18.js",
    "revision": "ccbbbe2844288cc62aba813d3d773623"
  },
  {
    "url": "assets/js/29.8e1f64f1.js",
    "revision": "27787ec6aa4f41bc0b0a244cdeb0779b"
  },
  {
    "url": "assets/js/3.ecd91d49.js",
    "revision": "79d47bccba53e615656caed98ff27240"
  },
  {
    "url": "assets/js/30.5abe9425.js",
    "revision": "b6cdc43c697da5cd6f5b65425a5f20f4"
  },
  {
    "url": "assets/js/31.3fb0dc85.js",
    "revision": "f4b614de2110c09be8c26d08c8be59a4"
  },
  {
    "url": "assets/js/32.bdab1087.js",
    "revision": "559abe9c94a04c393d3b03f134e2da09"
  },
  {
    "url": "assets/js/33.bbacfbb6.js",
    "revision": "dcc29e875f22113fb4fc17670b9b81bf"
  },
  {
    "url": "assets/js/34.6a076fe0.js",
    "revision": "b1a1bca23cee8fd38766ea0e42779514"
  },
  {
    "url": "assets/js/35.0408de24.js",
    "revision": "c07248b6a439f8b92e2aa46199858c78"
  },
  {
    "url": "assets/js/36.dfe081b7.js",
    "revision": "cbc3b03e3baa517a65369baf234b9449"
  },
  {
    "url": "assets/js/37.c86a5d6d.js",
    "revision": "4f52d8d038d474c9dfd817593095e255"
  },
  {
    "url": "assets/js/38.8ff34ddd.js",
    "revision": "f33ce4ccbb3d7d24bdb0495d63288828"
  },
  {
    "url": "assets/js/39.ada6053a.js",
    "revision": "6abdfea0aab87f70f7536eb4f32c7c2c"
  },
  {
    "url": "assets/js/4.c72cab8e.js",
    "revision": "5c0a3bf29b77ca3517630be796f84da9"
  },
  {
    "url": "assets/js/40.db1d04fa.js",
    "revision": "c0f773a7c37d8a399626e778896705b7"
  },
  {
    "url": "assets/js/41.03d365a9.js",
    "revision": "9729a083fe5235702c11138a46c203af"
  },
  {
    "url": "assets/js/5.0ce1b60b.js",
    "revision": "efb060de1afc14feb0aee7e4cce8ae31"
  },
  {
    "url": "assets/js/6.ea964c9d.js",
    "revision": "709c9374cbf9cda7465ecf53fbfc244c"
  },
  {
    "url": "assets/js/7.57a025a1.js",
    "revision": "8f4ea0ec21b154aad6b7adc41e048bc7"
  },
  {
    "url": "assets/js/8.344d0b07.js",
    "revision": "c24f9ccf43b6a80939ff127ebc56c80e"
  },
  {
    "url": "assets/js/9.5f3bfc2c.js",
    "revision": "e1bb53d68ed113e391d66f1d3789503e"
  },
  {
    "url": "assets/js/app.d19024ac.js",
    "revision": "fa5d7995a043ade10dadb1b4665af352"
  },
  {
    "url": "assets/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/lifecycle/2.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "BuiltInComponents/keep-alive.html",
    "revision": "4e45966e3e273a4286b3f4802883f31b"
  },
  {
    "url": "complie/codegen.html",
    "revision": "4ab6dab280c5bd302e35b5aeda9c71a1"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "46ad3fb3cbdcb3adb22f4c63aa3a00a5"
  },
  {
    "url": "complie/index.html",
    "revision": "92b3c32c0b854887e48ab50d1b44666d"
  },
  {
    "url": "complie/optimize.html",
    "revision": "8d9f429cff364ba9a19de4f2e72f3557"
  },
  {
    "url": "complie/parse.html",
    "revision": "eca2ed977b22b462c8c7b5a08432a409"
  },
  {
    "url": "complie/summary.html",
    "revision": "59321d6d1a91b2eb07e82ca4ad58aa7a"
  },
  {
    "url": "complie/textParse.html",
    "revision": "c1a68dd1e6abffdc3d90ddecac610a07"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "28001a046e65fbde909e984d9815baf1"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "869734cf2895df8e112191d1dc72f6a5"
  },
  {
    "url": "filter/index.html",
    "revision": "62866164702463d788dc7598669fedcb"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "277214ded76145abb49c1ee60e785abf"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "3cd4762249e9d547b64b930430e1375b"
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
    "revision": "440a8d02e29fd8413136f16b0ef50818"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "3903fb9138ac1aac5a44b1ec91faeb38"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "1923bb2936e503ac928faa22a2f74714"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "8dd5765575d9e364dae0a1dc1a9963a3"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "007fa2eb94bbd8c014b606eec865399b"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "3d8910a63b134437b20a1cae225bb2f3"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "bdf85bba2088ab591bc261edefd86009"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "3a43ee99da174806bcda36bffc598a7b"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "aba62e51ee7c28a01063d0f550da057b"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "dfb4cdabd48d92b1e69cff370f09f2c3"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "4281cdcb406323be16cf09d8d734f04e"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "f7aa761c19990b7afbaed18d907452f9"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "794c1bd1de7eb4a89f54ffc847a0494c"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "f82dbd441f13e3b5ecec6e828ba7e473"
  },
  {
    "url": "reactive/index.html",
    "revision": "59c80e4b8a9e6ac39007710168b1220f"
  },
  {
    "url": "reactive/object.html",
    "revision": "76f0614e2ce81e0c48a9eca2328d23b2"
  },
  {
    "url": "start/index.html",
    "revision": "9be8ae9b1939205f48f8df04819a516d"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "db8655030c92fdb42425b3aaedefaaa8"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "877ee590111fdc76fa2bc32ec4df4c5a"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "164d7b4025b073259264ff792738ae5c"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "792199e9166ad8cc6828c0bb94b7d132"
  }
].concat(self.__precacheManifest || []);
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
