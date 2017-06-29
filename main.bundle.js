webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/demo/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Angular2 Context Menu Demo</h1>\n<div (click)=\"$event.preventDefault()\" style=\"margin:20px; padding:20px\">\n  <div style=\"position: relative\">\n    <div style=\"margin:20px; padding:20px;transform: translate3d(0px, 0px, 0px)\">\n      <div (click)=\"$event.preventDefault()\" style=\"transform: translate3d(10px, -10px, 0px)\">\n        <h3>Base Case</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"basicMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <a href (click)=\"disableBasicMenu = !disableBasicMenu\">{{ disableBasicMenu ? 'enable' : 'disable'}} basic menu</a>\n        <h3>Static</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"static\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #static (close)=\"showMessage('closed', $event)\" (open)=\"showMessage('open', $event)\">\n          <ng-template contextMenuItem [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, someone')\">\n            Say hi\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, someone')\">\n            This will never show...\n          </ng-template>\n          <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n          <ng-template contextMenuItem [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage('Someone said: something')\">\n            Bye, someone\n          </ng-template>\n        </context-menu>\n        <h3>Enabled and Visible</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"enableAndVisible\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #enableAndVisible (close)=\"showMessage('closed', $event)\">\n          <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi, {{item?.name}}! With access to the outside context: {{ outsideValue }}\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            This will never show...\n          </ng-template>\n          <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n          <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n            Bye, {{item?.name}}\n          </ng-template>\n        </context-menu>\n        <h3>Enabled and Visible as Functions</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"withFunctions\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #withFunctions>\n          <ng-template contextMenuItem [enabled]=\"onlyJohn\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (enabled for John)\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"onlyJoe\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (visible for Joe)\n          </ng-template>\n          <ng-template contextMenuItem let-item (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n            Bye, {{item?.name}}\n          </ng-template>\n        </context-menu>\n      </div>\n    </div>\n  </div>\n</div>\n<div style=\"position:fixed;top:35px;height:100%;width:100%;display:table; border-collapse: collapse;border:none;outline:none; pointer-events: none\">\n  <div style=\"display: table-cell;width:200px;vertical-align: top\">\n    <div style=\"position:absolute; top: 20px;\">\n      <div style=\"position:fixed;top:200px;left:-200px\">\n        <context-menu #basicMenu [disabled]=\"disableBasicMenu\" style=\"pointer-events:all\">\n          <ng-template contextMenuItem [subMenu]=\"saySubMenu\">\n            Say...\n          </ng-template>\n          <context-menu #saySubMenu>\n            <ng-template contextMenuItem [subMenu]=\"sayHiSubMenu\">\n              ...hi!\n            </ng-template>\n            <context-menu #sayHiSubMenu>\n              <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n                ...hi!\n              </ng-template>\n              <ng-template contextMenuItem (execute)=\"showMessage('Hola, ' + $event.item.name)\">\n                ...hola!\n              </ng-template>\n              <ng-template contextMenuItem (execute)=\"showMessage('Salut, ' + $event.item.name)\">\n                ...salut!\n              </ng-template>\n            </context-menu>\n            <ng-template contextMenuItem (execute)=\"showMessage('Hola, ' + $event.item.name)\">\n              ...hola!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Salut, ' + $event.item.name)\">\n              ...salut!\n            </ng-template>\n          </context-menu>\n          <ng-template contextMenuItem let-item [subMenu]=\"byeSubMenu\">\n            Bye, {{item?.name}}\n          </ng-template>\n          <context-menu #byeSubMenu>\n            <ng-template contextMenuItem (execute)=\"showMessage('Bye, ' + $event.item.name)\">\n              ...bye!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Ciao, ' + $event.item.name)\">\n              ...ciao!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Au revoir, ' + $event.item.name)\">\n              ...au revoir!\n            </ng-template>\n          </context-menu>\n          <ng-template contextMenuItem (execute)=\"showMessage('Simple')\">\n            Simple\n          </ng-template>\n          <ng-template contextMenuItem passive=\"true\">\n            Input something: <input type=\"text\">\n          </ng-template>\n        </context-menu>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"dashboardContainer\" style=\"pointer-events: none\">\n  <div class=\"componentsContainer\">\n    <div class=\"componentContainer\" *ngFor=\"let item of items\" style=\"pointer-events: all\" [ngStyle]=\"item.layout\" [contextMenu]=\"componentMenu\"\n      [contextMenuSubject]=\"item\">\n      {{ item.name }}\n  </div>\n  <context-menu #componentMenu>\n    <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n      Say hi!\n    </ng-template>\n    <ng-template contextMenuItem let-item (execute)=\"showMessage($event.event)\">\n      Bye, {{item?.name}}\n    </ng-template>\n  </context-menu>\n</div>\n</div>\n<ul>\n  <li *ngFor=\"let item of items\" [contextMenu]=\"itemContextMenu\" [contextMenuSubject]=\"item\">\n    {{item.name}}\n    <context-menu #itemContextMenu>\n      <ng-template *ngFor=\"let action of item.actions\" contextMenuItem let-item [visible]=\"action.visible\" [enabled]=\"action.enabled\" [divider]=\"action.divider\"\n        (execute)=\"action.execute($event.item)\">\n        {{ action.html(item) }}\n        </ng-template>\n    </context-menu>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n"

