Webruntime.define('lwc/imageSlider', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".gh" + shadowSelector + "{height:500px;width:500px;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function stylesheet$1(hostSelector, shadowSelector, nativeShadow) {
      return "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.slds-slot" + shadowSelector + " {display: flex;}\n}";
    }
    var _implicitStylesheets$1 = [stylesheet$1];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        s: api_slot
      } = $api;
      return [api_slot("", {
        classMap: {
          "slds-slot": true
        },
        key: 0
      }, [], $slotset)];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.slots = [""];
    tmpl.stylesheets = [];

    if (_implicitStylesheets$1) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets$1);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lightning-layout_layout-host",
      shadowAttribute: "lightning-layout_layout"
    };

    /**
    A string normalization utility for attributes.
    @param {String} value - The value to normalize.
    @param {Object} config - The optional configuration object.
    @param {String} [config.fallbackValue] - The optional fallback value to use if the given value is not provided or invalid. Defaults to an empty string.
    @param {Array} [config.validValues] - An optional array of valid values. Assumes all input is valid if not provided.
    @return {String} - The normalized value.
    **/
    function normalizeString(value, config = {}) {
      const {
        fallbackValue = '',
        validValues,
        toLowerCase = true
      } = config;
      let normalized = typeof value === 'string' && value.trim() || '';
      normalized = toLowerCase ? normalized.toLowerCase() : normalized;

      if (validValues && validValues.indexOf(normalized) === -1) {
        normalized = fallbackValue;
      }

      return normalized;
    }
    /**
    A boolean normalization utility for attributes.
    @param {Any} value - The value to normalize.
    @return {Boolean} - The normalized value.
    **/

    function normalizeBoolean(value) {
      return typeof value === 'string' || !!value;
    }

    const isIE11 = isIE11Test(navigator);
    const isChrome = isChromeTest(navigator);
    const isSafari = isSafariTest(navigator); // The following functions are for tests only

    function isIE11Test(navigator) {
      // https://stackoverflow.com/questions/17447373/how-can-i-target-only-internet-explorer-11-with-javascript
      return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    function isChromeTest(navigator) {
      // https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
      return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }
    function isSafariTest(navigator) {
      // via https://stackoverflow.com/questions/49872111/detect-safari-and-stop-script
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    const proto = {
      add(className) {
        if (typeof className === 'string') {
          this[className] = true;
        } else {
          Object.assign(this, className);
        }

        return this;
      },

      invert() {
        Object.keys(this).forEach(key => {
          this[key] = !this[key];
        });
        return this;
      },

      toString() {
        return Object.keys(this).filter(key => this[key]).join(' ');
      }

    };
    function classSet(config) {
      if (typeof config === 'string') {
        const key = config;
        config = {};
        config[key] = true;
      }

      return Object.assign(Object.create(proto), config);
    }

    const HALIN_CLASS = {
      center: 'slds-grid_align-center',
      space: 'slds-grid_align-space',
      spread: 'slds-grid_align-spread',
      end: 'slds-grid_align-end'
    };
    const VALIN_CLASS = {
      start: 'slds-grid_vertical-align-start',
      center: 'slds-grid_vertical-align-center',
      end: 'slds-grid_vertical-align-end',
      stretch: 'slds-grid_vertical-stretch'
    };
    const BOUNDARY_CLASS = {
      small: 'slds-grid_pull-padded',
      medium: 'slds-grid_pull-padded-medium',
      large: 'slds-grid_pull-padded-large'
    };
    const VERTICAL_ALIGN = Object.keys(VALIN_CLASS);
    const BOUNDARY = Object.keys(BOUNDARY_CLASS);
    const HORIZONTAL_ALIGN = Object.keys(HALIN_CLASS);
    const ROWS_CLASS = 'slds-wrap';
    const GRID_CLASS = 'slds-grid';
    function normalizeParam(value, valid, fallback) {
      value = value ? value.toLowerCase() : ' ';
      return normalizeString(value, {
        fallbackValue: fallback || ' ',
        validValues: valid || []
      });
    }
    function computeLayoutClass(hAlign, vAlign, boundary, multiRows) {
      const computedClass = classSet(GRID_CLASS);

      if (hAlign !== ' ' && HALIN_CLASS[hAlign]) {
        computedClass.add(HALIN_CLASS[hAlign]);
      }

      if (vAlign !== ' ' && VALIN_CLASS[vAlign]) {
        computedClass.add(VALIN_CLASS[vAlign]);
      }

      if (boundary !== ' ' && BOUNDARY_CLASS[boundary]) {
        computedClass.add(BOUNDARY_CLASS[boundary]);
      }

      if (multiRows) {
        computedClass.add(ROWS_CLASS);
      }

      return computedClass;
    }

    /**
     * Represents a responsive grid system for arranging containers on a page.
     */

    class LightningLayout extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this._horizontalAlign = void 0;
        this._verticalAlign = void 0;
        this._pullToBoundary = void 0;
        this._multipleRows = void 0;
        this._layoutClass = [];
      }

      /**
       * Determines how to spread the layout items horizontally.
       * The alignment options are center, space, spread, and end.
       * @type {string}
       * @default
       */
      get horizontalAlign() {
        return this._horizontalAlign;
      }

      set horizontalAlign(value) {
        this._horizontalAlign = normalizeParam(value, HORIZONTAL_ALIGN);
        this.updateClassList();
      }

      /**
       * Determines how to align the layout items vertically in the container.
       * The alignment options are start, center, end, and stretch.
       * @type {string}
       * @default
       */
      get verticalAlign() {
        return this._verticalAlign;
      }

      set verticalAlign(value) {
        this._verticalAlign = normalizeParam(value, VERTICAL_ALIGN);
        this.updateClassList();
      }

      /**
       * Pulls layout items to the layout boundaries and corresponds
       * to the padding size on the layout item. Possible values are small, medium, or large.
       * @type {string}
       * @default
       *
       */
      get pullToBoundary() {
        return this._pullToBoundary;
      }

      set pullToBoundary(value) {
        this._pullToBoundary = normalizeParam(value, BOUNDARY);
        this.updateClassList();
      }

      /**
       * If present, layout items wrap to the following line when they exceed the layout width.
       * @type {boolean}
       * @default false
       */
      get multipleRows() {
        return this._multipleRows || false;
      }

      set multipleRows(value) {
        this._multipleRows = normalizeBoolean(value);
        this.updateClassList();
      }

      connectedCallback() {
        this.updateClassList();
      }

      updateClassList() {
        this.classList.remove(...this._layoutClass);
        const config = computeLayoutClass(this.horizontalAlign, this.verticalAlign, this.pullToBoundary, this.multipleRows);
        this._layoutClass = Object.keys(config);
        this.classList.add(...this._layoutClass);
      }

    }

    lwc.registerDecorators(LightningLayout, {
      publicProps: {
        horizontalAlign: {
          config: 3
        },
        verticalAlign: {
          config: 3
        },
        pullToBoundary: {
          config: 3
        },
        multipleRows: {
          config: 3
        }
      },
      track: {
        _horizontalAlign: 1,
        _verticalAlign: 1,
        _pullToBoundary: 1,
        _multipleRows: 1
      },
      fields: ["_layoutClass"]
    });

    var _lightningLayout = lwc.registerComponent(LightningLayout, {
      tmpl: _tmpl
    });

    function tmpl$1($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        c: api_custom_element
      } = $api;
      return [api_custom_element("lightning-layout", _lightningLayout, {
        classMap: {
          "gh": true
        },
        key: 0
      }, [api_dynamic($cmp.imgSlider)])];
    }

    var _tmpl$1 = lwc.registerTemplate(tmpl$1);
    tmpl$1.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets);
    }
    tmpl$1.stylesheetTokens = {
      hostAttribute: "lwc-imageSlider_imageSlider-host",
      shadowAttribute: "lwc-imageSlider_imageSlider"
    };

    class ImageSlider extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.imgSlider = void 0;
        this.image = [{
          imge: photo_1
        }, {
          imge: photo_2
        }, {
          imge: photo_3
        }];
      }

      imgSlide() {
        let img = this.image;

        for (let i = 0; i < img.length; i++) {
          this.imgSlider = img[i];
        }
      }

    }

    lwc.registerDecorators(ImageSlider, {
      track: {
        imgSlider: 1
      },
      fields: ["image"]
    });

    var imageSlider = lwc.registerComponent(ImageSlider, {
      tmpl: _tmpl$1
    });

    return imageSlider;

});
