webpackJsonp([1,4],{

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 128;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_app_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(136);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__demo_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(contextMenuService) {
        this.contextMenuService = contextMenuService;
        this.items = [
            {
                name: 'John',
                otherProperty: 'Foo',
                layout: {
                    height: 90,
                    left: 0,
                    top: 0,
                    width: 98,
                },
                actions: [{
                        enabled: true,
                        execute: function (item) { return console.log(item); },
                        html: function (item) { return "John custom: " + item.name; },
                        visible: true,
                    }, {
                        divider: true,
                        visible: true,
                    }, {
                        enabled: true,
                        execute: function (item) { return console.log(item); },
                        html: function (item) { return "John custom: " + item.name; },
                        visible: true,
                    }],
            },
            {
                name: 'Joe',
                otherProperty: 'Bar',
                layout: {
                    height: 90,
                    left: 98,
                    top: 0,
                    width: 98,
                },
                actions: [{
                        enabled: true,
                        execute: function (item) { return console.log(item); },
                        html: function (item) { return "Joe something: " + item.name; },
                        visible: true,
                    }],
            },
        ];
        this.outsideValue = 'something';
    }
    AppComponent.prototype.onContextMenu = function ($event, item) {
        this.contextMenuService.show.next({ event: $event, item: item });
        $event.preventDefault();
    };
    AppComponent.prototype.showMessage = function (message) {
        console.log(message);
    };
    AppComponent.prototype.onlyJohn = function (item) {
        return item.name === 'John';
    };
    AppComponent.prototype.onlyJoe = function (item) {
        return item.name === 'Joe';
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ViewChild */])('basicMenu'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "basicMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ViewChild */])('enableAndVisible'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */]) === "function" && _b || Object)
], AppComponent.prototype, "enableAndVisible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ViewChild */])('withFunctions'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */]) === "function" && _c || Object)
], AppComponent.prototype, "withFunctions", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'angular2-context-menu-demo',
        styles: ["\n.dashboardContainer {\nwidth: 100%;\nheight: 100%;\nposition: fixed;\n}\n\n.componentsContainer {\nposition: fixed;\nbottom: 0;\ntop: 100px;\nwidth: 100%; }\n\n.componentContainer {\noverflow: auto;\nposition: absolute; }\n"],
        template: __webpack_require__(195),
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["c" /* ContextMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["c" /* ContextMenuService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__lib__["a" /* ContextMenuModule */],
        ],
        providers: [],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenuContent_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__injection_injection_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contextMenuInjector_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contextMenu_options__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contextMenu_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contextMenu_item_directive__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contextMenu_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contextMenu_attach_directive__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ContextMenuModule = ContextMenuModule_1 = (function () {
    function ContextMenuModule() {
    }
    ContextMenuModule.forRoot = function (options) {
        return {
            ngModule: ContextMenuModule_1,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__contextMenu_options__["a" /* CONTEXT_MENU_OPTIONS */],
                    useValue: options,
                },
            ],
        };
    };
    return ContextMenuModule;
}());
ContextMenuModule = ContextMenuModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__contextMenu_attach_directive__["a" /* ContextMenuAttachDirective */],
            __WEBPACK_IMPORTED_MODULE_6__contextMenu_component__["a" /* ContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_0__contextMenuContent_component__["a" /* ContextMenuContentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__contextMenu_item_directive__["a" /* ContextMenuItemDirective */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_0__contextMenuContent_component__["a" /* ContextMenuContentComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_9__contextMenu_attach_directive__["a" /* ContextMenuAttachDirective */],
            __WEBPACK_IMPORTED_MODULE_6__contextMenu_component__["a" /* ContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__contextMenu_item_directive__["a" /* ContextMenuItemDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__contextMenu_service__["a" /* ContextMenuService */],
            __WEBPACK_IMPORTED_MODULE_2__contextMenuInjector_service__["a" /* ContextMenuInjectorService */],
            __WEBPACK_IMPORTED_MODULE_1__injection_injection_service__["a" /* InjectionService */],
        ],
    })
], ContextMenuModule);