/***/ }),

/***/ "../../../../../src/demo/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__("../../../../../src/lib/index.ts");
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
        this.disableBasicMenu = false;
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
                        execute: function (item) { window.fake.doesntexist = 2; },
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
    AppComponent.prototype.log = function (message) {
        console.log(message);
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('basicMenu'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "basicMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('enableAndVisible'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */]) === "function" && _b || Object)
], AppComponent.prototype, "enableAndVisible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('withFunctions'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["b" /* ContextMenuComponent */]) === "function" && _c || Object)
], AppComponent.prototype, "withFunctions", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'ngx-context-menu-demo',
        styles: ["\n.dashboardContainer {\nwidth: 100%;\nheight: 100%;\nposition: fixed;\n}\n\n.componentsContainer {\nposition: fixed;\nbottom: 0;\ntop: 100px;\nwidth: 100%; }\n\n.componentContainer {\noverflow: auto;\nposition: absolute; }\n"],
        template: __webpack_require__("../../../../../src/demo/app.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__lib__["c" /* ContextMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib__["c" /* ContextMenuService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/demo/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__child2_component__ = __webpack_require__("../../../../../src/demo/child2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__child1_component__ = __webpack_require__("../../../../../src/demo/child1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib__ = __webpack_require__("../../../../../src/lib/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/demo/app.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_1__child1_component__["a" /* ChildOneComponent */], __WEBPACK_IMPORTED_MODULE_0__child2_component__["a" /* ChildTwoComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__lib__["a" /* ContextMenuModule */].forRoot({
                autoFocus: true,
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'two',
                    component: __WEBPACK_IMPORTED_MODULE_0__child2_component__["a" /* ChildTwoComponent */],
                },
                {
                    path: '**',
                    component: __WEBPACK_IMPORTED_MODULE_1__child1_component__["a" /* ChildOneComponent */],
                }
            ]),
        ],
        providers: [],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/demo/child1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildOneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildOneComponent = (function () {
    function ChildOneComponent(router) {
        this.router = router;
        this.items = [{
                name: 'One',
                url: '/one',
            }, {
                name: 'Two',
                url: '/two',
            }];
    }
    ChildOneComponent.prototype.showMessage = function (message) {
        console.log(message);
    };
    ChildOneComponent.prototype.go = function (item) {
        this.router.navigateByUrl(item.url);
    };
    return ChildOneComponent;
}());
ChildOneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* Component */])({
        selector: 'child-one',
        template: "\n    <h3>Routing One</h3>\n    <ul>\n      <li *ngFor=\"let item of items\" [contextMenu]=\"routingMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n    </ul>\n    <context-menu #routingMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name); go($event.item)\">\n        Go!\n      </ng-template>\n    </context-menu>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ChildOneComponent);

var _a;
//# sourceMappingURL=child1.component.js.map

/***/ }),

