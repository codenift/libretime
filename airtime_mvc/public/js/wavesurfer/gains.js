/*!
 * wavesurfer.js gains plugin 1.0.0 (2020-11-17)
 * https://wavesurfer-js.org
 * https://libretime.org
 * @license BSD-3-Clause
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("gains", [], factory);
	else if(typeof exports === 'object')
		exports["gains"] = factory();
	else
		root["WaveSurfer"] = root["WaveSurfer"] || {}, root["WaveSurfer"]["gains"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "localhost:8080/dist/plugin/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin/gains/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/plugin/gains/index.js":
/*!*************************************!*\
  !*** ./src/plugin/gains/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gain = __webpack_require__(/*! ./gain.js */ "./src/plugin/gains/gain.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Gains are visual overlays on waveform that can be used to play and loop
 * portions of audio. Gains can be dragged and resized.
 *
 * Visual customization is possible via CSS (using the selectors
 * `.wavesurfer-gain` and `.wavesurfer-handle`).
 *
 * @implements {PluginClass}
 * @extends {Observer}
 *
 * @example
 * // es6
 * import GainsPlugin from 'wavesurfer.gains.js';
 *
 * // commonjs
 * var GainsPlugin = require('wavesurfer.gains.js');
 *
 * // if you are using <script> tags
 * var GainsPlugin = window.WaveSurfer.gains;
 *
 * // ... initialising wavesurfer with the plugin
 * var wavesurfer = WaveSurfer.create({
 *   // wavesurfer options ...
 *   plugins: [
 *     GainsPlugin.create({
 *       // plugin options ...
 *     })
 *   ]
 * });
 */
