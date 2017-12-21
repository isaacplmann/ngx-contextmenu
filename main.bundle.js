webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/demo/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Angular2 Context Menu Demo</h1>\n<div (click)=\"$event.preventDefault()\" style=\"margin:20px; padding:20px\">\n  <div style=\"position: relative\">\n    <div style=\"margin:20px; padding:20px;transform: translate3d(0px, 0px, 0px)\">\n      <div (click)=\"$event.preventDefault()\" style=\"transform: translate3d(10px, -10px, 0px)\">\n        <h3>Base Case</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"basicMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <a href (click)=\"disableBasicMenu = !disableBasicMenu\">{{ disableBasicMenu ? 'enable' : 'disable'}} basic menu</a>\n        <h3>Static</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"static\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #static (close)=\"showMessage('closed', $event)\" (open)=\"showMessage('open', $event)\">\n          <ng-template contextMenuItem [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, someone')\">\n            Say hi\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, someone')\">\n            This will never show...\n          </ng-template>\n          <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n          <ng-template contextMenuItem [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage('Someone said: something')\">\n            Bye, someone\n          </ng-template>\n        </context-menu>\n        <div style=\"height: 100px; border: solid 1px #ccc; overflow: auto;\" cdkScrollable>\n          <h3>Enabled and Visible</h3>\n          <ul>\n            <li *ngFor=\"let item of items\" [contextMenu]=\"enableAndVisible\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n          </ul>\n          <context-menu #enableAndVisible (close)=\"showMessage('closed', $event)\">\n            <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n              Say hi, {{item?.name}}! With access to the outside context: {{ outsideValue }}\n            </ng-template>\n            <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n              This will never show...\n            </ng-template>\n            <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n            <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n              Bye, {{item?.name}}\n            </ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n          </context-menu>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n        </div>\n        <h3>Enabled and Visible as Functions</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"withFunctions\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #withFunctions>\n          <ng-template contextMenuItem [enabled]=\"onlyJohn\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (enabled for John)\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"onlyJoe\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (visible for Joe)\n          </ng-template>\n          <ng-template contextMenuItem let-item (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n            Bye, {{item?.name}}\n          </ng-template>\n        </context-menu>\n      </div>\n    </div>\n  </div>\n</div>\n<div style=\"position:fixed;top:35px;height:100%;width:100%;display:table; border-collapse: collapse;border:none;outline:none; pointer-events: none\">\n  <div style=\"display: table-cell;width:200px;vertical-align: top\">\n    <div style=\"position:absolute; top: 20px;\">\n      <div style=\"position:fixed;top:200px;left:-200px\">\n        <context-menu #basicMenu [disabled]=\"disableBasicMenu\" style=\"pointer-events:all\">\n          <ng-template contextMenuItem [subMenu]=\"saySubMenu\">\n            Say...\n          </ng-template>\n          <context-menu #saySubMenu>\n            <ng-template contextMenuItem [subMenu]=\"sayHiSubMenu\">\n              ...hi!\n            </ng-template>\n            <context-menu #sayHiSubMenu>\n              <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n                ...hi!\n              </ng-template>\n              <ng-template contextMenuItem (execute)=\"showMessage('Hola, ' + $event.item.name)\">\n                ...hola!\n              </ng-template>\n              <ng-template contextMenuItem (execute)=\"showMessage('Salut, ' + $event.item.name)\">\n                ...salut!\n              </ng-template>\n            </context-menu>\n            <ng-template contextMenuItem (execute)=\"showMessage('Hola, ' + $event.item.name)\">\n              ...hola!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Salut, ' + $event.item.name)\">\n              ...salut!\n            </ng-template>\n          </context-menu>\n          <ng-template contextMenuItem let-item [subMenu]=\"byeSubMenu\">\n            Bye, {{item?.name}}\n          </ng-template>\n          <context-menu #byeSubMenu>\n            <ng-template contextMenuItem (execute)=\"showMessage('Bye, ' + $event.item.name)\">\n              ...bye!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Ciao, ' + $event.item.name)\">\n              ...ciao!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Au revoir, ' + $event.item.name)\">\n              ...au revoir!\n            </ng-template>\n          </context-menu>\n          <ng-template contextMenuItem (execute)=\"showMessage('Simple')\">\n            Simple\n          </ng-template>\n          <ng-template contextMenuItem passive=\"true\">\n            Input something:\n            <input type=\"text\">\n          </ng-template>\n        </context-menu>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"dashboardContainer\" style=\"pointer-events: none\">\n  <div class=\"componentsContainer\">\n    <div class=\"componentContainer\" *ngFor=\"let item of items\" style=\"pointer-events: all\" [ngStyle]=\"item.layout\" [contextMenu]=\"componentMenu\"\n      [contextMenuSubject]=\"item\">\n      {{ item.name }}\n    </div>\n    <context-menu #componentMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n        Say hi!\n      </ng-template>\n      <ng-template contextMenuItem let-item (execute)=\"showMessage($event.event)\">\n        Bye, {{item?.name}}\n      </ng-template>\n    </context-menu>\n  </div>\n</div>\n<ul>\n  <li *ngFor=\"let item of items\" [contextMenu]=\"itemContextMenu\" [contextMenuSubject]=\"item\">\n    {{item.name}}\n    <context-menu #itemContextMenu>\n      <ng-template *ngFor=\"let action of item.actions\" contextMenuItem let-item [visible]=\"action.visible\" [enabled]=\"action.enabled\"\n        [divider]=\"action.divider\" (execute)=\"action.execute($event.item)\">\n        {{ action.html(item) }}\n      </ng-template>\n      <ng-template contextMenuItem [subMenu]=\"someSubMenu\">\n        Submenu\n      </ng-template>\n      <context-menu #someSubMenu>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n      </context-menu>\n    </context-menu>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n"

