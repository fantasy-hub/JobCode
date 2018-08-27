/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/frame-animation/build/animation.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/frame-animation/build/animation.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){t&&t()}function s(){this.taskQueue=[],this.timeline=new o,this.state=u,this.index=0}function r(){return new s}var o=n(1),a=n(2),u=0,h=1,c=2,p=0,f=1;s.prototype.loadImage=function(t){var e=function(e){a(t.slice(),e)},n=p;return this._add(e,n)},s.prototype.changePosition=function(t,e,n){var s,r,o=e.length;if(o){var a=this;s=function(i,s){n&&(t.style.backgroundImage="url("+n+")");var r=Math.min(s/a.interval|0,o-1),u=e[r].split(" ");t.style.backgroundPosition=u[0]+"px "+u[1]+"px",r===o-1&&i()},r=f}else s=i,r=p;return this._add(s,r)},s.prototype.changeSrc=function(t,e){var n,s,r=e.length;if(r){var o=this;n=function(n,i){var s=Math.min(i/o.interval|0,r-1);t.src=e[s],s===r-1&&n()},s=f}else n=i,s=p;return this._add(n,s)},s.prototype.enterFrame=function(t){return this._add(t,f)},s.prototype.then=function(t){var e=function(e){t(this),e()},n=p;return this._add(e,n)},s.prototype.start=function(t){return this.state===h?this:this.taskQueue.length?(this.state=h,this.interval=t,this._runTask(),this):this},s.prototype.repeat=function(t){var e=this,n=function(){if("undefined"==typeof t)return e.index--,void e._runTask();if(t)t--,e.index--,e._runTask();else{var n=e.taskQueue[e.index];e._next(n)}},i=p;return this._add(n,i)},s.prototype.repeatForever=function(){return this.repeat()},s.prototype.wait=function(t){return this.taskQueue&&this.taskQueue.length>0&&(this.taskQueue[this.taskQueue.length-1].wait=t),this},s.prototype.pause=function(){return this.state===h?(this.state=c,this.timeline.stop(),this):this},s.prototype.restart=function(){return this.state===c?(this.state=h,this.timeline.restart(),this):this},s.prototype.dispose=function(){return this.state!==u?(this.state=u,this.taskQueue=null,this.timeline.stop(),this.timeline=null,this):this},s.prototype._add=function(t,e){return this.taskQueue.push({taskFn:t,type:e}),this},s.prototype._runTask=function(){if(this.taskQueue&&this.state===h){if(this.index===this.taskQueue.length)return void this.dispose();var t=this.taskQueue[this.index];t.type===p?this._syncTask(t):this._asyncTask(t)}},s.prototype._syncTask=function(t){var e=this,n=function(){e._next(t)},i=t.taskFn;i(n)},s.prototype._asyncTask=function(t){var e=this,n=function(n){var i=t.taskFn,s=function(){e.timeline.stop(),e._next(t)};i(s,n)};this.timeline.onenterframe=n,this.timeline.start(this.interval)},s.prototype._next=function(t){var e=this;this.index++,t.wait?setTimeout(function(){e._runTask()},t.wait):this._runTask()},r.version="0.2.5",t.exports=r},function(t,e){"use strict";function n(){this.animationHandler=0,this.state=r}function i(t,e){function n(){var s=+new Date;t.animationHandler=u(n),s-i>=t.interval&&(t.onenterframe(s-e),i=s)}var i=+new Date;t.startTime=e,n.interval=t.interval,n()}var s=1e3/60,r=0,o=1,a=2;n.prototype.onenterframe=function(t){},n.prototype.start=function(t){this.state!==o&&(this.state=o,this.interval=t||s,i(this,+new Date))},n.prototype.restart=function(){this.state!==o&&this.dur&&this.interval&&(this.state=o,i(this,+new Date-this.dur))},n.prototype.stop=function(){this.state===o&&(this.state=a,this.startTime&&(this.dur=+new Date-this.startTime),h(this.animationHandler))};var u=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,t.interval||s)}}(),h=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}}();t.exports=n},function(t,e){"use strict";function n(){return++s}function i(t,e,i){function s(t){function n(){i.onload=i.onerror=null;try{delete window[t.id]}catch(n){}--o||h||(clearTimeout(u),e(a))}t.status="loading";var i=t.img;i.onload=function(){a=a&&!0,t.status="loaded",n()},i.onerror=function(){a=!1,t.status="error",n()},i.src=t.src}function r(){h=!0,e(!1)}var o=0,a=!0,u=0,h=!1;for(var c in t)if(t.hasOwnProperty(c)){var p=t[c];"string"==typeof p&&(p=t[c]={src:p}),p&&p.src&&(o++,p.id="__img_"+c+n(),p.img=window[p.id]=new Image,s(p))}o?i&&(u=setTimeout(r,i)):e(a)}var s=0;t.exports=i}])});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var frame_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frame-animation */ "./node_modules/frame-animation/build/animation.min.js");
/* harmony import */ var frame_animation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frame_animation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preload */ "./src/preload.js");


