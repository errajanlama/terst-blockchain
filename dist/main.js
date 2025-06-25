/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./artifacts/contracts/counter.sol/Counter.json":
/*!******************************************************!*\
  !*** ./artifacts/contracts/counter.sol/Counter.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Counter","sourceName":"contracts/counter.sol","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint32","name":"newCounter","type":"uint32"}],"name":"CounterInc","type":"event"},{"inputs":[],"name":"count","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCounter","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"}],"bytecode":"0x608060405260008060006101000a81548163ffffffff021916908363ffffffff160217905550348015603057600080fd5b506103d2806100406000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306661abd1461003b5780638ada066e14610045575b600080fd5b610043610063565b005b61004d6100fa565b60405161005a919061021e565b60405180910390f35b60008081819054906101000a900463ffffffff168092919061008490610268565b91906101000a81548163ffffffff021916908363ffffffff160217905550506100f86040518060400160405280600e81526020017f436f756e746572206973206e6f7700000000000000000000000000000000000081525060008054906101000a900463ffffffff1663ffffffff16610113565b565b60008060009054906101000a900463ffffffff16905090565b6101ab828260405160240161012992919061033d565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506101af565b5050565b6101c6816101be6101c96101ea565b63ffffffff16565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6101f5819050919050565b6101fd61036d565b565b600063ffffffff82169050919050565b610218816101ff565b82525050565b6000602082019050610233600083018461020f565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610273826101ff565b915063ffffffff820361028957610288610239565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b60005b838110156102ce5780820151818401526020810190506102b3565b60008484015250505050565b6000601f19601f8301169050919050565b60006102f682610294565b610300818561029f565b93506103108185602086016102b0565b610319816102da565b840191505092915050565b6000819050919050565b61033781610324565b82525050565b6000604082019050818103600083015261035781856102eb565b9050610366602083018461032e565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea2646970667358221220eac54256349e69e700cf31a8d3748cef98a178834686e95f71afc7912982f3a264736f6c634300081c0033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100365760003560e01c806306661abd1461003b5780638ada066e14610045575b600080fd5b610043610063565b005b61004d6100fa565b60405161005a919061021e565b60405180910390f35b60008081819054906101000a900463ffffffff168092919061008490610268565b91906101000a81548163ffffffff021916908363ffffffff160217905550506100f86040518060400160405280600e81526020017f436f756e746572206973206e6f7700000000000000000000000000000000000081525060008054906101000a900463ffffffff1663ffffffff16610113565b565b60008060009054906101000a900463ffffffff16905090565b6101ab828260405160240161012992919061033d565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506101af565b5050565b6101c6816101be6101c96101ea565b63ffffffff16565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6101f5819050919050565b6101fd61036d565b565b600063ffffffff82169050919050565b610218816101ff565b82525050565b6000602082019050610233600083018461020f565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610273826101ff565b915063ffffffff820361028957610288610239565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b60005b838110156102ce5780820151818401526020810190506102b3565b60008484015250505050565b6000601f19601f8301169050919050565b60006102f682610294565b610300818561029f565b93506103108185602086016102b0565b610319816102da565b840191505092915050565b6000819050919050565b61033781610324565b82525050565b6000604082019050818103600083015261035781856102eb565b9050610366602083018461032e565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea2646970667358221220eac54256349e69e700cf31a8d3748cef98a178834686e95f71afc7912982f3a264736f6c634300081c0033","linkReferences":{},"deployedLinkReferences":{}}');

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var ethers_1 = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
var Counter_json_1 = __importDefault(__webpack_require__(/*! ../artifacts/contracts/counter.sol/Counter.json */ "./artifacts/contracts/counter.sol/Counter.json"));
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
  _run = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var setCounter, provider, network, signer, address, contractAddress, counter, el, button, _t5;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.p = 0;
          setCounter = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(count) {
              var _t3;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _t3 = count;
                    if (_t3) {
                      _context3.n = 2;
                      break;
                    }
                    _context3.n = 1;
                    return counter.getCounter();
                  case 1:
                    _t3 = _context3.v;
                  case 2:
                    el.innerHTML = _t3;
                  case 3:
                    return _context3.a(2);
                }
              }, _callee3);
            }));
            return function setCounter(_x) {
              return _ref.apply(this, arguments);
            };
          }();
          provider = new ethers_1.ethers.providers.Web3Provider(getEth());
          _context6.n = 1;
          return provider.getNetwork();
        case 1:
          network = _context6.v;
          console.log("Network:", network);
          _context6.n = 2;
          return hasAccounts();
        case 2:
          if (!_context6.v) {
            _context6.n = 3;
            break;
          }
          console.log("Wallet already connected.");
          _context6.n = 4;
          break;
        case 3:
          console.log("Connecting wallet...");
          _context6.n = 4;
          return connectWallet();
        case 4:
          signer = provider.getSigner();
          _context6.n = 5;
          return signer.getAddress();
        case 5:
          address = _context6.v;
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
          // const contractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";
          contractAddress = {"ACLOCAL_PATH":"C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal","ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\Er Rajan Lama\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"133859720812367669","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_18044_ZFHIJXHRMZNAWOIP","COLOR":"1","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-SLRNGG3","COMSPEC":"C:\\Windows\\system32\\cmd.exe","CONFIG_SITE":"C:/Program Files/Git/etc/config.site","CONTRACT_ADDRESS":"0x5fbdb2315678afecb367f032d93f642f64180aa3","DISPLAY":"needs-to-be-defined","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EDITOR":"C:\\Windows\\notepad.exe","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\Er Rajan Lama\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\Er Rajan Lama","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\Er Rajan Lama","HOSTNAME":"DESKTOP-SLRNGG3","INFOPATH":"C:\\Program Files\\Git\\mingw64\\local\\info;C:\\Program Files\\Git\\mingw64\\share\\info;C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info","INIT_CWD":"D:\\blockchain proj\\test1","INTEL_DEV_REDIST":"C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\Er Rajan Lama\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-SLRNGG3","MANPATH":"C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man","MIC_LD_LIBRARY_PATH":"C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\compiler\\lib\\mic","MINGW_CHOST":"x86_64-w64-mingw32","MINGW_PACKAGE_PREFIX":"mingw-w64-x86_64","MINGW_PREFIX":"C:/Program Files/Git/mingw64","MSYSTEM":"MINGW64","MSYSTEM_CARCH":"x86_64","MSYSTEM_CHOST":"x86_64-w64-mingw32","MSYSTEM_PREFIX":"C:/Program Files/Git/mingw64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_command":"exec","npm_config_cache":"C:\\Users\\Er Rajan Lama\\AppData\\Local\\npm-cache","npm_config_globalconfig":"C:\\Users\\Er Rajan Lama\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_global_prefix":"C:\\Users\\Er Rajan Lama\\AppData\\Roaming\\npm","npm_config_init_module":"C:\\Users\\Er Rajan Lama\\.npm-init.js","npm_config_local_prefix":"D:\\blockchain proj\\test1","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_noproxy":"","npm_config_npm_version":"10.9.2","npm_config_prefix":"C:\\Users\\Er Rajan Lama\\AppData\\Roaming\\npm","npm_config_userconfig":"C:\\Users\\Er Rajan Lama\\.npmrc","npm_config_user_agent":"npm/10.9.2 node/v22.16.0 win32 x64 workspaces/false","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"npx","npm_lifecycle_script":"webpack","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_json":"D:\\blockchain proj\\test1\\package.json","npm_package_name":"test1","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"6","OneDrive":"C:\\Users\\Er Rajan Lama\\OneDrive","ORIGINAL_PATH":"C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Er Rajan Lama\\bin;C:\\Program Files\\Python313\\Scripts;C:\\Program Files\\Python313;C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA app\\NvDLISR;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\dotnet;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs;C:\\Users\\Er Rajan Lama\\AppData\\Local\\Microsoft\\WindowsApps;C:\\ProgramData\\chocolatey\\bin;C:\\Users\\Er Rajan Lama\\AppData\\Roaming\\npm;C:\\Users\\Er Rajan Lama\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\Python313;C:\\Users\\Er Rajan Lama\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand","ORIGINAL_TEMP":"C:/Users/ERRAJA~1/AppData/Local/Temp","ORIGINAL_TMP":"C:/Users/ERRAJA~1/AppData/Local/Temp","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"D:\\blockchain proj\\test1\\node_modules\\.bin;D:\\blockchain proj\\test1\\node_modules\\.bin;D:\\blockchain proj\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Er Rajan Lama\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Er Rajan Lama\\bin;C:\\Program Files\\Python313\\Scripts;C:\\Program Files\\Python313;C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\NVIDIA Corporation\\NVIDIA app\\NvDLISR;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\dotnet;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs;C:\\Users\\Er Rajan Lama\\AppData\\Local\\Microsoft\\WindowsApps;C:\\ProgramData\\chocolatey\\bin;C:\\Users\\Er Rajan Lama\\AppData\\Roaming\\npm;C:\\Users\\Er Rajan Lama\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\Python313;C:\\Users\\Er Rajan Lama\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW","PKG_CONFIG_PATH":"C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig","PKG_CONFIG_SYSTEM_INCLUDE_PATH":"C:/Program Files/Git/mingw64/include","PKG_CONFIG_SYSTEM_LIBRARY_PATH":"C:/Program Files/Git/mingw64/lib","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 158 Stepping 10, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"9e0a","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\Wired Networking\\","PUBLIC":"C:\\Users\\Public","PWD":"D:/blockchain proj/test1","PYTHON_HOME":"C:\\Program Files\\Python313","SESSIONNAME":"Console","SHELL":"C:\\Program Files\\Git\\usr\\bin\\bash.exe","SHLVL":"2","SSH_ASKPASS":"C:/Program Files/Git/mingw64/bin/git-askpass.exe","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\ERRAJA~1\\AppData\\Local\\Temp","TERM":"xterm-256color","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.101.1","TMP":"C:\\Users\\ERRAJA~1\\AppData\\Local\\Temp","TMPDIR":"C:\\Users\\ERRAJA~1\\AppData\\Local\\Temp","USERDOMAIN":"DESKTOP-SLRNGG3","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-SLRNGG3","USERNAME":"Er Rajan Lama","USERPROFILE":"C:\\Users\\Er Rajan Lama","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\Er Rajan Lama\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\Er Rajan Lama\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-77522463fc-sock","WINDIR":"C:\\Windows","ZES_ENABLE_SYSMAN":"1","_":"C:/Program Files/nodejs/node.exe","__PSLockDownPolicy":"0"}.CONTRACT_ADDRESS || "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";
          console.log("Using contract address:", contractAddress);
          // const helloWorldContract = new ethers.Contract(
          //   contractAddress,
          //   [
          //     "function hello() public pure returns (string memory)" // This is known as Inline interfrace.
          //   ],
          //   signer
          // );
          // const counter = new ethers.Contract(
          //   contractAddress,
          //   [
          //     "function count() public",
          //     "function getCounter() public view returns (uint32)"
          //   ],
          //   signer
          // );
          counter = new ethers_1.ethers.Contract(contractAddress, Counter_json_1["default"].abi, signer);
          el = document.createElement("div");
          setCounter();
          button = document.createElement("button");
          button.innerHTML = "Increment Counter";
          button.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
            var tx, _t4;
            return _regenerator().w(function (_context4) {
              while (1) switch (_context4.n) {
                case 0:
                  _context4.p = 0;
                  _context4.n = 1;
                  return counter.count();
                case 1:
                  tx = _context4.v;
                  console.log("Transaction sent:", tx);
                  _context4.n = 2;
                  return tx.wait();
                case 2:
                  console.log("Transaction confirmed");
                  _context4.n = 3;
                  return setCounter();
                case 3:
                  _context4.n = 5;
                  break;
                case 4:
                  _context4.p = 4;
                  _t4 = _context4.v;
                  console.error("Error incrementing counter:", _t4);
                case 5:
                  return _context4.a(2);
              }
            }, _callee4, null, [[0, 4]]);
          }));
          counter.on(counter.filters.CounterInc(), /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(newCount) {
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    console.log("Counter incremented:", newCount.toString());
                    _context5.n = 1;
                    return setCounter(newCount);
                  case 1:
                    return _context5.a(2);
                }
              }, _callee5);
            }));
            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }());
          document.body.appendChild(el);
          document.body.appendChild(button);
          // try {
          //   const message = await counter.hello();
          //   console.log("hello() returned:", message);
          //   document.body.innerHTML = ` 
          //     <h1>Hello World Contract Interaction</h1>
          //     <div>Contract says: ${message}</div>
          //   `;
          // } catch (err) {
          //   console.error("Call failed:", err);
          //   document.body.innerHTML = `
          //     <h1>Hello World Contract Interaction</h1>
          //     <div style="color: red;">Call failed: ${err.message}</div>
          //   `;
          // }
          _context6.n = 7;
          break;
        case 6:
          _context6.p = 6;
          _t5 = _context6.v;
          console.error("Error in run function:", _t5);
        case 7:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 6]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdDEvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGVzdDEvaWdub3JlZHxEOlxcYmxvY2tjaGFpbiBwcm9qXFx0ZXN0MVxcbm9kZV9tb2R1bGVzXFxAZXRoZXJzcHJvamVjdFxcc2lnbmluZy1rZXlcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vdGVzdDEvaWdub3JlZHxEOlxcYmxvY2tjaGFpbiBwcm9qXFx0ZXN0MVxcbm9kZV9tb2R1bGVzXFxldGhlcnNcXG5vZGVfbW9kdWxlc1xcQGV0aGVyc3Byb2plY3RcXGFkZHJlc3NcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vdGVzdDEvaWdub3JlZHxEOlxcYmxvY2tjaGFpbiBwcm9qXFx0ZXN0MVxcbm9kZV9tb2R1bGVzXFxldGhlcnNcXG5vZGVfbW9kdWxlc1xcQGV0aGVyc3Byb2plY3RcXGhkbm9kZVxcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly90ZXN0MS9pZ25vcmVkfEQ6XFxibG9ja2NoYWluIHByb2pcXHRlc3QxXFxub2RlX21vZHVsZXNcXGV0aGVyc1xcbm9kZV9tb2R1bGVzXFxAZXRoZXJzcHJvamVjdFxcY29uc3RhbnRzXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovL3Rlc3QxL2lnbm9yZWR8RDpcXGJsb2NrY2hhaW4gcHJvalxcdGVzdDFcXG5vZGVfbW9kdWxlc1xcZXRoZXJzXFxub2RlX21vZHVsZXNcXEBldGhlcnNwcm9qZWN0XFxhYmlcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vdGVzdDEvaWdub3JlZHxEOlxcYmxvY2tjaGFpbiBwcm9qXFx0ZXN0MVxcbm9kZV9tb2R1bGVzXFxldGhlcnNcXG5vZGVfbW9kdWxlc1xcQGV0aGVyc3Byb2plY3RcXHRyYW5zYWN0aW9uc1xcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly90ZXN0MS9pZ25vcmVkfEQ6XFxibG9ja2NoYWluIHByb2pcXHRlc3QxXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovL3Rlc3QxL2lnbm9yZWR8RDpcXGJsb2NrY2hhaW4gcHJvalxcdGVzdDFcXG5vZGVfbW9kdWxlc1xcZXRoZXJzXFxub2RlX21vZHVsZXNcXEBldGhlcnNwcm9qZWN0XFxoYXNoXFxub2RlX21vZHVsZXNcXGJuLmpzXFxsaWJ8YnVmZmVyIiwid2VicGFjazovL3Rlc3QxL2lnbm9yZWR8RDpcXGJsb2NrY2hhaW4gcHJvalxcdGVzdDFcXG5vZGVfbW9kdWxlc1xcQGV0aGVyc3Byb2plY3RcXGJpZ251bWJlclxcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vdGVzdDEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVzdDEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVzdDEvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90ZXN0MS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBldGhlcnNfMSA9IHJlcXVpcmUoXCJldGhlcnNcIik7XG5jb25zdCBDb3VudGVyX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9jb3VudGVyLnNvbC9Db3VudGVyLmpzb25cIikpO1xuZnVuY3Rpb24gZ2V0RXRoKCkge1xuICAgIGNvbnN0IGV0aCA9IHdpbmRvdy5ldGhlcmV1bTtcbiAgICBpZiAoIWV0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFdGhlcmV1bSBwcm92aWRlciBub3QgZm91bmQuIFBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrIG9yIGFub3RoZXIgRXRoZXJldW0gd2FsbGV0LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGV0aDtcbn1cbmFzeW5jIGZ1bmN0aW9uIGhhc0FjY291bnRzKCkge1xuICAgIGNvbnN0IGV0aCA9IGdldEV0aCgpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnRzOlwiLCBhY2NvdW50cyk7XG4gICAgICAgIHJldHVybiBhY2NvdW50cy5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNoZWNraW5nIGFjY291bnRzOlwiLCBlcnJvcik7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQoKSB7XG4gICAgY29uc3QgZXRoID0gZ2V0RXRoKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGgucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCBhY2NvdW50OlwiLCBhY2NvdW50c1swXSk7XG4gICAgICAgIHJldHVybiBhY2NvdW50c1swXTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHdhbGxldDpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiBydW4oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzXzEuZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZ2V0RXRoKCkpO1xuICAgICAgICBjb25zdCBuZXR3b3JrID0gYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldHdvcms6XCIsIG5ldHdvcmspO1xuICAgICAgICBpZiAoYXdhaXQgaGFzQWNjb3VudHMoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYWxsZXQgYWxyZWFkeSBjb25uZWN0ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0aW5nIHdhbGxldC4uLlwiKTtcbiAgICAgICAgICAgIGF3YWl0IGNvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIGFkZHJlc3M6XCIsIGFkZHJlc3MpO1xuICAgICAgICAvLyBDaGVjayBuZXR3b3JrXG4gICAgICAgIGlmIChuZXR3b3JrLmNoYWluSWQgIT09IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIllvdSBhcmUgbm90IGNvbm5lY3RlZCB0byB0aGUgRXRoZXJldW0gbWFpbm5ldC4gQ3VycmVudCBuZXR3b3JrOlwiLCBuZXR3b3JrLm5hbWUpO1xuICAgICAgICAgICAgLy8gT3B0aW9uYWxseSwgcmV0dXJuIGhlcmUgaWYgeW91IG9ubHkgd2FudCB0byBhbGxvdyBtYWlubmV0XG4gICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byB0aGUgRXRoZXJldW0gbWFpbm5ldC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gISEhIElNUE9SVEFOVDogUmVwbGFjZSB0aGlzIGFkZHJlc3Mgd2l0aCB5b3VyIGFjdHVhbCBkZXBsb3llZCBjb250cmFjdCBhZGRyZXNzICEhIVxuICAgICAgICAvLyBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4ZTdmMTcyNWU3NzM0Y2UyODhmODM2N2UxYmIxNDNlOTBiYjNmMDUxMlwiO1xuICAgICAgICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBwcm9jZXNzLmVudi5DT05UUkFDVF9BRERSRVNTIHx8IFwiMHhlN2YxNzI1ZTc3MzRjZTI4OGY4MzY3ZTFiYjE0M2U5MGJiM2YwNTEyXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgY29udHJhY3QgYWRkcmVzczpcIiwgY29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgLy8gY29uc3QgaGVsbG9Xb3JsZENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgLy8gICBjb250cmFjdEFkZHJlc3MsXG4gICAgICAgIC8vICAgW1xuICAgICAgICAvLyAgICAgXCJmdW5jdGlvbiBoZWxsbygpIHB1YmxpYyBwdXJlIHJldHVybnMgKHN0cmluZyBtZW1vcnkpXCIgLy8gVGhpcyBpcyBrbm93biBhcyBJbmxpbmUgaW50ZXJmcmFjZS5cbiAgICAgICAgLy8gICBdLFxuICAgICAgICAvLyAgIHNpZ25lclxuICAgICAgICAvLyApO1xuICAgICAgICAvLyBjb25zdCBjb3VudGVyID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgLy8gICBjb250cmFjdEFkZHJlc3MsXG4gICAgICAgIC8vICAgW1xuICAgICAgICAvLyAgICAgXCJmdW5jdGlvbiBjb3VudCgpIHB1YmxpY1wiLFxuICAgICAgICAvLyAgICAgXCJmdW5jdGlvbiBnZXRDb3VudGVyKCkgcHVibGljIHZpZXcgcmV0dXJucyAodWludDMyKVwiXG4gICAgICAgIC8vICAgXSxcbiAgICAgICAgLy8gICBzaWduZXJcbiAgICAgICAgLy8gKTtcbiAgICAgICAgY29uc3QgY291bnRlciA9IG5ldyBldGhlcnNfMS5ldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBDb3VudGVyX2pzb25fMS5kZWZhdWx0LmFiaSwgc2lnbmVyKTtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBzZXRDb3VudGVyKGNvdW50KSB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBjb3VudCB8fCBhd2FpdCBjb3VudGVyLmdldENvdW50ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRDb3VudGVyKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkluY3JlbWVudCBDb3VudGVyXCI7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCBjb3VudGVyLmNvdW50KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHggPSBhd2FpdCBjb3VudGVyLmNvdW50KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBzZW50OlwiLCB0eCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdHgud2FpdCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gY29uZmlybWVkXCIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNldENvdW50ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW5jcmVtZW50aW5nIGNvdW50ZXI6XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvdW50ZXIub24oY291bnRlci5maWx0ZXJzLkNvdW50ZXJJbmMoKSwgYXN5bmMgKG5ld0NvdW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdW50ZXIgaW5jcmVtZW50ZWQ6XCIsIG5ld0NvdW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgYXdhaXQgc2V0Q291bnRlcihuZXdDb3VudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICAvLyAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBjb3VudGVyLmhlbGxvKCk7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJoZWxsbygpIHJldHVybmVkOlwiLCBtZXNzYWdlKTtcbiAgICAgICAgLy8gICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGAgXG4gICAgICAgIC8vICAgICA8aDE+SGVsbG8gV29ybGQgQ29udHJhY3QgSW50ZXJhY3Rpb248L2gxPlxuICAgICAgICAvLyAgICAgPGRpdj5Db250cmFjdCBzYXlzOiAke21lc3NhZ2V9PC9kaXY+XG4gICAgICAgIC8vICAgYDtcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vICAgY29uc29sZS5lcnJvcihcIkNhbGwgZmFpbGVkOlwiLCBlcnIpO1xuICAgICAgICAvLyAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYFxuICAgICAgICAvLyAgICAgPGgxPkhlbGxvIFdvcmxkIENvbnRyYWN0IEludGVyYWN0aW9uPC9oMT5cbiAgICAgICAgLy8gICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogcmVkO1wiPkNhbGwgZmFpbGVkOiAke2Vyci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAvLyAgIGA7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBydW4gZnVuY3Rpb246XCIsIGVycm9yKTtcbiAgICB9XG59XG5ydW4oKTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3Rlc3QxXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3Rlc3QxXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ldGhlcnNfbGliX2VzbV9pbmRleF9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvciIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfaW52b2tlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsImV4cG9ydHMiLCJldGhlcnNfMSIsInJlcXVpcmUiLCJDb3VudGVyX2pzb25fMSIsImdldEV0aCIsImV0aCIsIndpbmRvdyIsImV0aGVyZXVtIiwiRXJyb3IiLCJoYXNBY2NvdW50cyIsIl9oYXNBY2NvdW50cyIsIl9jYWxsZWUiLCJhY2NvdW50cyIsIl90IiwiX2NvbnRleHQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY29ubmVjdFdhbGxldCIsIl9jb25uZWN0V2FsbGV0IiwiX2NhbGxlZTIiLCJfdDIiLCJfY29udGV4dDIiLCJydW4iLCJfcnVuIiwiX2NhbGxlZTYiLCJzZXRDb3VudGVyIiwicHJvdmlkZXIiLCJuZXR3b3JrIiwic2lnbmVyIiwiYWRkcmVzcyIsImNvbnRyYWN0QWRkcmVzcyIsImNvdW50ZXIiLCJlbCIsImJ1dHRvbiIsIl90NSIsIl9jb250ZXh0NiIsIl9yZWYiLCJfY2FsbGVlMyIsImNvdW50IiwiX3QzIiwiX2NvbnRleHQzIiwiZ2V0Q291bnRlciIsImlubmVySFRNTCIsIl94IiwiZXRoZXJzIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0TmV0d29yayIsImdldFNpZ25lciIsImdldEFkZHJlc3MiLCJjaGFpbklkIiwid2FybiIsIm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiQ09OVFJBQ1RfQUREUkVTUyIsIkNvbnRyYWN0IiwiYWJpIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib25jbGljayIsIl9jYWxsZWU0IiwidHgiLCJfdDQiLCJfY29udGV4dDQiLCJ3YWl0Iiwib24iLCJmaWx0ZXJzIiwiQ291bnRlckluYyIsIl9yZWYzIiwiX2NhbGxlZTUiLCJuZXdDb3VudCIsIl9jb250ZXh0NSIsInRvU3RyaW5nIiwiX3gyIiwiYm9keSIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==