/***/ }),

/***/ "../../../../../src/demo/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__("../../../../../src/lib/index.ts");
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
                    height: '90px',
                    left: '0px',
                    top: '0px',
                    width: '98px',
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
                    height: '90px',
                    left: '98px',
                    top: '0px',
                    width: '98px',
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('basicMenu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__lib__["a" /* ContextMenuComponent */])
    ], AppComponent.prototype, "basicMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('enableAndVisible'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__lib__["a" /* ContextMenuComponent */])
    ], AppComponent.prototype, "enableAndVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('withFunctions'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__lib__["a" /* ContextMenuComponent */])
    ], AppComponent.prototype, "withFunctions", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-context-menu-demo',
            styles: ["\n.dashboardContainer {\nwidth: 100%;\nheight: 100%;\nposition: fixed;\n}\n\n.componentsContainer {\nposition: fixed;\nbottom: 0;\ntop: 100px;\nwidth: 100%; }\n\n.componentContainer {\noverflow: auto;\nposition: absolute; }\n"],
            template: __webpack_require__("../../../../../src/demo/app.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__lib__["c" /* ContextMenuService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/demo/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__("../../../../../src/lib/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/demo/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__child1_component__ = __webpack_require__("../../../../../src/demo/child1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__child2_component__ = __webpack_require__("../../../../../src/demo/child2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__child1_component__["a" /* ChildOneComponent */], __WEBPACK_IMPORTED_MODULE_8__child2_component__["a" /* ChildTwoComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__lib__["b" /* ContextMenuModule */].forRoot({
                    autoFocus: true,
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
                    {
                        path: 'two',
                        component: __WEBPACK_IMPORTED_MODULE_8__child2_component__["a" /* ChildTwoComponent */],
                    },
                    {
                        path: '**',
                        component: __WEBPACK_IMPORTED_MODULE_7__child1_component__["a" /* ChildOneComponent */],
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_0__angular_cdk_scrolling__["a" /* ScrollDispatchModule */],
            ],
            providers: [],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/demo/child1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    ChildOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'child-one',
            template: "\n    <h3>Routing One</h3>\n    <ul>\n      <li *ngFor=\"let item of items\" [contextMenu]=\"routingMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n    </ul>\n    <context-menu #routingMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name); go($event.item)\">\n        Go!\n      </ng-template>\n    </context-menu>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], ChildOneComponent);
    return ChildOneComponent;
}());



/***/ }),

