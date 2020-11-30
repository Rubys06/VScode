Webruntime.define('lwc/imageSlider', ['lwc'], function (lwc) { 'use strict';

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return "div.body" + shadowSelector + "{height:175px;width:235px;border: 5px solid red;}\n.lgc-bg" + shadowSelector + " {background-color: rgb(242, 242, 242);height:175px;width:230px;}\n.lgc-bg-inverse" + shadowSelector + " {background-color: rgb(22, 50, 92);}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      t: api_text,
      h: api_element
    } = $api;
    return [api_element("div", {
      classMap: {
        "body": true
      },
      key: 0
    }, [api_text("photo_1")])];
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
        imge: 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
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
    tmpl: _tmpl
  });

  return imageSlider;

});
