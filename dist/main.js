/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var ethers_1 = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
function getEth() {
  var eth = window.ethereum;
  if (!eth) {
    throw new Error("Ethereum provider not found. Please install MetaMask or another Ethereum wallet.");
  }
  return eth;
}
function hasAccounts() {
  return _hasAccounts.apply(this, arguments);
}
function _hasAccounts() {
  _hasAccounts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var eth, accounts, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          eth = getEth();
          _context.p = 1;
          _context.n = 2;
          return eth.request({
            method: 'eth_accounts'
          });
        case 2:
          accounts = _context.v;
          console.log("Accounts:", accounts);
          return _context.a(2, accounts.length > 0);
        case 3:
          _context.p = 3;
          _t = _context.v;
          console.error("Error checking accounts:", _t);
          throw _t;
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[1, 3]]);
  }));
  return _hasAccounts.apply(this, arguments);
}
function connectWallet() {
  return _connectWallet.apply(this, arguments);
}
function _connectWallet() {
  _connectWallet = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var eth, accounts, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          eth = getEth();
          _context2.p = 1;
          _context2.n = 2;
          return eth.request({
            method: 'eth_requestAccounts'
          });
        case 2:
          accounts = _context2.v;
          console.log("Connected account:", accounts[0]);
          return _context2.a(2, accounts[0]);
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error("Error connecting wallet:", _t2);
          throw _t2;
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 3]]);
  }));
  return _connectWallet.apply(this, arguments);
}
function run() {
  return _run.apply(this, arguments);
}
function _run() {
  _run = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var provider, network, signer, address, contractAddress, helloWorldContract, message, _t3, _t4;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          provider = new ethers_1.ethers.providers.Web3Provider(getEth());
          _context3.n = 1;
          return provider.getNetwork();
        case 1:
          network = _context3.v;
          console.log("Network:", network);
          _context3.n = 2;
          return hasAccounts();
        case 2:
          if (!_context3.v) {
            _context3.n = 3;
            break;
          }
          console.log("Wallet already connected.");
          _context3.n = 4;
          break;
        case 3:
          console.log("Connecting wallet...");
          _context3.n = 4;
          return connectWallet();
        case 4:
          signer = provider.getSigner();
          _context3.n = 5;
          return signer.getAddress();
        case 5:
          address = _context3.v;
          console.log("Connected address:", address);
          // Check network
          if (network.chainId !== 1) {
            console.warn("You are not connected to the Ethereum mainnet. Current network:", network.name);
            // Optionally, return here if you only want to allow mainnet
            // return;
          } else {
            console.log("Connected to the Ethereum mainnet.");
          }
          // !!! IMPORTANT: Replace this address with your actual deployed contract address !!!
          contractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";
          helloWorldContract = new ethers_1.ethers.Contract(contractAddress, ["function hello() public pure returns (string memory)"], signer);
          _context3.p = 6;
          _context3.n = 7;
          return helloWorldContract.hello();
        case 7:
          message = _context3.v;
          console.log("hello() returned:", message);
          document.body.innerHTML = "\n        <h1>Hello World Contract Interaction</h1>\n        <div>Contract says: ".concat(message, "</div>\n      ");
          _context3.n = 9;
          break;
        case 8:
          _context3.p = 8;
          _t3 = _context3.v;
          console.error("Call failed:", _t3);
          document.body.innerHTML = "\n        <h1>Hello World Contract Interaction</h1>\n        <div style=\"color: red;\">Call failed: ".concat(_t3.message, "</div>\n      ");
        case 9:
          _context3.n = 11;
          break;
        case 10:
          _context3.p = 10;
          _t4 = _context3.v;
          console.error("Error in run function:", _t4);
        case 11:
          return _context3.a(2);
      }
    }, _callee3, null, [[6, 8], [0, 10]]);
  }));
  return _run.apply(this, arguments);
}
run();

/***/ }),

