(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkngx_contextmenu_platform"] = self["webpackChunkngx_contextmenu_platform"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5984:
    /*!***********************************************************************!*\
      !*** ./dist/ngx-contextmenu/__ivy_ngcc__/fesm2015/ngx-contextmenu.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContextMenuAttachDirective": function ContextMenuAttachDirective() {
          return (
            /* binding */
            _ContextMenuAttachDirective
          );
        },

        /* harmony export */
        "ContextMenuComponent": function ContextMenuComponent() {
          return (
            /* binding */
            _ContextMenuComponent
          );
        },

        /* harmony export */
        "ContextMenuItemDirective": function ContextMenuItemDirective() {
          return (
            /* binding */
            _ContextMenuItemDirective
          );
        },

        /* harmony export */
        "ContextMenuModule": function ContextMenuModule() {
          return (
            /* binding */
            _ContextMenuModule
          );
        },

        /* harmony export */
        "ContextMenuService": function ContextMenuService() {
          return (
            /* binding */
            _ContextMenuService
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            CONTEXT_MENU_OPTIONS
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            ContextMenuContentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      8203);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      826);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      9765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      8049);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/portal */
      7636);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      9238);

      var _c0 = ["menu"];
      var _c1 = ["li"];

      function ContextMenuContentComponent_li_3_a_2_ng_template_1_Template(rf, ctx) {}

      var _c2 = function _c2(a0) {
        return {
          $implicit: a0
        };
      };

      function ContextMenuContentComponent_li_3_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuContentComponent_li_3_a_2_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onMenuItemSelect(menuItem_r2, $event);
          })("mouseenter", function ContextMenuContentComponent_li_3_a_2_Template_a_mouseenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onOpenSubMenu(menuItem_r2, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContextMenuContentComponent_li_3_a_2_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-item", ctx_r5.useBootstrap4)("active", menuItem_r2.isActive && ctx_r5.isMenuItemEnabled(menuItem_r2))("disabled", ctx_r5.useBootstrap4 && !ctx_r5.isMenuItemEnabled(menuItem_r2))("hasSubMenu", !!menuItem_r2.subMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r5.item));
        }
      }

      function ContextMenuContentComponent_li_3_span_3_ng_template_1_Template(rf, ctx) {}

      function ContextMenuContentComponent_li_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuContentComponent_li_3_span_3_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.stopEvent($event);
          })("contextmenu", function ContextMenuContentComponent_li_3_span_3_Template_span_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.stopEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContextMenuContentComponent_li_3_span_3_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-item", ctx_r6.useBootstrap4)("disabled", ctx_r6.useBootstrap4 && !ctx_r6.isMenuItemEnabled(menuItem_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r6.item));
        }
      }

      function ContextMenuContentComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContextMenuContentComponent_li_3_a_2_Template, 2, 12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContextMenuContentComponent_li_3_span_3_Template, 2, 8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r1.isMenuItemEnabled(menuItem_r2))("divider", menuItem_r2.divider)("dropdown-divider", ctx_r1.useBootstrap4 && menuItem_r2.divider)("active", menuItem_r2.isActive && ctx_r1.isMenuItemEnabled(menuItem_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", menuItem_r2.divider ? "separator" : undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menuItem_r2.divider && !menuItem_r2.passive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menuItem_r2.divider && menuItem_r2.passive);
        }
      }

      var _ContextMenuItemDirective = /*#__PURE__*/function () {
        function _ContextMenuItemDirective(template, elementRef) {
          _classCallCheck(this, _ContextMenuItemDirective);

          this.template = template;
          this.elementRef = elementRef;
          this.divider = false;
          this.enabled = true;
          this.passive = false;
          this.visible = true;
          this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.isActive = false;
        }

        _createClass(_ContextMenuItemDirective, [{
          key: "disabled",
          get: function get() {
            return this.passive || this.divider || !this.evaluateIfFunction(this.enabled, this.currentItem);
          }
        }, {
          key: "evaluateIfFunction",
          value: function evaluateIfFunction(value, item) {
            if (value instanceof Function) {
              return value(item);
            }

            return value;
          }
        }, {
          key: "setActiveStyles",
          value: function setActiveStyles() {
            this.isActive = true;
          }
        }, {
          key: "setInactiveStyles",
          value: function setInactiveStyles() {
            this.isActive = false;
          }
        }, {
          key: "triggerExecute",
          value: function triggerExecute(item, $event) {
            if (!this.evaluateIfFunction(this.enabled, item)) {
              return;
            }

            this.execute.emit({
              event: $event,
              item: item
            });
          }
        }]);

        return _ContextMenuItemDirective;
      }();

      _ContextMenuItemDirective.ɵfac = function ContextMenuItemDirective_Factory(t) {
        return new (t || _ContextMenuItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _ContextMenuItemDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ContextMenuItemDirective,
        selectors: [["", "contextMenuItem", ""]],
        inputs: {
          divider: "divider",
          enabled: "enabled",
          passive: "passive",
          visible: "visible",
          subMenu: "subMenu"
        },
        outputs: {
          execute: "execute"
        }
      });
      /** @nocollapse */

      _ContextMenuItemDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      _ContextMenuItemDirective.propDecorators = {
        subMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        divider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        passive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        execute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContextMenuItemDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            /* tslint:disable:directive-selector-type */
            selector: '[contextMenuItem]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          divider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          passive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          execute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          subMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var CONTEXT_MENU_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CONTEXT_MENU_OPTIONS');
      var ARROW_LEFT_KEYCODE = 37;

      var ContextMenuContentComponent = /*#__PURE__*/function () {
        function ContextMenuContentComponent(changeDetector, elementRef, options) {
          _classCallCheck(this, ContextMenuContentComponent);

          this.changeDetector = changeDetector;
          this.elementRef = elementRef;
          this.options = options;
          this.menuItems = [];
          this.isLeaf = false;
          this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.openSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.closeLeafMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.closeAllMenus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.autoFocus = false;
          this.useBootstrap4 = false;
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();

          if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
          }
        }

        _createClass(ContextMenuContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.menuItems.forEach(function (menuItem) {
              menuItem.currentItem = _this.item;

              _this.subscription.add(menuItem.execute.subscribe(function (event) {
                return _this.execute.emit(Object.assign(Object.assign({}, event), {
                  menuItem: menuItem
                }));
              }));
            });
            var queryList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
            queryList.reset(this.menuItems);
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.ActiveDescendantKeyManager(queryList).withWrap();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            if (this.autoFocus) {
              setTimeout(function () {
                return _this2.focus();
              });
            }

            this.overlay.updatePosition();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "focus",
          value: function focus() {
            if (this.autoFocus) {
              this.menuElement.nativeElement.focus();
            }
          }
        }, {
          key: "stopEvent",
          value: function stopEvent($event) {
            $event.stopPropagation();
          }
        }, {
          key: "isMenuItemEnabled",
          value: function isMenuItemEnabled(menuItem) {
            return this.evaluateIfFunction(menuItem && menuItem.enabled);
          }
        }, {
          key: "isMenuItemVisible",
          value: function isMenuItemVisible(menuItem) {
            return this.evaluateIfFunction(menuItem && menuItem.visible);
          }
        }, {
          key: "evaluateIfFunction",
          value: function evaluateIfFunction(value) {
            if (value instanceof Function) {
              return value(this.item);
            }

            return value;
          }
        }, {
          key: "isDisabled",
          value: function isDisabled(link) {
            return link.enabled && !link.enabled(this.item);
          }
        }, {
          key: "onKeyEvent",
          value: function onKeyEvent(event) {
            if (!this.isLeaf) {
              return;
            }

            this._keyManager.onKeydown(event);
          }
        }, {
          key: "keyboardOpenSubMenu",
          value: function keyboardOpenSubMenu(event) {
            if (!this.isLeaf) {
              return;
            }

            this.cancelEvent(event);
            var menuItem = this.menuItems[this._keyManager.activeItemIndex];

            if (menuItem) {
              this.onOpenSubMenu(menuItem);
            }
          }
        }, {
          key: "keyboardMenuItemSelect",
          value: function keyboardMenuItemSelect(event) {
            if (!this.isLeaf) {
              return;
            }

            this.cancelEvent(event);
            var menuItem = this.menuItems[this._keyManager.activeItemIndex];

            if (menuItem) {
              this.onMenuItemSelect(menuItem, event);
            }
          }
        }, {
          key: "onCloseLeafMenu",
          value: function onCloseLeafMenu(event) {
            if (!this.isLeaf) {
              return;
            }

            this.cancelEvent(event);
            this.closeLeafMenu.emit({
              exceptRootMenu: event.keyCode === ARROW_LEFT_KEYCODE,
              event: event
            });
          }
        }, {
          key: "closeMenu",
          value: function closeMenu(event) {
            if (event.type === 'click' && event.button === 2) {
              return;
            }

            this.closeAllMenus.emit({
              event: event
            });
          }
        }, {
          key: "onOpenSubMenu",
          value: function onOpenSubMenu(menuItem, event) {
            var anchorElementRef = this.menuItemElements.toArray()[this._keyManager.activeItemIndex];

            var anchorElement = anchorElementRef && anchorElementRef.nativeElement;
            this.openSubMenu.emit({
              anchorElement: anchorElement,
              contextMenu: menuItem.subMenu,
              event: event,
              item: this.item,
              parentContextMenu: this
            });
          }
        }, {
          key: "onMenuItemSelect",
          value: function onMenuItemSelect(menuItem, event) {
            event.preventDefault();
            event.stopPropagation();
            this.onOpenSubMenu(menuItem, event);

            if (!menuItem.subMenu) {
              menuItem.triggerExecute(this.item, event);
            }
          }
        }, {
          key: "cancelEvent",
          value: function cancelEvent(event) {
            if (!event) {
              return;
            }

            var target = event.target;

            if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) > -1 || target.isContentEditable) {
              return;
            }

            event.preventDefault();
            event.stopPropagation();
          }
        }]);

        return ContextMenuContentComponent;
      }();

      ContextMenuContentComponent.ɵfac = function ContextMenuContentComponent_Factory(t) {
        return new (t || ContextMenuContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CONTEXT_MENU_OPTIONS, 8));
      };

      ContextMenuContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContextMenuContentComponent,
        selectors: [["context-menu-content"]],
        viewQuery: function ContextMenuContentComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuItemElements = _t);
          }
        },
        hostBindings: function ContextMenuContentComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.ArrowDown", function ContextMenuContentComponent_keydown_ArrowDown_HostBindingHandler($event) {
              return ctx.onKeyEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.ArrowUp", function ContextMenuContentComponent_keydown_ArrowUp_HostBindingHandler($event) {
              return ctx.onKeyEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.ArrowRight", function ContextMenuContentComponent_keydown_ArrowRight_HostBindingHandler($event) {
              return ctx.keyboardOpenSubMenu($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.Enter", function ContextMenuContentComponent_keydown_Enter_HostBindingHandler($event) {
              return ctx.keyboardMenuItemSelect($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.Space", function ContextMenuContentComponent_keydown_Space_HostBindingHandler($event) {
              return ctx.keyboardMenuItemSelect($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.Escape", function ContextMenuContentComponent_keydown_Escape_HostBindingHandler($event) {
              return ctx.onCloseLeafMenu($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.ArrowLeft", function ContextMenuContentComponent_keydown_ArrowLeft_HostBindingHandler($event) {
              return ctx.onCloseLeafMenu($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("click", function ContextMenuContentComponent_click_HostBindingHandler($event) {
              return ctx.closeMenu($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("contextmenu", function ContextMenuContentComponent_contextmenu_HostBindingHandler($event) {
              return ctx.closeMenu($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          menuItems: "menuItems",
          isLeaf: "isLeaf",
          item: "item",
          event: "event",
          parentContextMenu: "parentContextMenu",
          menuClass: "menuClass",
          overlay: "overlay"
        },
        outputs: {
          execute: "execute",
          openSubMenu: "openSubMenu",
          closeLeafMenu: "closeLeafMenu",
          closeAllMenus: "closeAllMenus"
        },
        decls: 4,
        vars: 2,
        consts: [["tabindex", "0", 1, "dropdown", "open", "show", "ngx-contextmenu", 3, "ngClass"], ["tabindex", "0", 1, "dropdown-menu", "show", 2, "position", "static", "float", "none"], ["menu", ""], [3, "disabled", "divider", "dropdown-divider", "active", 4, "ngFor", "ngForOf"], ["li", ""], ["href", "", 3, "dropdown-item", "active", "disabled", "hasSubMenu", "click", "mouseenter", 4, "ngIf"], ["class", "passive", 3, "dropdown-item", "disabled", "click", "contextmenu", 4, "ngIf"], ["href", "", 3, "click", "mouseenter"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "passive", 3, "click", "contextmenu"]],
        template: function ContextMenuContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContextMenuContentComponent_li_3_Template, 4, 11, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.menuClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
        styles: [".passive[_ngcontent-%COMP%] {\n        display: block;\n        padding: 3px 20px;\n        clear: both;\n        font-weight: normal;\n        line-height: @line-height-base;\n        white-space: nowrap;\n      }\n      .hasSubMenu[_ngcontent-%COMP%]:before {\n        content: '\u25B6';\n        float: right;\n      }"]
      });
      /** @nocollapse */

      ContextMenuContentComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [CONTEXT_MENU_OPTIONS]
          }]
        }];
      };

      ContextMenuContentComponent.propDecorators = {
        menuItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        parentContextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        menuClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        overlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        isLeaf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        execute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        openSubMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        closeLeafMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        closeAllMenus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        menuElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['menu', {
            "static": true
          }]
        }],
        menuItemElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
          args: ['li']
        }],
        onKeyEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.ArrowDown', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.ArrowUp', ['$event']]
        }],
        keyboardOpenSubMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.ArrowRight', ['$event']]
        }],
        keyboardMenuItemSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.Enter', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.Space', ['$event']]
        }],
        onCloseLeafMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.Escape', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.ArrowLeft', ['$event']]
        }],
        closeMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['document:click', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['document:contextmenu', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'context-menu-content',
            template: "\n    <div\n      class=\"dropdown open show ngx-contextmenu\"\n      [ngClass]=\"menuClass\"\n      tabindex=\"0\"\n    >\n      <ul\n        #menu\n        class=\"dropdown-menu show\"\n        style=\"position: static; float: none;\"\n        tabindex=\"0\"\n      >\n        <li\n          #li\n          *ngFor=\"let menuItem of menuItems; let i = index\"\n          [class.disabled]=\"!isMenuItemEnabled(menuItem)\"\n          [class.divider]=\"menuItem.divider\"\n          [class.dropdown-divider]=\"useBootstrap4 && menuItem.divider\"\n          [class.active]=\"menuItem.isActive && isMenuItemEnabled(menuItem)\"\n          [attr.role]=\"menuItem.divider ? 'separator' : undefined\"\n        >\n          <a\n            *ngIf=\"!menuItem.divider && !menuItem.passive\"\n            href\n            [class.dropdown-item]=\"useBootstrap4\"\n            [class.active]=\"menuItem.isActive && isMenuItemEnabled(menuItem)\"\n            [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\"\n            [class.hasSubMenu]=\"!!menuItem.subMenu\"\n            (click)=\"onMenuItemSelect(menuItem, $event)\"\n            (mouseenter)=\"onOpenSubMenu(menuItem, $event)\"\n          >\n            <ng-template\n              [ngTemplateOutlet]=\"menuItem.template\"\n              [ngTemplateOutletContext]=\"{ $implicit: item }\"\n            ></ng-template>\n          </a>\n\n          <span\n            (click)=\"stopEvent($event)\"\n            (contextmenu)=\"stopEvent($event)\"\n            class=\"passive\"\n            *ngIf=\"!menuItem.divider && menuItem.passive\"\n            [class.dropdown-item]=\"useBootstrap4\"\n            [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\"\n          >\n            <ng-template\n              [ngTemplateOutlet]=\"menuItem.template\"\n              [ngTemplateOutletContext]=\"{ $implicit: item }\"\n            ></ng-template>\n          </span>\n        </li>\n      </ul>\n    </div>\n  ",
            styles: ["\n      .passive {\n        display: block;\n        padding: 3px 20px;\n        clear: both;\n        font-weight: normal;\n        line-height: @line-height-base;\n        white-space: nowrap;\n      }\n      .hasSubMenu:before {\n        content: '\u25B6';\n        float: right;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [CONTEXT_MENU_OPTIONS]
            }]
          }];
        }, {
          menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isLeaf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          execute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          openSubMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          closeLeafMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          closeAllMenus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          onKeyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.ArrowDown', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.ArrowUp', ['$event']]
          }],
          keyboardOpenSubMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.ArrowRight', ['$event']]
          }],
          keyboardMenuItemSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.Enter', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.Space', ['$event']]
          }],
          onCloseLeafMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.Escape', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.ArrowLeft', ['$event']]
          }],
          closeMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:click', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:contextmenu', ['$event']]
          }],
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          parentContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['menu', {
              "static": true
            }]
          }],
          menuItemElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
            args: ['li']
          }]
        });
      })();

      var _ContextMenuService = /*#__PURE__*/function () {
        function _ContextMenuService(overlay, scrollStrategy) {
          _classCallCheck(this, _ContextMenuService);

          this.overlay = overlay;
          this.scrollStrategy = scrollStrategy;
          this.isDestroyingLeafMenu = false;
          this.show = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          this.triggerClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          this.close = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          this.overlays = [];
          this.fakeElement = {
            getBoundingClientRect: function getBoundingClientRect() {
              return {
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0
              };
            }
          };
        }

        _createClass(_ContextMenuService, [{
          key: "openContextMenu",
          value: function openContextMenu(context) {
            var anchorElement = context.anchorElement,
                event = context.event,
                parentContextMenu = context.parentContextMenu;

            if (!parentContextMenu) {
              var mouseEvent = event;

              this.fakeElement.getBoundingClientRect = function () {
                return {
                  bottom: mouseEvent.clientY,
                  height: 0,
                  left: mouseEvent.clientX,
                  right: mouseEvent.clientX,
                  top: mouseEvent.clientY,
                  width: 0
                };
              };

              this.closeAllContextMenus({
                eventType: 'cancel',
                event: event
              });
              var positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(anchorElement || this.fakeElement), {
                originX: 'start',
                originY: 'bottom'
              }, {
                overlayX: 'start',
                overlayY: 'top'
              }).withFallbackPosition({
                originX: 'start',
                originY: 'top'
              }, {
                overlayX: 'start',
                overlayY: 'bottom'
              }).withFallbackPosition({
                originX: 'end',
                originY: 'top'
              }, {
                overlayX: 'start',
                overlayY: 'top'
              }).withFallbackPosition({
                originX: 'start',
                originY: 'top'
              }, {
                overlayX: 'end',
                overlayY: 'top'
              }).withFallbackPosition({
                originX: 'end',
                originY: 'center'
              }, {
                overlayX: 'start',
                overlayY: 'center'
              }).withFallbackPosition({
                originX: 'start',
                originY: 'center'
              }, {
                overlayX: 'end',
                overlayY: 'center'
              });
              this.overlays = [this.overlay.create({
                positionStrategy: positionStrategy,
                panelClass: 'ngx-contextmenu',
                scrollStrategy: this.scrollStrategy.close()
              })];
              this.attachContextMenu(this.overlays[0], context);
            } else {
              var _positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(event ? event.target : anchorElement), {
                originX: 'end',
                originY: 'top'
              }, {
                overlayX: 'start',
                overlayY: 'top'
              }).withFallbackPosition({
                originX: 'start',
                originY: 'top'
              }, {
                overlayX: 'end',
                overlayY: 'top'
              }).withFallbackPosition({
                originX: 'end',
                originY: 'bottom'
              }, {
                overlayX: 'start',
                overlayY: 'bottom'
              }).withFallbackPosition({
                originX: 'start',
                originY: 'bottom'
              }, {
                overlayX: 'end',
                overlayY: 'bottom'
              });

              var newOverlay = this.overlay.create({
                positionStrategy: _positionStrategy,
                panelClass: 'ngx-contextmenu',
                scrollStrategy: this.scrollStrategy.close()
              });
              this.destroySubMenus(parentContextMenu);
              this.overlays = this.overlays.concat(newOverlay);
              this.attachContextMenu(newOverlay, context);
            }
          }
        }, {
          key: "attachContextMenu",
          value: function attachContextMenu(overlay, context) {
            var _this3 = this;

            var event = context.event,
                item = context.item,
                menuItems = context.menuItems,
                menuClass = context.menuClass;
            var contextMenuContent = overlay.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.ComponentPortal(ContextMenuContentComponent));
            contextMenuContent.instance.event = event;
            contextMenuContent.instance.item = item;
            contextMenuContent.instance.menuItems = menuItems;
            contextMenuContent.instance.overlay = overlay;
            contextMenuContent.instance.isLeaf = true;
            contextMenuContent.instance.menuClass = menuClass;
            overlay.contextMenu = contextMenuContent.instance;
            var subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
            subscriptions.add(contextMenuContent.instance.execute.asObservable().subscribe(function (executeEvent) {
              return _this3.closeAllContextMenus(Object.assign({
                eventType: 'execute'
              }, executeEvent));
            }));
            subscriptions.add(contextMenuContent.instance.closeAllMenus.asObservable().subscribe(function (closeAllEvent) {
              return _this3.closeAllContextMenus(Object.assign({
                eventType: 'cancel'
              }, closeAllEvent));
            }));
            subscriptions.add(contextMenuContent.instance.closeLeafMenu.asObservable().subscribe(function (closeLeafMenuEvent) {
              return _this3.destroyLeafMenu(closeLeafMenuEvent);
            }));
            subscriptions.add(contextMenuContent.instance.openSubMenu.asObservable().subscribe(function (subMenuEvent) {
              _this3.destroySubMenus(contextMenuContent.instance);

              if (!subMenuEvent.contextMenu) {
                contextMenuContent.instance.isLeaf = true;
                return;
              }

              contextMenuContent.instance.isLeaf = false;

              _this3.show.next(subMenuEvent);
            }));
            contextMenuContent.onDestroy(function () {
              menuItems.forEach(function (menuItem) {
                return menuItem.isActive = false;
              });
              subscriptions.unsubscribe();
            });
            contextMenuContent.changeDetectorRef.detectChanges();
          }
        }, {
          key: "closeAllContextMenus",
          value: function closeAllContextMenus(closeEvent) {
            if (this.overlays) {
              this.close.next(closeEvent);
              this.overlays.forEach(function (overlay, index) {
                overlay.detach();
                overlay.dispose();
              });
            }

            this.overlays = [];
          }
        }, {
          key: "getLastAttachedOverlay",
          value: function getLastAttachedOverlay() {
            var overlay = this.overlays[this.overlays.length - 1];

            while (this.overlays.length > 1 && overlay && !overlay.hasAttached()) {
              overlay.detach();
              overlay.dispose();
              this.overlays = this.overlays.slice(0, -1);
              overlay = this.overlays[this.overlays.length - 1];
            }

            return overlay;
          }
        }, {
          key: "destroyLeafMenu",
          value: function destroyLeafMenu() {
            var _this4 = this;

            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                exceptRootMenu = _ref.exceptRootMenu,
                event = _ref.event;

            if (this.isDestroyingLeafMenu) {
              return;
            }

            this.isDestroyingLeafMenu = true;
            setTimeout(function () {
              var overlay = _this4.getLastAttachedOverlay();

              if (_this4.overlays.length > 1 && overlay) {
                overlay.detach();
                overlay.dispose();
              }

              if (!exceptRootMenu && _this4.overlays.length > 0 && overlay) {
                _this4.close.next({
                  eventType: 'cancel',
                  event: event
                });

                overlay.detach();
                overlay.dispose();
              }

              var newLeaf = _this4.getLastAttachedOverlay();

              if (newLeaf) {
                newLeaf.contextMenu.isLeaf = true;
              }

              _this4.isDestroyingLeafMenu = false;
            });
          }
        }, {
          key: "destroySubMenus",
          value: function destroySubMenus(contextMenu) {
            var overlay = contextMenu.overlay;
            var index = this.overlays.indexOf(overlay);
            this.overlays.slice(index + 1).forEach(function (subMenuOverlay) {
              subMenuOverlay.detach();
              subMenuOverlay.dispose();
            });
          }
        }, {
          key: "isLeafMenu",
          value: function isLeafMenu(contextMenuContent) {
            var overlay = this.getLastAttachedOverlay();
            return contextMenuContent.overlay === overlay;
          }
        }]);

        return _ContextMenuService;
      }();

      _ContextMenuService.ɵfac = function ContextMenuService_Factory(t) {
        return new (t || _ContextMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.ScrollStrategyOptions));
      };

      _ContextMenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ContextMenuService,
        factory: _ContextMenuService.ɵfac
      });
      /** @nocollapse */

      _ContextMenuService.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.ScrollStrategyOptions
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContextMenuService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.ScrollStrategyOptions
          }];
        }, null);
      })();

      var _ContextMenuComponent = /*#__PURE__*/function () {
        function _ContextMenuComponent(_contextMenuService, changeDetector, elementRef, options) {
          var _this5 = this;

          _classCallCheck(this, _ContextMenuComponent);

          this._contextMenuService = _contextMenuService;
          this.changeDetector = changeDetector;
          this.elementRef = elementRef;
          this.options = options;
          this.menuClass = "";
          this.autoFocus = false;
          this.useBootstrap4 = false;
          this.disabled = false;
          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.visibleMenuItems = [];
          this.links = [];
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();

          if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
          }

          this.subscription.add(_contextMenuService.show.subscribe(function (menuEvent) {
            _this5.onMenuEvent(menuEvent);
          }));
        }

        _createClass(_ContextMenuComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "onMenuEvent",
          value: function onMenuEvent(menuEvent) {
            var _this6 = this;

            if (this.disabled) {
              return;
            }

            var contextMenu = menuEvent.contextMenu,
                event = menuEvent.event,
                item = menuEvent.item;

            if (contextMenu && contextMenu !== this) {
              return;
            }

            this.event = event;
            this.item = item;
            this.setVisibleMenuItems();

            this._contextMenuService.openContextMenu(Object.assign(Object.assign({}, menuEvent), {
              menuItems: this.visibleMenuItems,
              menuClass: this.menuClass
            }));

            this._contextMenuService.close.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe(function (closeEvent) {
              return _this6.close.emit(closeEvent);
            });

            this.open.next(menuEvent);
          }
        }, {
          key: "isMenuItemVisible",
          value: function isMenuItemVisible(menuItem) {
            return this.evaluateIfFunction(menuItem.visible);
          }
        }, {
          key: "setVisibleMenuItems",
          value: function setVisibleMenuItems() {
            var _this7 = this;

            this.visibleMenuItems = this.menuItems.filter(function (menuItem) {
              return _this7.isMenuItemVisible(menuItem);
            });
          }
        }, {
          key: "evaluateIfFunction",
          value: function evaluateIfFunction(value) {
            if (value instanceof Function) {
              return value(this.item);
            }

            return value;
          }
        }]);

        return _ContextMenuComponent;
      }();

      _ContextMenuComponent.ɵfac = function ContextMenuComponent_Factory(t) {
        return new (t || _ContextMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ContextMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CONTEXT_MENU_OPTIONS, 8));
      };

      _ContextMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ContextMenuComponent,
        selectors: [["context-menu"]],
        contentQueries: function ContextMenuComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ContextMenuItemDirective, 4);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuItems = _t);
          }
        },
        viewQuery: function ContextMenuComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
          }
        },
        inputs: {
          menuClass: "menuClass",
          autoFocus: "autoFocus",
          useBootstrap4: "useBootstrap4",
          disabled: "disabled"
        },
        outputs: {
          close: "close",
          open: "open"
        },
        decls: 0,
        vars: 0,
        template: function ContextMenuComponent_Template(rf, ctx) {},
        styles: ["\n    .cdk-overlay-container {\n      position: fixed;\n      z-index: 1000;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .ngx-contextmenu.cdk-overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      box-sizing: border-box;\n    }\n  "],
        encapsulation: 2
      });
      /** @nocollapse */

      _ContextMenuComponent.ctorParameters = function () {
        return [{
          type: _ContextMenuService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [CONTEXT_MENU_OPTIONS]
          }]
        }];
      };

      _ContextMenuComponent.propDecorators = {
        menuClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        autoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        useBootstrap4: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        menuItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_ContextMenuItemDirective]
        }],
        menuElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['menu', {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContextMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            selector: 'context-menu',
            template: " ",
            styles: ["\n    .cdk-overlay-container {\n      position: fixed;\n      z-index: 1000;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .ngx-contextmenu.cdk-overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      box-sizing: border-box;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: _ContextMenuService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [CONTEXT_MENU_OPTIONS]
            }]
          }];
        }, {
          menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          autoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          useBootstrap4: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_ContextMenuItemDirective]
          }],
          menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['menu', {
              "static": false
            }]
          }]
        });
      })();

      var _ContextMenuAttachDirective = /*#__PURE__*/function () {
        function _ContextMenuAttachDirective(contextMenuService) {
          _classCallCheck(this, _ContextMenuAttachDirective);

          this.contextMenuService = contextMenuService;
        }

        _createClass(_ContextMenuAttachDirective, [{
          key: "onContextMenu",
          value: function onContextMenu(event) {
            if (!this.contextMenu.disabled) {
              this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event: event,
                item: this.contextMenuSubject
              });
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }]);

        return _ContextMenuAttachDirective;
      }();

      _ContextMenuAttachDirective.ɵfac = function ContextMenuAttachDirective_Factory(t) {
        return new (t || _ContextMenuAttachDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ContextMenuService));
      };

      _ContextMenuAttachDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ContextMenuAttachDirective,
        selectors: [["", "contextMenu", ""]],
        hostBindings: function ContextMenuAttachDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ContextMenuAttachDirective_contextmenu_HostBindingHandler($event) {
              return ctx.onContextMenu($event);
            });
          }
        },
        inputs: {
          contextMenuSubject: "contextMenuSubject",
          contextMenu: "contextMenu"
        }
      });
      /** @nocollapse */

      _ContextMenuAttachDirective.ctorParameters = function () {
        return [{
          type: _ContextMenuService
        }];
      };

      _ContextMenuAttachDirective.propDecorators = {
        contextMenuSubject: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        contextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        onContextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['contextmenu', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContextMenuAttachDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[contextMenu]'
          }]
        }], function () {
          return [{
            type: _ContextMenuService
          }];
        }, {
          onContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['contextmenu', ['$event']]
          }],
          contextMenuSubject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _ContextMenuModule = /*#__PURE__*/function () {
        function _ContextMenuModule() {
          _classCallCheck(this, _ContextMenuModule);
        }

        _createClass(_ContextMenuModule, null, [{
          key: "forRoot",
          value: function forRoot(options) {
            return {
              ngModule: _ContextMenuModule,
              providers: [_ContextMenuService, {
                provide: CONTEXT_MENU_OPTIONS,
                useValue: options
              }, {
                provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayContainer,
                useClass: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.FullscreenOverlayContainer
              }]
            };
          }
        }]);

        return _ContextMenuModule;
      }();

      _ContextMenuModule.ɵfac = function ContextMenuModule_Factory(t) {
        return new (t || _ContextMenuModule)();
      };

      _ContextMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ContextMenuModule
      });
      _ContextMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContextMenuModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_ContextMenuAttachDirective, _ContextMenuComponent, ContextMenuContentComponent, _ContextMenuItemDirective],
            entryComponents: [ContextMenuContentComponent],
            exports: [_ContextMenuAttachDirective, _ContextMenuComponent, _ContextMenuItemDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ContextMenuModule, {
          declarations: function declarations() {
            return [_ContextMenuAttachDirective, _ContextMenuComponent, ContextMenuContentComponent, _ContextMenuItemDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule];
          },
          exports: function exports() {
            return [_ContextMenuAttachDirective, _ContextMenuComponent, _ContextMenuItemDirective];
          }
        });
      })();
      /*
       * Public API Surface of ngx-contextmenu
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    7635:
    /*!***********************************!*\
      !*** ./src/demo/app.component.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var data_text_css_charset_utf_8_base64_Ci5kYXNoYm9hcmRDb250YWluZXIgewp3aWR0aDogMTAwJTsKaGVpZ2h0OiAxMDAlOwpwb3NpdGlvbjogZml4ZWQ7Cn0KCi5jb21wb25lbnRzQ29udGFpbmVyIHsKcG9zaXRpb246IGZpeGVkOwpib3R0b206IDA7CnRvcDogMTAwcHg7CndpZHRoOiAxMDAlOyB9CgouY29tcG9uZW50Q29udGFpbmVyIHsKb3ZlcmZsb3c6IGF1dG87CnBvc2l0aW9uOiBhYnNvbHV0ZTsgfQo___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! data:text/css;charset=utf-8;base64,Ci5kYXNoYm9hcmRDb250YWluZXIgewp3aWR0aDogMTAwJTsKaGVpZ2h0OiAxMDAlOwpwb3NpdGlvbjogZml4ZWQ7Cn0KCi5jb21wb25lbnRzQ29udGFpbmVyIHsKcG9zaXRpb246IGZpeGVkOwpib3R0b206IDA7CnRvcDogMTAwcHg7CndpZHRoOiAxMDAlOyB9CgouY29tcG9uZW50Q29udGFpbmVyIHsKb3ZlcmZsb3c6IGF1dG87CnBvc2l0aW9uOiBhYnNvbHV0ZTsgfQo= */
      3005);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      9096);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-contextmenu */
      5984);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(contextMenuService) {
          _classCallCheck(this, AppComponent);

          this.contextMenuService = contextMenuService;
          this.disableBasicMenu = false;
          this.items = [{
            name: 'John',
            otherProperty: 'Foo',
            layout: {
              height: '90px',
              left: '0px',
              top: '0px',
              width: '98px'
            },
            actions: [{
              enabled: true,
              execute: function execute(item) {
                return console.log(item);
              },
              html: function html(item) {
                return "John custom: ".concat(item.name);
              },
              visible: true
            }, {
              divider: true,
              visible: true
            }, {
              enabled: true,
              execute: function execute(item) {
                return console.log(item);
              },
              html: function html(item) {
                return "John custom: ".concat(item.name);
              },
              visible: true
            }]
          }, {
            name: 'Joe',
            otherProperty: 'Bar',
            layout: {
              height: '90px',
              left: '98px',
              top: '0px',
              width: '98px'
            },
            actions: [{
              enabled: true,
              execute: function execute(item) {
                window.fake.doesntexist = 2;
              },
              html: function html(item) {
                return "Joe something: ".concat(item.name);
              },
              visible: true
            }]
          }];
          this.outsideValue = 'something';
        }

        _createClass(AppComponent, [{
          key: "canUseFullScreen",
          value: function canUseFullScreen() {
            return !!this.wrapper.nativeElement.requestFullscreen;
          }
        }, {
          key: "requestFullScreen",
          value: function requestFullScreen() {
            if (this.canUseFullScreen()) {
              this.wrapper.nativeElement.requestFullscreen();
            } else {
              console.log('cant use fullscreen');
            }
          }
        }, {
          key: "onContextMenu",
          value: function onContextMenu($event, item) {
            this.contextMenuService.show.next({
              event: $event,
              item: item
            });
            $event.preventDefault();
          }
        }, {
          key: "showMessage",
          value: function showMessage(message, data) {
            console.log(message, data);
          }
        }, {
          key: "onlyJohn",
          value: function onlyJohn(item) {
            return item.name === 'John';
          }
        }, {
          key: "onlyJoe",
          value: function onlyJoe(item) {
            return item.name === 'Joe';
          }
        }, {
          key: "log",
          value: function log(message) {
            console.log(message);
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__.ContextMenuService
        }];
      };

      _AppComponent.propDecorators = {
        wrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
          args: ['wrapper']
        }],
        basicMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
          args: ['basicMenu', {
            "static": true
          }]
        }],
        enableAndVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
          args: ['enableAndVisible', {
            "static": true
          }]
        }],
        withFunctions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
          args: ['withFunctions', {
            "static": true
          }]
        }]
      };
      _AppComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'ngx-context-menu-demo',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [data_text_css_charset_utf_8_base64_Ci5kYXNoYm9hcmRDb250YWluZXIgewp3aWR0aDogMTAwJTsKaGVpZ2h0OiAxMDAlOwpwb3NpdGlvbjogZml4ZWQ7Cn0KCi5jb21wb25lbnRzQ29udGFpbmVyIHsKcG9zaXRpb246IGZpeGVkOwpib3R0b206IDA7CnRvcDogMTAwcHg7CndpZHRoOiAxMDAlOyB9CgouY29tcG9uZW50Q29udGFpbmVyIHsKb3ZlcmZsb3c6IGF1dG87CnBvc2l0aW9uOiBhYnNvbHV0ZTsgfQo___WEBPACK_IMPORTED_MODULE_0__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    4737:
    /*!********************************!*\
      !*** ./src/demo/app.module.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-contextmenu */
      5984);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      7635);
      /* harmony import */


      var _child1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./child1.component */
      7586);
      /* harmony import */


      var _child2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./child2.component */
      8456);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import { ScrollDispatchModule } from '@angular/cdk/scrolling';


      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _child1_component__WEBPACK_IMPORTED_MODULE_1__.ChildOneComponent, _child2_component__WEBPACK_IMPORTED_MODULE_2__.ChildTwoComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__.ContextMenuModule.forRoot({
          autoFocus: true // useBootstrap4: true,

        }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot([{
          path: 'two',
          component: _child2_component__WEBPACK_IMPORTED_MODULE_2__.ChildTwoComponent
        }, {
          path: '**',
          component: _child1_component__WEBPACK_IMPORTED_MODULE_1__.ChildOneComponent
        }], {
          relativeLinkResolution: 'legacy'
        })],
        providers: [
          /* TODO: Providers go here */
        ]
      })], _AppModule);
      /***/
    },

    /***/
    7586:
    /*!**************************************!*\
      !*** ./src/demo/child1.component.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChildOneComponent": function ChildOneComponent() {
          return (
            /* binding */
            _ChildOneComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ChildOneComponent = /*#__PURE__*/function () {
        function ChildOneComponent(router) {
          _classCallCheck(this, ChildOneComponent);

          this.router = router;
          this.items = [{
            name: 'One',
            url: '/one'
          }, {
            name: 'Two',
            url: '/two'
          }];
        }

        _createClass(ChildOneComponent, [{
          key: "showMessage",
          value: function showMessage(message) {
            console.log(message);
          }
        }, {
          key: "go",
          value: function go(item) {
            this.router.navigateByUrl(item.url);
          }
        }]);

        return ChildOneComponent;
      }();

      _ChildOneComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router
        }];
      };

      _ChildOneComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'child-one',
        template: "\n    <h3>Routing One</h3>\n    <ul>\n      <li *ngFor=\"let item of items\" [contextMenu]=\"routingMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n    </ul>\n    <context-menu #routingMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name); go($event.item)\">\n        Go!\n      </ng-template>\n    </context-menu>\n  "
      })], _ChildOneComponent);
      /***/
    },

    /***/
    8456:
    /*!**************************************!*\
      !*** ./src/demo/child2.component.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChildTwoComponent": function ChildTwoComponent() {
          return (
            /* binding */
            _ChildTwoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ChildTwoComponent = /*#__PURE__*/function () {
        function ChildTwoComponent(router) {
          _classCallCheck(this, ChildTwoComponent);

          this.router = router;
          this.items = [{
            name: 'One',
            url: '/one'
          }, {
            name: 'Two',
            url: '/two'
          }];
        }

        _createClass(ChildTwoComponent, [{
          key: "showMessage",
          value: function showMessage(message) {
            console.log(message);
          }
        }, {
          key: "go",
          value: function go(item) {
            this.router.navigateByUrl(item.url);
          }
        }]);

        return ChildTwoComponent;
      }();

      _ChildTwoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router
        }];
      };

      _ChildTwoComponent = __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'child-two',
        template: "\n    <h3>Routing Two</h3>\n    <ul>\n      <li *ngFor=\"let item of items\" [contextMenu]=\"routingMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n    </ul>\n    <context-menu #routingMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name); go($event.item)\">\n        Go!\n      </ng-template>\n    </context-menu>\n  "
      })], _ChildTwoComponent);
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var _environment = {
        production: false
      };
      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      4608);
      /* harmony import */


      var _demo_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./demo/app.module */
      4737);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_demo_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
      /***/
    },

    /***/
    3005:
    /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** data:text/css;charset=utf-8;base64,Ci5kYXNoYm9hcmRDb250YWluZXIgewp3aWR0aDogMTAwJTsKaGVpZ2h0OiAxMDAlOwpwb3NpdGlvbjogZml4ZWQ7Cn0KCi5jb21wb25lbnRzQ29udGFpbmVyIHsKcG9zaXRpb246IGZpeGVkOwpib3R0b206IDA7CnRvcDogMTAwcHg7CndpZHRoOiAxMDAlOyB9CgouY29tcG9uZW50Q29udGFpbmVyIHsKb3ZlcmZsb3c6IGF1dG87CnBvc2l0aW9uOiBhYnNvbHV0ZTsgfQo= ***!
      \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n.dashboardContainer {\nwidth: 100%;\nheight: 100%;\nposition: fixed;\n}\n\n.componentsContainer {\nposition: fixed;\nbottom: 0;\ntop: 100px;\nwidth: 100%; }\n\n.componentContainer {\noverflow: auto;\nposition: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzcztjaGFyc2V0PXV0Zi04O2Jhc2U2NCxDaTVrWVhOb1ltOWhjbVJEYjI1MFlXbHVaWElnZXdwM2FXUjBhRG9nTVRBd0pUc0thR1ZwWjJoME9pQXhNREFsT3dwd2IzTnBkR2x2YmpvZ1ptbDRaV1E3Q24wS0NpNWpiMjF3YjI1bGJuUnpRMjl1ZEdGcGJtVnlJSHNLY0c5emFYUnBiMjQ2SUdacGVHVmtPd3BpYjNSMGIyMDZJREE3Q25SdmNEb2dNVEF3Y0hnN0NuZHBaSFJvT2lBeE1EQWxPeUI5Q2dvdVkyOXRjRzl1Wlc1MFEyOXVkR0ZwYm1WeUlIc0tiM1psY21ac2IzYzZJR0YxZEc4N0NuQnZjMmwwYVc5dU9pQmhZbk52YkhWMFpUc2dmUW89Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osZUFBZTtBQUNmOztBQUVBO0FBQ0EsZUFBZTtBQUNmLFNBQVM7QUFDVCxVQUFVO0FBQ1YsV0FBVyxFQUFFOztBQUViO0FBQ0EsY0FBYztBQUNkLGtCQUFrQixFQUFFIiwiZmlsZSI6ImNzcztjaGFyc2V0PXV0Zi04O2Jhc2U2NCxDaTVrWVhOb1ltOWhjbVJEYjI1MFlXbHVaWElnZXdwM2FXUjBhRG9nTVRBd0pUc0thR1ZwWjJoME9pQXhNREFsT3dwd2IzTnBkR2x2YmpvZ1ptbDRaV1E3Q24wS0NpNWpiMjF3YjI1bGJuUnpRMjl1ZEdGcGJtVnlJSHNLY0c5emFYUnBiMjQ2SUdacGVHVmtPd3BpYjNSMGIyMDZJREE3Q25SdmNEb2dNVEF3Y0hnN0NuZHBaSFJvT2lBeE1EQWxPeUI5Q2dvdVkyOXRjRzl1Wlc1MFEyOXVkR0ZwYm1WeUlIc0tiM1psY21ac2IzYzZJR0YxZEc4N0NuQnZjMmwwYVc5dU9pQmhZbk52YkhWMFpUc2dmUW89Iiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGFzaGJvYXJkQ29udGFpbmVyIHtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xucG9zaXRpb246IGZpeGVkO1xufVxuXG4uY29tcG9uZW50c0NvbnRhaW5lciB7XG5wb3NpdGlvbjogZml4ZWQ7XG5ib3R0b206IDA7XG50b3A6IDEwMHB4O1xud2lkdGg6IDEwMCU7IH1cblxuLmNvbXBvbmVudENvbnRhaW5lciB7XG5vdmVyZmxvdzogYXV0bztcbnBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuIl19 */";
      /***/
    },

    /***/
    9096:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/demo/app.component.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Angular2 Context Menu Demo</h1>\n<button (click)=\"requestFullScreen()\">fullscreen</button>\n<div (click)=\"$event.preventDefault()\" style=\"margin:20px; padding:20px; background-color: white;\" #wrapper>\n  <div style=\"position: relative\">\n    <div style=\"margin:20px; padding:20px;transform: translate3d(0px, 0px, 0px)\">\n      <div (click)=\"$event.preventDefault()\" style=\"transform: translate3d(10px, -10px, 0px)\">\n        <h3>Base Case</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"basicMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <a href (click)=\"disableBasicMenu = !disableBasicMenu\">{{ disableBasicMenu ? 'enable' : 'disable'}} basic menu</a>\n        <h3>Static</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"static\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #static (close)=\"showMessage('closed static', $event)\" (open)=\"showMessage('open', $event)\">\n          <ng-template contextMenuItem [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, someone')\">\n            Say hi\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, someone')\">\n            This will never show...\n          </ng-template>\n          <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n          <ng-template contextMenuItem [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage('Someone said: something')\">\n            Bye, someone\n          </ng-template>\n        </context-menu>\n        <div style=\"height: 100px; border: solid 1px #ccc; overflow: auto;\" cdkScrollable>\n          <h3>Enabled and Visible</h3>\n          <ul>\n            <li *ngFor=\"let item of items\" [contextMenu]=\"enableAndVisible\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n          </ul>\n          <context-menu #enableAndVisible (close)=\"showMessage('closed enableAndVisible', $event)\">\n            <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n              Say hi, {{item?.name}}! With access to the outside context: {{ outsideValue }}\n            </ng-template>\n            <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n              This will never show...\n            </ng-template>\n            <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n            <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n              Bye, {{item?.name}}\n            </ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n          </context-menu>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n        </div>\n        <h3>Enabled and Visible as Functions</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"withFunctions\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #withFunctions>\n          <ng-template contextMenuItem [enabled]=\"onlyJohn\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (enabled for John)\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"onlyJoe\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (visible for Joe)\n          </ng-template>\n          <ng-template contextMenuItem let-item (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n            Bye, {{item?.name}}\n          </ng-template>\n        </context-menu>\n        <br>\n        <h3>Custom styling</h3>\n        <ul>\n          <li [contextMenu]=\"customClassMenu\" [contextMenuSubject]=\"item\">Right click to see styled menu</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div style=\"position:fixed;top:35px;height:100%;width:100%;display:table; border-collapse: collapse;border:none;outline:none; pointer-events: none\">\n  <div style=\"display: table-cell;width:200px;vertical-align: top\">\n    <div style=\"position:absolute; top: 20px;\">\n      <div style=\"position:fixed;top:200px;left:-200px\">\n        <context-menu #basicMenu [disabled]=\"disableBasicMenu\" style=\"pointer-events:all\">\n          <ng-template contextMenuItem [subMenu]=\"saySubMenu\">\n            Say...\n          </ng-template>\n          <context-menu #saySubMenu>\n            <ng-template contextMenuItem [subMenu]=\"sayHiSubMenu\">\n              ...hi!\n            </ng-template>\n            <context-menu #sayHiSubMenu>\n              <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n                ...hi!\n              </ng-template>\n              <ng-template contextMenuItem (execute)=\"showMessage('Hola, ' + $event.item.name)\">\n                ...hola!\n              </ng-template>\n              <ng-template contextMenuItem (execute)=\"showMessage('Salut, ' + $event.item.name)\">\n                ...salut!\n              </ng-template>\n            </context-menu>\n            <ng-template contextMenuItem (execute)=\"showMessage('Hola, ' + $event.item.name)\">\n              ...hola!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Salut, ' + $event.item.name)\">\n              ...salut!\n            </ng-template>\n          </context-menu>\n          <ng-template contextMenuItem let-item [subMenu]=\"byeSubMenu\">\n            Bye, {{item?.name}}\n          </ng-template>\n          <context-menu #byeSubMenu>\n            <ng-template contextMenuItem (execute)=\"showMessage('Bye, ' + $event.item.name)\">\n              ...bye!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Ciao, ' + $event.item.name)\">\n              ...ciao!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Au revoir, ' + $event.item.name)\">\n              ...au revoir!\n            </ng-template>\n          </context-menu>\n          <ng-template contextMenuItem (execute)=\"showMessage('Simple')\">\n            Simple\n          </ng-template>\n          <ng-template contextMenuItem passive=\"true\">\n            Input something:\n            <input type=\"text\">\n          </ng-template>\n        </context-menu>\n      </div>\n    </div>\n  </div>\n</div>\n\n<context-menu #customClassMenu [menuClass]=\"'mystyle'\" style=\"pointer-events:all\">\n  <ng-template contextMenuItem (execute)=\"showMessage('Styled menu1')\">\n    This menu is styled\n  </ng-template>\n  <ng-template contextMenuItem (execute)=\"showMessage('Styled menu2')\">\n    with a custom class\n  </ng-template>\n  <ng-template contextMenuItem (execute)=\"showMessage('Styled menu3')\">\n    that needs to be global\n  </ng-template>\n</context-menu>\n\n<div class=\"dashboardContainer\" style=\"pointer-events: none\">\n  <div class=\"componentsContainer\">\n    <div class=\"componentContainer\" *ngFor=\"let item of items\" style=\"pointer-events: all\" [ngStyle]=\"item.layout\" [contextMenu]=\"componentMenu\"\n      [contextMenuSubject]=\"item\">\n      {{ item.name }}\n    </div>\n    <context-menu #componentMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n        Say hi!\n      </ng-template>\n      <ng-template contextMenuItem let-item (execute)=\"showMessage($event.event)\">\n        Bye, {{item?.name}}\n      </ng-template>\n    </context-menu>\n  </div>\n</div>\n<ul>\n  <li *ngFor=\"let item of items\" [contextMenu]=\"itemContextMenu\" [contextMenuSubject]=\"item\">\n    {{item.name}}\n    <context-menu #itemContextMenu>\n      <ng-template *ngFor=\"let action of item.actions\" contextMenuItem let-item [visible]=\"action.visible\" [enabled]=\"action.enabled\"\n        [divider]=\"action.divider\" (execute)=\"action.execute($event.item)\">\n        {{ action.html(item) }}\n      </ng-template>\n      <ng-template contextMenuItem [subMenu]=\"someSubMenu\">\n        Submenu\n      </ng-template>\n      <context-menu #someSubMenu>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n      </context-menu>\n    </context-menu>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map