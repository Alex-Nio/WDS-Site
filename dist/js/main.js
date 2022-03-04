/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// -----------------------------------------------
// -------------SVG FILL SCRIPT-------------------
// -----------------------------------------------
$(function () {
  $('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');

      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      $svg = $svg.removeAttr('xmlns:a');

      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
      }

      $img.replaceWith($svg);
    }, 'xml');
  });
}); // -----------------------------------------------
// ---------------HEADER SLIDER-------------------
// -----------------------------------------------

var swiper = new Swiper('.header-slider', {
  // Optional parameters
  direction: 'horizontal',
  grabCursor: true,
  slidesPerView: 1,
  speed: 1050,
  // loop: true,
  // autoplay: true,
  effect: "cube",
  cubeEffect: {
    shadow: false,
    slideShadows: false,
    shadowOffset: 20,
    shadowScale: 0.8
  },
  // If we need pagination
  pagination: {
    el: '.custom-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.action-elipse-next',
    prevEl: '.action-elipse-prev'
  }
}); // -----------------------------------------------
// -----------HEADER NAV SCROLL-------------------
// -----------------------------------------------

(function () {
  'use strict';

  var m = document.querySelector(".header__content"),
      h = document.querySelector(".header__nav"),
      sidebarContent = document.querySelector(".social-bar__list"),
      hHeight;

  function onScroll() {
    window.addEventListener("scroll", callbackFunc, 200);

    function callbackFunc() {
      var y = window.pageYOffset;

      if (y > 50) {
        sidebarContent.style.cssText = "\n        animation: fadeIn 0.8s linear;\n        margin-top: 13px;\n        transition: margin-top 0.8s linear;\n        ";
        h.classList.add("on-scroll");
      } else {
        h.classList.remove("on-scroll");
        sidebarContent.style.cssText = "\n        margin-top: 35px;\n        transition: margin-top 0.8s linear;\n        ";
      }
    }
  }

  window.onload = function () {
    onScroll();
  };
})(); // -----------------------------------------------
// -----------CIRCLE MAGIC ROTATION---------------
// -----------------------------------------------


var circleBtns = document.querySelectorAll('.circle-btn'),
    circleParent = document.querySelector('.circle-parent'),
    descrps = document.querySelectorAll('.descr-block');
circleBtns.forEach(function (btn, i) {
  btn.addEventListener('click', function (e) {
    hideTabContent();
    setActiveDescr(i); // if (circleParent.getAttribute('style')) {
    //   circleParent.style.removeProperty('transform');
    //   circleParent.style.removeProperty('transition-duration');
    // } else {
    //   setCircleAnimation();
    // }
  });
});

function setActiveBtn(i) {
  circleBtns[i].classList.add('active');
}

function setActiveDescr(i) {
  descrps[i].classList.add('active');
}

function hideTabContent() {
  descrps.forEach(function (descr) {
    descr.classList.remove('active');
  });
  circleBtns.forEach(function (btn) {
    btn.classList.remove('active');
  });
}

circleParent.addEventListener('click', function (e) {
  activeClassReset();
  var target = e.target;
  targetSetActiveClass(target);
  setActiveIcon(target);
}); // Анимация родительского круга

function setCircleAnimation() {
  circleParent.style.cssText = "\n    transform: rotate(360deg);\n    transition-duration: 1s;\n  ";
  setTimeout(clearStyle, 900);
} // Сброс активной кнопки


function activeClassReset() {
  circleBtns.forEach(function (btn) {
    btn.classList.remove('active');
  });
} // Вешаем активный класс на кнопку


function targetSetActiveClass(target) {
  if (target.classList.contains('circle-btn')) {
    target.classList.add('active');
  } else if (target.parentNode.className == 'circle-btn') {
    target.parentNode.classList.add('active');
  }
} // Выводим новую центральную иконку


function setActiveIcon(target) {
  var activeBtn = document.querySelector('.circle-btn.active'),
      activeBtnIcon = activeBtn.querySelector('i').classList.value,
      parentCenteredIcon = circleParent.querySelector("[data-element]");
  parentCenteredIcon.classList.value = activeBtnIcon;
} // Очищаем атрибут стилей