/***/ "../../../../../src/demo/child2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildTwoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildTwoComponent = (function () {
    function ChildTwoComponent(router) {
        this.router = router;
        this.items = [{
                name: 'One',
                url: '/one',
            }, {
                name: 'Two',
                url: '/two',
            }];
    }
    ChildTwoComponent.prototype.showMessage = function (message) {
        console.log(message);
    };
    ChildTwoComponent.prototype.go = function (item) {
        this.router.navigateByUrl(item.url);
    };
    return ChildTwoComponent;
}());
ChildTwoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'child-two',
        template: "\n    <h3>Routing Two</h3>\n    <ul>\n      <li *ngFor=\"let item of items\" [contextMenu]=\"routingMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n    </ul>\n    <context-menu #routingMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name); go($event.item)\">\n        Go!\n      </ng-template>\n    </context-menu>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ChildTwoComponent);

var _a;
//# sourceMappingURL=child2.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/lib/contextMenu.attach.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__ = __webpack_require__("../../../../../src/lib/contextMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__ = __webpack_require__("../../../../../src/lib/contextMenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuAttachDirective.prototype, "contextMenuSubject", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__["a" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__["a" /* ContextMenuComponent */]) === "function" && _a || Object)
], ContextMenuAttachDirective.prototype, "contextMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* HostListener */])('contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContextMenuAttachDirective.prototype, "onContextMenu", null);
ContextMenuAttachDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["i" /* Directive */])({
        selector: '[contextMenu]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__["a" /* ContextMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__["a" /* ContextMenuService */]) === "function" && _b || Object])
], ContextMenuAttachDirective);

var _a, _b;
//# sourceMappingURL=contextMenu.attach.directive.js.map

/***/ }),

/***/ "../../../../../src/lib/contextMenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenu_item_directive__ = __webpack_require__("../../../../../src/lib/contextMenu.item.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextMenu_options__ = __webpack_require__("../../../../../src/lib/contextMenu.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__ = __webpack_require__("../../../../../src/lib/contextMenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contextMenuInjector_service__ = __webpack_require__("../../../../../src/lib/contextMenuInjector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.disabled = false;
        this.close = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["r" /* EventEmitter */]();
        this.open = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["r" /* EventEmitter */]();
        this.visibleMenuItems = [];
        this.links = [];
        this.mouseLocation = { left: '0px', top: '0px' };
        this.subscription = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
        this.subscription.add(_contextMenuService.show.subscribe(function (menuEvent) { return _this.onMenuEvent(menuEvent); }));
        this.subscription.add(_contextMenuService.triggerClose.subscribe(function (contextMenuContent) {
            if (!contextMenuContent) {
                _this.contextMenuInjector.destroyAll();
            }
            else {
                _this.destroySubMenus(contextMenuContent);
                _this.contextMenuInjector.destroy(contextMenuContent);
            }
        }));
        this.subscription.add(_contextMenuService.close.subscribe(function (event) { return _this.close.emit(event); }));
    }
    ContextMenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.contextMenuInjector.destroyAll();
    };
    ContextMenuComponent.prototype.onMenuEvent = function (menuEvent) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        var contextMenu = menuEvent.contextMenu, event = menuEvent.event, item = menuEvent.item;
        if (!menuEvent.parentContextMenu) {
            this.contextMenuInjector.destroyAll();
        }
        else {
            this.destroySubMenus(menuEvent.parentContextMenu);
        }
        if (contextMenu && contextMenu !== this) {
            return;
        }
        this.event = event;
        this.item = item;
        setTimeout(function () {
            _this.setVisibleMenuItems();
            _this.contextMenuContent = _this.contextMenuInjector.create(__assign({ menuItems: _this.visibleMenuItems }, menuEvent));
            _this.open.next(menuEvent);
        });
    };
    ContextMenuComponent.prototype.destroySubMenus = function (parent) {
        var _this = this;
        var cmContents = this.contextMenuInjector.getByType(this.contextMenuInjector.type);
        cmContents.filter(function (content) { return content.instance.parentContextMenu === parent; })
            .forEach(function (comp) {
            _this.destroySubMenus(comp.instance);
            _this.contextMenuInjector.destroy(comp);
        });
    };
    ContextMenuComponent.prototype.destroyLeafMenu = function () {
        this._contextMenuService.destroyLeafMenu();
    };
    ContextMenuComponent.prototype.destroyLeafSubMenu = function () {
        this._contextMenuService.destroyLeafMenu({ exceptRootMenu: true });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuComponent.prototype, "autoFocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuComponent.prototype, "useBootstrap4", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], ContextMenuComponent.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["r" /* EventEmitter */]) === "function" && _b || Object)
], ContextMenuComponent.prototype, "open", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["q" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_0__contextMenu_item_directive__["a" /* ContextMenuItemDirective */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* QueryList */]) === "function" && _c || Object)
], ContextMenuComponent.prototype, "menuItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_12" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["l" /* ElementRef */]) === "function" && _d || Object)
], ContextMenuComponent.prototype, "menuElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* HostListener */])('window:keydown.Escape'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContextMenuComponent.prototype, "destroyLeafMenu", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* HostListener */])('window:keydown.ArrowLeft'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContextMenuComponent.prototype, "destroyLeafSubMenu", null);
ContextMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_15" /* Component */])({
        selector: 'context-menu',
        template: "",
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Optional */])()),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__contextMenu_options__["a" /* CONTEXT_MENU_OPTIONS */])),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__["a" /* ContextMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__["a" /* ContextMenuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["p" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["p" /* ChangeDetectorRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["l" /* ElementRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__contextMenu_options__["IContextMenuOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contextMenu_options__["IContextMenuOptions"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__contextMenuInjector_service__["a" /* ContextMenuInjectorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__contextMenuInjector_service__["a" /* ContextMenuInjectorService */]) === "function" && _j || Object])
], ContextMenuComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=contextMenu.component.js.map