/***/ "../../../../../src/demo/child2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    ChildTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'child-two',
            template: "\n    <h3>Routing Two</h3>\n    <ul>\n      <li *ngFor=\"let item of items\" [contextMenu]=\"routingMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n    </ul>\n    <context-menu #routingMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name); go($event.item)\">\n        Go!\n      </ng-template>\n    </context-menu>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ChildTwoComponent);
    return ChildTwoComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/lib/contextMenu.attach.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__ = __webpack_require__("../../../../../src/lib/contextMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextMenu_service__ = __webpack_require__("../../../../../src/lib/contextMenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuAttachDirective.prototype, "contextMenuSubject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__contextMenu_component__["a" /* ContextMenuComponent */])
    ], ContextMenuAttachDirective.prototype, "contextMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["y" /* HostListener */])('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ContextMenuAttachDirective.prototype, "onContextMenu", null);
    ContextMenuAttachDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* Directive */])({
            selector: '[contextMenu]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contextMenu_service__["a" /* ContextMenuService */]])
    ], ContextMenuAttachDirective);
    return ContextMenuAttachDirective;
}());



/***/ }),

/***/ "../../../../../src/lib/contextMenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contextMenu_item_directive__ = __webpack_require__("../../../../../src/lib/contextMenu.item.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contextMenu_service__ = __webpack_require__("../../../../../src/lib/contextMenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contextMenu_tokens__ = __webpack_require__("../../../../../src/lib/contextMenu.tokens.ts");
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
    function ContextMenuComponent(_contextMenuService, changeDetector, elementRef, options) {
        var _this = this;
        this._contextMenuService = _contextMenuService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.disabled = false;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.visibleMenuItems = [];
        this.links = [];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
        this.subscription.add(_contextMenuService.show.subscribe(function (menuEvent) { return _this.onMenuEvent(menuEvent); }));
        this.subscription.add(_contextMenuService.close.subscribe(function (event) { return _this.close.emit(event); }));
    }
    ContextMenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ContextMenuComponent.prototype.onMenuEvent = function (menuEvent) {
        if (this.disabled) {
            return;
        }
        var contextMenu = menuEvent.contextMenu, event = menuEvent.event, item = menuEvent.item;
        if (contextMenu && contextMenu !== this) {
            return;
        }
        this.event = event;
        this.item = item;
        this.setVisibleMenuItems();
        this._contextMenuService.openContextMenu(__assign({}, menuEvent, { menuItems: this.visibleMenuItems }));
        this.open.next(menuEvent);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuComponent.prototype, "autoFocus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuComponent.prototype, "useBootstrap4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ContextMenuComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ContextMenuComponent.prototype, "open", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__contextMenu_item_directive__["a" /* ContextMenuItemDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], ContextMenuComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('menu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ContextMenuComponent.prototype, "menuElement", void 0);
    ContextMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
            selector: 'context-menu',
            styles: ["\n    .cdk-overlay-container {\n      position: fixed;\n      z-index: 1000;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .ngx-contextmenu.cdk-overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      box-sizing: border-box;\n    }\n  "],
            template: " ",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__contextMenu_tokens__["a" /* CONTEXT_MENU_OPTIONS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__contextMenu_service__["a" /* ContextMenuService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], Object])
    ], ContextMenuComponent);
    return ContextMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/contextMenu.item.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuItemDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        this.execute = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isActive = false;
    }
    Object.defineProperty(ContextMenuItemDirective.prototype, "disabled", {
        get: function () {
            return this.passive ||
                this.divider ||
                !this.evaluateIfFunction(this.enabled, this.currentItem);
        },
        enumerable: true,
        configurable: true
    });
    ContextMenuItemDirective.prototype.evaluateIfFunction = function (value, item) {
        if (value instanceof Function) {
            return value(item);
        }
        return value;
    };
    ContextMenuItemDirective.prototype.setActiveStyles = function () {
        this.isActive = true;
    };
    ContextMenuItemDirective.prototype.setInactiveStyles = function () {
        this.isActive = false;
    };
    ContextMenuItemDirective.prototype.triggerExecute = function (item, $event) {
        if (!this.evaluateIfFunction(this.enabled, item)) {
            return;
        }
        this.execute.emit({ event: $event, item: item });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuItemDirective.prototype, "subMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuItemDirective.prototype, "divider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuItemDirective.prototype, "enabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuItemDirective.prototype, "passive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuItemDirective.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ContextMenuItemDirective.prototype, "execute", void 0);
    ContextMenuItemDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            /* tslint:disable:directive-selector-type */
            selector: '[contextMenuItem]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ContextMenuItemDirective);
    return ContextMenuItemDirective;
}());



/***/ }),

