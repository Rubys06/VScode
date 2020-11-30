Webruntime.define('lwc/imageSlider', ['lwc'], function (lwc) { 'use strict';

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return "div.body" + shadowSelector + "{height:185px;width:235px;border: 5px solid red;-webkit-animation: slide 0.5s forwards;-webkit-animation-delay: 2s;animation: slide 0.5s forwards;animation-delay: 2s;@-webkit-keyframes slide {100%" + shadowSelector + " {left: 0;}\n}@keyframes slide {100% {left: 0;}\n}}\n.lgc-bg" + shadowSelector + " {background-color: rgb(242, 242, 242);height:175px;width:230px;}\n.lgc-bg-inverse" + shadowSelector + " {background-color: rgb(22, 50, 92);}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      h: api_element,
      b: api_bind
    } = $api;
    const {
      _m0
    } = $ctx;
    return [api_element("div", {
      classMap: {
        "body": true
      },
      key: 1,
      on: {
        "click": _m0 || ($ctx._m0 = api_bind($cmp.imgSlide))
      }
    }, [api_element("img", {
      styleMap: {
        "width": "235px",
        "height": "175px"
      },
      attrs: {
        "src": $cmp.imgSlider
      },
      key: 0
    }, [])])];
  }

  var _tmpl = lwc.registerTemplate(tmpl);
  tmpl.stylesheets = [];

  if (_implicitStylesheets) {
    tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
  }
  tmpl.stylesheetTokens = {
    hostAttribute: "lwc-imageSlider_imageSlider-host",
    shadowAttribute: "lwc-imageSlider_imageSlider"
  };

  class ImageSlider extends lwc.LightningElement {
    constructor(...args) {
      super(...args);
      this.imgSlider = void 0;
      this.image = [{
        source: 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
      }, {
        source: 'https://cnet3.cbsistatic.com/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg'
      }];
    }

    imgSlide() {
      let img = this.image;

      for (let i = 0; i < img.length; i++) {
        this.task(i);
      }
    }

    task(inn) {
      setTimeout(function () {
        let img = this.image;
        this.imgSlider = img[inn].source;
        console.log(this.inn);
      }, 2000);
    }

  }

  lwc.registerDecorators(ImageSlider, {
    track: {
      imgSlider: 1
    },
    fields: ["image"]
  });

  var imageSlider = lwc.registerComponent(ImageSlider, {
    tmpl: _tmpl
  });

  return imageSlider;

});