/* unused harmony default export */ var _unused_webpack_default_export = ContextMenuModule;
var ContextMenuModule_1;
//# sourceMappingURL=angular2-contextmenu.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuAttachDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContextMenuAttachDirective = (function () {
    function ContextMenuAttachDirective(contextMenuService) {
        this.contextMenuService = contextMenuService;
    }
    ContextMenuAttachDirective.prototype.onContextMenu = function (event) {
        this.contextMenuService.show.next({
            contextMenu: this.contextMenu,
            event: event,
            item: this.contextMenuSubject,
        });
        event.preventDefault();
        event.stopPropagation();
    };
    return ContextMenuAttachDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["f" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuAttachDirective.prototype, "contextMenuSubject", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["f" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__["a" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__["a" /* ContextMenuComponent */]) === "function" && _a || Object)
], ContextMenuAttachDirective.prototype, "contextMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* HostListener */])('contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContextMenuAttachDirective.prototype, "onContextMenu", null);
ContextMenuAttachDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* Directive */])({
        selector: '[contextMenu]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__["a" /* ContextMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__["a" /* ContextMenuService */]) === "function" && _b || Object])
], ContextMenuAttachDirective);

var _a, _b;
//# sourceMappingURL=contextMenu.attach.directive.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InjectionRegistry; });
var InjectionRegistry = (function () {
    function InjectionRegistry(injectionService) {
        this.injectionService = injectionService;
        this.defaults = {};
        this.components = new Map();
    }
    InjectionRegistry.prototype.getByType = function (type) {
        if (type === void 0) { type = this.type; }
        return this.components.get(type);
    };
    InjectionRegistry.prototype.create = function (bindings) {
        return this.createByType(this.type, bindings);
    };
    InjectionRegistry.prototype.createByType = function (type, bindings) {
        bindings = this.assignDefaults(bindings);
        var component = this.injectComponent(type, bindings);
        this.register(type, component);
        return component;
    };
    InjectionRegistry.prototype.destroy = function (instance) {
        var compsByType = this.components.get(instance.componentType);
        if (compsByType) {
            var idx = compsByType.indexOf(instance);
            if (idx > -1) {
                var component = compsByType[idx];
                component.destroy();
                compsByType.splice(idx, 1);
            }
        }
    };
    InjectionRegistry.prototype.destroyAll = function () {
        this.destroyByType(this.type);
    };
    InjectionRegistry.prototype.destroyByType = function (type) {
        var comps = this.components.get(type);
        if (comps) {
            for (var _i = 0, comps_1 = comps; _i < comps_1.length; _i++) {
                var comp = comps_1[_i];
                this.destroy(comp);
            }
        }
    };
    InjectionRegistry.prototype.assignDefaults = function (bindings) {
        var _a = this.defaults, inputs = _a.inputs, outputs = _a.outputs;
        if (!bindings.inputs && !bindings.outputs) {
            bindings = { inputs: bindings };
        }
        if (inputs) {
            bindings.inputs = Object.assign(inputs, bindings.inputs);
        }
        if (outputs) {
            bindings.outputs = Object.assign(outputs, bindings.outputs);
        }
        return bindings;
    };
    InjectionRegistry.prototype.injectComponent = function (type, bindings) {
        return this.injectionService.appendComponent(type, bindings);
    };
    InjectionRegistry.prototype.register = function (type, component) {
        if (!this.components.has(type)) {
            this.components.set(type, []);
        }
        var types = this.components.get(type);
        types.push(component);
    };
    return InjectionRegistry;
}());