/***/ "../../../../../src/lib/contextMenu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contextMenuContent_component__ = __webpack_require__("../../../../../src/lib/contextMenuContent.component.ts");
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
    function ContextMenuService(overlay, scrollStrategy) {
        this.overlay = overlay;
        this.scrollStrategy = scrollStrategy;
        this.isDestroyingLeafMenu = false;
        this.show = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.triggerClose = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.overlays = [];
        this.fakeElement = {
            getBoundingClientRect: function () { return ({
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0,
            }); }
        };
    }
    ContextMenuService.prototype.openContextMenu = function (context) {
        var anchorElement = context.anchorElement, event = context.event, parentContextMenu = context.parentContextMenu;
        if (!parentContextMenu) {
            this.fakeElement.getBoundingClientRect = function () { return ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }); };
            this.closeAllContextMenus();
            var positionStrategy = this.overlay.position().connectedTo({ nativeElement: anchorElement || this.fakeElement }, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
                .withFallbackPosition({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' });
            this.overlays = [this.overlay.create({
                    positionStrategy: positionStrategy,
                    panelClass: 'ngx-contextmenu',
                    scrollStrategy: this.scrollStrategy.close(),
                })];
            this.attachContextMenu(this.overlays[0], context);
        }
        else {
            var positionStrategy = this.overlay.position().connectedTo({ nativeElement: event ? event.target : anchorElement }, { originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' });
            var newOverlay = this.overlay.create({
                positionStrategy: positionStrategy,
                panelClass: 'ngx-contextmenu',
                scrollStrategy: this.scrollStrategy.close(),
            });
            this.destroySubMenus(parentContextMenu);
            this.overlays = this.overlays.concat(newOverlay);
            this.attachContextMenu(newOverlay, context);
        }
    };
    ContextMenuService.prototype.attachContextMenu = function (overlay, context) {
        var _this = this;
        var event = context.event, item = context.item, menuItems = context.menuItems;
        var contextMenuContent = overlay.attach(new __WEBPACK_IMPORTED_MODULE_1__angular_cdk_portal__["a" /* ComponentPortal */](__WEBPACK_IMPORTED_MODULE_5__contextMenuContent_component__["a" /* ContextMenuContentComponent */]));
        contextMenuContent.instance.event = event;
        contextMenuContent.instance.item = item;
        contextMenuContent.instance.menuItems = menuItems;
        contextMenuContent.instance.overlay = overlay;
        contextMenuContent.instance.isLeaf = true;
        overlay.contextMenu = contextMenuContent.instance;
        var subscriptions = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["a" /* Subscription */]();
        subscriptions.add(contextMenuContent.instance.execute.asObservable()
            .subscribe(function () { return _this.closeAllContextMenus(); }));
        subscriptions.add(contextMenuContent.instance.closeAllMenus.asObservable()
            .subscribe(function () { return _this.closeAllContextMenus(); }));
        subscriptions.add(contextMenuContent.instance.closeLeafMenu.asObservable()
            .subscribe(function (closeLeafMenuEvent) { return _this.destroyLeafMenu(closeLeafMenuEvent); }));
        subscriptions.add(contextMenuContent.instance.openSubMenu.asObservable()
            .subscribe(function (subMenuEvent) {
            _this.destroySubMenus(contextMenuContent.instance);
            if (!subMenuEvent.contextMenu) {
                contextMenuContent.instance.isLeaf = true;
                return;
            }
            contextMenuContent.instance.isLeaf = false;
            _this.show.next(subMenuEvent);
        }));
        contextMenuContent.onDestroy(function () {
            menuItems.forEach(function (menuItem) { return menuItem.isActive = false; });
            subscriptions.unsubscribe();
        });
    };
    ContextMenuService.prototype.closeAllContextMenus = function () {
        if (this.overlays) {
            this.overlays.forEach(function (overlay, index) {
                overlay.detach();
                overlay.dispose();
            });
        }
        this.overlays = [];
    };
    ContextMenuService.prototype.getLastAttachedOverlay = function () {
        var overlay = this.overlays[this.overlays.length - 1];
        while (this.overlays.length > 1 && overlay && !overlay.hasAttached()) {
            overlay.detach();
            overlay.dispose();
            this.overlays = this.overlays.slice(0, -1);
            overlay = this.overlays[this.overlays.length - 1];
        }
        return overlay;
    };
    ContextMenuService.prototype.destroyLeafMenu = function (_a) {
        var _this = this;
        var exceptRootMenu = (_a === void 0 ? {} : _a).exceptRootMenu;
        if (this.isDestroyingLeafMenu) {
            return;
        }
        this.isDestroyingLeafMenu = true;
        setTimeout(function () {
            var overlay = _this.getLastAttachedOverlay();
            if (_this.overlays.length > (exceptRootMenu ? 1 : 0) && overlay) {
                overlay.detach();
                overlay.dispose();
            }
            var newLeaf = _this.getLastAttachedOverlay();
            if (newLeaf) {
                newLeaf.contextMenu.isLeaf = true;
            }
            _this.isDestroyingLeafMenu = false;
        });
    };
    ContextMenuService.prototype.destroySubMenus = function (contextMenu) {
        var overlay = contextMenu.overlay;
        var index = this.overlays.indexOf(overlay);
        this.overlays.slice(index + 1).forEach(function (subMenuOverlay) {
            subMenuOverlay.detach();
            subMenuOverlay.dispose();
        });
    };
    ContextMenuService.prototype.isLeafMenu = function (contextMenuContent) {
        var overlay = this.getLastAttachedOverlay();
        return contextMenuContent.overlay === overlay;
    };
    ContextMenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_cdk_overlay__["a" /* Overlay */],
            __WEBPACK_IMPORTED_MODULE_0__angular_cdk_overlay__["d" /* ScrollStrategyOptions */]])
    ], ContextMenuService);
    return ContextMenuService;
}());