function clearStyle() {
  circleParent.removeAttribute("style");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/promo/promo.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/promo/promo.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/sidebar/sidebar.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sidebar/sidebar.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/sitebg/sitebg.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/sitebg/sitebg.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/sliders/sliders.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sliders/sliders.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {// const swiperTop = new Swiper('.top-slider-container', {
//     // Optional parameters
//     direction: 'vertical',
//     slidesPerView: 1,
//     // speed: 650,
//     loop: true,
//     // autoplay: true,
//     // effect: "flip",
//     // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
//   });
//   const swiperBottom = new Swiper('.bottom-slider-container', {
//     // Optional parameters
//     direction: 'vertical',
//     slidesPerView: 1,
//     // speed: 650,
//     loop: true,
//     // autoplay: true,
//     // effect: "flip",
//     // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
//   });
$(function () {
  var duration = 500;
  var slides = $(".slider .block").length;
  var i = 1; // $.each($('.slider .block'), function (i, el) {        
  //   $(el).addClass('active');
  // });
  // Slide the images

  function slide() {
    if (i <= slides) {
      var imagelocation = ".slider .block:nth-child(" + i + ") img"; // var navlocation = ".nav a:nth-child(" + i + ")";

      $(imagelocation).siblings().removeClass("active animated flipInX");
      $(imagelocation).addClass("active animated flipInX"); // $(navlocation).siblings().removeClass("navActive");
      // $(navlocation).addClass("navActive");
    }

    if (i == 0) {
      i = slides;
    }

    if (i < 0) {
      i = 0;
    }
  } // Add navigation blips
  // var blips = 0;
  // for (var nav = 0; nav < slides; nav++) {
  //   $(".nav").append('<a href="#"></a>');
  // }
  // $(".nav a:first-child").addClass("navActive");
  // Configure the next/prev buttons
  // $('.next').click(function () {
  //   clearInterval(timer);
  //   if (i == slides) {
  //     i = 1;
  //   } else {
  //     i++
  //   }
  //   slide();
  //   console.log(i);
  // })
  // $('.prev').click(function () {
  //   clearInterval(timer);
  //   if (i == 1) {
  //     i = slides;
  //   } else {
  //     i--
  //   }
  //   slide();
  //   console.log(i);
  // })
  // Autoplay


  timer = setInterval(function () {
    i++;

    if (i > slides) {
      i = 1;
    }

    slide();
  }, duration);
});
jQuery(document).ready(function ($) {
  //Count nr. of square classes
  var countSquare = $('.front-to-right').length;
  var countSquare2 = $('.front-to-left').length; //For each Square found add BG image

  for (i = 0; i < countSquare; i++) {
    var firstImage1 = $('.front-to-right').eq([i]);
    var secondImage1 = $('.back-to-left').eq([i]);
    var getImage = firstImage1.attr('data-image');
    var getImage2 = secondImage1.attr('data-image');
    firstImage1.css('background-image', 'url(' + getImage + ')');
    secondImage1.css('background-image', 'url(' + getImage2 + ')');
  }

  for (i = 0; i < countSquare2; i++) {
    var firstImage2 = $('.front-to-left').eq([i]);
    var secondImage2 = $('.back-to-right').eq([i]);
    var getImage = firstImage2.attr('data-image');
    var getImage2 = secondImage2.attr('data-image');
    firstImage2.css('background-image', 'url(' + getImage + ')');
    secondImage2.css('background-image', 'url(' + getImage2 + ')');
  }
});
var cards = document.querySelectorAll('.square-flip');

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseenter', hoverHandler, false);
  cards[i].addEventListener('mouseleave', hoverHandler, false);
}

function hoverHandler(e) {
  for (var i = 0; i < cards.length; i++) {
    var elem = cards[i];

    if (e.type == "mouseenter") {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sitebg_sitebg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/sitebg/sitebg */ "./src/blocks/modules/sitebg/sitebg.js");
/* harmony import */ var _modules_sitebg_sitebg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_sitebg_sitebg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/sidebar/sidebar */ "./src/blocks/modules/sidebar/sidebar.js");
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_promo_promo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/promo/promo */ "./src/blocks/modules/promo/promo.js");
/* harmony import */ var _modules_promo_promo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_promo_promo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_sliders_sliders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/sliders/sliders */ "./src/blocks/modules/sliders/sliders.js");
/* harmony import */ var _modules_sliders_sliders__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_sliders_sliders__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_5__);
// Импорт всех JS файлов из BEM модулей







/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map