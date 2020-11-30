Webruntime.define('lwc/parentProperty', ['lwc', 'c/properites'], function (lwc, _cProperites) { 'use strict';

    _cProperites = _cProperites && Object.prototype.hasOwnProperty.call(_cProperites, 'default') ? _cProperites['default'] : _cProperites;

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        c: api_custom_element,
        k: api_key,
        h: api_element,
        i: api_iterator
      } = $api;
      return [api_element("ul", {
        key: 2
      }, api_iterator($cmp.meetingRoom, function (Room) {
        return api_element("li", {
          key: api_key(1, Room.roomCapacity)
        }, [api_custom_element("c-properites", _cProperites, {
          props: {
            "meetngRoomInfo": Room
          },
          key: 0
        }, [])]);
      }))];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-parentProperty_parentProperty-host",
      shadowAttribute: "lwc-parentProperty_parentProperty"
    };

    class ParentProperty extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.meetingRoom = [{
          roomName: 'Galaxy',
          roomCapacity: 30
        }, {
          roomName: 'Galaxt_1',
          roomCapacity: 40
        }, {
          roomName: 'Galaxy_2',
          roomCapacity: 50
        }];
      }

    }

    lwc.registerDecorators(ParentProperty, {
      fields: ["meetingRoom"]
    });

    var parentProperty = lwc.registerComponent(ParentProperty, {
      tmpl: _tmpl
    });

    return parentProperty;

});
