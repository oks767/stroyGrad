/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/component.js":
/*!****************************************!*\
  !*** ./src/js/components/component.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

 //export default class Component extends Emitter {

var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    //super();
    if (arguments.length === 2) {
      this.root = arguments.length <= 0 ? undefined : arguments[0];
      this.options = Object.assign({}, this._defaultOptions, arguments.length <= 1 ? undefined : arguments[1]);
    } else if (arguments.length === 1) {
      if (Component.isjQuery(arguments.length <= 0 ? undefined : arguments[0])) {
        this.root = arguments.length <= 0 ? undefined : arguments[0];
      } else {
        this.options = Object.assign({}, this._defaultOptions, arguments.length <= 0 ? undefined : arguments[0]);
      }
    }
  }

  _createClass(Component, [{
    key: "initialize",
    value: function initialize() {
      this._cacheNodes();

      this._bindEvents();

      this._ready();
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {}
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {}
  }, {
    key: "_ready",
    value: function _ready() {}
  }], [{
    key: "isjQuery",
    value: function isjQuery(object) {
      return object instanceof (jquery__WEBPACK_IMPORTED_MODULE_0___default());
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/js/components/lightbox.js":
/*!***************************************!*\
  !*** ./src/js/components/lightbox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lightbox)
/* harmony export */ });
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Lightbox = /*#__PURE__*/function (_Component) {
  _inherits(Lightbox, _Component);

  var _super = _createSuper(Lightbox);

  function Lightbox(root, options) {
    var _this;

    _classCallCheck(this, Lightbox);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(Lightbox, [{
    key: "_defaultOptions",
    get: function get() {
      return {
        defaults: {
          lang: 'ru',
          transitionEffect: 'slide',
          backFocus: false,
          buttons: ['close'],
          i18n: {
            ru: {
              CLOSE: 'Закрыть',
              NEXT: 'Дальше',
              PREV: 'Назад',
              ERROR: 'Не удается загрузить. <br/> Попробуйте позднее.',
              PLAY_START: 'Начать слайдшоу',
              PLAY_STOP: 'Остановить слайдшоу',
              FULL_SCREEN: 'На весь экран',
              THUMBS: 'Превью',
              DOWNLOAD: 'Скачать',
              SHARE: 'Поделиться',
              ZOOM: 'Увеличить'
            }
          }
        }
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(Lightbox.prototype), "initialize", this).call(this);
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {
      this.nodes = {
        link: $('.js-link-modal')
      };
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.nodes.link.on('click', function (event) {
        event.preventDefault();
        var $link = $(event.currentTarget);
        $.fancybox.open({
          src: $link.data('src'),
          type: 'inline',
          opts: {
            touch: false,
            autoFocus: false,
            closeExisting: true,
            animationEffect: false,
            beforeLoad: function beforeLoad(event) {
              event.current.$slide.addClass('fancybox-modal');
            }
          }
        });
      });
    }
  }, {
    key: "_ready",
    value: function _ready() {
      $.fancybox.defaults.i18n.ru = this.options.defaults.i18n.ru;
      $.fancybox.defaults.lang = this.options.defaults.lang;
      $.fancybox.defaults.buttons = this.options.defaults.buttons;
      $.fancybox.defaults.transitionEffect = this.options.defaults.transitionEffect;
      $.fancybox.defaults.backFocus = this.options.defaults.backFocus;
    }
  }]);

  return Lightbox;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/js/components/scrolltotop-btn.js":
/*!**********************************************!*\
  !*** ./src/js/components/scrolltotop-btn.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollToTopBtn)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// кнопка наверх


var ScrollToTopBtn = /*#__PURE__*/function (_Component) {
  _inherits(ScrollToTopBtn, _Component);

  var _super = _createSuper(ScrollToTopBtn);

  function ScrollToTopBtn(root, options) {
    var _this;

    _classCallCheck(this, ScrollToTopBtn);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(ScrollToTopBtn, [{
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(ScrollToTopBtn.prototype), "initialize", this).call(this);

      this.setToTopButton();
    }
  }, {
    key: "setToTopButton",
    value: function setToTopButton() {
      var $scrollTopBtn = $('<a rel="nofollow" href="#" id="scroll-top" class="scrolltotop-btn"><i></i></a>').appendTo('body');
      $scrollTopBtn.on('click', function () {
        $('html:not(:animated),body:not(:animated)').animate({
          scrollTop: 0
        }, 300);
        return false;
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $scrollTopBtn.addClass('top-btn-show');
        } else {
          $scrollTopBtn.removeClass('top-btn-show');
        }
      });

      if ($scrollTopBtn.hasClass('top-btn-show')) {
        $scrollTopBtn.removeClass('top-btn-show');
      }
    }
  }]);

  return ScrollToTopBtn;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(root, options) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(Slider, [{
    key: "_defaultOptions",
    get: function get() {
      return {
        rows: 0,
        counter: false,
        prevArrow: '<button class="slider-prev"><span class="icon-left"></span></button>',
        nextArrow: '<button class="slider-next"><span class="icon-right"></span></button>'
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(Slider.prototype), "initialize", this).call(this);
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {
      this.nodes = {};
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.root.on('init', this.addCounter);
      this.root.on('beforeChange', this.changeCounter);
      this.root.on('breakpoint', this.addCounter);
    }
  }, {
    key: "_ready",
    value: function _ready() {
      this.root.slick(this.options);
    }
  }, {
    key: "addCounter",
    value: function addCounter(event, slick) {
      if (slick.options.counter === true && slick.slideCount > slick.options.slidesToShow) {
        var $counter = $('<div class="slick-counter slick-cloned"><div class="slick-counter__inner">' + '<span class="slick-counter__current">' + (slick.currentSlide + 1) + '</span>' + '<span role="separator" class="slick-counter__divider"></span>' + '<span class="slick-counter__count">' + (slick.getDotCount() + 1) + '</span></div></div>');
        $counter.appendTo(slick.$slider);
      }
    }
  }, {
    key: "changeCounter",
    value: function changeCounter(event, slick, currentSlide, nextSlide) {
      slick.$slider.find('.slick-counter__current').html(Math.floor(nextSlide / slick.options.slidesToScroll) + 1);
    }
  }]);

  return Slider;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lightbox */ "./src/js/components/lightbox.js");
/* harmony import */ var _components_scrolltotop_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scrolltotop-btn */ "./src/js/components/scrolltotop-btn.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var Application = /*#__PURE__*/function () {
  function Application() {
    _classCallCheck(this, Application);

    this.initCommon(); // this.initSliders();

    this.initMobileViewPortHeight();
  } // Инициализации


  _createClass(Application, [{
    key: "initCommon",
    value: function initCommon() {
      new _components_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"]();
      new _components_scrolltotop_btn__WEBPACK_IMPORTED_MODULE_2__["default"](); // // Плавная прокрутка при переходе по якорю
      // const $root = $('html, body');
      // $('#main-menu a').click(function() {
      //     var href = $.attr(this, 'href');
      //     href = href.substring(1, href.length);
      //     //console.log(href);
      //     $root.animate({
      //         scrollTop: $(href).offset().top
      //     }, 1500, function () {
      //         window.location.hash = href;
      //     });
      //     return false;
      // });

      $('.js-tab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('js-tab-content[data-tab="' + id + '"]'); // $('.works__info.works__info--slider').removeClass('works__info--slider')

        $('.js-tab-trigger.tabs__item--active').removeClass('tabs__item--active'); // 1

        $(this).addClass('tabs__item--active'); // 2

        $('.js-tab-content.works__info-slide--show').removeClass('works__info-slide--show'); // 3

        $('.js-tab-content[data-tab="' + id + '"]').addClass('works__info-slide--show'); // 4
      });
      $('.js-tab-trigger-gallery').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('js-tab-content-gallery[data-tab="' + id + '"]'); // $('.works__info.works__info--slider').removeClass('works__info--slider')

        $('.js-tab-trigger-gallery.tabs__item--active').removeClass('tabs__item--active'); // 1

        $(this).addClass('tabs__item--active'); // 2

        $('.js-tab-content-gallery.gallery__info-slide--show').removeClass('gallery__info-slide--show'); // 3

        $('.js-tab-content-gallery[data-tab="' + id + '"]').addClass('gallery__info-slide--show'); // 4
      });
      ymaps.ready(function (init) {
        var myMap = new ymaps.Map('map', {
          center: [57.910933, 59.982524],
          zoom: 10
        });
      });
    } // Инициализация всех слайдеров
    // initSliders() {
    // let clientWidth = document.body.clientWidth;
    // Slider in content
    // let $slider = $('.works__info--slider');
    // if ($slider.length !== 0) {
    //     new Slider($slider, {
    //         counter: false,
    //         infinite: true,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         adaptiveHeight: false,
    //         arrows: false,
    //         mobileFirst: true,
    //         variableWidth: true,
    //         // variableWidth: true  
    //         responsive: [
    //             {
    //                 breakpoint: 1460,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     arrows: true,
    //                     settings: unslick,
    //                 }
    //             },
    //         ]
    //     });
    // }
    // if ($slider.length !== 0) {
    //     new Slider()
    // };
    // function resizeTaleSlider(clientWidth) {
    //     if (clientWidth < 1460) {
    //         $('.works__info--slider').slick({
    //             arrows: false,
    //             dots: true,
    //             infinite: true,
    //             slidesToScroll: 1,
    //             variableWidth: true
    //         });
    //     } else {
    //         $('.works__info--slider').slick("unslick");
    //     }
    // }
    // resizeTaleSlider(clientWidth);
    // $(window).resize(function () {
    //     let clientWidth = document.body.clientWidth;
    //     resizeTaleSlider(clientWidth);
    // });
    // Carousel in content
    //     let $carousel = $('.carousel');
    //     if ($carousel.length !== 0) {
    //         new Slider($carousel, {
    //             counter: false,
    //             infinite: true,
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             arrows: false,
    //             prevArrow: '<button class="carousel-prev"><span class="icon-left"></span></button>',
    //             nextArrow: '<button class="carousel-next"><span class="icon-right"></span></button>',
    //             adaptiveHeight: true,
    //         });
    //     }
    // }
    // 100vh для мобильников

  }, {
    key: "initMobileViewPortHeight",
    value: function initMobileViewPortHeight() {
      // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

      /*
      Прмиер как использовать эту фичу в стилях
      .module {
          height: 100vh; //Use vh as a fallback for browsers that do not support Custom Properties
          height: calc(var(--vh, 1vh) * 100);
          margin: 0 auto;
          max-width: 30%;
      }
      */
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      var document_width = window.innerWidth; // We listen to the resize event (а ресайз в мобилках срабатывает и при скроле, когда исчезает строка ввода адреса в браузере)

      window.addEventListener('resize', function () {
        // We execute the same script as before
        if (document_width != window.innerWidth) {
          document_width = window.innerWidth;

          var _vh = window.innerHeight * 0.01;

          document.documentElement.style.setProperty('--vh', "".concat(_vh, "px"));
        }
      });
    }
  }]);

  return Application;
}(); // запуск приложения