//# sourceMappingURL=injection-registry.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<h1>Angular2 Context Menu Demo</h1>\n<div style=\"margin:20px; padding:20px\">\n  <div style=\"position: relative\">\n    <div style=\"margin:20px; padding:20px;transform: translate3d(0px, 0px, 0px)\">\n      <div style=\"transform: translate3d(10px, -10px, 0px)\">\n        <h3>Base Case</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"basicMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <h3>Enabled and Visible</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"enableAndVisible\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #enableAndVisible>\n          <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi, {{item?.name}}! With access to the outside context: {{ outsideValue }}\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            This will never show...\n          </ng-template>\n          <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n          <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n            Bye, {{item?.name}}\n          </ng-template>\n        </context-menu>\n        <h3>Enabled and Visible as Functions</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"withFunctions\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #withFunctions>\n          <ng-template contextMenuItem [enabled]=\"onlyJohn\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (enabled for John)\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"onlyJoe\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (visible for Joe)\n          </ng-template>\n          <ng-template contextMenuItem let-item (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n            Bye, {{item?.name}}\n          </ng-template>\n        </context-menu>\n      </div>\n    </div>\n  </div>\n</div>\n<div style=\"position:fixed;top:35px;height:100%;width:100%;display:table; border-collapse: collapse;border:none;outline:none; pointer-events: none\">\n  <div style=\"display: table-cell;width:200px;vertical-align: top\">\n    <div style=\"position:absolute; top: 20px;\">\n      <div style=\"position:fixed;top:200px;left:-200px\">\n        <context-menu #basicMenu style=\"pointer-events:all\">\n          <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi!\n          </ng-template>\n          <ng-template contextMenuItem let-item (execute)=\"showMessage($event.event)\">\n            Bye, {{item?.name}}\n          </ng-template>\n          <ng-template contextMenuItem passive=\"true\">\n            Input something: <input type=\"text\">\n          </ng-template>\n        </context-menu>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"dashboardContainer\" style=\"pointer-events: none\">\n  <div class=\"componentsContainer\">\n    <div class=\"componentContainer\" *ngFor=\"let item of items\" style=\"pointer-events: all\" [ngStyle]=\"item.layout\" [contextMenu]=\"componentMenu\"\n      [contextMenuSubject]=\"item\">\n      {{ item.name }}\n  </div>\n  <context-menu #componentMenu>\n    <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n      Say hi!\n    </ng-template>\n    <ng-template contextMenuItem let-item (execute)=\"showMessage($event.event)\">\n      Bye, {{item?.name}}\n    </ng-template>\n  </context-menu>\n</div>\n</div>\n<ul>\n  <li *ngFor=\"let item of items\" [contextMenu]=\"itemContextMenu\" [contextMenuSubject]=\"item\">\n    {{item.name}}\n    <context-menu #itemContextMenu>\n      <ng-template *ngFor=\"let action of item.actions\" contextMenuItem let-item [visible]=\"action.visible\" [enabled]=\"action.enabled\" [divider]=\"action.divider\"\n        (execute)=\"action.execute($event.item)\">\n        {{ action.html(item) }}\n        </ng-template>\n    </context-menu>\n  </li>\n</ul>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n"

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContextMenuService = (function () {
    function ContextMenuService() {
        this.show = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    return ContextMenuService;
}());
ContextMenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], ContextMenuService);

//# sourceMappingURL=contextMenu.service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTEXT_MENU_OPTIONS; });

var CONTEXT_MENU_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* OpaqueToken */]('CONTEXT_MENU_OPTIONS');
//# sourceMappingURL=contextMenu.options.js.map

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(129);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenu_item_directive__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextMenu_options__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contextMenuInjector_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ContextMenuComponent = (function () {
    function ContextMenuComponent(_contextMenuService, changeDetector, elementRef, options, contextMenuInjector) {
        var _this = this;
        this._contextMenuService = _contextMenuService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.contextMenuInjector = contextMenuInjector;
        this.useBootstrap4 = false;
        this.close = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["e" /* EventEmitter */]();
        this.visibleMenuItems = [];
        this.links = [];
        this.isShown = false;
        this.isOpening = false;
        this.mouseLocation = { left: '0px', top: '0px' };
        if (options) {
            this.useBootstrap4 = options.useBootstrap4;
        }
        _contextMenuService.show.subscribe(function (menuEvent) { return _this.onMenuEvent(menuEvent); });
    }
    ContextMenuComponent.prototype.onMenuEvent = function (menuEvent) {
        var _this = this;
        var contextMenu = menuEvent.contextMenu, event = menuEvent.event, item = menuEvent.item;
        this.contextMenuInjector.destroyAll();
        if (contextMenu && contextMenu !== this) {
            return;
        }
        this.event = event;
        this.item = item;
        this.setVisibleMenuItems();
        setTimeout(function () {
            _this.contextMenuInjector.create({
                menuItems: _this.visibleMenuItems,
                item: _this.item,
                event: _this.event,
            });
        });
    };
    ContextMenuComponent.prototype.isMenuItemVisible = function (menuItem) {
        return this.evaluateIfFunction(menuItem.visible);
    };
    ContextMenuComponent.prototype.setVisibleMenuItems = function () {
        var _this = this;
        this.visibleMenuItems = this.menuItems.filter(function (menuItem) { return _this.isMenuItemVisible(menuItem); });
    };
    ContextMenuComponent.prototype.evaluateIfFunction = function (value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    };
    return ContextMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["f" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuComponent.prototype, "useBootstrap4", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["g" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], ContextMenuComponent.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["h" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_0__contextMenu_item_directive__["a" /* ContextMenuItemDirective */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["i" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["i" /* QueryList */]) === "function" && _b || Object)
], ContextMenuComponent.prototype, "menuItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["j" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ElementRef */]) === "function" && _c || Object)
], ContextMenuComponent.prototype, "menuElement", void 0);
ContextMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["l" /* Component */])({
        selector: 'context-menu',
        template: "",
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Optional */])()),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__contextMenu_options__["a" /* CONTEXT_MENU_OPTIONS */])),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__["a" /* ContextMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__["a" /* ContextMenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* ChangeDetectorRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__contextMenu_options__["IContextMenuOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contextMenu_options__["IContextMenuOptions"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__contextMenuInjector_service__["a" /* ContextMenuInjectorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__contextMenuInjector_service__["a" /* ContextMenuInjectorService */]) === "function" && _h || Object])
], ContextMenuComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=contextMenu.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuItemDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContextMenuItemDirective = (function () {
    function ContextMenuItemDirective(template) {
        this.template = template;
        this.divider = false;
        this.passive = false;
        this.enabled = true;
        this.visible = true;
        this.execute = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    ContextMenuItemDirective.prototype.evaluateIfFunction = function (value, item) {
        if (value instanceof Function) {
            return value(item);
        }
        return value;
    };
    ContextMenuItemDirective.prototype.triggerExecute = function (item, $event) {
        if (!this.evaluateIfFunction(this.enabled, item)) {
            return;
        }
        this.execute.emit({ event: $event, item: item });
    };
    return ContextMenuItemDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(),
    __metadata("design:type", Boolean)
], ContextMenuItemDirective.prototype, "divider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(),
    __metadata("design:type", Boolean)
], ContextMenuItemDirective.prototype, "passive", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuItemDirective.prototype, "enabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuItemDirective.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], ContextMenuItemDirective.prototype, "execute", void 0);
ContextMenuItemDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        /* tslint:disable:directive-selector-type */
        selector: '[contextMenuItem]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* TemplateRef */]) === "function" && _b || Object])
], ContextMenuItemDirective);