var GainsPlugin = /*#__PURE__*/function () {
  _createClass(GainsPlugin, null, [{
    key: "create",

    /**
     * Gains plugin definition factory
     *
     * This function must be used to create a plugin definition which can be
     * used by wavesurfer to correctly instantiate the plugin.
     *
     * @param {GainsPluginParams} params parameters use to initialise the plugin
     * @return {PluginDefinition} an object representing the plugin
     */
    value: function create(params) {
      return {
        name: 'gains',
        deferInit: params && params.deferInit ? params.deferInit : false,
        params: params,
        staticProps: {
          addGain: function addGain(options) {
            if (!this.initialisedPluginList.gains) {
              this.initPlugin('gains');
            }

            return this.gains.add(options);
          },
          clearGains: function clearGains() {
            this.gains && this.gains.clear();
          },
          enableDragSelection: function enableDragSelection(options) {
            if (!this.initialisedPluginList.gains) {
              this.initPlugin('gains');
            }

            this.gains.enableDragSelection(options);
          },
          disableDragSelection: function disableDragSelection() {
            this.gains.disableDragSelection();
          }
        },
        instance: GainsPlugin
      };
    }
  }]);

  function GainsPlugin(params, ws) {
    var _this = this;

    _classCallCheck(this, GainsPlugin);

    this.params = params;
    this.wavesurfer = ws;
    this.util = _objectSpread(_objectSpread({}, ws.util), {}, {
      getGainSnapToGridValue: function getGainSnapToGridValue(value) {
        return _this.getGainSnapToGridValue(value, params);
      }
    });
    this.maxGains = params.maxGains;
    this.gainsMinLength = params.gainsMinLength || null; // turn the plugin instance into an observer

    var observerPrototypeKeys = Object.getOwnPropertyNames(this.util.Observer.prototype);
    observerPrototypeKeys.forEach(function (key) {
      _gain.Gain.prototype[key] = _this.util.Observer.prototype[key];
    });
    this.wavesurfer.Gain = _gain.Gain;

    this._onBackendCreated = function () {
      _this.wrapper = _this.wavesurfer.drawer.wrapper;

      if (_this.params.gains) {
        _this.params.gains.forEach(function (gain) {
          gain.edgeScrollWidth = _this.params.edgeScrollWidth || _this.wrapper.clientWidth * 0.05;

          _this.add(gain);
        });
      }
    }; // Id-based hash of gains


    this.list = {};

    this._onReady = function () {
      _this.wrapper = _this.wavesurfer.drawer.wrapper;

      if (_this.params.dragSelection) {
        _this.enableDragSelection(_this.params);
      }

      Object.keys(_this.list).forEach(function (id) {
        _this.list[id].updateRender();
      });
    };
  }

  _createClass(GainsPlugin, [{
    key: "init",
    value: function init() {
      // Check if ws is ready
      if (this.wavesurfer.isReady) {
        this._onBackendCreated();

        this._onReady();
      } else {
        this.wavesurfer.once('ready', this._onReady);
        this.wavesurfer.once('backend-created', this._onBackendCreated);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.wavesurfer.un('ready', this._onReady);
      this.wavesurfer.un('backend-created', this._onBackendCreated);
      this.disableDragSelection();
      this.clear();
    }
    /**
     * check to see if adding a new gain would exceed maxGains
     * @return {boolean} whether we should proceed and create a gain
     * @private
     */

  }, {
    key: "wouldExceedMaxGains",
    value: function wouldExceedMaxGains() {
      return this.maxGains && Object.keys(this.list).length >= this.maxGains;
    }
    /**
     * Add a gain
     *
     * @param {object} params Gain parameters
     * @return {Gain} The created gain
     */

  }, {
    key: "add",
    value: function add(params) {
      var _this2 = this;

      if (this.wouldExceedMaxGains()) return null;

      if (!params.minLength && this.gainsMinLength) {
        params = _objectSpread(_objectSpread({}, params), {}, {
          minLength: this.gainsMinLength
        });
      }

      var gain = new this.wavesurfer.Gain(params, this.util, this.wavesurfer);
      this.list[gain.id] = gain;
      gain.on('remove', function () {
        delete _this2.list[gain.id];
      });
      return gain;
    }
    /**
     * Remove all gains
     */

  }, {
    key: "clear",
    value: function clear() {
      var _this3 = this;

      Object.keys(this.list).forEach(function (id) {
        _this3.list[id].remove();
      });
    }
  }, {
    key: "enableDragSelection",
    value: function enableDragSelection(params) {
      var _this4 = this;

      this.disableDragSelection();
      var slop = params.slop || 2;
      var container = this.wavesurfer.drawer.container; 
      var drag;
      var duration = this.wavesurfer.getDuration(); 
      var start;
      var gain;
      var touchId;
      var pxMove = 0; 
      var wrapperRect; // Scroll when the user is dragging within the threshold
 
      var eventDown = function eventDown(e) {
        if (e.touches && e.touches.length > 1) {
          return;
        }

        duration = _this4.wavesurfer.getDuration();
        touchId = e.targetTouches ? e.targetTouches[0].identifier : null; // Store for scroll calculations
        wrapperRect = _this4.wrapper.getBoundingClientRect();
        drag = true;
        start = _this4.wavesurfer.drawer.handleEvent(e, true);
        gain = null; 
      };

      this.wrapper.addEventListener('mousedown', eventDown);
      this.wrapper.addEventListener('touchstart', eventDown);
      this.on('disable-drag-selection', function () {
        _this4.wrapper.removeEventListener('touchstart', eventDown);

        _this4.wrapper.removeEventListener('mousedown', eventDown);
      });

      var eventUp = function eventUp(e) {
        if (e.touches && e.touches.length > 1) {
          return;
        }

        drag = false;
        pxMove = 0; 

        if (gain) {
          _this4.util.preventClick();

          gain.fireEvent('update-end', e);

          _this4.wavesurfer.fireEvent('gain-update-end', gain, e);
        }

        gain = null;
      };

      this.wrapper.addEventListener('mouseup', eventUp);
      this.wrapper.addEventListener('touchend', eventUp);
      document.body.addEventListener('mouseup', eventUp);
      document.body.addEventListener('touchend', eventUp);
      this.on('disable-drag-selection', function () {
        document.body.removeEventListener('mouseup', eventUp);
        document.body.removeEventListener('touchend', eventUp);

        _this4.wrapper.removeEventListener('touchend', eventUp);

        _this4.wrapper.removeEventListener('mouseup', eventUp);
      });

      var eventMove = function eventMove(e) {
        if (!drag) {
          return;
        }

        if (++pxMove <= slop) {
          return;
        }

        if (e.touches && e.touches.length > 1) {
          return;
        }

        if (e.targetTouches && e.targetTouches[0].identifier != touchId) {
          return;
        } // auto-create a gain during mouse drag, unless gain-count would exceed "maxGains"


        if (!gain) {
          gain = _this4.add(params || {});
          if (!gain) return;
        }

        var end = _this4.wavesurfer.drawer.handleEvent(e);

        var startUpdate = _this4.wavesurfer.gains.util.getGainSnapToGridValue(start * duration);

        var endUpdate = _this4.wavesurfer.gains.util.getGainSnapToGridValue(end * duration);

        gain.update({
          start: Math.min(endUpdate, startUpdate),
          end: Math.max(endUpdate, startUpdate)
        }); // If scrolling is enabled
 
      };

      this.wrapper.addEventListener('mousemove', eventMove);
      this.wrapper.addEventListener('touchmove', eventMove);
      this.on('disable-drag-selection', function () {
        _this4.wrapper.removeEventListener('touchmove', eventMove);

        _this4.wrapper.removeEventListener('mousemove', eventMove);
      });
      this.wavesurfer.on('gain-created', function (gain) {
        if (_this4.gainsMinLength) {
          gain.minLength = _this4.gainsMinLength;
        }
      });
    }
  }, {
    key: "disableDragSelection",
    value: function disableDragSelection() {
      this.fireEvent('disable-drag-selection');
    }
    /**
     * Get current gain
     *
     * The smallest gain that contains the current time. If several such
     * gains exist, take the first. Return `null` if none exist.
     *
     * @returns {Gain} The current gain
     */

  }, {
    key: "getCurrentGain",
    value: function getCurrentGain() {
      var _this5 = this;

      var time = this.wavesurfer.getCurrentTime();
      var min = null;
      Object.keys(this.list).forEach(function (id) {
        var cur = _this5.list[id];

        if (cur.start <= time && cur.end >= time) {
          if (!min || cur.end - cur.start < min.end - min.start) {
            min = cur;
          }
        }
      });
      return min;
    }
    /**
     * Match the value to the grid, if required
     *
     * If the gains plugin params have a snapToGridInterval set, return the
     * value matching the nearest grid interval. If no snapToGridInterval is set,
     * the passed value will be returned without modification.
     *
     * @param {number} value the value to snap to the grid, if needed
     * @param {Object} params the gains plugin params
     * @returns {number} value
     */

  }, {
    key: "getGainSnapToGridValue",
    value: function getGainSnapToGridValue(value, params) {
      if (params.snapToGridInterval) {
        // the gains should snap to a grid
        var offset = params.snapToGridOffset || 0;
        return Math.round((value - offset) / params.snapToGridInterval) * params.snapToGridInterval + offset;
      } // no snap-to-grid


      return value;
    }
  }]);

  return GainsPlugin;
}();

exports.default = GainsPlugin;
module.exports = exports.default;

/***/ }),