/***/ }),

/***/ "../../../../../src/lib/contextMenu.tokens.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTEXT_MENU_OPTIONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var CONTEXT_MENU_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('CONTEXT_MENU_OPTIONS');


/***/ }),

/***/ "../../../../../src/lib/contextMenuContent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contextMenu_tokens__ = __webpack_require__("../../../../../src/lib/contextMenu.tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
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






var ARROW_LEFT_KEYCODE = 37;
var ContextMenuContentComponent = (function () {
    function ContextMenuContentComponent(changeDetector, elementRef, options, renderer) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.renderer = renderer;
        this.menuItems = [];
        this.isLeaf = false;
        this.execute = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.openSubMenu = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.closeLeafMenu = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.closeAllMenus = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.subscription = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["a" /* Subscription */]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
    }
    ContextMenuContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems.forEach(function (menuItem) {
            menuItem.currentItem = _this.item;
            _this.subscription.add(menuItem.execute.subscribe(function (event) { return _this.execute.emit(__assign({}, event, { menuItem: menuItem })); }));
        });
        var queryList = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* QueryList */]();
        queryList.reset(this.menuItems);
        this._keyManager = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["a" /* ActiveDescendantKeyManager */](queryList).withWrap();
    };
    ContextMenuContentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.autoFocus) {
            setTimeout(function () { return _this.focus(); });
        }
        this.overlay.updatePosition();
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
    ContextMenuContentComponent.prototype.onKeyEvent = function (event) {
        if (!this.isLeaf) {
            return;
        }
        this._keyManager.onKeydown(event);
    };
    ContextMenuContentComponent.prototype.keyboardOpenSubMenu = function (event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        var menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onOpenSubMenu(menuItem);
        }
    };
    ContextMenuContentComponent.prototype.keyboardMenuItemSelect = function (event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        var menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onMenuItemSelect(menuItem, event);
        }
    };
    ContextMenuContentComponent.prototype.onCloseLeafMenu = function (event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        this.closeLeafMenu.emit({ exceptRootMenu: event.keyCode === ARROW_LEFT_KEYCODE });
    };
    ContextMenuContentComponent.prototype.closeMenu = function (event) {
        if (event.type === 'click' && event.button === 2) {
            return;
        }
        this.closeAllMenus.emit();
    };
    ContextMenuContentComponent.prototype.onOpenSubMenu = function (menuItem, event) {
        var anchorElementRef = this.menuItemElements.toArray()[this._keyManager.activeItemIndex];
        var anchorElement = anchorElementRef && anchorElementRef.nativeElement;
        this.openSubMenu.emit({
            anchorElement: anchorElement,
            contextMenu: menuItem.subMenu,
            event: event,
            item: this.item,
            parentContextMenu: this,
        });
    };
    ContextMenuContentComponent.prototype.onMenuItemSelect = function (menuItem, event) {
        event.preventDefault();
        event.stopPropagation();
        this.onOpenSubMenu(menuItem, event);
        if (!menuItem.subMenu) {
            menuItem.triggerExecute(this.item, event);
        }
    };
    ContextMenuContentComponent.prototype.cancelEvent = function (event) {
        if (!event) {
            return;
        }
        var target = event.target;
        if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) > -1 || target.isContentEditable) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ContextMenuContentComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuContentComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", MouseEvent)
    ], ContextMenuContentComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", ContextMenuContentComponent)
    ], ContextMenuContentComponent.prototype, "parentContextMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_cdk_overlay__["c" /* OverlayRef */])
    ], ContextMenuContentComponent.prototype, "overlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContextMenuContentComponent.prototype, "isLeaf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */])
    ], ContextMenuContentComponent.prototype, "execute", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */])
    ], ContextMenuContentComponent.prototype, "openSubMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */])
    ], ContextMenuContentComponent.prototype, "closeLeafMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */])
    ], ContextMenuContentComponent.prototype, "closeAllMenus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('menu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], ContextMenuContentComponent.prototype, "menuElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChildren */])('li'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* QueryList */])
    ], ContextMenuContentComponent.prototype, "menuItemElements", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostListener */])('window:keydown.ArrowDown', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostListener */])('window:keydown.ArrowUp', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ContextMenuContentComponent.prototype, "onKeyEvent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostListener */])('window:keydown.ArrowRight', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ContextMenuContentComponent.prototype, "keyboardOpenSubMenu", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostListener */])('window:keydown.Enter', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostListener */])('window:keydown.Space', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ContextMenuContentComponent.prototype, "keyboardMenuItemSelect", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostListener */])('window:keydown.Escape', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostListener */])('window:keydown.ArrowLeft', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ContextMenuContentComponent.prototype, "onCloseLeafMenu", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostListener */])('document:click', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostListener */])('document:contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ContextMenuContentComponent.prototype, "closeMenu", null);
    ContextMenuContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'context-menu-content',
            styles: [
                ".passive {\n       display: block;\n       padding: 3px 20px;\n       clear: both;\n       font-weight: normal;\n       line-height: @line-height-base;\n       white-space: nowrap;\n     }\n    .hasSubMenu:before {\n      content: \"\u25B6\";\n      float: right;\n    }",
            ],
            template: "<div class=\"dropdown open show ngx-contextmenu\" tabindex=\"0\">\n      <ul #menu class=\"dropdown-menu show\" style=\"position: static; float: none;\" tabindex=\"0\">\n        <li #li *ngFor=\"let menuItem of menuItems; let i = index\" [class.disabled]=\"!isMenuItemEnabled(menuItem)\"\n            [class.divider]=\"menuItem.divider\" [class.dropdown-divider]=\"useBootstrap4 && menuItem.divider\"\n            [class.active]=\"menuItem.isActive && isMenuItemEnabled(menuItem)\"\n            [attr.role]=\"menuItem.divider ? 'separator' : undefined\">\n          <a *ngIf=\"!menuItem.divider && !menuItem.passive\" href [class.dropdown-item]=\"useBootstrap4\"\n            [class.active]=\"menuItem.isActive && isMenuItemEnabled(menuItem)\"\n            [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\" [class.hasSubMenu]=\"!!menuItem.subMenu\"\n            (click)=\"onMenuItemSelect(menuItem, $event)\" (mouseenter)=\"onOpenSubMenu(menuItem, $event)\">\n            <ng-template [ngTemplateOutlet]=\"menuItem.template\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </a>\n\n          <span (click)=\"stopEvent($event)\" (contextmenu)=\"stopEvent($event)\" class=\"passive\"\n                *ngIf=\"!menuItem.divider && menuItem.passive\" [class.dropdown-item]=\"useBootstrap4\"\n                [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\">\n            <ng-template [ngTemplateOutlet]=\"menuItem.template\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </span>\n        </li>\n      </ul>\n    </div>\n  ",
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Optional */])()),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__contextMenu_tokens__["a" /* CONTEXT_MENU_OPTIONS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_core__["V" /* Renderer */]])
    ], ContextMenuContentComponent);
    return ContextMenuContentComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_contextmenu__ = __webpack_require__("../../../../../src/lib/ngx-contextmenu.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ngx_contextmenu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextMenu_component__ = __webpack_require__("../../../../../src/lib/contextMenu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__contextMenu_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__ = __webpack_require__("../../../../../src/lib/contextMenu.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__contextMenu_service__["a"]; });





/***/ }),