var _a, _b;
//# sourceMappingURL=contextMenu.item.directive.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenu_options__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ContextMenuContentComponent = (function () {
    function ContextMenuContentComponent(_contextMenuService, changeDetector, elementRef, options, renderer) {
        this._contextMenuService = _contextMenuService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.renderer = renderer;
        this.menuItems = [];
        this.close = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["e" /* EventEmitter */]();
        this.useBootstrap4 = false;
        this.isShown = false;
        this.isOpening = false;
        this.mouseLocation = { left: '0px', top: '0px' };
        if (options) {
            this.useBootstrap4 = options.useBootstrap4;
        }
    }
    ContextMenuContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isOpening = true;
        setTimeout(function () { return _this.isOpening = false; }, 400);
        if (this.menuItems) {
            // Declarative context menu
            setTimeout(function () {
                if (_this.menuItems.length > 0) {
                    _this.showMenu();
                }
                else {
                    _this.hideMenu();
                }
                setTimeout(function () {
                    var menuWidth = _this.menuElement ? _this.menuElement.nativeElement.clientWidth : 100;
                    var menuHeight = _this.menuElement ? _this.menuElement.nativeElement.clientHeight : 100;
                    var bodyWidth = _this.event.view.document.body.clientWidth;
                    var bodyHeight = _this.event.view.document.body.clientHeight;
                    var distanceFromRight = bodyWidth - (_this.event.clientX + menuWidth);
                    var distanceFromBottom = bodyHeight - (_this.event.clientY + menuHeight);
                    var isMenuOutsideBody = false;
                    if (distanceFromRight < 0 && _this.event.clientX > bodyWidth / 2) {
                        _this.mouseLocation.marginLeft = '-' + menuWidth + 'px';
                        isMenuOutsideBody = true;
                    }
                    if (distanceFromBottom < 0 && _this.event.clientY > bodyHeight / 2) {
                        _this.mouseLocation.marginTop = '-' + menuHeight + 'px';
                        isMenuOutsideBody = true;
                    }
                    if (isMenuOutsideBody) {
                        _this.showMenu();
                    }
                });
            });
        }
        else {
            this.hideMenu();
        }
        this.mouseLocation = {
            left: this.event.clientX + 'px',
            top: this.event.clientY + 'px',
        };
        this.menuItems.forEach(function (menuItem) {
            menuItem.execute.subscribe(function () { return _this.hideMenu(); });
        });
    };
    ContextMenuContentComponent.prototype.stopEvent = function ($event) {
        $event.stopPropagation();
    };
    Object.defineProperty(ContextMenuContentComponent.prototype, "locationCss", {
        get: function () {
            return {
                'position': 'fixed',
                'display': this.isShown ? 'block' : 'none',
                left: this.mouseLocation.left,
                marginLeft: this.mouseLocation.marginLeft,
                marginTop: this.mouseLocation.marginTop,
                top: this.mouseLocation.top,
            };
        },
        enumerable: true,
        configurable: true
    });
    ContextMenuContentComponent.prototype.clickedOutside = function () {
        if (!this.isOpening) {
            this.hideMenu();
        }
    };
    ContextMenuContentComponent.prototype.isMenuItemEnabled = function (menuItem) {
        return this.evaluateIfFunction(menuItem.enabled);
    };
    ContextMenuContentComponent.prototype.isMenuItemVisible = function (menuItem) {
        return this.evaluateIfFunction(menuItem.visible);
    };
    ContextMenuContentComponent.prototype.evaluateIfFunction = function (value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    };
    ContextMenuContentComponent.prototype.isDisabled = function (link) {
        return link.enabled && !link.enabled(this.item);
    };
    ContextMenuContentComponent.prototype.execute = function (link, $event) {
        if (this.isDisabled(link)) {
            return;
        }
        this.hideMenu();
        link.click(this.item, $event);
    };
    ContextMenuContentComponent.prototype.showMenu = function () {
        this.isShown = true;
        this.changeDetector.markForCheck();
    };
    ContextMenuContentComponent.prototype.hideMenu = function (event) {
        if (event && (event.keyCode && event.keyCode !== 27 || event.key && event.key !== 'Escape')) {
            return;
        }
        if (this.isShown === true) {
            this.close.emit({});
        }
        this.isShown = false;
        this.changeDetector.markForCheck();
    };
    return ContextMenuContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["f" /* Input */])(),
    __metadata("design:type", Array)
], ContextMenuContentComponent.prototype, "menuItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["f" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuContentComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["f" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuContentComponent.prototype, "event", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], ContextMenuContentComponent.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* ElementRef */]) === "function" && _b || Object)
], ContextMenuContentComponent.prototype, "menuElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* HostListener */])('document:click'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* HostListener */])('document:contextmenu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContextMenuContentComponent.prototype, "clickedOutside", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* HostListener */])('window:scroll'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* HostListener */])('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContextMenuContentComponent.prototype, "hideMenu", null);
ContextMenuContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* Component */])({
        selector: 'context-menu-content',
        styles: [
            ".passive {\n       display: block;\n       padding: 3px 20px;\n       clear: both;\n       font-weight: normal;\n       line-height: @line-height-base;\n       white-space: nowrap;\n     }"
        ],
        template: "<div class=\"dropdown angular2-contextmenu\">\n      <ul *ngIf=\"item\" #menu [ngStyle]=\"locationCss\" class=\"dropdown-menu\">\n        <li *ngFor=\"let menuItem of menuItems\" [class.disabled]=\"!isMenuItemEnabled(menuItem)\"\n            [class.divider]=\"menuItem.divider\" [class.dropdown-divider]=\"useBootstrap4 && menuItem.divider\"\n            [attr.role]=\"menuItem.divider ? 'separator' : undefined\">\n          <a *ngIf=\"!menuItem.divider && !menuItem.passive\" href [class.dropdown-item]=\"useBootstrap4\"\n            [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\"\n            (click)=\"menuItem.triggerExecute(item, $event); $event.preventDefault(); $event.stopPropagation();\">\n            <ng-template [ngTemplateOutlet]=\"menuItem.template\" [ngOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </a>\n\n          <span (click)=\"stopEvent($event)\" (contextmenu)=\"stopEvent($event)\" class=\"passive\"\n                *ngIf=\"!menuItem.divider && menuItem.passive\" [class.dropdown-item]=\"useBootstrap4\"\n                [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\">\n            <ng-template [ngTemplateOutlet]=\"menuItem.template\" [ngOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </span>\n        </li>\n      </ul>\n    </div>\n  ",
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Optional */])()),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__contextMenu_options__["a" /* CONTEXT_MENU_OPTIONS */])),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__["a" /* ContextMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__["a" /* ContextMenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* ChangeDetectorRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__contextMenu_options__["IContextMenuOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__contextMenu_options__["IContextMenuOptions"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* Renderer */]) === "function" && _g || Object])
], ContextMenuContentComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=contextMenuContent.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenuContent_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__injection_injection_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__injection_injection_registry_service__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuInjectorService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContextMenuInjectorService = (function (_super) {
    __extends(ContextMenuInjectorService, _super);
    function ContextMenuInjectorService(injectionService) {
        var _this = _super.call(this, injectionService) || this;
        _this.injectionService = injectionService;
        _this.type = __WEBPACK_IMPORTED_MODULE_0__contextMenuContent_component__["a" /* ContextMenuContentComponent */];
        return _this;
    }
    return ContextMenuInjectorService;
}(__WEBPACK_IMPORTED_MODULE_3__injection_injection_registry_service__["a" /* InjectionRegistry */]));
ContextMenuInjectorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__injection_injection_service__["a" /* InjectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__injection_injection_service__["a" /* InjectionService */]) === "function" && _a || Object])
], ContextMenuInjectorService);