// window.animation = animation;
let box = document.querySelector('.treasure-box');
let flexBox = document.querySelector('.open');
let exit = document.querySelector('.open-exit');
let main = document.querySelector('.main');

let ele = document.getElementById('open-box');
let key = document.getElementById('open-key-mv');

let click = document.querySelector('.open-click-bg');

let open = '';
let keyAnimation = '';

let imglist = [];
for (let i = 2; i < 25; i++) {
    imglist.push(`./static/img/box/xiang2/xiang2_${i}.png`);
}

let keylist = [];
for (let i = 1; i < 76; i++) {
    keylist.push(`./static/img/box/xiang3/xiang3_${i}.png`);
}

let openlist = [];
for (let i = 1; i < 108; i++) {
    openlist.push(`./static/img/box/xiang4/xiang4_${i}.png`);
}

let starlist = [];
for (let i = 1; i < 303; i++) {
    starlist.push(`./static/img/openDoor/openDoor${i}.jpg`);
}

Object(_preload__WEBPACK_IMPORTED_MODULE_1__["default"])(imglist, function (e) {
    console.log(e);
});
Object(_preload__WEBPACK_IMPORTED_MODULE_1__["default"])(keylist, function (e) {
    console.log(e);
});
Object(_preload__WEBPACK_IMPORTED_MODULE_1__["default"])(openlist, function (e) {
    console.log(e);
});
Object(_preload__WEBPACK_IMPORTED_MODULE_1__["default"])(starlist, function (e) {
    console.log(e);
});

box.addEventListener('click', function (e) {
    // 弹出寻宝
    flexBox.classList.add('flex');
    main.classList.add('black');
    // 隐藏宝箱
    box.classList.add('hidden');
    key.setAttribute('src', './static/img/box/xiang3/xiang3_1.png');
    key.setAttribute('id', 'open-key-mv');
    // 宝箱掉落动画
    let boxAnimation = frame_animation__WEBPACK_IMPORTED_MODULE_0___default()().loadImage(imglist).changeSrc(ele, imglist);
    boxAnimation.start(80);
}, false);
exit.addEventListener('click', function (e) {
    flexBox.classList.remove('flex');
    main.classList.remove('black');
    box.classList.remove('hidden');
    click.classList.remove('hidden');

    keyAnimation.dispose();
    open.dispose();
}, false);

click.addEventListener('click', function (e) {
    click.classList.add('hidden');
    key.removeAttribute('class');

    // 钥匙动画
    keyAnimation = frame_animation__WEBPACK_IMPORTED_MODULE_0___default()().loadImage(keylist).changeSrc(key, keylist).then(function () {
        key.removeAttribute('src');
        key.removeAttribute('id');
        // ele.setAttribute('src', './static/img/box/xiang4/xiang4_1.png');
        // 开箱动画
        open = frame_animation__WEBPACK_IMPORTED_MODULE_0___default()().changeSrc(ele, openlist).start(50).then(function () {
            window.location.href = "./face.html";
        });
        // boxAnimation.start(80);
    });
    keyAnimation.start(50);
    // setTimeout(function () {open = animation().changeSrc(ele, openlist).start(80);}, 5600);
}, false);

/***/ }),

/***/ "./src/preload.js":
/*!************************!*\
  !*** ./src/preload.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 图片预加载函数
 * @param {图片数组或对象} images 
 * @param {全部图片加载成功的回调函数} callback 
 * @param {加载超时的时间} timeout 
 */
function preload(images, callback, timeout) {
  //加载完成的图片计数器
  let count = 0;
  //全部图片加载完成
  let success = true;
  //是否加载超时
  let isTimeout = false;
  //超时定时器ID
  let timeId = 0;

  for (let key in images) {
    //过滤掉继承的属性
    if (!images.hasOwnProperty(key)) {
      continue;
    }
    let item = images[key];
    if (typeof item === 'string') {
      item = { src: item };
    } else {
      continue;
    }
    count++;
    //设置图片元素的img，是一个Image对象
    item.image = new Image();
    doload(item);
  }
  if (timeout) {
    timeId = setTimeout(onTimeout, timeout);
  }
  function doload(item) {
    item.status = 'loading';

    item.image.onload = function () {
      item.status = 'loaded';
      success = success && true;
      cleanEvent();
    };
    item.image.onerror = function () {
      item.status = 'error';
      success = false;
      cleanEvent();
    };
    item.image.src = item.src;
    //清除绑定的事件
    function cleanEvent() {
      item.image.onload = item.image.onerror = null;

      if (! --count && !isTimeout) {
        clearTimeout(timeId);
        callback(true);
      }
    }
  }
  //超时函数  
  function onTimeout() {
    isTimeout = true;
    callback(false);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (preload);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map