$(function () {
  new Application();
});

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkhtml_start"] = self["webpackChunkhtml_start"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbGlnaHRib3guanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL3Njcm9sbHRvdG9wLWJ0bi5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5cbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgRW1pdHRlciB7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgLy9zdXBlcigpO1xuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gYXJnc1swXTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZmF1bHRPcHRpb25zLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50LmlzalF1ZXJ5KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290ID0gYXJnc1swXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdE9wdGlvbnMsIGFyZ3NbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGlzalF1ZXJ5KG9iamVjdCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgalF1ZXJ5O1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlTm9kZXMoKTtcbiAgICAgICAgdGhpcy5fYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLl9yZWFkeSgpO1xuICAgIH1cblxuICAgIF9jYWNoZU5vZGVzKCkge31cblxuICAgIF9iaW5kRXZlbnRzKCkge31cblxuICAgIF9yZWFkeSgpIHt9XG59IiwiaW1wb3J0IFwiQGZhbmN5YXBwcy9mYW5jeWJveFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlnaHRib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldCBfZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgICAgICAgIGxhbmc6ICdydScsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVmZmVjdDogJ3NsaWRlJyxcbiAgICAgICAgICAgICAgICBiYWNrRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2Nsb3NlJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgICAgICAgICBydToge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ0xPU0U6ICfQl9Cw0LrRgNGL0YLRjCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBORVhUOiAn0JTQsNC70YzRiNC1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBSRVY6ICfQndCw0LfQsNC0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEVSUk9SOiAn0J3QtSDRg9C00LDQtdGC0YHRjyDQt9Cw0LPRgNGD0LfQuNGC0YwuIDxici8+INCf0L7Qv9GA0L7QsdGD0LnRgtC1INC/0L7Qt9C00L3QtdC1LicsXG4gICAgICAgICAgICAgICAgICAgICAgICBQTEFZX1NUQVJUOiAn0J3QsNGH0LDRgtGMINGB0LvQsNC50LTRiNC+0YMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUExBWV9TVE9QOiAn0J7RgdGC0LDQvdC+0LLQuNGC0Ywg0YHQu9Cw0LnQtNGI0L7RgycsXG4gICAgICAgICAgICAgICAgICAgICAgICBGVUxMX1NDUkVFTjogJ9Cd0LAg0LLQtdGB0Ywg0Y3QutGA0LDQvScsXG4gICAgICAgICAgICAgICAgICAgICAgICBUSFVNQlM6ICfQn9GA0LXQstGM0Y4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgRE9XTkxPQUQ6ICfQodC60LDRh9Cw0YLRjCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBTSEFSRTogJ9Cf0L7QtNC10LvQuNGC0YzRgdGPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFpPT006ICfQo9Cy0LXQu9C40YfQuNGC0YwnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihyb290LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHJvb3QsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBfY2FjaGVOb2RlcygpIHtcbiAgICAgICAgdGhpcy5ub2RlcyA9IHtcbiAgICAgICAgICAgIGxpbms6ICQoJy5qcy1saW5rLW1vZGFsJylcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5saW5rLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICQuZmFuY3lib3gub3Blbih7XG4gICAgICAgICAgICAgICAgc3JjOiAkbGluay5kYXRhKCdzcmMnKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgICBvcHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VFeGlzdGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRWZmZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlTG9hZDogZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudC4kc2xpZGUuYWRkQ2xhc3MoJ2ZhbmN5Ym94LW1vZGFsJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3JlYWR5KCkge1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmkxOG4ucnUgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMuaTE4bi5ydTtcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5sYW5nID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmxhbmc7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMuYnV0dG9ucyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5idXR0b25zO1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLnRyYW5zaXRpb25FZmZlY3QgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMudHJhbnNpdGlvbkVmZmVjdDtcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5iYWNrRm9jdXMgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMuYmFja0ZvY3VzO1xuICAgIH1cbn0iLCIvLyDQutC90L7Qv9C60LAg0L3QsNCy0LXRgNGFXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxUb1RvcEJ0biBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgY29uc3RydWN0b3Iocm9vdCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihyb290LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLnNldFRvVG9wQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgc2V0VG9Ub3BCdXR0b24oKSB7XG5cbiAgICAgICAgdmFyICRzY3JvbGxUb3BCdG4gPSAkKCc8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCIjXCIgaWQ9XCJzY3JvbGwtdG9wXCIgY2xhc3M9XCJzY3JvbGx0b3RvcC1idG5cIj48aT48L2k+PC9hPicpLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgJHNjcm9sbFRvcEJ0bi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ2h0bWw6bm90KDphbmltYXRlZCksYm9keTpub3QoOmFuaW1hdGVkKScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDB9LCAzMDApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMTAwKSB7XG4gICAgICAgICAgICAkc2Nyb2xsVG9wQnRuLmFkZENsYXNzKCd0b3AtYnRuLXNob3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRzY3JvbGxUb3BCdG4ucmVtb3ZlQ2xhc3MoJ3RvcC1idG4tc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkc2Nyb2xsVG9wQnRuLmhhc0NsYXNzKCd0b3AtYnRuLXNob3cnKSkge1xuICAgICAgICAgICAgJHNjcm9sbFRvcEJ0bi5yZW1vdmVDbGFzcygndG9wLWJ0bi1zaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFwic2xpY2stY2Fyb3VzZWxcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0IF9kZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd3M6IDAsXG4gICAgICAgICAgICBjb3VudGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZXItcHJldlwiPjxzcGFuIGNsYXNzPVwiaWNvbi1sZWZ0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGVyLW5leHRcIj48c3BhbiBjbGFzcz1cImljb24tcmlnaHRcIj48L3NwYW4+PC9idXR0b24+J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iocm9vdCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihyb290LCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgX2NhY2hlTm9kZXMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMgPSB7fTtcbiAgICB9XG5cbiAgICBfYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5yb290Lm9uKCdpbml0JywgdGhpcy5hZGRDb3VudGVyKTtcbiAgICAgICAgdGhpcy5yb290Lm9uKCdiZWZvcmVDaGFuZ2UnLCB0aGlzLmNoYW5nZUNvdW50ZXIpO1xuICAgICAgICB0aGlzLnJvb3Qub24oJ2JyZWFrcG9pbnQnLCB0aGlzLmFkZENvdW50ZXIpO1xuICAgIH1cblxuICAgIF9yZWFkeSgpIHtcbiAgICAgICAgdGhpcy5yb290LnNsaWNrKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgYWRkQ291bnRlcihldmVudCwgc2xpY2spIHtcbiAgICAgICAgaWYgKHNsaWNrLm9wdGlvbnMuY291bnRlciA9PT0gdHJ1ZSAmJiBzbGljay5zbGlkZUNvdW50ID4gc2xpY2sub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGxldCAkY291bnRlciA9ICQoJzxkaXYgY2xhc3M9XCJzbGljay1jb3VudGVyIHNsaWNrLWNsb25lZFwiPjxkaXYgY2xhc3M9XCJzbGljay1jb3VudGVyX19pbm5lclwiPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2N1cnJlbnRcIj4nICsgKHNsaWNrLmN1cnJlbnRTbGlkZSArIDEpICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gcm9sZT1cInNlcGFyYXRvclwiIGNsYXNzPVwic2xpY2stY291bnRlcl9fZGl2aWRlclwiPjwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJzbGljay1jb3VudGVyX19jb3VudFwiPicgKyAoc2xpY2suZ2V0RG90Q291bnQoKSArIDEpICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgJGNvdW50ZXIuYXBwZW5kVG8oc2xpY2suJHNsaWRlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VDb3VudGVyKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgICAgc2xpY2suJHNsaWRlci5maW5kKCcuc2xpY2stY291bnRlcl9fY3VycmVudCcpLmh0bWwoTWF0aC5mbG9vcihuZXh0U2xpZGUgLyBzbGljay5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSArIDEpO1xuICAgIH1cbn0iLCJpbXBvcnQgU2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvc2xpZGVyXCI7XG5pbXBvcnQgTGlnaHRib3ggZnJvbSBcIi4vY29tcG9uZW50cy9saWdodGJveFwiO1xuaW1wb3J0IFNjcm9sbFRvVG9wQnRuIGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsdG90b3AtYnRuXCI7XG5cbmNsYXNzIEFwcGxpY2F0aW9uIHtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdENvbW1vbigpO1xuICAgICAgICAvLyB0aGlzLmluaXRTbGlkZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdE1vYmlsZVZpZXdQb3J0SGVpZ2h0KCk7XG4gICAgfVxuXG5cblxuICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4XG4gICAgaW5pdENvbW1vbigpIHtcblxuICAgICAgICBuZXcgTGlnaHRib3goKTtcblxuICAgICAgICBuZXcgU2Nyb2xsVG9Ub3BCdG4oKTtcblxuICAgICAgICAvLyAvLyDQn9C70LDQstC90LDRjyDQv9GA0L7QutGA0YPRgtC60LAg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0L/QviDRj9C60L7RgNGOXG4gICAgICAgIC8vIGNvbnN0ICRyb290ID0gJCgnaHRtbCwgYm9keScpO1xuICAgICAgICAvLyAkKCcjbWFpbi1tZW51IGEnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgIHZhciBocmVmID0gJC5hdHRyKHRoaXMsICdocmVmJyk7XG4gICAgICAgIC8vICAgICBocmVmID0gaHJlZi5zdWJzdHJpbmcoMSwgaHJlZi5sZW5ndGgpO1xuICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhocmVmKTtcbiAgICAgICAgLy8gICAgICRyb290LmFuaW1hdGUoe1xuICAgICAgICAvLyAgICAgICAgIHNjcm9sbFRvcDogJChocmVmKS5vZmZzZXQoKS50b3BcbiAgICAgICAgLy8gICAgIH0sIDE1MDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhyZWY7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgICQoJy5qcy10YWItdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS10YWInKSxcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gJCgnanMtdGFiLWNvbnRlbnRbZGF0YS10YWI9XCInICsgaWQgKyAnXCJdJyk7XG4gICAgICAgICAgICAvLyAkKCcud29ya3NfX2luZm8ud29ya3NfX2luZm8tLXNsaWRlcicpLnJlbW92ZUNsYXNzKCd3b3Jrc19faW5mby0tc2xpZGVyJylcblxuICAgICAgICAgICAgJCgnLmpzLXRhYi10cmlnZ2VyLnRhYnNfX2l0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCd0YWJzX19pdGVtLS1hY3RpdmUnKTsgLy8gMVxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndGFic19faXRlbS0tYWN0aXZlJyk7IC8vIDJcblxuICAgICAgICAgICAgJCgnLmpzLXRhYi1jb250ZW50LndvcmtzX19pbmZvLXNsaWRlLS1zaG93JykucmVtb3ZlQ2xhc3MoJ3dvcmtzX19pbmZvLXNsaWRlLS1zaG93Jyk7IC8vIDNcbiAgICAgICAgICAgICQoJy5qcy10YWItY29udGVudFtkYXRhLXRhYj1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnd29ya3NfX2luZm8tc2xpZGUtLXNob3cnKTsgLy8gNFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuanMtdGFiLXRyaWdnZXItZ2FsbGVyeScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignZGF0YS10YWInKSxcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gJCgnanMtdGFiLWNvbnRlbnQtZ2FsbGVyeVtkYXRhLXRhYj1cIicgKyBpZCArICdcIl0nKTtcbiAgICAgICAgICAgIC8vICQoJy53b3Jrc19faW5mby53b3Jrc19faW5mby0tc2xpZGVyJykucmVtb3ZlQ2xhc3MoJ3dvcmtzX19pbmZvLS1zbGlkZXInKVxuXG4gICAgICAgICAgICAkKCcuanMtdGFiLXRyaWdnZXItZ2FsbGVyeS50YWJzX19pdGVtLS1hY3RpdmUnKS5yZW1vdmVDbGFzcygndGFic19faXRlbS0tYWN0aXZlJyk7IC8vIDFcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RhYnNfX2l0ZW0tLWFjdGl2ZScpOyAvLyAyXG5cbiAgICAgICAgICAgICQoJy5qcy10YWItY29udGVudC1nYWxsZXJ5LmdhbGxlcnlfX2luZm8tc2xpZGUtLXNob3cnKS5yZW1vdmVDbGFzcygnZ2FsbGVyeV9faW5mby1zbGlkZS0tc2hvdycpOyAvLyAzXG4gICAgICAgICAgICAkKCcuanMtdGFiLWNvbnRlbnQtZ2FsbGVyeVtkYXRhLXRhYj1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnZ2FsbGVyeV9faW5mby1zbGlkZS0tc2hvdycpOyAvLyA0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHltYXBzLnJlYWR5KGZ1bmN0aW9uIChpbml0KSB7XG4gICAgICAgICAgICBsZXQgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiBbNTcuOTEwOTMzLCA1OS45ODI1MjRdLFxuICAgICAgICAgICAgICAgIHpvb206IDEwXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG5cbiAgICB9XG5cbiAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQstGB0LXRhSDRgdC70LDQudC00LXRgNC+0LJcbiAgICAvLyBpbml0U2xpZGVycygpIHtcbiAgICAvLyBsZXQgY2xpZW50V2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIC8vIFNsaWRlciBpbiBjb250ZW50XG4gICAgLy8gbGV0ICRzbGlkZXIgPSAkKCcud29ya3NfX2luZm8tLXNsaWRlcicpO1xuICAgIC8vIGlmICgkc2xpZGVyLmxlbmd0aCAhPT0gMCkge1xuICAgIC8vICAgICBuZXcgU2xpZGVyKCRzbGlkZXIsIHtcbiAgICAvLyAgICAgICAgIGNvdW50ZXI6IGZhbHNlLFxuICAgIC8vICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAvLyAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAvLyAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgLy8gICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAvLyAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgLy8gICAgICAgICAvLyB2YXJpYWJsZVdpZHRoOiB0cnVlICBcblxuICAgIC8vICAgICAgICAgcmVzcG9uc2l2ZTogW1xuXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNDYwLFxuICAgIC8vICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHVuc2xpY2ssXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKCRzbGlkZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgLy8gICAgIG5ldyBTbGlkZXIoKVxuICAgIC8vIH07XG4gICAgLy8gZnVuY3Rpb24gcmVzaXplVGFsZVNsaWRlcihjbGllbnRXaWR0aCkge1xuXG5cbiAgICAvLyAgICAgaWYgKGNsaWVudFdpZHRoIDwgMTQ2MCkge1xuICAgIC8vICAgICAgICAgJCgnLndvcmtzX19pbmZvLS1zbGlkZXInKS5zbGljayh7XG4gICAgLy8gICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAvLyAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIC8vICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgJCgnLndvcmtzX19pbmZvLS1zbGlkZXInKS5zbGljayhcInVuc2xpY2tcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyByZXNpemVUYWxlU2xpZGVyKGNsaWVudFdpZHRoKTtcblxuICAgIC8vICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBsZXQgY2xpZW50V2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIC8vICAgICByZXNpemVUYWxlU2xpZGVyKGNsaWVudFdpZHRoKTtcbiAgICAvLyB9KTtcbiAgICAvLyBDYXJvdXNlbCBpbiBjb250ZW50XG4gICAgLy8gICAgIGxldCAkY2Fyb3VzZWwgPSAkKCcuY2Fyb3VzZWwnKTtcbiAgICAvLyAgICAgaWYgKCRjYXJvdXNlbC5sZW5ndGggIT09IDApIHtcbiAgICAvLyAgICAgICAgIG5ldyBTbGlkZXIoJGNhcm91c2VsLCB7XG4gICAgLy8gICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgLy8gICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgLy8gICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIC8vICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIC8vICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgLy8gICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cImNhcm91c2VsLXByZXZcIj48c3BhbiBjbGFzcz1cImljb24tbGVmdFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgIC8vICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1uZXh0XCI+PHNwYW4gY2xhc3M9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgLy8gICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG5cblxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH1cblxuXG4gICAgLy8gMTAwdmgg0LTQu9GPINC80L7QsdC40LvRjNC90LjQutC+0LJcbiAgICBpbml0TW9iaWxlVmlld1BvcnRIZWlnaHQoKSB7XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS90aGUtdHJpY2stdG8tdmlld3BvcnQtdW5pdHMtb24tbW9iaWxlL1xuICAgICAgICAvKlxuICAgICAgICDQn9GA0LzQuNC10YAg0LrQsNC6INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRjdGC0YMg0YTQuNGH0YMg0LIg0YHRgtC40LvRj9GFXG4gICAgICAgIC5tb2R1bGUge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDsgLy9Vc2UgdmggYXMgYSBmYWxsYmFjayBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBDdXN0b20gUHJvcGVydGllc1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgICAgICAvLyBGaXJzdCB3ZSBnZXQgdGhlIHZpZXdwb3J0IGhlaWdodCBhbmQgd2UgbXVsdGlwbGUgaXQgYnkgMSUgdG8gZ2V0IGEgdmFsdWUgZm9yIGEgdmggdW5pdFxuICAgICAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgICAgICAvLyBUaGVuIHdlIHNldCB0aGUgdmFsdWUgaW4gdGhlIC0tdmggY3VzdG9tIHByb3BlcnR5IHRvIHRoZSByb290IG9mIHRoZSBkb2N1bWVudFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICAgICAgICBsZXQgZG9jdW1lbnRfd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgLy8gV2UgbGlzdGVuIHRvIHRoZSByZXNpemUgZXZlbnQgKNCwINGA0LXRgdCw0LnQtyDQsiDQvNC+0LHQuNC70LrQsNGFINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0Lgg0L/RgNC4INGB0LrRgNC+0LvQtSwg0LrQvtCz0LTQsCDQuNGB0YfQtdC30LDQtdGCINGB0YLRgNC+0LrQsCDQstCy0L7QtNCwINCw0LTRgNC10YHQsCDQsiDQsdGA0LDRg9C30LXRgNC1KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gV2UgZXhlY3V0ZSB0aGUgc2FtZSBzY3JpcHQgYXMgYmVmb3JlXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRfd2lkdGggIT0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuLy8g0LfQsNC/0YPRgdC6INC/0YDQuNC70L7QttC10L3QuNGPXG4kKCgpID0+IHtcbiAgICBuZXcgQXBwbGljYXRpb24oKTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtodG1sX3N0YXJ0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2h0bWxfc3RhcnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbWFpbi5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImpRdWVyeSIsIkNvbXBvbmVudCIsImxlbmd0aCIsInJvb3QiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiX2RlZmF1bHRPcHRpb25zIiwiaXNqUXVlcnkiLCJfY2FjaGVOb2RlcyIsIl9iaW5kRXZlbnRzIiwiX3JlYWR5Iiwib2JqZWN0IiwiTGlnaHRib3giLCJpbml0aWFsaXplIiwiZGVmYXVsdHMiLCJsYW5nIiwidHJhbnNpdGlvbkVmZmVjdCIsImJhY2tGb2N1cyIsImJ1dHRvbnMiLCJpMThuIiwicnUiLCJDTE9TRSIsIk5FWFQiLCJQUkVWIiwiRVJST1IiLCJQTEFZX1NUQVJUIiwiUExBWV9TVE9QIiwiRlVMTF9TQ1JFRU4iLCJUSFVNQlMiLCJET1dOTE9BRCIsIlNIQVJFIiwiWk9PTSIsIm5vZGVzIiwibGluayIsIiQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkbGluayIsImN1cnJlbnRUYXJnZXQiLCJmYW5jeWJveCIsIm9wZW4iLCJzcmMiLCJkYXRhIiwidHlwZSIsIm9wdHMiLCJ0b3VjaCIsImF1dG9Gb2N1cyIsImNsb3NlRXhpc3RpbmciLCJhbmltYXRpb25FZmZlY3QiLCJiZWZvcmVMb2FkIiwiY3VycmVudCIsIiRzbGlkZSIsImFkZENsYXNzIiwiU2Nyb2xsVG9Ub3BCdG4iLCJzZXRUb1RvcEJ1dHRvbiIsIiRzY3JvbGxUb3BCdG4iLCJhcHBlbmRUbyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGwiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiU2xpZGVyIiwicm93cyIsImNvdW50ZXIiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhZGRDb3VudGVyIiwiY2hhbmdlQ291bnRlciIsInNsaWNrIiwic2xpZGVDb3VudCIsInNsaWRlc1RvU2hvdyIsIiRjb3VudGVyIiwiY3VycmVudFNsaWRlIiwiZ2V0RG90Q291bnQiLCIkc2xpZGVyIiwibmV4dFNsaWRlIiwiZmluZCIsImh0bWwiLCJNYXRoIiwiZmxvb3IiLCJzbGlkZXNUb1Njcm9sbCIsIkFwcGxpY2F0aW9uIiwiaW5pdENvbW1vbiIsImluaXRNb2JpbGVWaWV3UG9ydEhlaWdodCIsImNsaWNrIiwiaWQiLCJhdHRyIiwiY29udGVudCIsInltYXBzIiwicmVhZHkiLCJpbml0IiwibXlNYXAiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwidmgiLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImRvY3VtZW50X3dpZHRoIiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9