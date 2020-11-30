Webruntime.define('lwc/imageSlider', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".gh" + shadowSelector + "{height:500px;width:500px;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        h: api_element
      } = $api;
      return [api_element("div", {
        classMap: {
          "gh": true
        },
        key: 0
      }, [api_dynamic($cmp.imgSlider)])];
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
