/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","f434c17821c2872cc1188d99738531e5"],["/about/index.html","4e5d95aef05f513b2e593a3d5837d4c4"],["/assets/css/main.css","ece10e1ac7d9e87242a8df741a3016dd"],["/assets/img/favicon.jpg","5b8a02e56415a567a897d0cef37ffe01"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","8c1f18ff3a099d7c744d3a496c21706a"],["/assets/img/icons/favicon-32x32.png","815fc4684954bb999340edecaaff8842"],["/assets/img/icons/icon-github.svg","46d089384d19077a7990aa13bbb16643"],["/assets/img/icons/icon-instagram.svg","386f48e7440160096385614b2ec91930"],["/assets/img/icons/icon-twitter.svg","d2508d22e42c11e177ae430d33b343d9"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","5aa56ac96362cc1bb12c2848a6b6c1b7"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/img/uploads/2017/12/3D167A44-2EB9-4A59-A9DE-4067A6C1CE8F-1024x485-100x100.jpg","5d34468806d69e912d7ac163e259234b"],["/assets/img/uploads/2017/12/3D167A44-2EB9-4A59-A9DE-4067A6C1CE8F-1024x485-1024x485.jpg","434e494297f7f66a661ca89ec715016d"],["/assets/img/uploads/2017/12/3D167A44-2EB9-4A59-A9DE-4067A6C1CE8F-1024x485-150x150.jpg","b3583175c5a4b91e9f34f1e8aad377b2"],["/assets/img/uploads/2017/12/3D167A44-2EB9-4A59-A9DE-4067A6C1CE8F-1024x485-300x142.jpg","b631a9730f5496c68dc872402315483a"],["/assets/img/uploads/2017/12/3D167A44-2EB9-4A59-A9DE-4067A6C1CE8F-1024x485-768x364.jpg","5d9df2a76d894abd06833c0baae3b7ff"],["/assets/img/uploads/2017/12/3D167A44-2EB9-4A59-A9DE-4067A6C1CE8F-1024x485.jpg","e81518cd1f89bcd1149e94d862596fba"],["/assets/img/uploads/2017/12/crontab-100x100.png","0da74248a3f91e6b43a78fcc31f95e98"],["/assets/img/uploads/2017/12/crontab-150x150.png","b891f8dd929b098c2bc13b35b7034ab0"],["/assets/img/uploads/2017/12/crontab-300x127.png","166fbacf54007f952f89560fbaae12e5"],["/assets/img/uploads/2017/12/crontab-768x325.png","4fdc5c82c8a6e00e693e5ebb4d158848"],["/assets/img/uploads/2017/12/crontab.png","2890ba30efc78b2b906b16eaf7830f28"],["/assets/img/uploads/2017/12/ddus-100x100.png","9f14f313f79af079371f5a6b858aa32c"],["/assets/img/uploads/2017/12/ddus-150x127.png","eec59060a6ca7bf688252e0ee436a246"],["/assets/img/uploads/2017/12/ddus-300x43.png","b0530a2ede3d09b97dd742ca0e0171cd"],["/assets/img/uploads/2017/12/ddus-768x109.png","4eda5b34fd6ca6c03e50a20341dfd6e2"],["/assets/img/uploads/2017/12/ddus.png","696a58151ba2f03cd3ef9828a1d47f76"],["/assets/img/uploads/2017/12/linode4628232-100x100.png","c8edb0292c30ce3fa263865d464a173b"],["/assets/img/uploads/2017/12/linode4628232-150x150.png","66bc42fb9d42ef1339c87599dc509e27"],["/assets/img/uploads/2017/12/linode4628232-2-100x100.png","8b620c49bb930db9dc44c539c6921091"],["/assets/img/uploads/2017/12/linode4628232-2-150x150.png","d4912d862e7b0cfa04265ebdef16dd84"],["/assets/img/uploads/2017/12/linode4628232-2-300x144.png","ecd3949b71e7d42b3b17b15fd78bdde1"],["/assets/img/uploads/2017/12/linode4628232-2-768x368.png","0c0ae97c0229b93db3afe318a25653f6"],["/assets/img/uploads/2017/12/linode4628232-2.png","05c7180038734945b480dc08b4d1d675"],["/assets/img/uploads/2017/12/linode4628232-300x123.png","cdf8bdc09d0c481b99d7245d05dd1aa4"],["/assets/img/uploads/2017/12/linode4628232-4-1-100x100.png","3f8eee83f718ae03ab7a08d2103e1d87"],["/assets/img/uploads/2017/12/linode4628232-4-1-150x150.png","e5e818e73e376960ebf50fbf1d999fbe"],["/assets/img/uploads/2017/12/linode4628232-4-1-300x128.png","bf93cf893efb18fcac129ca340b97b93"],["/assets/img/uploads/2017/12/linode4628232-4-1-768x329.png","fbf95702e6aea224fc22781f59b444e1"],["/assets/img/uploads/2017/12/linode4628232-4-1.png","830028ec2515d0051e089f44c64638c4"],["/assets/img/uploads/2017/12/linode4628232-4.png","d41d8cd98f00b204e9800998ecf8427e"],["/assets/img/uploads/2017/12/linode4628232-768x316.png","425d737317b581e0e97aa60cbcaa3175"],["/assets/img/uploads/2017/12/linode4628232.png","104c7f04f45d4c0182d8b8433ad9c324"],["/assets/img/uploads/2017/12/rc-100x100.png","ddeabb7bde889722eb721aef223dee38"],["/assets/img/uploads/2017/12/rc-150x150.png","5f9e4dfcdca0bc88eafc0d7ea9f13853"],["/assets/img/uploads/2017/12/rc-300x82.png","d22e11341c01f62e338887edb2584513"],["/assets/img/uploads/2017/12/rc.png","10501d4b825b6a29ad30d07f2f37f9c3"],["/assets/img/uploads/2017/12/微信图片_20171225175111-1-100x100.jpg","e65e393a1df56fa7e00014911220ee87"],["/assets/img/uploads/2017/12/微信图片_20171225175111-1-1024x576.jpg","6de04f2d6a421cecdd4627ddad0af389"],["/assets/img/uploads/2017/12/微信图片_20171225175111-1-150x150.jpg","65e7f015bd342e1813d939fd59ee6070"],["/assets/img/uploads/2017/12/微信图片_20171225175111-1-300x169.jpg","c1bd64b51688de839372527877fbe4b3"],["/assets/img/uploads/2017/12/微信图片_20171225175111-1-768x432.jpg","b7bcf345270f9d9debafeaa6a38a7ab8"],["/assets/img/uploads/2017/12/微信图片_20171225175111-1.jpg","80a27783975bf78610d5b57c8d957e20"],["/assets/img/uploads/2017/12/微信图片_20171225175111-100x100.jpg","e65e393a1df56fa7e00014911220ee87"],["/assets/img/uploads/2017/12/微信图片_20171225175111-1024x576.jpg","6de04f2d6a421cecdd4627ddad0af389"],["/assets/img/uploads/2017/12/微信图片_20171225175111-150x150.jpg","65e7f015bd342e1813d939fd59ee6070"],["/assets/img/uploads/2017/12/微信图片_20171225175111-300x169.jpg","c1bd64b51688de839372527877fbe4b3"],["/assets/img/uploads/2017/12/微信图片_20171225175111-768x432.jpg","b7bcf345270f9d9debafeaa6a38a7ab8"],["/assets/img/uploads/2017/12/微信图片_20171225175111.jpg","80a27783975bf78610d5b57c8d957e20"],["/assets/img/uploads/2018/01/Full-Stack-100x100.png","a5b851c9879ba0413deded1f82bade69"],["/assets/img/uploads/2018/01/Full-Stack-1251x1200.png","14893d8849fbc3b878df1501a822b5bb"],["/assets/img/uploads/2018/01/Full-Stack-150x150.png","5a90c4aafd29947657f0f0bf85260152"],["/assets/img/uploads/2018/01/Full-Stack-174x300.png","7fef42f4eb474b4b515fca0dc69d9add"],["/assets/img/uploads/2018/01/Full-Stack-595x1024.png","7ddc46a20006f81cd64b3343dcaa4e19"],["/assets/img/uploads/2018/01/Full-Stack-768x1321.png","fb88356ce4d3c2372e45704d4559e078"],["/assets/img/uploads/2018/01/Full-Stack.png","ccfbd0d03935492aa80ae4ced90c6a60"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-23-at-10.01.06-1024x459.png","a3fe5ef9ce2ebc58d7339300ec5a4ad1"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-23-at-10.01.06-150x150.png","e219298fa45f519f442de2bb8e3d0587"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-23-at-10.01.06-240x145.png","46a35b14858b5a9d622d2df57754c159"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-23-at-10.01.06-300x135.png","fab9ca81de3c8c79233b8fca4e429379"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-23-at-10.01.06-768x345.png","65fcfc2f54514ea8f0e41fbccb647732"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-23-at-10.01.06.png","beacb53121d81df868560d60679d43aa"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-16.22.59-150x150.png","52dfa9cf501fc4c3abbe9e5fa3fdccb4"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-16.22.59-240x145.png","ce74f08ee0811d4d8a000b500da90676"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-16.22.59-300x164.png","1152213e468abf78cbe118d9ab1a14f2"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-16.22.59.png","cff35246d72e3557372c943f8968d933"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.39.16-1024x231.png","f3073cdf3052dd4accaf1b5b41844585"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.39.16-150x150.png","e7242ae0bd5487dd1164d3b6d0b43c8a"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.39.16-240x145.png","77a587c2f4466e7f1086a0632f3cc349"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.39.16-300x68.png","8a2619ade1db8871eb9ddf439e0683d1"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.39.16-768x173.png","b8ec8ba28e997a6dd89571251a248702"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.39.16.png","768aa1add52145ccabe3fe0c9e17bfa6"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.54.00-1024x180.png","ce15c9acf4bd121c16006a03a195cbf9"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.54.00-150x150.png","d28427e0d59f2a68fce863db164678b0"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.54.00-240x145.png","96ffe5ae8ff6b930dc25125a17ee0dd8"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.54.00-300x53.png","addf48779f3c7ea3ffdffeed1a1df5f2"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.54.00-768x135.png","ab939efad3e41f966ad7a75b011c87d4"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-27-at-17.54.00.png","8fc74538aa4a84379faecc50108a6966"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.40.40-150x106.png","2ff4911b975c831a2ae967e3ecd3d12d"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.40.40-240x106.png","c40fcedd825e1f0dfe762b32e7f36394"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.40.40-300x37.png","4d02a788dc1f4bb35d65b39e3065c9b9"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.40.40-768x94.png","43d03a22872fbee2a0fff55a0b9801f4"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.40.40.png","bf9135242c0c0ab803a22cd379a496e5"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.46.48-1-1024x617.png","5c01a617d2a1238f7024e44b08c6c497"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.46.48-1-150x150.png","c339a5d5650105127345a178be2195aa"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.46.48-1-240x145.png","4dcc4bf7e05122e4ab1eeb9c61dd60f1"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.46.48-1-300x181.png","812c5d76c551ee8a7431cb88f3ffe113"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.46.48-1-768x462.png","fb0361bbd556bde8b9f1d73cc1574015"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-10.46.48-1.png","f08f02b123b55a2a3fa40f79b0a6185f"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-15.09.10-150x150.png","d36ad5d58c329729d360cf707edce958"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-15.09.10-240x145.png","f2435879d1dd3f06ca0846c5a7735f76"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-15.09.10-300x202.png","293837b46eabb2d19236c282b07adfc6"],["/assets/img/uploads/2018/03/Screen-Shot-2018-03-28-at-15.09.10.png","31ba27816853be1529e0e6319c866990"],["/assets/img/uploads/2018/03/client-1024x709.png","9ba2b951a1b5354f6c3940b4f3e41521"],["/assets/img/uploads/2018/03/client-150x150.png","a54aae508d8483aabb985eaaff3638a9"],["/assets/img/uploads/2018/03/client-240x145.png","30360b7610df501f3519bbef15107c55"],["/assets/img/uploads/2018/03/client-300x208.png","f7c3f36e5df1d21399c3d67e7af90036"],["/assets/img/uploads/2018/03/client-768x532.png","8adba2af896e49e8c957a89ed9ec9b11"],["/assets/img/uploads/2018/03/client.png","499b050a828cd9cfc39d8c48c411408b"],["/assets/img/uploads/2018/03/codestructure-150x150.png","6a1243c319999053565ad4ab91497334"],["/assets/img/uploads/2018/03/codestructure-203x300.png","823aa93eafc35f7d34897600633f77b2"],["/assets/img/uploads/2018/03/codestructure-240x145.png","bf4b1cb5e432907741ec82006b4b833c"],["/assets/img/uploads/2018/03/codestructure.png","13d8007837d7b2d54b39b6a462a82a0d"],["/assets/img/uploads/2018/03/killmysql-100x100.png","04f4e0875f463abb16930aac35c93748"],["/assets/img/uploads/2018/03/killmysql-1024x280.png","959ed92e0899517bd1fd3e2098778e84"],["/assets/img/uploads/2018/03/killmysql-150x150.png","6b9e7b319ecc42ca2fdab9049fb32447"],["/assets/img/uploads/2018/03/killmysql-300x82.png","454bb65eedb101092faf1f5f49dd0fdc"],["/assets/img/uploads/2018/03/killmysql-768x210.png","fdef4400e5a95e10568cad7519268981"],["/assets/img/uploads/2018/03/killmysql.png","8019f211175fb33a14ea0cac80a05c6f"],["/assets/img/uploads/2018/03/killmysql2-100x100.png","a1739a80ac6af0c83b274a2f4fb305fa"],["/assets/img/uploads/2018/03/killmysql2-150x128.png","187eabd66181658890517b1253a270ec"],["/assets/img/uploads/2018/03/killmysql2-300x68.png","0a83d2c3e840bf952f2330a4c1980945"],["/assets/img/uploads/2018/03/killmysql2.png","c3c5d5a2e702d67327ac9788ec624f2c"],["/assets/img/uploads/2018/03/oauth-p1-150x150.png","06a18ce9d1c9e287929929a8e13d4543"],["/assets/img/uploads/2018/03/oauth-p1-240x145.png","e30e2716d73195d9d9aad3de639e33dd"],["/assets/img/uploads/2018/03/oauth-p1-300x191.png","952ee353f8be96e1ea6cb78234eb06e7"],["/assets/img/uploads/2018/03/oauth-p1.png","63bf2510c033ed26317644a712f06f2a"],["/assets/img/uploads/2018/03/oauth-p2-150x150.png","aa6f494489d14074f9382009945f6c15"],["/assets/img/uploads/2018/03/oauth-p2-240x145.png","3eff6dfefd728ce7925da156df562c06"],["/assets/img/uploads/2018/03/oauth-p2-300x192.png","73e520dbab37a74dc030406a9e287a62"],["/assets/img/uploads/2018/03/oauth-p2.png","191d44e8f1b73719fe978d1d2ec6fb9e"],["/assets/img/uploads/2018/03/oauth-p3-150x150.png","2ca0ffc659f4e20c54ab967cdf633bfb"],["/assets/img/uploads/2018/03/oauth-p3-240x145.png","b52fcb82ce95baee698ef0d6c9a866a2"],["/assets/img/uploads/2018/03/oauth-p3-300x267.png","607ab9c6740eb99de4335dc1e73776ff"],["/assets/img/uploads/2018/03/oauth-p3.png","dbc4650eb989dc5ef6c93a0c20804a8f"],["/assets/img/uploads/2018/03/oauth-p4-150x150.png","bb6d4f90f7b5c323e4f78f55a52d701b"],["/assets/img/uploads/2018/03/oauth-p4-240x145.png","db7a4b223ecbf19f75230e789ccd59d5"],["/assets/img/uploads/2018/03/oauth-p4-267x300.png","a596e457430ccf32b5692de86027f92a"],["/assets/img/uploads/2018/03/oauth-p4.png","5db4002ef07925303c0e34a27e5fce9d"],["/assets/img/uploads/2018/03/php-100x100.png","a597de4bfb728365596e4703dec547ed"],["/assets/img/uploads/2018/03/php-1024x111.png","9bc10194cde98896448b59e148320ebc"],["/assets/img/uploads/2018/03/php-150x150.png","86b10cf3ebc49c57f29e9414560ca88a"],["/assets/img/uploads/2018/03/php-300x33.png","fa28ff81ac6f5ed6073705e6fa087f71"],["/assets/img/uploads/2018/03/php-768x83.png","3ec8a0d98fec03d640998675f6861edf"],["/assets/img/uploads/2018/03/php.png","3ccfc932b104f538ac9e352c18606251"],["/assets/img/uploads/2018/03/server-1024x616.png","382765932ac69df2ed3db64d11148cab"],["/assets/img/uploads/2018/03/server-150x150.png","17192623a9f0befe438fd22a03862df0"],["/assets/img/uploads/2018/03/server-240x145.png","4b9f2260307e5d7139e18eb4cf6585f4"],["/assets/img/uploads/2018/03/server-300x181.png","4482363cc33ea0934d30cb6e0a5d9edc"],["/assets/img/uploads/2018/03/server-768x462.png","bfff9f710223fd1265fe8e6dd7f27ccc"],["/assets/img/uploads/2018/03/server.png","cc875f9db3c8c71480421174c2f1143d"],["/assets/img/uploads/2018/03/themes_find-100x100.png","7434261ad63870ed70cc50e42272d8db"],["/assets/img/uploads/2018/03/themes_find-1024x484.png","1aff896836c2b57f4b59534219a90443"],["/assets/img/uploads/2018/03/themes_find-150x150.png","15bbc2e425d8321f7257601ede4cc47e"],["/assets/img/uploads/2018/03/themes_find-2000x1172.png","21099c7b1c945b9782abe26d77eb4b11"],["/assets/img/uploads/2018/03/themes_find-300x142.png","538c3871477530ea2b7e81c5dc65531c"],["/assets/img/uploads/2018/03/themes_find-768x363.png","465d72fc1ddcaa63b6d3cd4a9d7fa366"],["/assets/img/uploads/2018/03/themes_find.png","b4a3e7a714c37545a008c54e30fde036"],["/assets/img/uploads/2018/03/截图-150x150.png","aea28cc12866158a84c56b16cb145177"],["/assets/img/uploads/2018/03/截图-228x300.png","7a78262a42e93fa0fe49921910aebfb9"],["/assets/img/uploads/2018/03/截图-240x145.png","46ab68ab7a3d1ab4acd0bd09c03f4dd9"],["/assets/img/uploads/2018/03/截图.png","e37b73d98d18179fb83b0f417c9c43d9"],["/assets/img/uploads/2018/04/1-1024x239.png","e848776f06927352d4970ada5c56d444"],["/assets/img/uploads/2018/04/1-150x150.png","3b69b94e80169fe0d4ceaaa89849978f"],["/assets/img/uploads/2018/04/1-240x145.png","3b087b0a50db50de26f771536532b801"],["/assets/img/uploads/2018/04/1-300x70.png","9d2eb370b2d78aa5b68429e7f31e0ad4"],["/assets/img/uploads/2018/04/1-768x180.png","c7b1f1c68b6730ca5d4843529fd58200"],["/assets/img/uploads/2018/04/1.png","117ebe1cef26fec8e72a52c647ccff8b"],["/assets/img/uploads/2018/04/123-1024x716.png","8aaec9f268b886afe61b91fa7770be71"],["/assets/img/uploads/2018/04/123-150x150.png","3b9caad6a418d1580655f40b12dfc614"],["/assets/img/uploads/2018/04/123-240x145.png","a0189714a4726ffa9162523987ab92b9"],["/assets/img/uploads/2018/04/123-300x210.png","170e6f87959ed26bd009d5599fd28740"],["/assets/img/uploads/2018/04/123-768x537.png","76b9a5c48a34a4fe70555b936b1e7ece"],["/assets/img/uploads/2018/04/123.png","0805bc0d8d834232f019ae48e84408bb"],["/assets/img/uploads/2018/07/1200-1024x576.jpg","db433f0180d27d5d617b950392d48d08"],["/assets/img/uploads/2018/07/1200-150x150.jpg","f48af69eb05be1e8e88a13e6c51ea42c"],["/assets/img/uploads/2018/07/1200-240x145.jpg","7ed7696787b2f63389d8dbef14cbaf47"],["/assets/img/uploads/2018/07/1200-300x169.jpg","3fb05608c8c3624d863800baad2a688b"],["/assets/img/uploads/2018/07/1200-768x432.jpg","4dc7839f62b613e539b156bd1a9a3c9b"],["/assets/img/uploads/2018/07/1200.jpg","aa3fb8a80137818eb0fb93492b96683a"],["/assets/img/uploads/2018/07/240240-150x150.jpg","0640cffbe1aca23e9106bec47ca0027c"],["/assets/img/uploads/2018/07/240240-240x145.jpg","62011f604ef62d8ac4a9b0361815c48b"],["/assets/img/uploads/2018/07/240240.jpg","5a1d572f50a5140778a2888840e91e29"],["/assets/img/uploads/2018/07/600-150x150.jpg","2b7c6849cc99c02c0530cb4e295980e2"],["/assets/img/uploads/2018/07/600-240x145.jpg","2328774998372ed9b1f2d74e00eb6829"],["/assets/img/uploads/2018/07/600-300x300.jpg","ae53fd903a0f34e6cdec39bd141b088b"],["/assets/img/uploads/2018/07/600.jpg","054441883a6a36b52900d506a7da7a4a"],["/assets/img/uploads/2018/07/a-1024x166.png","37f9be6d280334d6fe9123891cbfbf0f"],["/assets/img/uploads/2018/07/a-150x150.png","46aa3c573078fa6856c4f340c059f9e7"],["/assets/img/uploads/2018/07/a-240x145.png","f818a7d74d91f47af0d8c652faa646fd"],["/assets/img/uploads/2018/07/a-300x49.png","a2d6dc1c15b9a8f00504a4a5d9161576"],["/assets/img/uploads/2018/07/a-768x124.png","77ffe9e664822a0754af3ee7c1fa68a1"],["/assets/img/uploads/2018/07/a.png","88383f863c6f04b41f87eb355e2323bf"],["/assets/img/uploads/2018/07/b-1024x641.png","909e024394483b28a116e2cf8cdcb84e"],["/assets/img/uploads/2018/07/b-150x150.png","0a1aadc0480e6c5720331eb248f2fd25"],["/assets/img/uploads/2018/07/b-240x145.png","b422da221855989c58899493acc266d3"],["/assets/img/uploads/2018/07/b-300x188.png","4ea396bd0dae5cab46b0b1fc9dde8eda"],["/assets/img/uploads/2018/07/b-768x480.png","35af9d7060498c9a43b61c68d4a15644"],["/assets/img/uploads/2018/07/b.png","4745cbe0ca888ced94fd17620de9f71e"],["/assets/img/uploads/2018/07/cropped-600-150x150.jpg","d96b2d0581b9a204f8acebfe009f8e49"],["/assets/img/uploads/2018/07/cropped-600-240x145.jpg","faff644b1c3699dd1eef00fab30a0814"],["/assets/img/uploads/2018/07/cropped-600.jpg","7961e20b0046081303bad5cb7284d6cd"],["/assets/img/uploads/2018/07/cropped-DSC04063-1-150x150.jpg","ee89c126252eb579933e8cb6181df14c"],["/assets/img/uploads/2018/07/cropped-DSC04063-1-240x145.jpg","1d91daf4ca0ac8d3e0f4017b3e5a078c"],["/assets/img/uploads/2018/07/cropped-DSC04063-1.jpg","45a6922c0975c889300bc7d9aa1e9bdf"],["/assets/img/uploads/2018/07/cropped-DSC04063-150x135.jpg","bca32a311293ca8115fae3cb83b701c2"],["/assets/img/uploads/2018/07/cropped-DSC04063-2-1024x256.jpg","122f0534565ed7c2a8a7f979074b3e47"],["/assets/img/uploads/2018/07/cropped-DSC04063-2-150x150.jpg","8de03dfd3306c79462c2c4cc82c6e9a9"],["/assets/img/uploads/2018/07/cropped-DSC04063-2-240x145.jpg","85efaf7cdbeba05e4f258dd42c70213b"],["/assets/img/uploads/2018/07/cropped-DSC04063-2-300x75.jpg","ee0c5c90be4344505c35267b68226c9b"],["/assets/img/uploads/2018/07/cropped-DSC04063-2-768x192.jpg","bbfb64e85e3b950f42defce1893292c2"],["/assets/img/uploads/2018/07/cropped-DSC04063-2.jpg","595569914681882a93a595d6e564910f"],["/assets/img/uploads/2018/07/cropped-DSC04063-240x135.jpg","a9faad53330057648a7597370f9b7e1f"],["/assets/img/uploads/2018/07/cropped-DSC04063-3-150x150.jpg","b88a557a84ff94067341e98aedcb8184"],["/assets/img/uploads/2018/07/cropped-DSC04063-3-240x145.jpg","a69c11f71412e59cfbf742ccdb949836"],["/assets/img/uploads/2018/07/cropped-DSC04063-3.jpg","bd9215d55c29b4d53fb95659a53bd9f0"],["/assets/img/uploads/2018/07/cropped-DSC04063.jpg","8887a7ce0db66e4f4ff0a73764e7f375"],["/assets/img/uploads/2018/07/cropped-logo-150x150.jpg","1628d6f981e3bf4946c793b38c48ba91"],["/assets/img/uploads/2018/07/cropped-logo-240x145.jpg","a012a37a5dd3a48494fc7f8026d01b79"],["/assets/img/uploads/2018/07/cropped-logo.jpg","e5a649d74e258358a7f85ac3a4d539e2"],["/assets/img/uploads/2018/07/lowerhutt-150x150.jpg","d773dc58140d341c9c920466c4497069"],["/assets/img/uploads/2018/07/lowerhutt-200x125.jpg","5a6a61e351e1c704c283b576b0707413"],["/assets/img/uploads/2018/07/lowerhutt-300x225.jpg","b00d461602f234d9dc9287f633794f70"],["/assets/img/uploads/2018/07/lowerhutt-768x576.jpg","8702d954a1f0c526bce316d5aa45d4ec"],["/assets/img/uploads/2018/07/lowerhutt.jpg","b71418a452e6a853f0bfe4d32eba9f31"],["/assets/img/uploads/2018/07/mocha-test-150x150.png","29db1e76ae95cf1e7dc44d28031bb430"],["/assets/img/uploads/2018/07/mocha-test-240x145.png","7ca6b58455dd579cf39a628609f4b57d"],["/assets/img/uploads/2018/07/mocha-test-300x147.png","f5022e829a2b2e41eab750ce980121ca"],["/assets/img/uploads/2018/07/mocha-test-768x375.png","9f20cef95d491de30f0306c76aea0ba4"],["/assets/img/uploads/2018/07/mocha-test-e1532255632563.png","b0c6c16b53d3979e1c9243773af35676"],["/assets/img/uploads/2018/07/mocha-test.png","a5399f0f8f51e1234e8188dba3e29cad"],["/assets/img/uploads/2018/08/Autocomplete.js","c9f0e05bb33d66ac78a2b8b77eea15c7"],["/assets/img/uploads/2018/08/Chengdu-Map-150x150.jpg","10de1f336ba657bd4b8e5c8bb41500ff"],["/assets/img/uploads/2018/08/Chengdu-Map-200x125.jpg","5d021c160f54c54316067ed2777a9658"],["/assets/img/uploads/2018/08/Chengdu-Map-300x253.jpg","d0d0404a3392a67504a822b69832a693"],["/assets/img/uploads/2018/08/Chengdu-Map.jpg","2e9e0c4c40aa22018908f9f28a0f8d1f"],["/assets/img/uploads/2018/08/Suggestions.js","6cb48e75fd530dca8e8c9f62e1060756"],["/assets/img/uploads/2018/08/bianlian-150x150.jpg","228dce7c80f2266aff6bb1a79cf03f9a"],["/assets/img/uploads/2018/08/bianlian-200x125.jpg","05c4f5fd57dc2b92923bae2716dab850"],["/assets/img/uploads/2018/08/bianlian-300x182.jpg","9c5cbdb42e33615be8e6d7e7b4fdd4b0"],["/assets/img/uploads/2018/08/bianlian.jpg","cf222a1392c7c5670affd4372a3c62cd"],["/assets/img/uploads/2018/08/cookies-1024x246.png","f05ab19ce6065e6b1bbdb919e78f399a"],["/assets/img/uploads/2018/08/cookies-150x150.png","f661ffc7d20152a1f3848c461801389a"],["/assets/img/uploads/2018/08/cookies-200x125.png","10377e1a544c9da1b0481132cf376980"],["/assets/img/uploads/2018/08/cookies-300x72.png","b13f5fbc33b4a61cf301cffd01b03259"],["/assets/img/uploads/2018/08/cookies-768x184.png","7068362d5496833a6ea4117f13e42769"],["/assets/img/uploads/2018/08/cookies-e1535360014179.png","04139f7220ffa072d5a9fcee5874e43a"],["/assets/img/uploads/2018/08/cookies-e1535360025494.png","d8aa36d88ca6ccfbb8ea133bb08c6bd0"],["/assets/img/uploads/2018/08/cookies.png","7b5953fd70bfea95f5275ab30bb6ce40"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-1-1024x307.jpg","e53934fffe3e19c83fad3707effc96a8"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-1-150x150.jpg","0b417148afe4b5d4032f7c4e21e6cd76"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-1-200x125.jpg","b6050683087e0403963afda6ea45b722"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-1-300x90.jpg","69979d2268bf399d52d89e7b0cb51f49"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-1-768x230.jpg","7cec750f68a8a13a785c0fc9d2569bed"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-1.jpg","63f332ae9eefc3cf017de021c656ace8"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-1024x365.jpg","291e22fb1a8565b5639394080728b498"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-150x150.jpg","d186153e90ce1acedea7677845d05256"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-200x125.jpg","da756a7aed172536ccb8d86d29081fbd"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-300x107.jpg","b748b66a373dc2d72ba8c7dd6be9f99a"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand-768x274.jpg","c3a53e9599e3cf65771a0c3cbbcfb205"],["/assets/img/uploads/2018/08/cropped-Lake-Tekapo-New-Zealand.jpg","a9c861cba0c2954951e0bdd47bb3c3fc"],["/assets/img/uploads/2018/08/panda-150x150.jpg","7c74320c1dc2174a13c55c0782b541a9"],["/assets/img/uploads/2018/08/panda-200x125.jpg","7bacbf1aafd42a4d70f849899be6f8fe"],["/assets/img/uploads/2018/08/panda-300x210.jpg","85569ccf1cf488965d21422ae0d1898b"],["/assets/img/uploads/2018/08/panda.jpg","0da5b382e6849a060be8257efe8a3871"],["/assets/img/uploads/2018/08/view1-1024x366.jpg","d13636862c3e4f296ad00c02d5c48d91"],["/assets/img/uploads/2018/08/view1-150x150.jpg","c0a5bf2de4a5455dfbfa17e26e6fb129"],["/assets/img/uploads/2018/08/view1-200x125.jpg","d0ce0b2d142f4442286ca95604448f1f"],["/assets/img/uploads/2018/08/view1-300x107.jpg","296777c00b5a7fa26fbda82d4bed3a72"],["/assets/img/uploads/2018/08/view1-768x274.jpg","5ea171d36bcf14ee8c80c1a41c1f4b2e"],["/assets/img/uploads/2018/08/view1.jpg","c4ff566743ae3fec1969ea106c00870e"],["/assets/img/uploads/2018/09/trending-1024x528.png","51df805df9b508d85affafa52513919f"],["/assets/img/uploads/2018/09/trending-150x150.png","5d396f5ee7943f33b6bf76b758957be3"],["/assets/img/uploads/2018/09/trending-200x125.png","b81a1b742ac69cb4fae32ee407e7ff8d"],["/assets/img/uploads/2018/09/trending-300x155.png","f3f687c594f360e6fd8b2c577fd7f506"],["/assets/img/uploads/2018/09/trending-768x396.png","8453f1ce387750b185078ccc17a718d5"],["/assets/img/uploads/2018/09/trending.png","a6a7a1a774e5bb00805f6e42edd243f0"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/categories/index.html","bfa87f1e1a377986a752fc348ad4edc4"],["/contact/index.html","8431d3df13c389cc0725f1b2cbf9cb54"],["/getting-started/index.html","c893a66ea0745c018d23fc8095839234"],["/index.html","144e1289ed6dc9ffa7ca22dd35792737"],["/markdown-cheatsheet/index.html","c14a4c3a2db49af44af3ddc0046c3c91"],["/migrate-from-wordpress-to-jekyll/index.html","9d47d6e0510eb46f0e91470754a2c5b9"],["/redux-observable/index.html","ba349aebe0f0ca93887aa321b85397b5"],["/sw.js","ed8e3a9e307c1d412ebcbfb8c7c60f8a"],["/welcome-to-jekyll/index.html","75065526651c6edc7866325ebcc1cc63"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







