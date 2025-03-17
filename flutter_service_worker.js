'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6af79a9df5941c795c9786699207f795",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "837c61a9f2db4166e98c3ef684b85198",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cffe5ba4ee33e01e07a45f1cd1cfe72d",
".git/logs/refs/heads/main": "a867b53bf3c8a0e4cb634d1c5c5421f9",
".git/logs/refs/remotes/origin/main": "ca72b802a87762d43c9c95f9578e7a80",
".git/objects/01/1a03e9e8f0fba82759987ab136712f4b1f8927": "4d9c904a243d89f4b24c5da48d6dd781",
".git/objects/02/a1c6b2dfc7c13daaf1f5b11c21a721bfe974ba": "bbd3effd8728ec223e57f1754a75814d",
".git/objects/05/58a53c5f15ba93c3acd09f5dd2684ed7f48c45": "1fa9c9172d4b7e614f2938c3fe9593b2",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/dc6da0207cde1cdeb0454d6b8fe420151f54ba": "8c4eeb101718982bd7f7704f73328056",
".git/objects/08/82d8751756a4620bb959eec867d5e9f1cba67f": "fb288c5a4482de8a35576d2ffbfbfa98",
".git/objects/0c/107689132012976cd73718eddd738f4c9d7227": "644b70f4a4923f08299a955bcd3a6c27",
".git/objects/0c/37594409355f44e27de8152dd5be76567012e6": "be6abe3ed5650c087848c03a14b2e9df",
".git/objects/0e/91384c02f12dde98f5efd8e7539377935b0856": "d3a337411abc85f39fbd163ce0b70029",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/ede61cf576131317ac17b2344b123a196cb8b4": "84bcf7ad6d651fad1d3a2aaa8644cebd",
".git/objects/12/119a538f78cc98ba539b432d5c2e880bec846c": "49ffdc2aa16690a378a06b635fb9e7bc",
".git/objects/12/3ef092710952b5b058483d4b1199efb8827549": "24c63c2835914f6e74dde10d359fab7b",
".git/objects/14/9112d2609d791abf338abaafa2ba5331d24b55": "1acb179394305237672b3989f0c3acd1",
".git/objects/15/dc5b1b2cc7d567528de1f2a2bc0d3f30d8e93f": "4a1c3f663b352b66737e06ccdd8bb6ab",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/9b4e391e958b574249b09ec97e60a0e3f7ab72": "4395369278fb076f59270d6226ee7119",
".git/objects/1a/b92b7347a16a5cfe9004cd0c7055f284c97e7e": "ebc080d8c34b4615871e1f7f43269307",
".git/objects/1c/31b5dff45dccb0b6a957a4d5e5266271a5d34c": "41ba2250d7ba7489419241a974d873b6",
".git/objects/1e/177f8b2083a3723e0876e93b1ed62c6bd462e6": "78c36ade3263ceb97af4a338d44770e9",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/1427b6a8fef94f9f3f9f4b628f8421464297df": "b5ff23cee8e08fe3b39354101d2ebedd",
".git/objects/23/03f4f531f4784baa7251700acccc5a3ec9711f": "499e51b59cd36f56e691b55b94e88e13",
".git/objects/23/3a3139fa587c016bff24d28d90245b5d09e68c": "307cf1ae9cb1ef474dd8edc58d786098",
".git/objects/28/9862be80c611ec091d053b1cc0cdb01139d3e3": "2bed241eb9d6ad9c6d5f2440dffc90ae",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/72fcf18c06adf61a44fb72b84f0aa613ca629d": "37b3e4c9d6acdc1daca44cb6d106dab3",
".git/objects/35/2b5a64d8f8fb6f56241db015424fb139352af9": "00e5301f73000d7a54785aba3c1b03c8",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/b46b55403710ca5b732789a59e6d23e76c3e9b": "d3a69ddfcd63ead20998bc1a3623fd63",
".git/objects/43/83c62a8517ee24e3898f861da76d7b492673e8": "580a8165405e4dfde3600518fa11a0fb",
".git/objects/45/81a2a128005739852df3a4dd4700b7ff16a368": "631543261517646d5da3635f1ef6887e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/d3998976b990a2d097b50e7b90ab8a6ac329dd": "39f491f167ff0ac7f4667244d2d2abae",
".git/objects/4d/469b6d57983ca39c1077fb9a4f7d1e3de40db2": "22eb799f9ef7366634777d14156d7ef2",
".git/objects/50/7adccff3be8a7486b10ad8a0b4379cfc248655": "bb0102899e7abd360e5dbb805e46dcc9",
".git/objects/53/e0286e0ed7ce5d52894f3b12d6c76c20f4b6d1": "11c0acdfe2acc9b44e1e1273d601bc39",
".git/objects/57/3973a9faf86a6ef47a8890e08d410d42369d20": "074192169f8147e47130ecb7b02732ef",
".git/objects/58/1d978e9eead663e56da1796df7f0307abb5e84": "17fd6ea8d5ec8d2c8682f88833bac033",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/3eb7fa51a79b2238d6dfada35e1484aff33ab9": "595866f8566fdf507d4807f8b98883a0",
".git/objects/59/9425bbad292d7c90c33554363c733b8c888dff": "b7cd5d01f18192efcd0db29bf0fcbd01",
".git/objects/5c/f88d94e954367271f8daf5d03c8e830154e2cf": "8505f3b171e79047f7d9d5abeaf56de8",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/0d9f5de6493764ff69d9a48e474ba969d0d13d": "df0f83deeab5abf06b84da4a373f8940",
".git/objects/66/78c5425c3d4b984a140a92ff7eb0a0a5fa05ec": "1938336e6c2b416ee86f213af564b57b",
".git/objects/6c/6702a0ef1d0a6cb8a38a147ecfd81ca8ba3dab": "e5606e0e949a830922242aea268e783a",
".git/objects/70/9394e896fafb2d11780d43f383e33849239f2d": "2b9ecb59d267c8698d8fc9f5a3d78c61",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7b/173a7b901317ba02e70643bf9194957011c41c": "bd9f01f1062af564837e128160b0caf1",
".git/objects/7d/38e58b8d1437b0d5b8945c8a05cc86f9dd57fe": "4bf8b824999e3e8aba879a88c6949097",
".git/objects/7e/32a52881361a21c2dc431fe97c90ec33165530": "b050b64e6e9c81526e177e5762703480",
".git/objects/80/d85eba1e0d6cb25e83dc997396a619b7f21cc2": "ae8dc72f631fab55e1e704c674b8df44",
".git/objects/83/1fa3d39550753085370b5fc9665c5a32a5f586": "9731b8d0025fdd583edc8c51c149d244",
".git/objects/86/9a6d47b6cd8923ebffa040f1a15fb600d86e60": "646dc79534373ba219695961e09016aa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/ad2a9147ad0b3637f72e37168b58372bab6d66": "f0cc6a3b4a3650db52717a61d2888a01",
".git/objects/8d/22db7d662603a008d581ad60caab14b6225c18": "13ba3e6362426791fe8b1f58a4f9365a",
".git/objects/90/cb9da138959e8c27a284bc20c75eec8068c2c8": "c8e6cb4d57d8e85e859f41a1294e9639",
".git/objects/93/153a7e1103985690e4f1e467987d99ae17e8b4": "812a424ef652d98ba07096a4d627617e",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/fae57b4b006e963cf193de9d1c7c64146db4c9": "e7483d6aee67822992be2408b90864a4",
".git/objects/98/21cc6a790a9523b720260e274eea4fdc4109c2": "3fc177aae508c58cc1ddfb1678e8a27d",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/9a/0deca6aebe59634567c9714ff5a31644bc1996": "df8926add4b11b244d79d8d8b4084d66",
".git/objects/9f/5bf16991596235294b7bfcf99e28ff0c33c299": "925931f1b674672f8f5c8570440cfa33",
".git/objects/a0/5729b268c2f741da720295c8e80e69229d6821": "6f618b50dab32a3e7cfc842568289312",
".git/objects/a3/eb6259d1ce208f5103724fb3bcdde55b7ee364": "25306ad5e420c25126182d33e05d21e9",
".git/objects/a9/63bcc20d2d0ce3565ad248b26981e3c548b2f2": "967b03b987af0058565ee7d6043f1f41",
".git/objects/aa/96793d8dac58ac27f13af5161b3304496ab2b1": "df8eb1f8b9aabff89c1e3ad3f3897b77",
".git/objects/ad/89c858729a9772a5bad85106a3d3c28732e742": "8ab5d93325d2c1666cb39465c7b58544",
".git/objects/b1/1a365c9ba232dd4e28b0162f031d9b6288a8aa": "d1e398b75f5379a6a566a67e5ef4f148",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/71dd804b12bd8865daedf16f145baeac4c8caa": "d7dfe64ae457fb2a53af44380a7bc7ce",
".git/objects/b5/a300c647b3effee48f68cd076023618edab642": "c9262807367e1c6e7f413bd1aefca3c0",
".git/objects/b6/8765d524748d18c28d5410b95cf769b08aa91d": "044de67d5eefad0f23f88a88fadfe17a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/0fc91a78975c0893bd94686b20245c36ad0f92": "eb20fbd881b6d94329810bcbcf7f39c1",
".git/objects/be/b64e5a04141886e7dd3b3c3f97de0c9db54e05": "0f44e89bc4b43ff8fb91ab20e528ee64",
".git/objects/bf/e2c82b4532a4072abc6bd1b191c6955dd500c3": "f7ff05ec8a8d4c58a137058a7ed03885",
".git/objects/c4/f07b9d6b8d448105d3891ff8dfc5c5075a3c27": "7b6a2cec005dbd4eee46bede1c54df6a",
".git/objects/c6/3b48cd395b52ee29bfe23dba1ae5d964d2d717": "1767271b5f40d5d4eccac00ce48cec60",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/88af560e2d3cf9f26d36b199e2c5b22bf7a55a": "34ffab5dedbe74a67d462f83986f23c1",
".git/objects/cb/d32a795d3fccf58a1aa22bcccc13ed8eeef2ed": "7aa47d4b35c39e39751c7bbd383d9c3d",
".git/objects/cd/68f083b127ef7820138fa695b07a012fc878b2": "7824e2060e6a83b749db2c4b04bed4b4",
".git/objects/ce/4a00d600bbf52afbb007895a5ad99cba06ae04": "23a1fed163e47fe537454e2929572357",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/f9dc2a4d0e395f5dfac75b0177b4acbebbe17b": "5e6aa3c980f38f984e7d69dd87ace296",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/c9a40b5d6b20b5c8e23158a21caa678a3b86dd": "669487e52827cf7a8bb5976a30421beb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/acfa064316aa9044d0613eda5969fda12a3a6f": "29ee0813d451df7c123c21a659d8e916",
".git/objects/d9/5521934945db23fcf417489a28ce079f790d35": "b896cb130ff15268fe64e7cd490caae4",
".git/objects/da/b066e517d98f26b2d1ac1f408073c586a192ee": "a4865fcc5b9431d585f0d6afcb1a9bb5",
".git/objects/df/0882dc4f677b419a5dbc6b019d3de2e2486116": "143226690ece2cc5859cf80fd90ee454",
".git/objects/e0/9a12ce9e00cfe877684446d98e79fad9616b01": "47325eca0a4509b7779f47e5d27b1f2f",
".git/objects/e1/173751dec2aacb205cedd6f90cb822c24eb175": "b812d8badf267bd8eea4feeaf615a789",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e2/a83dae8d3bd5ecfec846e61f32cafcc6c54dce": "e327408003866cd347de11050e15679b",
".git/objects/e3/e948521343c1edff4cd621c15e93b234293a20": "5bc1c967b3f64a955281b86b95152c33",
".git/objects/e4/e38169a24cd37715b8471ca8160b370104b324": "dfb3c76301cf726057091a80640f584c",
".git/objects/e8/0ae656783f82b5b7c31207e6dfd046b022755b": "3681d359789804073e6ae11d10e36977",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/f1/e37d8008506e66b07a333776906d5dd32bdbf3": "4cbed0a22f80d51d94a0ad5516c46d44",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/f6/54814071b0dc5288a560897a51a1f8433aa428": "2d092f95f36ccc91cd172dd32f3a8750",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fc/b082ce7f96603057dabc5127362a3d435570e2": "c2d1f2a70082b258ca85e9f7b4eea0bd",
".git/objects/fe/4fdda2ae780e86356b700253b072ddf74bce5b": "ce97a339e0ae157c0325a0e7f25910e7",
".git/objects/ff/6fdce64d8163fbe6906d1ffe9232b231c7feb5": "927232144ffb02eeb3195ab7e59d2f17",
".git/refs/heads/main": "d1fca0072db3fe1fc307799c9c1c5ee5",
".git/refs/remotes/origin/main": "d1fca0072db3fe1fc307799c9c1c5ee5",
"assets/AssetManifest.bin": "6dd3e93935add275cfc427fe52d79350",
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
"flutter_bootstrap.js": "3327bca777c9d0040b996cfe682f012d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8cd4137ebcc761636d4ea7accefc3ee6",
"/": "8cd4137ebcc761636d4ea7accefc3ee6",
"main.dart.js": "73040b3526593e8effd8b25e3c3ea27f",
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
