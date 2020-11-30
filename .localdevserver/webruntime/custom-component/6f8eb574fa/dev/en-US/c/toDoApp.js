Webruntime.define('lwc/toDoApp', ['lwc'], function (lwc) { 'use strict';

   function tmpl($api, $cmp, $slotset, $ctx) {
     const {
       h: api_element,
       t: api_text,
       b: api_bind,
       d: api_dynamic,
       k: api_key,
       i: api_iterator
     } = $api;
     const {
       _m0,
       _m1
     } = $ctx;
     return [api_element("div", {
       classMap: {
         "center": true
       },
       key: 1
     }, [api_element("img", {
       attrs: {
         "src": "/resources/lwc.png"
       },
       key: 0
     }, [])]), api_element("div", {
       classMap: {
         "toDo": true
       },
       key: 8
     }, [api_element("div", {
       classMap: {
         "header": true
       },
       key: 5
     }, [api_element("h2", {
       key: 2
     }, [api_text("My To Do List")]), api_element("input", {
       attrs: {
         "type": "text",
         "placeholder": "Type Here..."
       },
       key: 3,
       on: {
         "change": _m0 || ($ctx._m0 = api_bind($cmp.handleToDoChanges))
       }
     }, []), api_element("span", {
       classMap: {
         "addBtn": true
       },
       attrs: {
         "value": $cmp.taskDetails
       },
       key: 4,
       on: {
         "click": _m1 || ($ctx._m1 = api_bind($cmp.handleToDo))
       }
     }, [api_text("Add")])]), api_element("ul", {
       key: 7
     }, api_iterator($cmp.todos, function (todo) {
       return api_element("li", {
         key: api_key(6, todo.id)
       }, [api_dynamic(todo.taskDetails)]);
     }))])];
   }

   var _tmpl = lwc.registerTemplate(tmpl);
   tmpl.stylesheets = [];
   tmpl.stylesheetTokens = {
     hostAttribute: "lwc-toDoApp_toDoApp-host",
     shadowAttribute: "lwc-toDoApp_toDoApp"
   };

   class App extends lwc.LightningElement {
     constructor(...args) {
       super(...args);
       this.TodoId = 2;
       this.todos = [{
         id: 1,
         taskDetails: 'Write Story'
       }, {
         id: 2,
         taskDetails: 'Build Framework'
       }];
       this.taskDetails = void 0;
     }

     handleToDoChanges(event) {
       this.taskDetails = event.target.value;
     }

     handleToDo() {
       this.TodoId = this.TodoId + 1;
       this.todos = [...this.todos, {
         id: this.TodoId,
         taskDetails: this.taskDetails
       }];
     }

   }

   lwc.registerDecorators(App, {
     track: {
       todos: 1,
       taskDetails: 1
     },
     fields: ["TodoId"]
   });

   var toDoApp = lwc.registerComponent(App, {
     tmpl: _tmpl
   });

   return toDoApp;

});
