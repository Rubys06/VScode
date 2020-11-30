Webruntime.define('lwc/properites', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        d: api_dynamic,
        h: api_element
      } = $api;
      return [api_element("div", {
        key: 1
      }, [api_text(" title="), api_dynamic($cmp.meetngroominfo.roomName), api_element("p", {
        key: 0
      }, [api_text(" RoomCapacity:"), api_dynamic($cmp.meetngroominfo.roomCapacity), api_text("   ")])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-properites_properites-host",
      shadowAttribute: "lwc-properites_properites"
    };

    class Properites extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.meetngroominfo = void 0;
      } //[roomName,roomCapacity]


    }

    lwc.registerDecorators(Properites, {
      publicProps: {
        meetngroominfo: {
          config: 0
        }
      }
    });

    var properites = lwc.registerComponent(Properites, {
      tmpl: _tmpl
    });

    return properites;

});