/***/ "?0707":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2265":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?256a":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?53f6":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?55d1":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5d80":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e831":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ff28":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktest1"] = self["webpackChunktest1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_ethers_lib_esm_index_js"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBQUEsU0FBQUEsYUFBQSxJQUNiLHVLQUFBQyxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssV0FBQSw4QkFBQUMsRUFBQU4sQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBQyxDQUFBLEdBQUFMLENBQUEsSUFBQUEsQ0FBQSxDQUFBTSxTQUFBLFlBQUFDLFNBQUEsR0FBQVAsQ0FBQSxHQUFBTyxTQUFBLEVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsQ0FBQUMsU0FBQSxVQUFBSyxtQkFBQSxDQUFBSCxDQUFBLHVCQUFBVixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBSSxDQUFBLE1BQUFDLENBQUEsR0FBQVgsQ0FBQSxRQUFBWSxDQUFBLE9BQUFDLENBQUEsS0FBQUYsQ0FBQSxLQUFBYixDQUFBLEtBQUFnQixDQUFBLEVBQUFwQixDQUFBLEVBQUFxQixDQUFBLEVBQUFDLENBQUEsRUFBQU4sQ0FBQSxFQUFBTSxDQUFBLENBQUFDLElBQUEsQ0FBQXZCLENBQUEsTUFBQXNCLENBQUEsV0FBQUEsRUFBQXJCLENBQUEsRUFBQUMsQ0FBQSxXQUFBTSxDQUFBLEdBQUFQLENBQUEsRUFBQVEsQ0FBQSxNQUFBRyxDQUFBLEdBQUFaLENBQUEsRUFBQW1CLENBQUEsQ0FBQWYsQ0FBQSxHQUFBRixDQUFBLEVBQUFtQixDQUFBLGdCQUFBQyxFQUFBcEIsQ0FBQSxFQUFBRSxDQUFBLFNBQUFLLENBQUEsR0FBQVAsQ0FBQSxFQUFBVSxDQUFBLEdBQUFSLENBQUEsRUFBQUgsQ0FBQSxPQUFBaUIsQ0FBQSxJQUFBRixDQUFBLEtBQUFWLENBQUEsSUFBQUwsQ0FBQSxHQUFBZ0IsQ0FBQSxDQUFBTyxNQUFBLEVBQUF2QixDQUFBLFVBQUFLLENBQUEsRUFBQUUsQ0FBQSxHQUFBUyxDQUFBLENBQUFoQixDQUFBLEdBQUFxQixDQUFBLEdBQUFILENBQUEsQ0FBQUYsQ0FBQSxFQUFBUSxDQUFBLEdBQUFqQixDQUFBLEtBQUFOLENBQUEsUUFBQUksQ0FBQSxHQUFBbUIsQ0FBQSxLQUFBckIsQ0FBQSxNQUFBUSxDQUFBLEdBQUFKLENBQUEsRUFBQUMsQ0FBQSxHQUFBRCxDQUFBLFlBQUFDLENBQUEsV0FBQUQsQ0FBQSxNQUFBQSxDQUFBLE1BQUFSLENBQUEsSUFBQVEsQ0FBQSxPQUFBYyxDQUFBLE1BQUFoQixDQUFBLEdBQUFKLENBQUEsUUFBQW9CLENBQUEsR0FBQWQsQ0FBQSxRQUFBQyxDQUFBLE1BQUFVLENBQUEsQ0FBQUMsQ0FBQSxHQUFBaEIsQ0FBQSxFQUFBZSxDQUFBLENBQUFmLENBQUEsR0FBQUksQ0FBQSxPQUFBYyxDQUFBLEdBQUFHLENBQUEsS0FBQW5CLENBQUEsR0FBQUosQ0FBQSxRQUFBTSxDQUFBLE1BQUFKLENBQUEsSUFBQUEsQ0FBQSxHQUFBcUIsQ0FBQSxNQUFBakIsQ0FBQSxNQUFBTixDQUFBLEVBQUFNLENBQUEsTUFBQUosQ0FBQSxFQUFBZSxDQUFBLENBQUFmLENBQUEsR0FBQXFCLENBQUEsRUFBQWhCLENBQUEsY0FBQUgsQ0FBQSxJQUFBSixDQUFBLGFBQUFtQixDQUFBLFFBQUFILENBQUEsT0FBQWQsQ0FBQSxxQkFBQUUsQ0FBQSxFQUFBVyxDQUFBLEVBQUFRLENBQUEsUUFBQVQsQ0FBQSxZQUFBVSxTQUFBLHVDQUFBUixDQUFBLFVBQUFELENBQUEsSUFBQUssQ0FBQSxDQUFBTCxDQUFBLEVBQUFRLENBQUEsR0FBQWhCLENBQUEsR0FBQVEsQ0FBQSxFQUFBTCxDQUFBLEdBQUFhLENBQUEsR0FBQXhCLENBQUEsR0FBQVEsQ0FBQSxPQUFBVCxDQUFBLEdBQUFZLENBQUEsTUFBQU0sQ0FBQSxLQUFBVixDQUFBLEtBQUFDLENBQUEsR0FBQUEsQ0FBQSxRQUFBQSxDQUFBLFNBQUFVLENBQUEsQ0FBQWYsQ0FBQSxRQUFBa0IsQ0FBQSxDQUFBYixDQUFBLEVBQUFHLENBQUEsS0FBQU8sQ0FBQSxDQUFBZixDQUFBLEdBQUFRLENBQUEsR0FBQU8sQ0FBQSxDQUFBQyxDQUFBLEdBQUFSLENBQUEsYUFBQUksQ0FBQSxNQUFBUixDQUFBLFFBQUFDLENBQUEsS0FBQUgsQ0FBQSxZQUFBTCxDQUFBLEdBQUFPLENBQUEsQ0FBQUYsQ0FBQSxXQUFBTCxDQUFBLEdBQUFBLENBQUEsQ0FBQTBCLElBQUEsQ0FBQW5CLENBQUEsRUFBQUksQ0FBQSxVQUFBYyxTQUFBLDJDQUFBekIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLEdBQUFYLENBQUEsQ0FBQTRCLEtBQUEsRUFBQXBCLENBQUEsU0FBQUEsQ0FBQSxvQkFBQUEsQ0FBQSxLQUFBUixDQUFBLEdBQUFPLENBQUEsZUFBQVAsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBbkIsQ0FBQSxHQUFBQyxDQUFBLFNBQUFHLENBQUEsR0FBQWMsU0FBQSx1Q0FBQXBCLENBQUEsZ0JBQUFHLENBQUEsT0FBQUQsQ0FBQSxHQUFBUixDQUFBLGNBQUFDLENBQUEsSUFBQWlCLENBQUEsR0FBQUMsQ0FBQSxDQUFBZixDQUFBLFFBQUFRLENBQUEsR0FBQVYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSxFQUFBZSxDQUFBLE9BQUFFLENBQUEsa0JBQUFwQixDQUFBLElBQUFPLENBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLE1BQUFHLENBQUEsR0FBQVgsQ0FBQSxjQUFBZSxDQUFBLG1CQUFBYSxLQUFBLEVBQUE1QixDQUFBLEVBQUEyQixJQUFBLEVBQUFWLENBQUEsU0FBQWhCLENBQUEsRUFBQUksQ0FBQSxFQUFBRSxDQUFBLFFBQUFJLENBQUEsUUFBQVMsQ0FBQSxnQkFBQVYsVUFBQSxjQUFBbUIsa0JBQUEsY0FBQUMsMkJBQUEsS0FBQTlCLENBQUEsR0FBQVksTUFBQSxDQUFBbUIsY0FBQSxNQUFBdkIsQ0FBQSxNQUFBTCxDQUFBLElBQUFILENBQUEsQ0FBQUEsQ0FBQSxJQUFBRyxDQUFBLFNBQUFXLG1CQUFBLENBQUFkLENBQUEsT0FBQUcsQ0FBQSxpQ0FBQUgsQ0FBQSxHQUFBVyxDQUFBLEdBQUFtQiwwQkFBQSxDQUFBckIsU0FBQSxHQUFBQyxTQUFBLENBQUFELFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsWUFBQU8sRUFBQWhCLENBQUEsV0FBQWEsTUFBQSxDQUFBb0IsY0FBQSxHQUFBcEIsTUFBQSxDQUFBb0IsY0FBQSxDQUFBakMsQ0FBQSxFQUFBK0IsMEJBQUEsS0FBQS9CLENBQUEsQ0FBQWtDLFNBQUEsR0FBQUgsMEJBQUEsRUFBQWhCLG1CQUFBLENBQUFmLENBQUEsRUFBQU0sQ0FBQSx5QkFBQU4sQ0FBQSxDQUFBVSxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBRixDQUFBLEdBQUFaLENBQUEsV0FBQThCLGlCQUFBLENBQUFwQixTQUFBLEdBQUFxQiwwQkFBQSxFQUFBaEIsbUJBQUEsQ0FBQUgsQ0FBQSxpQkFBQW1CLDBCQUFBLEdBQUFoQixtQkFBQSxDQUFBZ0IsMEJBQUEsaUJBQUFELGlCQUFBLEdBQUFBLGlCQUFBLENBQUFLLFdBQUEsd0JBQUFwQixtQkFBQSxDQUFBZ0IsMEJBQUEsRUFBQXpCLENBQUEsd0JBQUFTLG1CQUFBLENBQUFILENBQUEsR0FBQUcsbUJBQUEsQ0FBQUgsQ0FBQSxFQUFBTixDQUFBLGdCQUFBUyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFSLENBQUEsaUNBQUFXLG1CQUFBLENBQUFILENBQUEsOERBQUFiLFlBQUEsWUFBQUEsYUFBQSxhQUFBcUMsQ0FBQSxFQUFBNUIsQ0FBQSxFQUFBNkIsQ0FBQSxFQUFBckIsQ0FBQTtBQUFBLFNBQUFELG9CQUFBZixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBLFFBQUFPLENBQUEsR0FBQUssTUFBQSxDQUFBeUIsY0FBQSxRQUFBOUIsQ0FBQSx1QkFBQVIsQ0FBQSxJQUFBUSxDQUFBLFFBQUFPLG1CQUFBLFlBQUF3QixtQkFBQXZDLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsUUFBQUMsQ0FBQSxFQUFBTSxDQUFBLEdBQUFBLENBQUEsQ0FBQVIsQ0FBQSxFQUFBRSxDQUFBLElBQUEyQixLQUFBLEVBQUF6QixDQUFBLEVBQUFvQyxVQUFBLEdBQUF2QyxDQUFBLEVBQUF3QyxZQUFBLEdBQUF4QyxDQUFBLEVBQUF5QyxRQUFBLEdBQUF6QyxDQUFBLE1BQUFELENBQUEsQ0FBQUUsQ0FBQSxJQUFBRSxDQUFBLFlBQUFFLENBQUEsWUFBQUEsRUFBQUosQ0FBQSxFQUFBRSxDQUFBLElBQUFXLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxZQUFBRixDQUFBLGdCQUFBMkMsT0FBQSxDQUFBekMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFKLENBQUEsVUFBQU0sQ0FBQSxhQUFBQSxDQUFBLGNBQUFBLENBQUEsb0JBQUFTLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBMkMsbUJBQUF4QyxDQUFBLEVBQUFILENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFJLENBQUEsRUFBQWUsQ0FBQSxFQUFBWixDQUFBLGNBQUFELENBQUEsR0FBQUosQ0FBQSxDQUFBaUIsQ0FBQSxFQUFBWixDQUFBLEdBQUFHLENBQUEsR0FBQUosQ0FBQSxDQUFBcUIsS0FBQSxXQUFBekIsQ0FBQSxnQkFBQUosQ0FBQSxDQUFBSSxDQUFBLEtBQUFJLENBQUEsQ0FBQW9CLElBQUEsR0FBQTNCLENBQUEsQ0FBQVcsQ0FBQSxJQUFBaUMsT0FBQSxDQUFBQyxPQUFBLENBQUFsQyxDQUFBLEVBQUFtQyxJQUFBLENBQUE3QyxDQUFBLEVBQUFJLENBQUE7QUFBQSxTQUFBMEMsa0JBQUE1QyxDQUFBLDZCQUFBSCxDQUFBLFNBQUFELENBQUEsR0FBQWlELFNBQUEsYUFBQUosT0FBQSxXQUFBM0MsQ0FBQSxFQUFBSSxDQUFBLFFBQUFlLENBQUEsR0FBQWpCLENBQUEsQ0FBQThDLEtBQUEsQ0FBQWpELENBQUEsRUFBQUQsQ0FBQSxZQUFBbUQsTUFBQS9DLENBQUEsSUFBQXdDLGtCQUFBLENBQUF2QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQTZDLEtBQUEsRUFBQUMsTUFBQSxVQUFBaEQsQ0FBQSxjQUFBZ0QsT0FBQWhELENBQUEsSUFBQXdDLGtCQUFBLENBQUF2QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQTZDLEtBQUEsRUFBQUMsTUFBQSxXQUFBaEQsQ0FBQSxLQUFBK0MsS0FBQTtBQUFBdEMsOENBQTZDO0VBQUVnQixLQUFLLEVBQUU7QUFBSyxDQUFDLEVBQUM7QUFDN0QsSUFBTXlCLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyxzREFBUSxDQUFDO0FBQ2xDLFNBQVNDLE1BQU1BLENBQUEsRUFBRztFQUNkLElBQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFRO0VBQzNCLElBQUksQ0FBQ0YsR0FBRyxFQUFFO0lBQ04sTUFBTSxJQUFJRyxLQUFLLENBQUMsa0ZBQWtGLENBQUM7RUFDdkc7RUFDQSxPQUFPSCxHQUFHO0FBQ2Q7QUFBQyxTQUNjSSxXQUFXQSxDQUFBO0VBQUEsT0FBQUMsWUFBQSxDQUFBWixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUFhLGFBQUE7RUFBQUEsWUFBQSxHQUFBZCxpQkFBQSxjQUFBakQsWUFBQSxHQUFBc0MsQ0FBQSxDQUExQixTQUFBMEIsUUFBQTtJQUFBLElBQUFOLEdBQUEsRUFBQU8sUUFBQSxFQUFBQyxFQUFBO0lBQUEsT0FBQWxFLFlBQUEsR0FBQXFDLENBQUEsV0FBQThCLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBOUQsQ0FBQTtRQUFBO1VBQ1VxRCxHQUFHLEdBQUdELE1BQU0sQ0FBQyxDQUFDO1VBQUFVLFFBQUEsQ0FBQWpELENBQUE7VUFBQWlELFFBQUEsQ0FBQTlELENBQUE7VUFBQSxPQUVPcUQsR0FBRyxDQUFDVSxPQUFPLENBQUM7WUFBRUMsTUFBTSxFQUFFO1VBQWUsQ0FBQyxDQUFDO1FBQUE7VUFBeERKLFFBQVEsR0FBQUUsUUFBQSxDQUFBOUMsQ0FBQTtVQUNkaUQsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFTixRQUFRLENBQUM7VUFBQyxPQUFBRSxRQUFBLENBQUE3QyxDQUFBLElBQzVCMkMsUUFBUSxDQUFDeEMsTUFBTSxHQUFHLENBQUM7UUFBQTtVQUFBMEMsUUFBQSxDQUFBakQsQ0FBQTtVQUFBZ0QsRUFBQSxHQUFBQyxRQUFBLENBQUE5QyxDQUFBO1VBRzFCaUQsT0FBTyxDQUFDRSxLQUFLLENBQUMsMEJBQTBCLEVBQUFOLEVBQU8sQ0FBQztVQUFDLE1BQUFBLEVBQUE7UUFBQTtVQUFBLE9BQUFDLFFBQUEsQ0FBQTdDLENBQUE7TUFBQTtJQUFBLEdBQUEwQyxPQUFBO0VBQUEsQ0FHeEQ7RUFBQSxPQUFBRCxZQUFBLENBQUFaLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBQUEsU0FDY3VCLGFBQWFBLENBQUE7RUFBQSxPQUFBQyxjQUFBLENBQUF2QixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUF3QixlQUFBO0VBQUFBLGNBQUEsR0FBQXpCLGlCQUFBLGNBQUFqRCxZQUFBLEdBQUFzQyxDQUFBLENBQTVCLFNBQUFxQyxTQUFBO0lBQUEsSUFBQWpCLEdBQUEsRUFBQU8sUUFBQSxFQUFBVyxHQUFBO0lBQUEsT0FBQTVFLFlBQUEsR0FBQXFDLENBQUEsV0FBQXdDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBeEUsQ0FBQTtRQUFBO1VBQ1VxRCxHQUFHLEdBQUdELE1BQU0sQ0FBQyxDQUFDO1VBQUFvQixTQUFBLENBQUEzRCxDQUFBO1VBQUEyRCxTQUFBLENBQUF4RSxDQUFBO1VBQUEsT0FFT3FELEdBQUcsQ0FBQ1UsT0FBTyxDQUFDO1lBQUVDLE1BQU0sRUFBRTtVQUFzQixDQUFDLENBQUM7UUFBQTtVQUEvREosUUFBUSxHQUFBWSxTQUFBLENBQUF4RCxDQUFBO1VBQ2RpRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRU4sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQUMsT0FBQVksU0FBQSxDQUFBdkQsQ0FBQSxJQUN4QzJDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFBQTtVQUFBWSxTQUFBLENBQUEzRCxDQUFBO1VBQUEwRCxHQUFBLEdBQUFDLFNBQUEsQ0FBQXhELENBQUE7VUFHbEJpRCxPQUFPLENBQUNFLEtBQUssQ0FBQywwQkFBMEIsRUFBQUksR0FBTyxDQUFDO1VBQUMsTUFBQUEsR0FBQTtRQUFBO1VBQUEsT0FBQUMsU0FBQSxDQUFBdkQsQ0FBQTtNQUFBO0lBQUEsR0FBQXFELFFBQUE7RUFBQSxDQUd4RDtFQUFBLE9BQUFELGNBQUEsQ0FBQXZCLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBQUEsU0FDYzRCLEdBQUdBLENBQUE7RUFBQSxPQUFBQyxJQUFBLENBQUE1QixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUE2QixLQUFBO0VBQUFBLElBQUEsR0FBQTlCLGlCQUFBLGNBQUFqRCxZQUFBLEdBQUFzQyxDQUFBLENBQWxCLFNBQUEwQyxTQUFBO0lBQUEsSUFBQUMsUUFBQSxFQUFBQyxPQUFBLEVBQUFDLE1BQUEsRUFBQUMsT0FBQSxFQUFBQyxlQUFBLEVBQUFDLGtCQUFBLEVBQUFDLE9BQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBO0lBQUEsT0FBQXpGLFlBQUEsR0FBQXFDLENBQUEsV0FBQXFELFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBckYsQ0FBQTtRQUFBO1VBQUFxRixTQUFBLENBQUF4RSxDQUFBO1VBRWMrRCxRQUFRLEdBQUcsSUFBSTFCLFFBQVEsQ0FBQ29DLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxZQUFZLENBQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1VBQUFpQyxTQUFBLENBQUFyRixDQUFBO1VBQUEsT0FDL0M0RSxRQUFRLENBQUNhLFVBQVUsQ0FBQyxDQUFDO1FBQUE7VUFBckNaLE9BQU8sR0FBQVEsU0FBQSxDQUFBckUsQ0FBQTtVQUNiaUQsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFVyxPQUFPLENBQUM7VUFBQ1EsU0FBQSxDQUFBckYsQ0FBQTtVQUFBLE9BQ3ZCeUQsV0FBVyxDQUFDLENBQUM7UUFBQTtVQUFBLEtBQUE0QixTQUFBLENBQUFyRSxDQUFBO1lBQUFxRSxTQUFBLENBQUFyRixDQUFBO1lBQUE7VUFBQTtVQUNuQmlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO1VBQUNtQixTQUFBLENBQUFyRixDQUFBO1VBQUE7UUFBQTtVQUd6Q2lFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO1VBQUNtQixTQUFBLENBQUFyRixDQUFBO1VBQUEsT0FDOUJvRSxhQUFhLENBQUMsQ0FBQztRQUFBO1VBRW5CVSxNQUFNLEdBQUdGLFFBQVEsQ0FBQ2MsU0FBUyxDQUFDLENBQUM7VUFBQUwsU0FBQSxDQUFBckYsQ0FBQTtVQUFBLE9BQ2I4RSxNQUFNLENBQUNhLFVBQVUsQ0FBQyxDQUFDO1FBQUE7VUFBbkNaLE9BQU8sR0FBQU0sU0FBQSxDQUFBckUsQ0FBQTtVQUNiaUQsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUVhLE9BQU8sQ0FBQztVQUMxQztVQUNBLElBQUlGLE9BQU8sQ0FBQ2UsT0FBTyxLQUFLLENBQUMsRUFBRTtZQUN2QjNCLE9BQU8sQ0FBQzRCLElBQUksQ0FBQyxpRUFBaUUsRUFBRWhCLE9BQU8sQ0FBQ2lCLElBQUksQ0FBQztZQUM3RjtZQUNBO1VBQ0osQ0FBQyxNQUNJO1lBQ0Q3QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQztVQUNyRDtVQUNBO1VBQ01jLGVBQWUsR0FBRyw0Q0FBNEM7VUFDOURDLGtCQUFrQixHQUFHLElBQUkvQixRQUFRLENBQUNvQyxNQUFNLENBQUNTLFFBQVEsQ0FBQ2YsZUFBZSxFQUFFLENBQUMsc0RBQXNELENBQUMsRUFBRUYsTUFBTSxDQUFDO1VBQUFPLFNBQUEsQ0FBQXhFLENBQUE7VUFBQXdFLFNBQUEsQ0FBQXJGLENBQUE7VUFBQSxPQUVoSGlGLGtCQUFrQixDQUFDZSxLQUFLLENBQUMsQ0FBQztRQUFBO1VBQTFDZCxPQUFPLEdBQUFHLFNBQUEsQ0FBQXJFLENBQUE7VUFDYmlELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFFZ0IsT0FBTyxDQUFDO1VBQ3pDZSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyx1RkFBQUMsTUFBQSxDQUVMbEIsT0FBTyxtQkFDOUI7VUFBQ0csU0FBQSxDQUFBckYsQ0FBQTtVQUFBO1FBQUE7VUFBQXFGLFNBQUEsQ0FBQXhFLENBQUE7VUFBQXNFLEdBQUEsR0FBQUUsU0FBQSxDQUFBckUsQ0FBQTtVQUdJaUQsT0FBTyxDQUFDRSxLQUFLLENBQUMsY0FBYyxFQUFBZ0IsR0FBSyxDQUFDO1VBQ2xDYyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUywyR0FBQUMsTUFBQSxDQUVhakIsR0FBQSxDQUFJRCxPQUFPLG1CQUNwRDtRQUFDO1VBQUFHLFNBQUEsQ0FBQXJGLENBQUE7VUFBQTtRQUFBO1VBQUFxRixTQUFBLENBQUF4RSxDQUFBO1VBQUF1RSxHQUFBLEdBQUFDLFNBQUEsQ0FBQXJFLENBQUE7VUFJQWlELE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLHdCQUF3QixFQUFBaUIsR0FBTyxDQUFDO1FBQUM7VUFBQSxPQUFBQyxTQUFBLENBQUFwRSxDQUFBO01BQUE7SUFBQSxHQUFBMEQsUUFBQTtFQUFBLENBRXREO0VBQUEsT0FBQUQsSUFBQSxDQUFBNUIsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFDRDRCLEdBQUcsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7QUNqRkwsZTs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0M1QkEsOEI7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0MS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90ZXN0MS9pZ25vcmVkfEQ6XFxibG9ja2NoYWluIHByb2pcXHRlc3QxXFxub2RlX21vZHVsZXNcXEBldGhlcnNwcm9qZWN0XFxzaWduaW5nLWtleVxcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly90ZXN0MS9pZ25vcmVkfEQ6XFxibG9ja2NoYWluIHByb2pcXHRlc3QxXFxub2RlX21vZHVsZXNcXGV0aGVyc1xcbm9kZV9tb2R1bGVzXFxAZXRoZXJzcHJvamVjdFxcYWRkcmVzc1xcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly90ZXN0MS9pZ25vcmVkfEQ6XFxibG9ja2NoYWluIHByb2pcXHRlc3QxXFxub2RlX21vZHVsZXNcXGV0aGVyc1xcbm9kZV9tb2R1bGVzXFxAZXRoZXJzcHJvamVjdFxcaGRub2RlXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovL3Rlc3QxL2lnbm9yZWR8RDpcXGJsb2NrY2hhaW4gcHJvalxcdGVzdDFcXG5vZGVfbW9kdWxlc1xcZXRoZXJzXFxub2RlX21vZHVsZXNcXEBldGhlcnNwcm9qZWN0XFxjb25zdGFudHNcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vdGVzdDEvaWdub3JlZHxEOlxcYmxvY2tjaGFpbiBwcm9qXFx0ZXN0MVxcbm9kZV9tb2R1bGVzXFxldGhlcnNcXG5vZGVfbW9kdWxlc1xcQGV0aGVyc3Byb2plY3RcXGFiaVxcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly90ZXN0MS9pZ25vcmVkfEQ6XFxibG9ja2NoYWluIHByb2pcXHRlc3QxXFxub2RlX21vZHVsZXNcXGV0aGVyc1xcbm9kZV9tb2R1bGVzXFxAZXRoZXJzcHJvamVjdFxcdHJhbnNhY3Rpb25zXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovL3Rlc3QxL2lnbm9yZWR8RDpcXGJsb2NrY2hhaW4gcHJvalxcdGVzdDFcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vdGVzdDEvaWdub3JlZHxEOlxcYmxvY2tjaGFpbiBwcm9qXFx0ZXN0MVxcbm9kZV9tb2R1bGVzXFxldGhlcnNcXG5vZGVfbW9kdWxlc1xcQGV0aGVyc3Byb2plY3RcXGhhc2hcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vdGVzdDEvaWdub3JlZHxEOlxcYmxvY2tjaGFpbiBwcm9qXFx0ZXN0MVxcbm9kZV9tb2R1bGVzXFxAZXRoZXJzcHJvamVjdFxcYmlnbnVtYmVyXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVzdDEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVzdDEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGV0aGVyc18xID0gcmVxdWlyZShcImV0aGVyc1wiKTtcbmZ1bmN0aW9uIGdldEV0aCgpIHtcbiAgICBjb25zdCBldGggPSB3aW5kb3cuZXRoZXJldW07XG4gICAgaWYgKCFldGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXRoZXJldW0gcHJvdmlkZXIgbm90IGZvdW5kLiBQbGVhc2UgaW5zdGFsbCBNZXRhTWFzayBvciBhbm90aGVyIEV0aGVyZXVtIHdhbGxldC5cIik7XG4gICAgfVxuICAgIHJldHVybiBldGg7XG59XG5hc3luYyBmdW5jdGlvbiBoYXNBY2NvdW50cygpIHtcbiAgICBjb25zdCBldGggPSBnZXRFdGgoKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aC5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50czpcIiwgYWNjb3VudHMpO1xuICAgICAgICByZXR1cm4gYWNjb3VudHMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjaGVja2luZyBhY2NvdW50czpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiBjb25uZWN0V2FsbGV0KCkge1xuICAgIGNvbnN0IGV0aCA9IGdldEV0aCgpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgYWNjb3VudDpcIiwgYWNjb3VudHNbMF0pO1xuICAgICAgICByZXR1cm4gYWNjb3VudHNbMF07XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB3YWxsZXQ6XCIsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufVxuYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVyc18xLmV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGdldEV0aCgpKTtcbiAgICAgICAgY29uc3QgbmV0d29yayA9IGF3YWl0IHByb3ZpZGVyLmdldE5ldHdvcmsoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJOZXR3b3JrOlwiLCBuZXR3b3JrKTtcbiAgICAgICAgaWYgKGF3YWl0IGhhc0FjY291bnRzKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGFscmVhZHkgY29ubmVjdGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGluZyB3YWxsZXQuLi5cIik7XG4gICAgICAgICAgICBhd2FpdCBjb25uZWN0V2FsbGV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCBhZGRyZXNzOlwiLCBhZGRyZXNzKTtcbiAgICAgICAgLy8gQ2hlY2sgbmV0d29ya1xuICAgICAgICBpZiAobmV0d29yay5jaGFpbklkICE9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJZb3UgYXJlIG5vdCBjb25uZWN0ZWQgdG8gdGhlIEV0aGVyZXVtIG1haW5uZXQuIEN1cnJlbnQgbmV0d29yazpcIiwgbmV0d29yay5uYW1lKTtcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHksIHJldHVybiBoZXJlIGlmIHlvdSBvbmx5IHdhbnQgdG8gYWxsb3cgbWFpbm5ldFxuICAgICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gdGhlIEV0aGVyZXVtIG1haW5uZXQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vICEhISBJTVBPUlRBTlQ6IFJlcGxhY2UgdGhpcyBhZGRyZXNzIHdpdGggeW91ciBhY3R1YWwgZGVwbG95ZWQgY29udHJhY3QgYWRkcmVzcyAhISFcbiAgICAgICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweGU3ZjE3MjVlNzczNGNlMjg4ZjgzNjdlMWJiMTQzZTkwYmIzZjA1MTJcIjtcbiAgICAgICAgY29uc3QgaGVsbG9Xb3JsZENvbnRyYWN0ID0gbmV3IGV0aGVyc18xLmV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIFtcImZ1bmN0aW9uIGhlbGxvKCkgcHVibGljIHB1cmUgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSlcIl0sIHNpZ25lcik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgaGVsbG9Xb3JsZENvbnRyYWN0LmhlbGxvKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvKCkgcmV0dXJuZWQ6XCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgxPkhlbGxvIFdvcmxkIENvbnRyYWN0IEludGVyYWN0aW9uPC9oMT5cclxuICAgICAgICA8ZGl2PkNvbnRyYWN0IHNheXM6ICR7bWVzc2FnZX08L2Rpdj5cclxuICAgICAgYDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FsbCBmYWlsZWQ6XCIsIGVycik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDE+SGVsbG8gV29ybGQgQ29udHJhY3QgSW50ZXJhY3Rpb248L2gxPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogcmVkO1wiPkNhbGwgZmFpbGVkOiAke2Vyci5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICBgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gcnVuIGZ1bmN0aW9uOlwiLCBlcnJvcik7XG4gICAgfVxufVxucnVuKCk7XG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0ZXN0MVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0ZXN0MVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZXRoZXJzX2xpYl9lc21faW5kZXhfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3IiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2ludm9rZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImV4cG9ydHMiLCJldGhlcnNfMSIsInJlcXVpcmUiLCJnZXRFdGgiLCJldGgiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIkVycm9yIiwiaGFzQWNjb3VudHMiLCJfaGFzQWNjb3VudHMiLCJfY2FsbGVlIiwiYWNjb3VudHMiLCJfdCIsIl9jb250ZXh0IiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNvbm5lY3RXYWxsZXQiLCJfY29ubmVjdFdhbGxldCIsIl9jYWxsZWUyIiwiX3QyIiwiX2NvbnRleHQyIiwicnVuIiwiX3J1biIsIl9jYWxsZWUzIiwicHJvdmlkZXIiLCJuZXR3b3JrIiwic2lnbmVyIiwiYWRkcmVzcyIsImNvbnRyYWN0QWRkcmVzcyIsImhlbGxvV29ybGRDb250cmFjdCIsIm1lc3NhZ2UiLCJfdDMiLCJfdDQiLCJfY29udGV4dDMiLCJldGhlcnMiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXROZXR3b3JrIiwiZ2V0U2lnbmVyIiwiZ2V0QWRkcmVzcyIsImNoYWluSWQiLCJ3YXJuIiwibmFtZSIsIkNvbnRyYWN0IiwiaGVsbG8iLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9