/***/ }),

/***/ "../../../../../src/lib/contextMenu.item.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__ = __webpack_require__("../../../../../src/lib/contextMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function ContextMenuItemDirective(template, elementRef) {
        this.template = template;
        this.elementRef = elementRef;
        this.divider = false;
        this.enabled = true;
        this.passive = false;
        this.visible = true;
        this.execute = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__["a" /* ContextMenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__["a" /* ContextMenuComponent */]) === "function" && _a || Object)
], ContextMenuItemDirective.prototype, "subMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuItemDirective.prototype, "divider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuItemDirective.prototype, "enabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuItemDirective.prototype, "passive", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuItemDirective.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]) === "function" && _b || Object)
], ContextMenuItemDirective.prototype, "execute", void 0);
ContextMenuItemDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */])({
        /* tslint:disable:directive-selector-type */
        selector: '[contextMenuItem]',
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* TemplateRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ElementRef */]) === "function" && _d || Object])
], ContextMenuItemDirective);

var _a, _b, _c, _d;
//# sourceMappingURL=contextMenu.item.directive.js.map

/***/ }),

/***/ "../../../../../src/lib/contextMenu.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTEXT_MENU_OPTIONS; });

var CONTEXT_MENU_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* OpaqueToken */]('CONTEXT_MENU_OPTIONS');
//# sourceMappingURL=contextMenu.options.js.map

/***/ }),

/***/ "../../../../../src/lib/contextMenu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenuInjector_service__ = __webpack_require__("../../../../../src/lib/contextMenuInjector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContextMenuService = (function () {
    function ContextMenuService(contextMenuInjector) {
        this.contextMenuInjector = contextMenuInjector;
        this.isDestroyingLeafMenu = false;
        this.show = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.triggerClose = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.close = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    ContextMenuService.prototype.destroyLeafMenu = function (_a) {
        var _this = this;
        var exceptRootMenu = (_a === void 0 ? {} : _a).exceptRootMenu;
        if (this.isDestroyingLeafMenu) {
            return;
        }
        this.isDestroyingLeafMenu = true;
        setTimeout(function () {
            var cmContents = _this.contextMenuInjector.getByType(_this.contextMenuInjector.type);
            if (cmContents && cmContents.length > 1) {
                cmContents[cmContents.length - 2].instance.focus();
            }
            if (cmContents && cmContents.length > (exceptRootMenu ? 1 : 0)) {
                _this.contextMenuInjector.destroy(cmContents[cmContents.length - 1]);
            }
            _this.isDestroyingLeafMenu = false;
        });
    };
    ContextMenuService.prototype.getLeafMenu = function () {
        var cmContents = this.contextMenuInjector.getByType(this.contextMenuInjector.type);
        if (cmContents && cmContents.length > 0) {
            return cmContents[cmContents.length - 1].instance;
        }
        return undefined;
    };
    ContextMenuService.prototype.isLeafMenu = function (cmContent) {
        return this.getLeafMenu() === cmContent;
    };
    return ContextMenuService;
}());
ContextMenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__contextMenuInjector_service__["a" /* ContextMenuInjectorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__contextMenuInjector_service__["a" /* ContextMenuInjectorService */]) === "function" && _a || Object])
], ContextMenuService);