var _a;
//# sourceMappingURL=contextMenuInjector.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular2_contextmenu__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_contextmenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextMenu_component__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__contextMenu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contextMenu_options__ = __webpack_require__(38);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InjectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Injection service is a helper to append components
 * dynamically to a known location in the DOM, most
 * noteably for dialogs/tooltips appending to body.
 *
 * @export
 * @class InjectionService
 */
var InjectionService = (function () {
    function InjectionService(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * Gets the root view container to inject the component to.
     *
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.getRootViewContainer = function () {
        var rootComponents = this.applicationRef['_rootComponents'];
        if (rootComponents.length)
            return rootComponents[0];
        if (this._container)
            return this._container;
        throw new Error('View Container not found! ngUpgrade needs to manually set this via setRootViewContainer.');
    };
    /**
     * Overrides the default root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param {any} container
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.setRootViewContainer = function (container) {
        this._container = container;
    };
    /**
     * Gets the html element for a component ref.
     *
     * @param {ComponentRef<any>} componentRef
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.getComponentRootNode = function (componentRef) {
        // the top most component root node has no `hostView`
        if (!componentRef.hostView)
            return componentRef.element.nativeElement;
        return componentRef.hostView.rootNodes[0];
    };
    /**
     * Gets the root component container html element.
     *
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.getRootViewContainerNode = function () {
        return this.getComponentRootNode(this.getRootViewContainer());
    };
    /**
     * Projects the bindings onto the component
     *
     * @param {ComponentRef<any>} component
     * @param {*} options
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.projectComponentBindings = function (component, bindings) {
        if (bindings) {
            if (bindings.inputs !== undefined) {
                var bindingKeys = Object.getOwnPropertyNames(bindings.inputs);
                for (var _i = 0, bindingKeys_1 = bindingKeys; _i < bindingKeys_1.length; _i++) {
                    var bindingName = bindingKeys_1[_i];
                    component.instance[bindingName] = bindings.inputs[bindingName];
                }
            }
            if (bindings.outputs !== undefined) {
                var eventKeys = Object.getOwnPropertyNames(bindings.outputs);
                for (var _a = 0, eventKeys_1 = eventKeys; _a < eventKeys_1.length; _a++) {
                    var eventName = eventKeys_1[_a];
                    component.instance[eventName] = bindings.outputs[eventName];
                }
            }
        }
        return component;
    };
    /**
     * Appends a component to a adjacent location
     *
     * @template T
     * @param {Type<T>} componentClass
     * @param {*} [options={}]
     * @param {Element} [location=this.getRootViewContainerNode()]
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.appendComponent = function (componentClass, bindings, location) {
        if (bindings === void 0) { bindings = {}; }
        if (location === void 0) { location = this.getRootViewContainerNode(); }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        var componentRef = componentFactory.create(this.injector);
        var appRef = this.applicationRef;
        var componentRootNode = this.getComponentRootNode(componentRef);
        // project the options passed to the component instance
        this.projectComponentBindings(componentRef, bindings);
        appRef.attachView(componentRef.hostView);
        componentRef.onDestroy(function () {
            appRef.detachView(componentRef.hostView);
        });
        // use the renderer to append the element for univseral support
        var renderer = componentRef.instance.renderer;
        renderer.projectNodes(location, [componentRootNode]);
        return componentRef;
    };
    return InjectionService;
}());
InjectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ApplicationRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Injector */]) === "function" && _c || Object])
], InjectionService);

var _a, _b, _c;
//# sourceMappingURL=injection.service.js.map

/***/ })

},[471]);
//# sourceMappingURL=main.bundle.js.map