/***/ "./src/plugin/gains/gain.js":
/*!**************************************!*\
  !*** ./src/plugin/gains/gain.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gain = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *  @since 4.0.0
 *
 * (Single) Gain plugin class
 *
 * Must be turned into an observer before instantiating. This is done in
 * `GainsPlugin` (main plugin class).
 *
 * @extends {Observer}
 */
var Gain = /*#__PURE__*/function () {
 
  function Gain(params, gainsUtils, ws) {
    var _this = this;

    _classCallCheck(this, Gain);

    this.wavesurfer = ws;
    this.wrapper = ws.drawer.wrapper;
    this.util = ws.util;
    this.style = this.util.style;
    this.gainsUtil = gainsUtils;
    this.id = params.id == null ? ws.util.getId() : params.id;
    this.start = Number(params.start) || 0;
    this.end = params.end == null ? // small marker-like gain
    this.start + 0 : Number(params.end);
    this.resize = params.resize === undefined ? true : Boolean(params.resize);
    this.drag = params.drag === undefined ? true : Boolean(params.drag); // reflect resize and drag state of gain for gain-updated listener

    this.isResizing = false;
    this.isDragging = false;
    this.loop = Boolean(params.loop);
    this.color = params.color || 'rgba(0, 0, 0, 0.1)'; // The left and top handleStyle properties can be set to 'none' for
    // no styling or can be assigned an object containing CSS properties.

    this.handleStyle = params.handleStyle || {
      bottom: {},
      top: {}
    };
    this.handleBottomEl = null;
    this.handleTopEl = null;
    this.data = params.data || {};
    this.attributes = params.attributes || {};
    this.maxLength = params.maxLength; // It assumes the minLength parameter value, or the gainsMinLength parameter value, if the first one not provided

    this.minLength = params.minLength;

    this._onRedraw = function () {
      return _this.updateRender();
    };
 
    this.preventContextMenu = params.preventContextMenu === undefined ? false : Boolean(params.preventContextMenu); // select channel ID to set gain

    var channelIdx = params.channelIdx == null ? -1 : parseInt(params.channelIdx);
    this.gainHeight = '100%';
    this.marginTop = '0px';

    if (channelIdx !== -1) {
      var channelCount = this.wavesurfer.backend.buffer != null ? this.wavesurfer.backend.buffer.numberOfChannels : -1;

      if (channelCount >= 0 && channelIdx < channelCount) {
        this.gainHeight = Math.floor(1 / channelCount * 100) + '%';
        this.marginTop = this.wavesurfer.getHeight() * channelIdx + 'px';
      }
    }

    this.formatTimeCallback = params.formatTimeCallback;
    this.edgeScrollWidth = params.edgeScrollWidth;
    this.bindInOut();
    this.render();
    this.wavesurfer.on('zoom', this._onRedraw);
    this.wavesurfer.on('redraw', this._onRedraw);
    this.wavesurfer.fireEvent('gain-created', this);
  }
  /* Update gain params. */


  _createClass(Gain, [{
    key: "update",
    value: function update(params) {
      if (params.start != null) {
        
				
				this.start = Number(params.start);
				document.getElementsByClassName("replay_gain_"+this.id)[0].value = this.start;
				
				
      }

      if (params.end != null) {
        this.end = Number(params.end);
				//document.getElementsByClassName("cueout_"+this.id)[0].value = toHHMMSS(this.end);
      }

      if (params.loop != null) {
        this.loop = Boolean(params.loop);
      }

      if (params.color != null) {
        this.color = params.color;
      }

      if (params.handleStyle != null) {
        this.handleStyle = params.handleStyle;
      }

      if (params.data != null) {
        this.data = params.data;
      }

      if (params.resize != null) {
        this.resize = Boolean(params.resize);
        this.updateHandlesResize(this.resize);
      }

      if (params.drag != null) {
        this.drag = Boolean(params.drag);
      }

      if (params.maxLength != null) {
        //this.maxLength = Number(params.maxLength);
				this.maxLength = 84;
      }

      if (params.minLength != null) {
      //  this.minLength = Number(params.minLength);
			this.minLength = 0;
      }

      if (params.attributes != null) {
        this.attributes = params.attributes;
      }

      this.updateRender();
      this.fireEvent('update');
      this.wavesurfer.fireEvent('gain-updated', this);
    }
    /* Remove a single gain. */

  }, {
    key: "remove",
    value: function remove() {
      if (this.element) {
        this.wrapper.removeChild(this.element);
        this.element = null;
        this.fireEvent('remove');
        this.wavesurfer.un('zoom', this._onRedraw);
        this.wavesurfer.un('redraw', this._onRedraw);
        this.wavesurfer.fireEvent('gain-removed', this);
      }
    }
    /**
     * Play the audio gain.
     * @param {number} start Optional offset to start playing at
     */

  }, {
    key: "play",
    value: function play(start) {
      var s = start || this.start;
      this.wavesurfer.play(s, this.end);
      this.fireEvent('play');
      this.wavesurfer.fireEvent('gain-play', this);
    }
    /**
     * Play the audio gain in a loop.
     * @param {number} start Optional offset to start playing at
     * */

  }, {
    key: "playLoop",
    value: function playLoop(start) {
      this.loop = true;
      this.play(start);
    }
    /**
     * Set looping on/off.
     * @param {boolean} loop True if should play in loop
     */

  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.loop = loop;
    }
    /* Render a gain as a DOM element. */

  }, {
    key: "render",
    value: function render() {
      var gainEl = document.createElement('gain');
      gainEl.className = 'wavesurfer-gain';
      gainEl.title = this.formatTime(this.start, this.end);
      gainEl.setAttribute('data-id', this.id);

      for (var attrname in this.attributes) {
        gainEl.setAttribute('data-gain-' + attrname, this.attributes[attrname]);
      }

      this.style(gainEl, {
        position: 'absolute',
        zIndex: 1,
        //height: this.gainHeight,
				height: 50,
        top: this.marginTop
      });
      /* Resize handles */

      if (this.resize) {
        this.handleBottomEl = gainEl.appendChild(document.createElement('handle'));
        this.handleTopEl = gainEl.appendChild(document.createElement('handle'));
        this.handleBottomEl.className = 'wavesurfer-handle wavesurfer-handle-start';
        this.handleTopEl.className = 'wavesurfer-handle wavesurfer-handle-end'; // Default CSS properties for both handles.

        var css = {
          cursor: 'col-resize',
          position: 'absolute',
          top: '40px',
          width: '100%',
          height: '2px',
          backgroundColor: '#ffffff'
        }; // Merge CSS properties per handle.

        var handleBottomCss = this.handleStyle.bottom !== 'none' ? Object.assign({
          bottom: '80px'
        }, css, this.handleStyle.bottom) : null;
        var handleTopCss = this.handleStyle.top !== 'none' ? Object.assign({
          top: '2px'
        }, css, this.handleStyle.top) : null;

        if (handleBottomCss) {
          this.style(this.handleBottomEl, handleBottomCss);
        }

        if (handleTopCss) {
          this.style(this.handleTopEl, handleTopCss);
        }
      }

      this.element = this.wrapper.appendChild(gainEl);
      this.updateRender();
      this.bindEvents(gainEl);
    }
  }, {
    key: "formatTime",
    value: function formatTime(start, end) {
      if (this.formatTimeCallback) {
        return this.formatTimeCallback(start, end);
      }

      return (start == end ? [start] : [start, end]).map(function (time) {
        return [Math.floor(time % 3600 / 60), // minutes
        ('00' + Math.floor(time % 60)).slice(-2) // seconds
        ].join(':');
      }).join('-');
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.wavesurfer.drawer.width / this.wavesurfer.params.pixelRatio;
    }
    /* Update element's position, width, color. */

  }, {
    key: "updateRender",
    value: function updateRender() {
      // duration varies during loading process, so don't overwrite important data
    
		
		  var dur = this.wavesurfer.getDuration();
			//song duration 0 to 270.1
			
      //var height = this.getHeight(); //in pixels
			var height = 82; //in pixels
			
      var startLimited = this.start;
      var endLimited = this.end;

      if (startLimited < 0) {
        startLimited = 0;
        endLimited = endLimited - startLimited;
      } 
      if (endLimited > dur) {
        endLimited = dur;
        startLimited = dur - (endLimited - startLimited);
      }
			
      if (this.minLength != null) {
				
        endLimited = Math.max(startLimited + this.minLength, endLimited);
      }

      if (this.maxLength != null) {
        endLimited = Math.min(startLimited + this.maxLength, endLimited);
      }

      if (this.element != null) {
        // Calculate the bottom and width values of the gain such that
        // no gaps appear between gains.
        var bottom = Math.round(startLimited / 82 *height);
        var gainHeight = Math.round(endLimited / 82 * height) - bottom; //gainWidth
				
				console.log(gainHeight);
				//alert(bottom);
				//CHANGES HERE
        this.style(this.element, {
          //bottom: '0px',
					bottom: '5px', //bottom:gainHeight + '5px',
					top: gainHeight + 'px',
          width: '500px', //gainWidth + 'px' should always amount to song
					height: gainHeight +'82px',
          backgroundColor: this.color, //try invert here
          cursor: this.drag ? 'move' : 'default'
        });

        for (var attrname in this.attributes) {
          this.element.setAttribute('data-gain-' + attrname, this.attributes[attrname]);
        }

        //this.element.title = this.formatTime(this.start, this.end);
				//this.element.title = this.start, this.end; //new
      }
    }
    /* Bind audio events. */

  }, {
    key: "bindInOut",
    value: function bindInOut() {
      var _this2 = this;

      this.firedIn = false;
      this.firedOut = false;

      var onProcess = function onProcess(time) {
        var start = Math.round(_this2.start * 10) / 10;
        var end = Math.round(_this2.end * 10) / 10;
        time = Math.round(time * 10) / 10;

        if (!_this2.firedOut && _this2.firedIn && (start > time || end <= time)) {
          _this2.firedOut = true;
          _this2.firedIn = false;

          _this2.fireEvent('out');

          _this2.wavesurfer.fireEvent('gain-out', _this2);
        }

        if (!_this2.firedIn && start <= time && end > time) {
          _this2.firedIn = true;
          _this2.firedOut = false;

          _this2.fireEvent('in');

          _this2.wavesurfer.fireEvent('gain-in', _this2);
        }
      };

      this.wavesurfer.backend.on('audioprocess', onProcess);
      this.on('remove', function () {
        _this2.wavesurfer.backend.un('audioprocess', onProcess);
      });
      /* Loop playback. */

      this.on('out', function () {
        if (_this2.loop) {
          var realTime = _this2.wavesurfer.getCurrentTime();

          if (realTime >= _this2.start && realTime <= _this2.end) {
            _this2.wavesurfer.play(_this2.start);
          }
        }
      });
    }
    /* Bind DOM events. */

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this3 = this;

      var preventContextMenu = this.preventContextMenu;
      this.element.addEventListener('mouseenter', function (e) {
        _this3.fireEvent('mouseenter', e);

        _this3.wavesurfer.fireEvent('gain-mouseenter', _this3, e);
      });
      this.element.addEventListener('mouseleave', function (e) {
        _this3.fireEvent('mouseleave', e);

        _this3.wavesurfer.fireEvent('gain-mouseleave', _this3, e);
      });
      this.element.addEventListener('click', function (e) {
        e.preventDefault();

        _this3.fireEvent('click', e);

        _this3.wavesurfer.fireEvent('gain-click', _this3, e);
      });
      this.element.addEventListener('dblclick', function (e) {
        e.stopPropagation();
        e.preventDefault();

        _this3.fireEvent('dblclick', e);

        _this3.wavesurfer.fireEvent('gain-dblclick', _this3, e);
      });
      this.element.addEventListener('contextmenu', function (e) {
        if (preventContextMenu) {
          e.preventDefault();
        }

        _this3.fireEvent('contextmenu', e);

        _this3.wavesurfer.fireEvent('gain-contextmenu', _this3, e);
      });
      /* Drag or resize on mousemove. */

      if (this.drag || this.resize) {
        this.bindDragEvents();
      }
    }
  }, {
    key: "bindDragEvents",
    value: function bindDragEvents() {
      var _this4 = this;

      var container = this.wavesurfer.drawer.container 
      var startTime;
      var touchId;
      var drag;
      var maxScroll;
      var resize;
      var updated = false; 
      var wrapperRect;
      var gainLeftHalfTime;
      var gainRightHalfTime; // Scroll when the user is dragging within the threshold

      var edgeScroll = function edgeScroll(e) {
        var duration = _this4.wavesurfer.getDuration();

        if (!drag && !resize) {
          return;
        }

        var x = e.clientX;
        var distanceBetweenCursorAndWrapperEdge = 0;
        var gainHalfTimeWidth = 0;
        var adjustment = 0; // Get the currently selected time according to the mouse position

        var time = _this4.gainsUtil.getGainSnapToGridValue(_this4.wavesurfer.drawer.handleEvent(e) * duration);

        if (drag) { 
            gainHalfTimeWidth = gainRightHalfTime * _this4.wavesurfer.params.minPxPerSec;
            distanceBetweenCursorAndWrapperEdge = wrapperRect.top - x; 
        } else {
          // Considering minLength while edgescroll
          var minLength = _this4.minLength;

          if (!minLength) {
            minLength = 0;
          }

          if (resize === 'start') {
            if (time > _this4.end - minLength) {
              time = _this4.end - minLength; 
            }

            if (time < 0) {
              time = 0;
            }
          } else if (resize === 'end') {
            if (time < _this4.start + minLength) {
              time = _this4.start + minLength; 
            }

            if (time > duration) {
              time = duration;
            }
          }
        }  

        var delta = time - startTime;
        startTime = time; // Continue dragging or resizing

        drag ? _this4.onDrag(delta) : _this4.onResize(delta, resize); // Repeat

        window.requestAnimationFrame(function () {
          edgeScroll(e);
        });
      };

      var onDown = function onDown(e) {
        var duration = _this4.wavesurfer.getDuration();

        if (e.touches && e.touches.length > 1) {
          return;
        }

        touchId = e.targetTouches ? e.targetTouches[0].identifier : null; // stop the event propagation, if this gain is resizable or draggable
        // and the event is therefore handled here.

        if (_this4.drag || _this4.resize) {
          e.stopPropagation();
        } // Store the selected startTime we begun dragging or resizing


        startTime = _this4.gainsUtil.getGainSnapToGridValue(_this4.wavesurfer.drawer.handleEvent(e, true) * duration); // Store the selected point of contact when we begin dragging

        gainLeftHalfTime = startTime - _this4.start;
        gainRightHalfTime = _this4.end - startTime; // Store for scroll calculations
 
        wrapperRect = _this4.wrapper.getBoundingClientRect();
        _this4.isResizing = false;
        _this4.isDragging = false;

        if (e.target.tagName.toLowerCase() === 'handle') {
          _this4.isResizing = true;
          resize = e.target.classList.contains('wavesurfer-handle-start') ? 'start' : 'end';
        } else {
          _this4.isDragging = true;
          drag = true;
          resize = false;
        }
      };

      var onUp = function onUp(e) {
        if (e.touches && e.touches.length > 1) {
          return;
        }

        if (drag || resize) {
          _this4.isDragging = false;
          _this4.isResizing = false;
          drag = false; 
          resize = false;
        }

        if (updated) {
          updated = false;

          _this4.util.preventClick();

          _this4.fireEvent('update-end', e);

          _this4.wavesurfer.fireEvent('gain-update-end', _this4, e);
        }
      };

      var onMove = function onMove(e) {
        //var duration = _this4.wavesurfer.getDuration();
				var duration = _this4.wavesurfer.getDuration();
        if (e.touches && e.touches.length > 1) {
          return;
        }

        if (e.targetTouches && e.targetTouches[0].identifier != touchId) {
          return;
        }

        if (!drag && !resize) {
          return;
        }

        var oldTime = startTime;

        var time = _this4.gainsUtil.getGainSnapToGridValue(_this4.wavesurfer.drawer.handleEvent(e) * duration);

        if (drag) {
          // To maintain relative cursor start point while dragging
          var maxEnd = _this4.wavesurfer.getDuration();

          if (time > maxEnd - gainRightHalfTime) {
            time = maxEnd - gainRightHalfTime;
          }

          if (time - gainLeftHalfTime < 0) {
            time = gainLeftHalfTime;
          }
        }

        if (resize) {
          // To maintain relative cursor start point while resizing
          // we have to handle for minLength
          var minLength = _this4.minLength;

          if (!minLength) {
            minLength = 0;
          }

          if (resize === 'start') {
            if (time > _this4.end - minLength) {
              time = _this4.end - minLength;
            }

            if (time < 0) {
              time = 0;
            }
          } else if (resize === 'end') {
            if (time < _this4.start + minLength) {
              time = _this4.start + minLength;
            }

            if (time > duration) {
              time = duration;
            }
          }
        }

        var delta = time - startTime;
        startTime = time; // Drag

        if (_this4.drag && drag) {
          updated = updated || !!delta;

          _this4.onDrag(delta);
        } // Resize


        if (_this4.resize && resize) {
          updated = updated || !!delta;

          _this4.onResize(delta, resize);
        }
 
      };

      this.element.addEventListener('mousedown', onDown);
      this.element.addEventListener('touchstart', onDown);
      document.body.addEventListener('mousemove', onMove);
      document.body.addEventListener('touchmove', onMove);
      document.body.addEventListener('mouseup', onUp);
      document.body.addEventListener('touchend', onUp);
      this.on('remove', function () {
        document.body.removeEventListener('mouseup', onUp);
        document.body.removeEventListener('touchend', onUp);
        document.body.removeEventListener('mousemove', onMove);
        document.body.removeEventListener('touchmove', onMove);
      });
      this.wavesurfer.on('destroy', function () {
        document.body.removeEventListener('mouseup', onUp);
        document.body.removeEventListener('touchend', onUp);
      });
			
    }
  }, {
    key: "onDrag",
    value: function onDrag(delta) {
      var maxEnd = this.wavesurfer.getDuration();

      if (this.start + delta > maxEnd) {
        delta = maxEnd + this.start;
      }

      if (this.end + delta < 0) {
        delta = this.end * -1;
      }

      this.update({
        end: this.end + delta,
        start: this.start + delta
      });
    }
    /**
     * @example
     * onResize(-5, 'start') // Moves the start point 5 seconds back
     * onResize(0.5, 'end') // Moves the end point 0.5 seconds forward
     *
     * @param {number} delta How much to add or subtract, given in seconds
     * @param {string} direction 'start 'or 'end'
     */

  }, {
    key: "onResize",
    value: function onResize(delta, direction) {
      var duration = this.wavesurfer.getDuration();

      if (direction === 'start') {
        // Check if changing the start by the given delta would result in the gain being smaller than minLength
        // Ignore cases where we are making the gain wider rather than shrinking it
        if (delta > 0 && this.start - (this.end + delta) < this.minLength) {
          delta = this.start - this.minLength - this.end;
        }

        if (delta < 0 && this.end + delta < 0) {
          delta = this.end * -1;
        }

        this.update({
          start: Math.min(this.end + delta, this.start),
          end: Math.max(this.end + delta, this.start)
        });
      } else {
        // Check if changing the end by the given delta would result in the gain being smaller than minLength
        // Ignore cases where we are making the gain wider rather than shrinking it
        if (delta < 0 && this.start + delta - this.end < this.minLength) {
          delta = this.start + this.minLength - this.end;
        }

        if (delta > 0 && this.start + delta > duration) {
          delta = duration - this.start;
        }

        this.update({
          start: Math.min(this.start + delta, this.end),
          end: Math.max(this.start + delta, this.end)
        });
      }
    }
  }, {
    key: "updateHandlesResize",
    value: function updateHandlesResize(resize) {
      var cursorStyle = resize ? 'col-resize' : 'auto';
      this.handleBottomEl && this.style(this.handleBottomEl, {
        cursor: cursorStyle
      });
      this.handleTopEl && this.style(this.handleTopEl, {
        cursor: cursorStyle
      });
    }
  }]);

  return Gain;
}();

exports.Gain = Gain;

/***/ })

/******/ });
});