var _a;
//# sourceMappingURL=contextMenu.service.js.map

/***/ }),

/***/ "../../../../../src/lib/contextMenuContent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenu_options__ = __webpack_require__("../../../../../src/lib/contextMenu.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__ = __webpack_require__("../../../../../src/lib/contextMenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
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
        this.activeMenuItemIndex = -1;
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.isShown = false;
        this.isOpening = false;
        this.mouseLocation = { left: '0px', top: '0px' };
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
    }
    ContextMenuContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isOpening = true;
        if (this.activeMenuItemIndex === undefined) {
            this.activeMenuItemIndex = -1;
        }
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
                        if (_this.parentContextMenu) {
                            _this.mouseLocation.marginLeft = '-' + (menuWidth + _this.parentContextMenu.menuElement.nativeElement.clientWidth) + 'px';
                        }
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
            _this.subscription.add(menuItem.execute.subscribe(function () { return _this.hideMenu(undefined, true); }));
        });
    };
    ContextMenuContentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.autoFocus) {
            setTimeout(function () { return _this.focus(); });
        }
    };
    ContextMenuContentComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ContextMenuContentComponent.prototype.focus = function () {
        if (this.autoFocus) {
            this.menuElement.nativeElement.focus();
        }
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
    ContextMenuContentComponent.prototype.isMenuItemEnabled = function (menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.enabled);
    };
    ContextMenuContentComponent.prototype.isMenuItemVisible = function (menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.visible);
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
    ContextMenuContentComponent.prototype.showMenu = function () {
        this.isShown = true;
        this.changeDetector.markForCheck();
    };
    ContextMenuContentComponent.prototype.clickedOutside = function () {
        if (!this.isOpening) {
            this.hideMenu();
        }
    };
    ContextMenuContentComponent.prototype.hideMenu = function (event, hideAll) {
        if (this.isShown) {
            this._contextMenuService.close.next(event);
        }
        if (hideAll) {
            this._contextMenuService.triggerClose.next(undefined);
        }
        this.isShown = false;
        this.changeDetector.markForCheck();
    };
    ContextMenuContentComponent.prototype.nextItem = function () {
        if (!this._contextMenuService.isLeafMenu(this)) {
            return;
        }
        if (event) {
            event.preventDefault();
        }
        if (this.activeMenuItemIndex === this.menuItems.length - 1) {
            this.activeMenuItemIndex = 0;
        }
        else {
            this.activeMenuItemIndex++;
        }
        var menuItem = this.menuItems[this.activeMenuItemIndex];
        if (!this.isMenuItemEnabled(menuItem) || menuItem.divider || menuItem.passive) {
            this.nextItem();
        }
    };
    ContextMenuContentComponent.prototype.prevItem = function (event) {
        if (!this._contextMenuService.isLeafMenu(this)) {
            return;
        }
        if (event) {
            event.preventDefault();
        }
        if (this.activeMenuItemIndex <= 0) {
            this.activeMenuItemIndex = this.menuItems.length - 1;
        }
        else {
            this.activeMenuItemIndex--;
        }
        var menuItem = this.menuItems[this.activeMenuItemIndex];
        if (!this.isMenuItemEnabled(menuItem) || menuItem.divider || menuItem.passive) {
            this.prevItem();
        }
    };
    ContextMenuContentComponent.prototype.keyboardOpenSubMenu = function (event) {
        if (!this._contextMenuService.isLeafMenu(this)) {
            return;
        }
        if (event) {
            event.preventDefault();
        }
        if (this.activeMenuItemIndex >= 0) {
            var menuItem = this.menuItems[this.activeMenuItemIndex];
            var menuItemElement = this.menuItemElements.toArray()[this.activeMenuItemIndex].nativeElement;
            this.openSubMenu(menuItem, event, menuItemElement, 0);
        }
    };
    ContextMenuContentComponent.prototype.keyboardMenuItemSelect = function (event) {
        if (!this._contextMenuService.isLeafMenu(this)) {
            return;
        }
        if (event) {
            event.preventDefault();
        }
        if (this.activeMenuItemIndex >= 0) {
            var menuItem = this.menuItems[this.activeMenuItemIndex];
            var menuItemElement = this.menuItemElements.toArray()[this.activeMenuItemIndex].nativeElement;
            this.onMenuItemSelect(menuItem, event, menuItemElement, 0);
        }
    };
    ContextMenuContentComponent.prototype.openSubMenu = function (menuItem, event, target, activeMenuItemIndex) {
        this._contextMenuService.triggerClose.next(this);
        if (!menuItem.subMenu) {
            return;
        }
        var rect = (target || event.target).getBoundingClientRect();
        var newEvent = Object.assign({}, event, { clientX: rect.right, clientY: rect.top, view: event.view });
        this._contextMenuService.show.next({
            contextMenu: menuItem.subMenu,
            item: this.item,
            event: newEvent,
            parentContextMenu: this,
            activeMenuItemIndex: activeMenuItemIndex,
        });
    };
    ContextMenuContentComponent.prototype.onMenuItemSelect = function (menuItem, event, target, activeMenuItemIndex) {
        event.preventDefault();
        event.stopPropagation();
        this.openSubMenu(menuItem, event, target);
        if (!menuItem.subMenu) {
            menuItem.triggerExecute(this.item, event);
        }
    };
    return ContextMenuContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Input */])(),
    __metadata("design:type", Array)
], ContextMenuContentComponent.prototype, "menuItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuContentComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuContentComponent.prototype, "event", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Input */])(),
    __metadata("design:type", ContextMenuContentComponent)
], ContextMenuContentComponent.prototype, "parentContextMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ContextMenuContentComponent.prototype, "activeMenuItemIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* ElementRef */]) === "function" && _a || Object)
], ContextMenuContentComponent.prototype, "menuElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChildren */])('li'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* QueryList */]) === "function" && _b || Object)
], ContextMenuContentComponent.prototype, "menuItemElements", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* HostListener */])('window:click'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* HostListener */])('window:contextmenu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContextMenuContentComponent.prototype, "clickedOutside", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* HostListener */])('window:scroll'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", void 0)
], ContextMenuContentComponent.prototype, "hideMenu", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* HostListener */])('window:keydown.ArrowDown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContextMenuContentComponent.prototype, "nextItem", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* HostListener */])('window:keydown.ArrowUp', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContextMenuContentComponent.prototype, "prevItem", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* HostListener */])('window:keydown.ArrowRight', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContextMenuContentComponent.prototype, "keyboardOpenSubMenu", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* HostListener */])('window:keydown.Enter', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* HostListener */])('window:keydown.Space', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContextMenuContentComponent.prototype, "keyboardMenuItemSelect", null);
ContextMenuContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* Component */])({
        selector: 'context-menu-content',
        styles: [
            ".passive {\n       display: block;\n       padding: 3px 20px;\n       clear: both;\n       font-weight: normal;\n       line-height: @line-height-base;\n       white-space: nowrap;\n     }",
            ".hasSubMenu:after {\n      content: \"\u25B6\";\n      float: right;\n    }",
        ],
        template: "<div class=\"dropdown ngx-contextmenu\" tabindex=\"0\">\n      <ul #menu [ngStyle]=\"locationCss\" class=\"dropdown-menu\" tabindex=\"0\">\n        <li #li *ngFor=\"let menuItem of menuItems; let i = index\" [class.disabled]=\"!isMenuItemEnabled(menuItem)\"\n            [class.divider]=\"menuItem.divider\" [class.dropdown-divider]=\"useBootstrap4 && menuItem.divider\"\n            [class.active]=\"i === activeMenuItemIndex && isMenuItemEnabled(menuItem)\"\n            [attr.role]=\"menuItem.divider ? 'separator' : undefined\">\n          <a *ngIf=\"!menuItem.divider && !menuItem.passive\" href [class.dropdown-item]=\"useBootstrap4\"\n            [class.active]=\"i === activeMenuItemIndex && isMenuItemEnabled(menuItem)\"\n            [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\" [class.hasSubMenu]=\"!!menuItem.subMenu\"\n            (click)=\"onMenuItemSelect(menuItem, $event)\" (mouseenter)=\"openSubMenu(menuItem, $event)\">\n            <ng-template [ngTemplateOutlet]=\"menuItem.template\" [ngOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </a>\n\n          <span (click)=\"stopEvent($event)\" (contextmenu)=\"stopEvent($event)\" class=\"passive\"\n                *ngIf=\"!menuItem.divider && menuItem.passive\" [class.dropdown-item]=\"useBootstrap4\"\n                [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\">\n            <ng-template [ngTemplateOutlet]=\"menuItem.template\" [ngOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </span>\n        </li>\n      </ul>\n    </div>\n  ",
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Optional */])()),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__contextMenu_options__["a" /* CONTEXT_MENU_OPTIONS */])),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__["a" /* ContextMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__["a" /* ContextMenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["p" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["p" /* ChangeDetectorRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__contextMenu_options__["IContextMenuOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__contextMenu_options__["IContextMenuOptions"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* Renderer */]) === "function" && _g || Object])
], ContextMenuContentComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=contextMenuContent.component.js.map