/***/ "../../../../../src/lib/ngx-contextmenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contextMenu_attach_directive__ = __webpack_require__("../../../../../src/lib/contextMenu.attach.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contextMenu_component__ = __webpack_require__("../../../../../src/lib/contextMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contextMenu_item_directive__ = __webpack_require__("../../../../../src/lib/contextMenu.item.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contextMenu_service__ = __webpack_require__("../../../../../src/lib/contextMenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contextMenu_tokens__ = __webpack_require__("../../../../../src/lib/contextMenu.tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contextMenuContent_component__ = __webpack_require__("../../../../../src/lib/contextMenuContent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ContextMenuModule = (function () {
    function ContextMenuModule() {
    }
    ContextMenuModule_1 = ContextMenuModule;
    ContextMenuModule.forRoot = function (options) {
        return {
            ngModule: ContextMenuModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__contextMenu_service__["a" /* ContextMenuService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__contextMenu_tokens__["a" /* CONTEXT_MENU_OPTIONS */],
                    useValue: options,
                },
            ],
        };
    };
    ContextMenuModule = ContextMenuModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__contextMenu_attach_directive__["a" /* ContextMenuAttachDirective */],
                __WEBPACK_IMPORTED_MODULE_4__contextMenu_component__["a" /* ContextMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contextMenuContent_component__["a" /* ContextMenuContentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contextMenu_item_directive__["a" /* ContextMenuItemDirective */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__contextMenuContent_component__["a" /* ContextMenuContentComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__contextMenu_attach_directive__["a" /* ContextMenuAttachDirective */],
                __WEBPACK_IMPORTED_MODULE_4__contextMenu_component__["a" /* ContextMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contextMenu_item_directive__["a" /* ContextMenuItemDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_cdk_overlay__["b" /* OverlayModule */],
            ],
        })
    ], ContextMenuModule);
    return ContextMenuModule;
    var ContextMenuModule_1;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_app_module__ = __webpack_require__("../../../../../src/demo/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__demo_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map