/***/ }),

/***/ "../../../../../src/lib/contextMenuInjector.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenuContent_component__ = __webpack_require__("../../../../../src/lib/contextMenuContent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__injection_injection_service__ = __webpack_require__("../../../../../src/lib/injection/injection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__injection_injection_registry_service__ = __webpack_require__("../../../../../src/lib/injection/injection-registry.service.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__injection_injection_service__["a" /* InjectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__injection_injection_service__["a" /* InjectionService */]) === "function" && _a || Object])
], ContextMenuInjectorService);

var _a;
//# sourceMappingURL=contextMenuInjector.service.js.map

/***/ }),

/***/ "../../../../../src/lib/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_contextmenu__ = __webpack_require__("../../../../../src/lib/ngx-contextmenu.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ngx_contextmenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextMenu_component__ = __webpack_require__("../../../../../src/lib/contextMenu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__contextMenu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__ = __webpack_require__("../../../../../src/lib/contextMenu.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contextMenu_options__ = __webpack_require__("../../../../../src/lib/contextMenu.options.ts");
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/lib/injection/injection-registry.service.ts":
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

/***/ "../../../../../src/lib/injection/injection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ApplicationRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */]) === "function" && _c || Object])
], InjectionService);

var _a, _b, _c;
//# sourceMappingURL=injection.service.js.map

/***/ }),

/***/ "../../../../../src/lib/ngx-contextmenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenuContent_component__ = __webpack_require__("../../../../../src/lib/contextMenuContent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__injection_injection_service__ = __webpack_require__("../../../../../src/lib/injection/injection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contextMenuInjector_service__ = __webpack_require__("../../../../../src/lib/contextMenuInjector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contextMenu_options__ = __webpack_require__("../../../../../src/lib/contextMenu.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contextMenu_component__ = __webpack_require__("../../../../../src/lib/contextMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contextMenu_item_directive__ = __webpack_require__("../../../../../src/lib/contextMenu.item.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contextMenu_service__ = __webpack_require__("../../../../../src/lib/contextMenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contextMenu_attach_directive__ = __webpack_require__("../../../../../src/lib/contextMenu.attach.directive.ts");
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

/* unused harmony default export */ var _unused_webpack_default_export = (ContextMenuModule);
var ContextMenuModule_1;
//# sourceMappingURL=ngx-contextmenu.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_app_module__ = __webpack_require__("../../../../../src/demo/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__demo_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map