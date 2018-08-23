(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-contextmenu/fesm5/ngx-contextmenu.js":
/*!*******************************************************!*\
  !*** ./dist/ngx-contextmenu/fesm5/ngx-contextmenu.js ***!
  \*******************************************************/
/*! exports provided: ContextMenuModule, ContextMenuComponent, ContextMenuService, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuModule", function() { return ContextMenuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuService", function() { return ContextMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ContextMenuAttachDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ContextMenuItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CONTEXT_MENU_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ContextMenuContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextMenuItemDirective = /** @class */ (function () {
    function ContextMenuItemDirective(template, elementRef) {
        this.template = template;
        this.elementRef = elementRef;
        this.divider = false;
        this.enabled = true;
        this.passive = false;
        this.visible = true;
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isActive = false;
    }
    Object.defineProperty(ContextMenuItemDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.passive ||
                this.divider ||
                !this.evaluateIfFunction(this.enabled, this.currentItem);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    ContextMenuItemDirective.prototype.evaluateIfFunction = /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    function (value, item) {
        if (value instanceof Function) {
            return value(item);
        }
        return value;
    };
    /**
     * @return {?}
     */
    ContextMenuItemDirective.prototype.setActiveStyles = /**
     * @return {?}
     */
    function () {
        this.isActive = true;
    };
    /**
     * @return {?}
     */
    ContextMenuItemDirective.prototype.setInactiveStyles = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
    };
    /**
     * @param {?} item
     * @param {?=} $event
     * @return {?}
     */
    ContextMenuItemDirective.prototype.triggerExecute = /**
     * @param {?} item
     * @param {?=} $event
     * @return {?}
     */
    function (item, $event) {
        if (!this.evaluateIfFunction(this.enabled, item)) {
            return;
        }
        this.execute.emit({ event: $event, item: item });
    };
    ContextMenuItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    /* tslint:disable:directive-selector-type */
                    selector: '[contextMenuItem]',
                },] },
    ];
    /** @nocollapse */
    ContextMenuItemDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ContextMenuItemDirective.propDecorators = {
        subMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        divider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        passive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ContextMenuItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CONTEXT_MENU_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CONTEXT_MENU_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ARROW_LEFT_KEYCODE = 37;
var ContextMenuContentComponent = /** @class */ (function () {
    function ContextMenuContentComponent(changeDetector, elementRef, options, renderer) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.renderer = renderer;
        this.menuItems = [];
        this.isLeaf = false;
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeLeafMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeAllMenus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
    }
    /**
     * @return {?}
     */
    ContextMenuContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.menuItems.forEach(function (menuItem) {
            menuItem.currentItem = _this.item;
            _this.subscription.add(menuItem.execute.subscribe(function (event) { return _this.execute.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, event, { menuItem: menuItem })); }));
        });
        var /** @type {?} */ queryList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
        queryList.reset(this.menuItems);
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["ActiveDescendantKeyManager"](queryList).withWrap();
    };
    /**
     * @return {?}
     */
    ContextMenuContentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoFocus) {
            setTimeout(function () { return _this.focus(); });
        }
        this.overlay.updatePosition();
    };
    /**
     * @return {?}
     */
    ContextMenuContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    ContextMenuContentComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.autoFocus) {
            this.menuElement.nativeElement.focus();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.stopEvent = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
    };
    /**
     * @param {?} menuItem
     * @return {?}
     */
    ContextMenuContentComponent.prototype.isMenuItemEnabled = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.enabled);
    };
    /**
     * @param {?} menuItem
     * @return {?}
     */
    ContextMenuContentComponent.prototype.isMenuItemVisible = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.visible);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ContextMenuContentComponent.prototype.evaluateIfFunction = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    };
    /**
     * @param {?} link
     * @return {?}
     */
    ContextMenuContentComponent.prototype.isDisabled = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        return link.enabled && !link.enabled(this.item);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.onKeyEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isLeaf) {
            return;
        }
        this._keyManager.onKeydown(event);
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.keyboardOpenSubMenu = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        var /** @type {?} */ menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onOpenSubMenu(menuItem);
        }
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.keyboardMenuItemSelect = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        var /** @type {?} */ menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onMenuItemSelect(menuItem, event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.onCloseLeafMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        this.closeLeafMenu.emit({ exceptRootMenu: event.keyCode === ARROW_LEFT_KEYCODE, event: event });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.closeMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.type === 'click' && event.button === 2) {
            return;
        }
        this.closeAllMenus.emit({ event: event });
    };
    /**
     * @param {?} menuItem
     * @param {?=} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.onOpenSubMenu = /**
     * @param {?} menuItem
     * @param {?=} event
     * @return {?}
     */
    function (menuItem, event) {
        var /** @type {?} */ anchorElementRef = this.menuItemElements.toArray()[this._keyManager.activeItemIndex];
        var /** @type {?} */ anchorElement = anchorElementRef && anchorElementRef.nativeElement;
        this.openSubMenu.emit({
            anchorElement: anchorElement,
            contextMenu: menuItem.subMenu,
            event: event,
            item: this.item,
            parentContextMenu: this,
        });
    };
    /**
     * @param {?} menuItem
     * @param {?} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.onMenuItemSelect = /**
     * @param {?} menuItem
     * @param {?} event
     * @return {?}
     */
    function (menuItem, event) {
        event.preventDefault();
        event.stopPropagation();
        this.onOpenSubMenu(menuItem, event);
        if (!menuItem.subMenu) {
            menuItem.triggerExecute(this.item, event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.cancelEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!event) {
            return;
        }
        var /** @type {?} */ target = event.target;
        if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) > -1 || target.isContentEditable) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
    };
    ContextMenuContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'context-menu-content',
                    styles: [
                        ".passive {\n       display: block;\n       padding: 3px 20px;\n       clear: both;\n       font-weight: normal;\n       line-height: @line-height-base;\n       white-space: nowrap;\n     }\n    .hasSubMenu:before {\n      content: \"\u25B6\";\n      float: right;\n    }",
                    ],
                    template: "<div class=\"dropdown open show ngx-contextmenu\" [ngClass]=\"menuClass\" tabindex=\"0\">\n      <ul #menu class=\"dropdown-menu show\" style=\"position: static; float: none;\" tabindex=\"0\">\n        <li #li *ngFor=\"let menuItem of menuItems; let i = index\" [class.disabled]=\"!isMenuItemEnabled(menuItem)\"\n            [class.divider]=\"menuItem.divider\" [class.dropdown-divider]=\"useBootstrap4 && menuItem.divider\"\n            [class.active]=\"menuItem.isActive && isMenuItemEnabled(menuItem)\"\n            [attr.role]=\"menuItem.divider ? 'separator' : undefined\">\n          <a *ngIf=\"!menuItem.divider && !menuItem.passive\" href [class.dropdown-item]=\"useBootstrap4\"\n            [class.active]=\"menuItem.isActive && isMenuItemEnabled(menuItem)\"\n            [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\" [class.hasSubMenu]=\"!!menuItem.subMenu\"\n            (click)=\"onMenuItemSelect(menuItem, $event)\" (mouseenter)=\"onOpenSubMenu(menuItem, $event)\">\n            <ng-template [ngTemplateOutlet]=\"menuItem.template\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </a>\n\n          <span (click)=\"stopEvent($event)\" (contextmenu)=\"stopEvent($event)\" class=\"passive\"\n                *ngIf=\"!menuItem.divider && menuItem.passive\" [class.dropdown-item]=\"useBootstrap4\"\n                [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\">\n            <ng-template [ngTemplateOutlet]=\"menuItem.template\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </span>\n        </li>\n      </ul>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    ContextMenuContentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CONTEXT_MENU_OPTIONS,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"] }
    ]; };
    ContextMenuContentComponent.propDecorators = {
        menuItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        parentContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isLeaf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        openSubMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closeLeafMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closeAllMenus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        menuElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['menu',] }],
        menuItemElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: ['li',] }],
        onKeyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.ArrowDown', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.ArrowUp', ['$event'],] }],
        keyboardOpenSubMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.ArrowRight', ['$event'],] }],
        keyboardMenuItemSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.Enter', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.Space', ['$event'],] }],
        onCloseLeafMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.Escape', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.ArrowLeft', ['$event'],] }],
        closeMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:contextmenu', ['$event'],] }]
    };
    return ContextMenuContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextMenuService = /** @class */ (function () {
    function ContextMenuService(overlay, scrollStrategy) {
        this.overlay = overlay;
        this.scrollStrategy = scrollStrategy;
        this.isDestroyingLeafMenu = false;
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.triggerClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.close = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
    /**
     * @param {?} context
     * @return {?}
     */
    ContextMenuService.prototype.openContextMenu = /**
     * @param {?} context
     * @return {?}
     */
    function (context) {
        var anchorElement = context.anchorElement, event = context.event, parentContextMenu = context.parentContextMenu;
        if (!parentContextMenu) {
            var /** @type {?} */ mouseEvent_1 = /** @type {?} */ (event);
            this.fakeElement.getBoundingClientRect = function () { return ({
                bottom: mouseEvent_1.clientY,
                height: 0,
                left: mouseEvent_1.clientX,
                right: mouseEvent_1.clientX,
                top: mouseEvent_1.clientY,
                width: 0,
            }); };
            this.closeAllContextMenus({ eventType: 'cancel', event: event });
            var /** @type {?} */ positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](anchorElement || this.fakeElement), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
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
            var /** @type {?} */ positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](event ? event.target : anchorElement), { originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' });
            var /** @type {?} */ newOverlay = this.overlay.create({
                positionStrategy: positionStrategy,
                panelClass: 'ngx-contextmenu',
                scrollStrategy: this.scrollStrategy.close(),
            });
            this.destroySubMenus(parentContextMenu);
            this.overlays = this.overlays.concat(newOverlay);
            this.attachContextMenu(newOverlay, context);
        }
    };
    /**
     * @param {?} overlay
     * @param {?} context
     * @return {?}
     */
    ContextMenuService.prototype.attachContextMenu = /**
     * @param {?} overlay
     * @param {?} context
     * @return {?}
     */
    function (overlay, context) {
        var _this = this;
        var event = context.event, item = context.item, menuItems = context.menuItems, menuClass = context.menuClass;
        var /** @type {?} */ contextMenuContent = overlay.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["ComponentPortal"](ContextMenuContentComponent));
        contextMenuContent.instance.event = event;
        contextMenuContent.instance.item = item;
        contextMenuContent.instance.menuItems = menuItems;
        contextMenuContent.instance.overlay = overlay;
        contextMenuContent.instance.isLeaf = true;
        contextMenuContent.instance.menuClass = menuClass;
        (/** @type {?} */ (overlay)).contextMenu = contextMenuContent.instance;
        var /** @type {?} */ subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        subscriptions.add(contextMenuContent.instance.execute.asObservable()
            .subscribe(function (executeEvent) { return _this.closeAllContextMenus(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ eventType: 'execute' }, executeEvent)); }));
        subscriptions.add(contextMenuContent.instance.closeAllMenus.asObservable()
            .subscribe(function (closeAllEvent) { return _this.closeAllContextMenus(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ eventType: 'cancel' }, closeAllEvent)); }));
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
        contextMenuContent.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} closeEvent
     * @return {?}
     */
    ContextMenuService.prototype.closeAllContextMenus = /**
     * @param {?} closeEvent
     * @return {?}
     */
    function (closeEvent) {
        if (this.overlays) {
            this.close.next(closeEvent);
            this.overlays.forEach(function (overlay, index) {
                overlay.detach();
                overlay.dispose();
            });
        }
        this.overlays = [];
    };
    /**
     * @return {?}
     */
    ContextMenuService.prototype.getLastAttachedOverlay = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ overlay = this.overlays[this.overlays.length - 1];
        while (this.overlays.length > 1 && overlay && !overlay.hasAttached()) {
            overlay.detach();
            overlay.dispose();
            this.overlays = this.overlays.slice(0, -1);
            overlay = this.overlays[this.overlays.length - 1];
        }
        return overlay;
    };
    /**
     * @param {?=} __0
     * @return {?}
     */
    ContextMenuService.prototype.destroyLeafMenu = /**
     * @param {?=} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, exceptRootMenu = _b.exceptRootMenu, event = _b.event;
        if (this.isDestroyingLeafMenu) {
            return;
        }
        this.isDestroyingLeafMenu = true;
        setTimeout(function () {
            var /** @type {?} */ overlay = _this.getLastAttachedOverlay();
            if (_this.overlays.length > 1 && overlay) {
                overlay.detach();
                overlay.dispose();
            }
            if (!exceptRootMenu && _this.overlays.length > 0 && overlay) {
                _this.close.next({ eventType: 'cancel', event: event });
                overlay.detach();
                overlay.dispose();
            }
            var /** @type {?} */ newLeaf = _this.getLastAttachedOverlay();
            if (newLeaf) {
                newLeaf.contextMenu.isLeaf = true;
            }
            _this.isDestroyingLeafMenu = false;
        });
    };
    /**
     * @param {?} contextMenu
     * @return {?}
     */
    ContextMenuService.prototype.destroySubMenus = /**
     * @param {?} contextMenu
     * @return {?}
     */
    function (contextMenu) {
        var /** @type {?} */ overlay = contextMenu.overlay;
        var /** @type {?} */ index = this.overlays.indexOf(overlay);
        this.overlays.slice(index + 1).forEach(function (subMenuOverlay) {
            subMenuOverlay.detach();
            subMenuOverlay.dispose();
        });
    };
    /**
     * @param {?} contextMenuContent
     * @return {?}
     */
    ContextMenuService.prototype.isLeafMenu = /**
     * @param {?} contextMenuContent
     * @return {?}
     */
    function (contextMenuContent) {
        var /** @type {?} */ overlay = this.getLastAttachedOverlay();
        return contextMenuContent.overlay === overlay;
    };
    ContextMenuService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ContextMenuService.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ScrollStrategyOptions"] }
    ]; };
    return ContextMenuService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent(_contextMenuService, changeDetector, elementRef, options) {
        var _this = this;
        this._contextMenuService = _contextMenuService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.menuClass = "";
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.disabled = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibleMenuItems = [];
        this.links = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
        this.subscription.add(_contextMenuService.show.subscribe(function (menuEvent) {
            _this.onMenuEvent(menuEvent);
        }));
    }
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} menuEvent
     * @return {?}
     */
    ContextMenuComponent.prototype.onMenuEvent = /**
     * @param {?} menuEvent
     * @return {?}
     */
    function (menuEvent) {
        var _this = this;
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
        this._contextMenuService.openContextMenu(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, menuEvent, { menuItems: this.visibleMenuItems, menuClass: this.menuClass }));
        this._contextMenuService.close.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (closeEvent) { return _this.close.emit(closeEvent); });
        this.open.next(menuEvent);
    };
    /**
     * @param {?} menuItem
     * @return {?}
     */
    ContextMenuComponent.prototype.isMenuItemVisible = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        return this.evaluateIfFunction(menuItem.visible);
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.setVisibleMenuItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.visibleMenuItems = this.menuItems.filter(function (menuItem) { return _this.isMenuItemVisible(menuItem); });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ContextMenuComponent.prototype.evaluateIfFunction = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    };
    ContextMenuComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    selector: 'context-menu',
                    styles: ["\n    .cdk-overlay-container {\n      position: fixed;\n      z-index: 1000;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .ngx-contextmenu.cdk-overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      box-sizing: border-box;\n    }\n  "],
                    template: " ",
                },] },
    ];
    /** @nocollapse */
    ContextMenuComponent.ctorParameters = function () { return [
        { type: ContextMenuService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CONTEXT_MENU_OPTIONS,] }] }
    ]; };
    ContextMenuComponent.propDecorators = {
        menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        useBootstrap4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        menuItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [ContextMenuItemDirective,] }],
        menuElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['menu',] }]
    };
    return ContextMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextMenuAttachDirective = /** @class */ (function () {
    function ContextMenuAttachDirective(contextMenuService) {
        this.contextMenuService = contextMenuService;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ContextMenuAttachDirective.prototype.onContextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.contextMenu.disabled) {
            this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event: event,
                item: this.contextMenuSubject,
            });
            event.preventDefault();
            event.stopPropagation();
        }
    };
    ContextMenuAttachDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[contextMenu]',
                },] },
    ];
    /** @nocollapse */
    ContextMenuAttachDirective.ctorParameters = function () { return [
        { type: ContextMenuService }
    ]; };
    ContextMenuAttachDirective.propDecorators = {
        contextMenuSubject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        contextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
    };
    return ContextMenuAttachDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextMenuModule = /** @class */ (function () {
    function ContextMenuModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    ContextMenuModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: ContextMenuModule,
            providers: [
                ContextMenuService,
                {
                    provide: CONTEXT_MENU_OPTIONS,
                    useValue: options,
                },
            ],
        };
    };
    ContextMenuModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        ContextMenuAttachDirective,
                        ContextMenuComponent,
                        ContextMenuContentComponent,
                        ContextMenuItemDirective,
                    ],
                    entryComponents: [
                        ContextMenuContentComponent,
                    ],
                    exports: [
                        ContextMenuAttachDirective,
                        ContextMenuComponent,
                        ContextMenuItemDirective,
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    ],
                },] },
    ];
    return ContextMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbnRleHRtZW51LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtY29udGV4dG1lbnUvbGliL2NvbnRleHRNZW51Lml0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtY29udGV4dG1lbnUvbGliL2NvbnRleHRNZW51LnRva2Vucy50cyIsIm5nOi8vbmd4LWNvbnRleHRtZW51L2xpYi9jb250ZXh0TWVudUNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtY29udGV4dG1lbnUvbGliL2NvbnRleHRNZW51LnNlcnZpY2UudHMiLCJuZzovL25neC1jb250ZXh0bWVudS9saWIvY29udGV4dE1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtY29udGV4dG1lbnUvbGliL2NvbnRleHRNZW51LmF0dGFjaC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1jb250ZXh0bWVudS9saWIvbmd4LWNvbnRleHRtZW51LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpZ2hsaWdodGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3Rvci10eXBlICovXG4gIHNlbGVjdG9yOiAnW2NvbnRleHRNZW51SXRlbV0nLFxuICAvKiB0c2xpbnQ6ZW5hYmxlOmRpcmVjdGl2ZS1zZWxlY3Rvci10eXBlICovXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIEhpZ2hsaWdodGFibGUge1xuICBASW5wdXQoKSBwdWJsaWMgc3ViTWVudTogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgZGl2aWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbiB8ICgoaXRlbTogYW55KSA9PiBib29sZWFuKSA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBwYXNzaXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuIHwgKChpdGVtOiBhbnkpID0+IGJvb2xlYW4pID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHB1YmxpYyBleGVjdXRlOiBFdmVudEVtaXR0ZXI8eyBldmVudDogRXZlbnQsIGl0ZW06IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgY3VycmVudEl0ZW06IGFueTtcbiAgcHVibGljIGlzQWN0aXZlID0gZmFsc2U7XG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFzc2l2ZSB8fFxuICAgICAgdGhpcy5kaXZpZGVyIHx8XG4gICAgICAhdGhpcy5ldmFsdWF0ZUlmRnVuY3Rpb24odGhpcy5lbmFibGVkLCB0aGlzLmN1cnJlbnRJdGVtKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBpdGVtOiBhbnkgfT4sIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICBwdWJsaWMgZXZhbHVhdGVJZkZ1bmN0aW9uKHZhbHVlOiBhbnksIGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiB2YWx1ZShpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBwdWJsaWMgc2V0SW5hY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRyaWdnZXJFeGVjdXRlKGl0ZW06IGFueSwgJGV2ZW50PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZXZhbHVhdGVJZkZ1bmN0aW9uKHRoaXMuZW5hYmxlZCwgaXRlbSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5leGVjdXRlLmVtaXQoeyBldmVudDogJGV2ZW50LCBpdGVtIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQ09OVEVYVF9NRU5VX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NPTlRFWFRfTUVOVV9PUFRJT05TJyk7XG4iLCJpbXBvcnQgeyBDbG9zZUxlYWZNZW51RXZlbnQsIElDb250ZXh0TWVudUNsaWNrRXZlbnQgfSBmcm9tICcuL2NvbnRleHRNZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbmplY3QsXG4gICAgSW5wdXQsXG4gICAgT3B0aW9uYWwsXG4gICAgUmVuZGVyZXIsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29udGV4dE1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZXh0TWVudS5pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJQ29udGV4dE1lbnVPcHRpb25zIH0gZnJvbSAnLi9jb250ZXh0TWVudS5vcHRpb25zJztcbmltcG9ydCB7IENPTlRFWFRfTUVOVV9PUFRJT05TIH0gZnJvbSAnLi9jb250ZXh0TWVudS50b2tlbnMnO1xuaW1wb3J0IHsgQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmtDb25maWcge1xuICBjbGljazogKGl0ZW06IGFueSwgJGV2ZW50PzogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgZW5hYmxlZD86IChpdGVtOiBhbnkpID0+IGJvb2xlYW47XG4gIGh0bWw6IChpdGVtOiBhbnkpID0+IHN0cmluZztcbn1cblxuY29uc3QgQVJST1dfTEVGVF9LRVlDT0RFID0gMzc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbnRleHQtbWVudS1jb250ZW50JyxcbiAgc3R5bGVzOiBbXG4gICAgYC5wYXNzaXZlIHtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICBwYWRkaW5nOiAzcHggMjBweDtcbiAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgIGxpbmUtaGVpZ2h0OiBAbGluZS1oZWlnaHQtYmFzZTtcbiAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICB9XG4gICAgLmhhc1N1Yk1lbnU6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXFx1MjVCNlwiO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1gLFxuICBdLFxuICB0ZW1wbGF0ZTpcbiAgYDxkaXYgY2xhc3M9XCJkcm9wZG93biBvcGVuIHNob3cgbmd4LWNvbnRleHRtZW51XCIgW25nQ2xhc3NdPVwibWVudUNsYXNzXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICA8dWwgI21lbnUgY2xhc3M9XCJkcm9wZG93bi1tZW51IHNob3dcIiBzdHlsZT1cInBvc2l0aW9uOiBzdGF0aWM7IGZsb2F0OiBub25lO1wiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICA8bGkgI2xpICpuZ0Zvcj1cImxldCBtZW51SXRlbSBvZiBtZW51SXRlbXM7IGxldCBpID0gaW5kZXhcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIWlzTWVudUl0ZW1FbmFibGVkKG1lbnVJdGVtKVwiXG4gICAgICAgICAgICBbY2xhc3MuZGl2aWRlcl09XCJtZW51SXRlbS5kaXZpZGVyXCIgW2NsYXNzLmRyb3Bkb3duLWRpdmlkZXJdPVwidXNlQm9vdHN0cmFwNCAmJiBtZW51SXRlbS5kaXZpZGVyXCJcbiAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWVudUl0ZW0uaXNBY3RpdmUgJiYgaXNNZW51SXRlbUVuYWJsZWQobWVudUl0ZW0pXCJcbiAgICAgICAgICAgIFthdHRyLnJvbGVdPVwibWVudUl0ZW0uZGl2aWRlciA/ICdzZXBhcmF0b3InIDogdW5kZWZpbmVkXCI+XG4gICAgICAgICAgPGEgKm5nSWY9XCIhbWVudUl0ZW0uZGl2aWRlciAmJiAhbWVudUl0ZW0ucGFzc2l2ZVwiIGhyZWYgW2NsYXNzLmRyb3Bkb3duLWl0ZW1dPVwidXNlQm9vdHN0cmFwNFwiXG4gICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1lbnVJdGVtLmlzQWN0aXZlICYmIGlzTWVudUl0ZW1FbmFibGVkKG1lbnVJdGVtKVwiXG4gICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidXNlQm9vdHN0cmFwNCAmJiAhaXNNZW51SXRlbUVuYWJsZWQobWVudUl0ZW0pXCIgW2NsYXNzLmhhc1N1Yk1lbnVdPVwiISFtZW51SXRlbS5zdWJNZW51XCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbk1lbnVJdGVtU2VsZWN0KG1lbnVJdGVtLCAkZXZlbnQpXCIgKG1vdXNlZW50ZXIpPVwib25PcGVuU3ViTWVudShtZW51SXRlbSwgJGV2ZW50KVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm1lbnVJdGVtLnRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJzdG9wRXZlbnQoJGV2ZW50KVwiIChjb250ZXh0bWVudSk9XCJzdG9wRXZlbnQoJGV2ZW50KVwiIGNsYXNzPVwicGFzc2l2ZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhbWVudUl0ZW0uZGl2aWRlciAmJiBtZW51SXRlbS5wYXNzaXZlXCIgW2NsYXNzLmRyb3Bkb3duLWl0ZW1dPVwidXNlQm9vdHN0cmFwNFwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInVzZUJvb3RzdHJhcDQgJiYgIWlzTWVudUl0ZW1FbmFibGVkKG1lbnVJdGVtKVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm1lbnVJdGVtLnRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHVibGljIG1lbnVJdGVtczogQ29udGV4dE1lbnVJdGVtRGlyZWN0aXZlW10gPSBbXTtcbiAgQElucHV0KCkgcHVibGljIGl0ZW06IGFueTtcbiAgQElucHV0KCkgcHVibGljIGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbiAgQElucHV0KCkgcHVibGljIHBhcmVudENvbnRleHRNZW51OiBDb250ZXh0TWVudUNvbnRlbnRDb21wb25lbnQ7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZW51Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIG92ZXJsYXk6IE92ZXJsYXlSZWY7XG4gIEBJbnB1dCgpIHB1YmxpYyBpc0xlYWYgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHB1YmxpYyBleGVjdXRlOiBFdmVudEVtaXR0ZXI8eyBldmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIGl0ZW06IGFueSwgbWVudUl0ZW06IENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSB9PlxuICAgID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9wZW5TdWJNZW51OiBFdmVudEVtaXR0ZXI8SUNvbnRleHRNZW51Q2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VMZWFmTWVudTogRXZlbnRFbWl0dGVyPENsb3NlTGVhZk1lbnVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VBbGxNZW51czogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ21lbnUnKSBwdWJsaWMgbWVudUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGRyZW4oJ2xpJykgcHVibGljIG1lbnVJdGVtRWxlbWVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBwdWJsaWMgYXV0b0ZvY3VzID0gZmFsc2U7XG4gIHB1YmxpYyB1c2VCb290c3RyYXA0ID0gZmFsc2U7XG4gIHByaXZhdGUgX2tleU1hbmFnZXI6IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPENvbnRleHRNZW51SXRlbURpcmVjdGl2ZT47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ09OVEVYVF9NRU5VX09QVElPTlMpIHByaXZhdGUgb3B0aW9uczogSUNvbnRleHRNZW51T3B0aW9ucyxcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICApIHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5hdXRvRm9jdXMgPSBvcHRpb25zLmF1dG9Gb2N1cztcbiAgICAgIHRoaXMudXNlQm9vdHN0cmFwNCA9IG9wdGlvbnMudXNlQm9vdHN0cmFwNDtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnVJdGVtcy5mb3JFYWNoKG1lbnVJdGVtID0+IHtcbiAgICAgIG1lbnVJdGVtLmN1cnJlbnRJdGVtID0gdGhpcy5pdGVtO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKG1lbnVJdGVtLmV4ZWN1dGUuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMuZXhlY3V0ZS5lbWl0KHsgLi4uZXZlbnQsIG1lbnVJdGVtIH0pKSk7XG4gICAgfSk7XG4gICAgY29uc3QgcXVlcnlMaXN0ID0gbmV3IFF1ZXJ5TGlzdDxDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmU+KCk7XG4gICAgcXVlcnlMaXN0LnJlc2V0KHRoaXMubWVudUl0ZW1zKTtcbiAgICB0aGlzLl9rZXlNYW5hZ2VyID0gbmV3IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPENvbnRleHRNZW51SXRlbURpcmVjdGl2ZT4ocXVlcnlMaXN0KS53aXRoV3JhcCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzKCkpO1xuICAgIH1cbiAgICB0aGlzLm92ZXJsYXkudXBkYXRlUG9zaXRpb24oKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMubWVudUVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3BFdmVudCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgaXNNZW51SXRlbUVuYWJsZWQobWVudUl0ZW06IENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV2YWx1YXRlSWZGdW5jdGlvbihtZW51SXRlbSAmJiBtZW51SXRlbS5lbmFibGVkKTtcbiAgfVxuXG4gIHB1YmxpYyBpc01lbnVJdGVtVmlzaWJsZShtZW51SXRlbTogQ29udGV4dE1lbnVJdGVtRGlyZWN0aXZlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVJZkZ1bmN0aW9uKG1lbnVJdGVtICYmIG1lbnVJdGVtLnZpc2libGUpO1xuICB9XG5cbiAgcHVibGljIGV2YWx1YXRlSWZGdW5jdGlvbih2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHZhbHVlKHRoaXMuaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKGxpbms6IElMaW5rQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGxpbmsuZW5hYmxlZCAmJiAhbGluay5lbmFibGVkKHRoaXMuaXRlbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd0Rvd24nLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd1VwJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uS2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2tleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkFycm93UmlnaHQnLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5Ym9hcmRPcGVuU3ViTWVudShldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IG1lbnVJdGVtID0gdGhpcy5tZW51SXRlbXNbdGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXhdO1xuICAgIGlmIChtZW51SXRlbSkge1xuICAgICAgdGhpcy5vbk9wZW5TdWJNZW51KG1lbnVJdGVtKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5FbnRlcicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLlNwYWNlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGtleWJvYXJkTWVudUl0ZW1TZWxlY3QoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTGVhZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNhbmNlbEV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCBtZW51SXRlbSA9IHRoaXMubWVudUl0ZW1zW3RoaXMuX2tleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4XTtcbiAgICBpZiAobWVudUl0ZW0pIHtcbiAgICAgIHRoaXMub25NZW51SXRlbVNlbGVjdChtZW51SXRlbSwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkVzY2FwZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkFycm93TGVmdCcsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsb3NlTGVhZk1lbnUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuY2xvc2VMZWFmTWVudS5lbWl0KHsgZXhjZXB0Um9vdE1lbnU6IGV2ZW50LmtleUNvZGUgPT09IEFSUk9XX0xFRlRfS0VZQ09ERSwgZXZlbnQgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgcHVibGljIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlQWxsTWVudXMuZW1pdCh7ZXZlbnR9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9wZW5TdWJNZW51KG1lbnVJdGVtOiBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmUsIGV2ZW50PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBhbmNob3JFbGVtZW50UmVmID0gdGhpcy5tZW51SXRlbUVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleF07XG4gICAgY29uc3QgYW5jaG9yRWxlbWVudCA9IGFuY2hvckVsZW1lbnRSZWYgJiYgYW5jaG9yRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMub3BlblN1Yk1lbnUuZW1pdCh7XG4gICAgICBhbmNob3JFbGVtZW50LFxuICAgICAgY29udGV4dE1lbnU6IG1lbnVJdGVtLnN1Yk1lbnUsXG4gICAgICBldmVudCxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIHBhcmVudENvbnRleHRNZW51OiB0aGlzLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uTWVudUl0ZW1TZWxlY3QobWVudUl0ZW06IENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSwgZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uT3BlblN1Yk1lbnUobWVudUl0ZW0sIGV2ZW50KTtcbiAgICBpZiAoIW1lbnVJdGVtLnN1Yk1lbnUpIHtcbiAgICAgIG1lbnVJdGVtLnRyaWdnZXJFeGVjdXRlKHRoaXMuaXRlbSwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FuY2VsRXZlbnQoZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoWydJTlBVVCcsICdURVhUQVJFQScsICdTRUxFQ1QnXS5pbmRleE9mKHRhcmdldC50YWdOYW1lKSA+IC0xIHx8IHRhcmdldC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYsIFNjcm9sbFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHRNZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRleHRNZW51Lml0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGV4dE1lbnVDb250ZW50LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRleHRNZW51Q2xpY2tFdmVudCB7XG4gIGFuY2hvckVsZW1lbnQ/OiBFbGVtZW50IHwgRXZlbnRUYXJnZXQ7XG4gIGNvbnRleHRNZW51PzogQ29udGV4dE1lbnVDb21wb25lbnQ7XG4gIGV2ZW50PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gIHBhcmVudENvbnRleHRNZW51PzogQ29udGV4dE1lbnVDb250ZW50Q29tcG9uZW50O1xuICBpdGVtOiBhbnk7XG4gIGFjdGl2ZU1lbnVJdGVtSW5kZXg/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIElDb250ZXh0TWVudUNvbnRleHQgZXh0ZW5kcyBJQ29udGV4dE1lbnVDbGlja0V2ZW50IHtcbiAgbWVudUl0ZW1zOiBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmVbXTtcbiAgbWVudUNsYXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3NlTGVhZk1lbnVFdmVudCB7XG4gIGV4Y2VwdFJvb3RNZW51PzogYm9vbGVhbjtcbiAgZXZlbnQ/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheVJlZldpdGhDb250ZXh0TWVudSBleHRlbmRzIE92ZXJsYXlSZWYge1xuICBjb250ZXh0TWVudT86IENvbnRleHRNZW51Q29udGVudENvbXBvbmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW5jZWxDb250ZXh0TWVudUV2ZW50IHtcbiAgZXZlbnRUeXBlOiAnY2FuY2VsJztcbiAgZXZlbnQ/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZUNvbnRleHRNZW51RXZlbnQge1xuICBldmVudFR5cGU6ICdleGVjdXRlJztcbiAgZXZlbnQ/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbiAgaXRlbTogYW55O1xuICBtZW51SXRlbTogQ29udGV4dE1lbnVJdGVtRGlyZWN0aXZlO1xufVxuZXhwb3J0IHR5cGUgQ2xvc2VDb250ZXh0TWVudUV2ZW50ID0gRXhlY3V0ZUNvbnRleHRNZW51RXZlbnQgfCBDYW5jZWxDb250ZXh0TWVudUV2ZW50O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVTZXJ2aWNlIHtcbiAgcHVibGljIGlzRGVzdHJveWluZ0xlYWZNZW51ID0gZmFsc2U7XG5cbiAgcHVibGljIHNob3c6IFN1YmplY3Q8SUNvbnRleHRNZW51Q2xpY2tFdmVudD4gPSBuZXcgU3ViamVjdDxJQ29udGV4dE1lbnVDbGlja0V2ZW50PigpO1xuICBwdWJsaWMgdHJpZ2dlckNsb3NlOiBTdWJqZWN0PENvbnRleHRNZW51Q29udGVudENvbXBvbmVudD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgY2xvc2U6IFN1YmplY3Q8Q2xvc2VDb250ZXh0TWVudUV2ZW50PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBjb250ZXh0TWVudUNvbnRlbnQ6IENvbXBvbmVudFJlZjxDb250ZXh0TWVudUNvbnRlbnRDb21wb25lbnQ+O1xuICBwcml2YXRlIG92ZXJsYXlzOiBPdmVybGF5UmVmW10gPSBbXTtcbiAgcHJpdmF0ZSBmYWtlRWxlbWVudDogYW55ID0ge1xuICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogKCk6IENsaWVudFJlY3QgPT4gKHtcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgIH0pXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgc2Nyb2xsU3RyYXRlZ3k6IFNjcm9sbFN0cmF0ZWd5T3B0aW9ucyxcbiAgKSB7IH1cblxuICBwdWJsaWMgb3BlbkNvbnRleHRNZW51KGNvbnRleHQ6IElDb250ZXh0TWVudUNvbnRleHQpIHtcbiAgICBjb25zdCB7IGFuY2hvckVsZW1lbnQsIGV2ZW50LCBwYXJlbnRDb250ZXh0TWVudSB9ID0gY29udGV4dDtcblxuICAgIGlmICghcGFyZW50Q29udGV4dE1lbnUpIHtcbiAgICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xuICAgICAgdGhpcy5mYWtlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSAoKTogQ2xpZW50UmVjdCA9PiAoe1xuICAgICAgICBib3R0b206IG1vdXNlRXZlbnQuY2xpZW50WSxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiBtb3VzZUV2ZW50LmNsaWVudFgsXG4gICAgICAgIHJpZ2h0OiBtb3VzZUV2ZW50LmNsaWVudFgsXG4gICAgICAgIHRvcDogbW91c2VFdmVudC5jbGllbnRZLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jbG9zZUFsbENvbnRleHRNZW51cyh7IGV2ZW50VHlwZTogJ2NhbmNlbCcsIGV2ZW50IH0pO1xuICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmNvbm5lY3RlZFRvKFxuICAgICAgICBuZXcgRWxlbWVudFJlZihhbmNob3JFbGVtZW50IHx8IHRoaXMuZmFrZUVsZW1lbnQpLFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcbiAgICAgICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ3RvcCcgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcbiAgICAgICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2NlbnRlcicgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgIDtcbiAgICAgIHRoaXMub3ZlcmxheXMgPSBbdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICAgIHBhbmVsQ2xhc3M6ICduZ3gtY29udGV4dG1lbnUnLFxuICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5zY3JvbGxTdHJhdGVneS5jbG9zZSgpLFxuICAgICAgfSldO1xuICAgICAgdGhpcy5hdHRhY2hDb250ZXh0TWVudSh0aGlzLm92ZXJsYXlzWzBdLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmNvbm5lY3RlZFRvKFxuICAgICAgICBuZXcgRWxlbWVudFJlZihldmVudCA/IGV2ZW50LnRhcmdldCA6IGFuY2hvckVsZW1lbnQpLFxuICAgICAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxuICAgICAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICAgICAgO1xuICAgICAgY29uc3QgbmV3T3ZlcmxheSA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgICBwYW5lbENsYXNzOiAnbmd4LWNvbnRleHRtZW51JyxcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuc2Nyb2xsU3RyYXRlZ3kuY2xvc2UoKSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kZXN0cm95U3ViTWVudXMocGFyZW50Q29udGV4dE1lbnUpO1xuICAgICAgdGhpcy5vdmVybGF5cyA9IHRoaXMub3ZlcmxheXMuY29uY2F0KG5ld092ZXJsYXkpO1xuICAgICAgdGhpcy5hdHRhY2hDb250ZXh0TWVudShuZXdPdmVybGF5LCBjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXR0YWNoQ29udGV4dE1lbnUob3ZlcmxheTogT3ZlcmxheVJlZiwgY29udGV4dDogSUNvbnRleHRNZW51Q29udGV4dCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZXZlbnQsIGl0ZW0sIG1lbnVJdGVtcywgbWVudUNsYXNzIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY29udGV4dE1lbnVDb250ZW50OiBDb21wb25lbnRSZWY8Q29udGV4dE1lbnVDb250ZW50Q29tcG9uZW50PiA9IG92ZXJsYXkuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoQ29udGV4dE1lbnVDb250ZW50Q29tcG9uZW50KSk7XG4gICAgY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlLmV2ZW50ID0gZXZlbnQ7XG4gICAgY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlLml0ZW0gPSBpdGVtO1xuICAgIGNvbnRleHRNZW51Q29udGVudC5pbnN0YW5jZS5tZW51SXRlbXMgPSBtZW51SXRlbXM7XG4gICAgY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlLm92ZXJsYXkgPSBvdmVybGF5O1xuICAgIGNvbnRleHRNZW51Q29udGVudC5pbnN0YW5jZS5pc0xlYWYgPSB0cnVlO1xuICAgIGNvbnRleHRNZW51Q29udGVudC5pbnN0YW5jZS5tZW51Q2xhc3MgPSBtZW51Q2xhc3M7XG4gICAgKDxPdmVybGF5UmVmV2l0aENvbnRleHRNZW51Pm92ZXJsYXkpLmNvbnRleHRNZW51ID0gY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlO1xuXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIHN1YnNjcmlwdGlvbnMuYWRkKGNvbnRleHRNZW51Q29udGVudC5pbnN0YW5jZS5leGVjdXRlLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAuc3Vic2NyaWJlKChleGVjdXRlRXZlbnQpID0+IHRoaXMuY2xvc2VBbGxDb250ZXh0TWVudXMoeyBldmVudFR5cGU6ICdleGVjdXRlJywgLi4uZXhlY3V0ZUV2ZW50IH0pKSk7XG4gICAgc3Vic2NyaXB0aW9ucy5hZGQoY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlLmNsb3NlQWxsTWVudXMuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKGNsb3NlQWxsRXZlbnQpID0+IHRoaXMuY2xvc2VBbGxDb250ZXh0TWVudXMoeyBldmVudFR5cGU6ICdjYW5jZWwnLCAuLi5jbG9zZUFsbEV2ZW50IH0pKSk7XG4gICAgc3Vic2NyaXB0aW9ucy5hZGQoY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlLmNsb3NlTGVhZk1lbnUuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoY2xvc2VMZWFmTWVudUV2ZW50ID0+IHRoaXMuZGVzdHJveUxlYWZNZW51KGNsb3NlTGVhZk1lbnVFdmVudCkpKTtcbiAgICBzdWJzY3JpcHRpb25zLmFkZChjb250ZXh0TWVudUNvbnRlbnQuaW5zdGFuY2Uub3BlblN1Yk1lbnUuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKHN1Yk1lbnVFdmVudDogSUNvbnRleHRNZW51Q29udGV4dCkgPT4ge1xuICAgICAgICB0aGlzLmRlc3Ryb3lTdWJNZW51cyhjb250ZXh0TWVudUNvbnRlbnQuaW5zdGFuY2UpO1xuICAgICAgICBpZiAoIXN1Yk1lbnVFdmVudC5jb250ZXh0TWVudSkge1xuICAgICAgICAgIGNvbnRleHRNZW51Q29udGVudC5pbnN0YW5jZS5pc0xlYWYgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0TWVudUNvbnRlbnQuaW5zdGFuY2UuaXNMZWFmID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvdy5uZXh0KHN1Yk1lbnVFdmVudCk7XG4gICAgICB9KSk7XG4gICAgY29udGV4dE1lbnVDb250ZW50Lm9uRGVzdHJveSgoKSA9PiB7XG4gICAgICBtZW51SXRlbXMuZm9yRWFjaChtZW51SXRlbSA9PiBtZW51SXRlbS5pc0FjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIHN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgICBjb250ZXh0TWVudUNvbnRlbnQuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlQWxsQ29udGV4dE1lbnVzKGNsb3NlRXZlbnQ6IENsb3NlQ29udGV4dE1lbnVFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlzKSB7XG4gICAgICB0aGlzLmNsb3NlLm5leHQoY2xvc2VFdmVudCk7XG4gICAgICB0aGlzLm92ZXJsYXlzLmZvckVhY2goKG92ZXJsYXksIGluZGV4KSA9PiB7XG4gICAgICAgIG92ZXJsYXkuZGV0YWNoKCk7XG4gICAgICAgIG92ZXJsYXkuZGlzcG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub3ZlcmxheXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMYXN0QXR0YWNoZWRPdmVybGF5KCk6IE92ZXJsYXlSZWZXaXRoQ29udGV4dE1lbnUge1xuICAgIGxldCBvdmVybGF5OiBPdmVybGF5UmVmID0gdGhpcy5vdmVybGF5c1t0aGlzLm92ZXJsYXlzLmxlbmd0aCAtIDFdO1xuICAgIHdoaWxlICh0aGlzLm92ZXJsYXlzLmxlbmd0aCA+IDEgJiYgb3ZlcmxheSAmJiAhb3ZlcmxheS5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICBvdmVybGF5LmRldGFjaCgpO1xuICAgICAgb3ZlcmxheS5kaXNwb3NlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlzID0gdGhpcy5vdmVybGF5cy5zbGljZSgwLCAtMSk7XG4gICAgICBvdmVybGF5ID0gdGhpcy5vdmVybGF5c1t0aGlzLm92ZXJsYXlzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95TGVhZk1lbnUoeyBleGNlcHRSb290TWVudSwgZXZlbnQgfTogQ2xvc2VMZWFmTWVudUV2ZW50ID0ge30pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Rlc3Ryb3lpbmdMZWFmTWVudSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzRGVzdHJveWluZ0xlYWZNZW51ID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMuZ2V0TGFzdEF0dGFjaGVkT3ZlcmxheSgpO1xuICAgICAgaWYgKHRoaXMub3ZlcmxheXMubGVuZ3RoID4gMSAmJiBvdmVybGF5KSB7XG4gICAgICAgIG92ZXJsYXkuZGV0YWNoKCk7XG4gICAgICAgIG92ZXJsYXkuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgICAgaWYgKCFleGNlcHRSb290TWVudSAmJiB0aGlzLm92ZXJsYXlzLmxlbmd0aCA+IDAgJiYgb3ZlcmxheSkge1xuICAgICAgICB0aGlzLmNsb3NlLm5leHQoeyBldmVudFR5cGU6ICdjYW5jZWwnLCBldmVudCB9KTtcbiAgICAgICAgb3ZlcmxheS5kZXRhY2goKTtcbiAgICAgICAgb3ZlcmxheS5kaXNwb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0xlYWYgPSB0aGlzLmdldExhc3RBdHRhY2hlZE92ZXJsYXkoKTtcbiAgICAgIGlmIChuZXdMZWFmKSB7XG4gICAgICAgIG5ld0xlYWYuY29udGV4dE1lbnUuaXNMZWFmID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc0Rlc3Ryb3lpbmdMZWFmTWVudSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3lTdWJNZW51cyhjb250ZXh0TWVudTogQ29udGV4dE1lbnVDb250ZW50Q29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGNvbnRleHRNZW51Lm92ZXJsYXk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm92ZXJsYXlzLmluZGV4T2Yob3ZlcmxheSk7XG4gICAgdGhpcy5vdmVybGF5cy5zbGljZShpbmRleCArIDEpLmZvckVhY2goc3ViTWVudU92ZXJsYXkgPT4ge1xuICAgICAgc3ViTWVudU92ZXJsYXkuZGV0YWNoKCk7XG4gICAgICBzdWJNZW51T3ZlcmxheS5kaXNwb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaXNMZWFmTWVudShjb250ZXh0TWVudUNvbnRlbnQ6IENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLmdldExhc3RBdHRhY2hlZE92ZXJsYXkoKTtcbiAgICByZXR1cm4gY29udGV4dE1lbnVDb250ZW50Lm92ZXJsYXkgPT09IG92ZXJsYXk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5qZWN0LFxuICAgIElucHV0LFxuICAgIE9uRGVzdHJveSxcbiAgICBPcHRpb25hbCxcbiAgICBPdXRwdXQsXG4gICAgUXVlcnlMaXN0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRleHRNZW51Lml0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IElDb250ZXh0TWVudU9wdGlvbnMgfSBmcm9tICcuL2NvbnRleHRNZW51Lm9wdGlvbnMnO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVTZXJ2aWNlLCBJQ29udGV4dE1lbnVDbGlja0V2ZW50LCBDbG9zZUNvbnRleHRNZW51RXZlbnQgfSBmcm9tICcuL2NvbnRleHRNZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ09OVEVYVF9NRU5VX09QVElPTlMgfSBmcm9tICcuL2NvbnRleHRNZW51LnRva2Vucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmtDb25maWcge1xuICBjbGljazogKGl0ZW06IGFueSwgJGV2ZW50PzogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgZW5hYmxlZD86IChpdGVtOiBhbnkpID0+IGJvb2xlYW47XG4gIGh0bWw6IChpdGVtOiBhbnkpID0+IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTW91c2VMb2NhdGlvbiB7XG4gIGxlZnQ/OiBzdHJpbmc7XG4gIG1hcmdpbkxlZnQ/OiBzdHJpbmc7XG4gIG1hcmdpblRvcD86IHN0cmluZztcbiAgdG9wPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdjb250ZXh0LW1lbnUnLFxuICBzdHlsZXM6IFtgXG4gICAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC5uZ3gtY29udGV4dG1lbnUuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgbWVudUNsYXNzID0gXCJcIjtcbiAgQElucHV0KCkgcHVibGljIGF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgdXNlQm9vdHN0cmFwNCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjbG9zZTogRXZlbnRFbWl0dGVyPENsb3NlQ29udGV4dE1lbnVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlbjogRXZlbnRFbWl0dGVyPElDb250ZXh0TWVudUNsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAQ29udGVudENoaWxkcmVuKENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSkgcHVibGljIG1lbnVJdGVtczogUXVlcnlMaXN0PENvbnRleHRNZW51SXRlbURpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGQoJ21lbnUnKSBwdWJsaWMgbWVudUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyB2aXNpYmxlTWVudUl0ZW1zOiBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuXG4gIHB1YmxpYyBsaW5rczogSUxpbmtDb25maWdbXSA9IFtdO1xuICBwdWJsaWMgaXRlbTogYW55O1xuICBwdWJsaWMgZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbnRleHRNZW51U2VydmljZTogQ29udGV4dE1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ09OVEVYVF9NRU5VX09QVElPTlMpIHByaXZhdGUgb3B0aW9uczogSUNvbnRleHRNZW51T3B0aW9ucyxcbiAgKSB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuYXV0b0ZvY3VzID0gb3B0aW9ucy5hdXRvRm9jdXM7XG4gICAgICB0aGlzLnVzZUJvb3RzdHJhcDQgPSBvcHRpb25zLnVzZUJvb3RzdHJhcDQ7XG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChfY29udGV4dE1lbnVTZXJ2aWNlLnNob3cuc3Vic2NyaWJlKG1lbnVFdmVudCA9PiB7XG4gICAgICB0aGlzLm9uTWVudUV2ZW50KG1lbnVFdmVudCk7XG4gICAgfSkpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgb25NZW51RXZlbnQobWVudUV2ZW50OiBJQ29udGV4dE1lbnVDbGlja0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBjb250ZXh0TWVudSwgZXZlbnQsIGl0ZW0gfSA9IG1lbnVFdmVudDtcbiAgICBpZiAoY29udGV4dE1lbnUgJiYgY29udGV4dE1lbnUgIT09IHRoaXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgdGhpcy5zZXRWaXNpYmxlTWVudUl0ZW1zKCk7XG4gICAgdGhpcy5fY29udGV4dE1lbnVTZXJ2aWNlLm9wZW5Db250ZXh0TWVudSh7IC4uLm1lbnVFdmVudCwgbWVudUl0ZW1zOiB0aGlzLnZpc2libGVNZW51SXRlbXMsIG1lbnVDbGFzczogdGhpcy5tZW51Q2xhc3MgfSk7XG4gICAgdGhpcy5fY29udGV4dE1lbnVTZXJ2aWNlLmNsb3NlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKGNsb3NlRXZlbnQgPT4gdGhpcy5jbG9zZS5lbWl0KGNsb3NlRXZlbnQpKTtcbiAgICB0aGlzLm9wZW4ubmV4dChtZW51RXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGlzTWVudUl0ZW1WaXNpYmxlKG1lbnVJdGVtOiBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZUlmRnVuY3Rpb24obWVudUl0ZW0udmlzaWJsZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmlzaWJsZU1lbnVJdGVtcygpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2libGVNZW51SXRlbXMgPSB0aGlzLm1lbnVJdGVtcy5maWx0ZXIobWVudUl0ZW0gPT4gdGhpcy5pc01lbnVJdGVtVmlzaWJsZShtZW51SXRlbSkpO1xuICB9XG5cbiAgcHVibGljIGV2YWx1YXRlSWZGdW5jdGlvbih2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHZhbHVlKHRoaXMuaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHRNZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZXh0TWVudVNlcnZpY2UgfSBmcm9tICcuL2NvbnRleHRNZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb250ZXh0TWVudV0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudUF0dGFjaERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb250ZXh0TWVudVN1YmplY3Q6IGFueTtcbiAgQElucHV0KCkgcHVibGljIGNvbnRleHRNZW51OiBDb250ZXh0TWVudUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRleHRNZW51U2VydmljZTogQ29udGV4dE1lbnVTZXJ2aWNlKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbnRleHRNZW51LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRleHRNZW51U2VydmljZS5zaG93Lm5leHQoe1xuICAgICAgICBjb250ZXh0TWVudTogdGhpcy5jb250ZXh0TWVudSxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGl0ZW06IHRoaXMuY29udGV4dE1lbnVTdWJqZWN0LFxuICAgICAgfSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRleHRNZW51QXR0YWNoRGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZXh0TWVudS5hdHRhY2guZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXh0TWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZXh0TWVudS5pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJQ29udGV4dE1lbnVPcHRpb25zIH0gZnJvbSAnLi9jb250ZXh0TWVudS5vcHRpb25zJztcbmltcG9ydCB7IENvbnRleHRNZW51U2VydmljZSB9IGZyb20gJy4vY29udGV4dE1lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBDT05URVhUX01FTlVfT1BUSU9OUyB9IGZyb20gJy4vY29udGV4dE1lbnUudG9rZW5zJztcbmltcG9ydCB7IENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGV4dE1lbnVDb250ZW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbnRleHRNZW51QXR0YWNoRGlyZWN0aXZlLFxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCxcbiAgICBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmUsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbnRleHRNZW51QXR0YWNoRGlyZWN0aXZlLFxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudU1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChvcHRpb25zPzogSUNvbnRleHRNZW51T3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29udGV4dE1lbnVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29udGV4dE1lbnVTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ09OVEVYVF9NRU5VX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7SUF1QkUsa0NBQW1CLFFBQW9DLEVBQVMsVUFBc0I7UUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBNEI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO3VCQWQ1RCxLQUFLO3VCQUMrQixJQUFJO3VCQUN4QyxLQUFLO3VCQUMrQixJQUFJO3VCQUNJLElBQUksWUFBWSxFQUFFO3dCQUd0RSxLQUFLO0tBT29FOzBCQU5oRiw4Q0FBUTs7Ozs7WUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTztnQkFDakIsSUFBSSxDQUFDLE9BQU87Z0JBQ1osQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7Ozs7Ozs7SUFLdEQscURBQWtCOzs7OztjQUFDLEtBQVUsRUFBRSxJQUFTO1FBQzdDLElBQUksS0FBSyxZQUFZLFFBQVEsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtRQUNELE9BQU8sS0FBSyxDQUFDOzs7OztJQUdSLGtEQUFlOzs7O1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzs7OztJQUVoQixvREFBaUI7Ozs7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7SUFHakIsaURBQWM7Ozs7O2NBQUMsSUFBUyxFQUFFLE1BQW1DO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8s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

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/demo/app.component.html":
/*!*************************************!*\
  !*** ./src/demo/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Angular2 Context Menu Demo</h1>\n<div (click)=\"$event.preventDefault()\" style=\"margin:20px; padding:20px\">\n  <div style=\"position: relative\">\n    <div style=\"margin:20px; padding:20px;transform: translate3d(0px, 0px, 0px)\">\n      <div (click)=\"$event.preventDefault()\" style=\"transform: translate3d(10px, -10px, 0px)\">\n        <h3>Base Case</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"basicMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <a href (click)=\"disableBasicMenu = !disableBasicMenu\">{{ disableBasicMenu ? 'enable' : 'disable'}} basic menu</a>\n        <h3>Static</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"static\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #static (close)=\"showMessage('closed static', $event)\" (open)=\"showMessage('open', $event)\">\n          <ng-template contextMenuItem [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, someone')\">\n            Say hi\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, someone')\">\n            This will never show...\n          </ng-template>\n          <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n          <ng-template contextMenuItem [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage('Someone said: something')\">\n            Bye, someone\n          </ng-template>\n        </context-menu>\n        <div style=\"height: 100px; border: solid 1px #ccc; overflow: auto;\" cdkScrollable>\n          <h3>Enabled and Visible</h3>\n          <ul>\n            <li *ngFor=\"let item of items\" [contextMenu]=\"enableAndVisible\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n          </ul>\n          <context-menu #enableAndVisible (close)=\"showMessage('closed enableAndVisible', $event)\">\n            <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n              Say hi, {{item?.name}}! With access to the outside context: {{ outsideValue }}\n            </ng-template>\n            <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n              This will never show...\n            </ng-template>\n            <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n            <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n              Bye, {{item?.name}}\n            </ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n          </context-menu>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n        </div>\n        <h3>Enabled and Visible as Functions</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"withFunctions\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #withFunctions>\n          <ng-template contextMenuItem [enabled]=\"onlyJohn\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (enabled for John)\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"onlyJoe\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (visible for Joe)\n          </ng-template>\n          <ng-template contextMenuItem let-item (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n            Bye, {{item?.name}}\n          </ng-template>\n        </context-menu>\n        <br>\n        <h3>Custom styling</h3>\n        <ul>\n          <li [contextMenu]=\"customClassMenu\" [contextMenuSubject]=\"item\">Right click to see styled menu</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div style=\"position:fixed;top:35px;height:100%;width:100%;display:table; border-collapse: collapse;border:none;outline:none; pointer-events: none\">\n  <div style=\"display: table-cell;width:200px;vertical-align: top\">\n    <div style=\"position:absolute; top: 20px;\">\n      <div style=\"position:fixed;top:200px;left:-200px\">\n        <context-menu #basicMenu [disabled]=\"disableBasicMenu\" style=\"pointer-events:all\">\n          <ng-template contextMenuItem [subMenu]=\"saySubMenu\">\n            Say...\n          </ng-template>\n          <context-menu #saySubMenu>\n            <ng-template contextMenuItem [subMenu]=\"sayHiSubMenu\">\n              ...hi!\n            </ng-template>\n            <context-menu #sayHiSubMenu>\n              <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n                ...hi!\n              </ng-template>\n              <ng-template contextMenuItem (execute)=\"showMessage('Hola, ' + $event.item.name)\">\n                ...hola!\n              </ng-template>\n              <ng-template contextMenuItem (execute)=\"showMessage('Salut, ' + $event.item.name)\">\n                ...salut!\n              </ng-template>\n            </context-menu>\n            <ng-template contextMenuItem (execute)=\"showMessage('Hola, ' + $event.item.name)\">\n              ...hola!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Salut, ' + $event.item.name)\">\n              ...salut!\n            </ng-template>\n          </context-menu>\n          <ng-template contextMenuItem let-item [subMenu]=\"byeSubMenu\">\n            Bye, {{item?.name}}\n          </ng-template>\n          <context-menu #byeSubMenu>\n            <ng-template contextMenuItem (execute)=\"showMessage('Bye, ' + $event.item.name)\">\n              ...bye!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Ciao, ' + $event.item.name)\">\n              ...ciao!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Au revoir, ' + $event.item.name)\">\n              ...au revoir!\n            </ng-template>\n          </context-menu>\n          <ng-template contextMenuItem (execute)=\"showMessage('Simple')\">\n            Simple\n          </ng-template>\n          <ng-template contextMenuItem passive=\"true\">\n            Input something:\n            <input type=\"text\">\n          </ng-template>\n        </context-menu>\n      </div>\n    </div>\n  </div>\n</div>\n\n<context-menu #customClassMenu [menuClass]=\"'mystyle'\" style=\"pointer-events:all\">\n  <ng-template contextMenuItem (execute)=\"showMessage('Styled menu1')\">\n    This menu is styled\n  </ng-template>\n  <ng-template contextMenuItem (execute)=\"showMessage('Styled menu2')\">\n    with a custom class\n  </ng-template>\n  <ng-template contextMenuItem (execute)=\"showMessage('Styled menu3')\">\n    that needs to be global\n  </ng-template>\n</context-menu>\n\n<div class=\"dashboardContainer\" style=\"pointer-events: none\">\n  <div class=\"componentsContainer\">\n    <div class=\"componentContainer\" *ngFor=\"let item of items\" style=\"pointer-events: all\" [ngStyle]=\"item.layout\" [contextMenu]=\"componentMenu\"\n      [contextMenuSubject]=\"item\">\n      {{ item.name }}\n    </div>\n    <context-menu #componentMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n        Say hi!\n      </ng-template>\n      <ng-template contextMenuItem let-item (execute)=\"showMessage($event.event)\">\n        Bye, {{item?.name}}\n      </ng-template>\n    </context-menu>\n  </div>\n</div>\n<ul>\n  <li *ngFor=\"let item of items\" [contextMenu]=\"itemContextMenu\" [contextMenuSubject]=\"item\">\n    {{item.name}}\n    <context-menu #itemContextMenu>\n      <ng-template *ngFor=\"let action of item.actions\" contextMenuItem let-item [visible]=\"action.visible\" [enabled]=\"action.enabled\"\n        [divider]=\"action.divider\" (execute)=\"action.execute($event.item)\">\n        {{ action.html(item) }}\n      </ng-template>\n      <ng-template contextMenuItem [subMenu]=\"someSubMenu\">\n        Submenu\n      </ng-template>\n      <context-menu #someSubMenu>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n      </context-menu>\n    </context-menu>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/demo/app.component.ts":
/*!***********************************!*\
  !*** ./src/demo/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-contextmenu */ "./dist/ngx-contextmenu/fesm5/ngx-contextmenu.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
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
    AppComponent.prototype.showMessage = function (message, data) {
        console.log(message, data);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('basicMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"])
    ], AppComponent.prototype, "basicMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('enableAndVisible'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"])
    ], AppComponent.prototype, "enableAndVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('withFunctions'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"])
    ], AppComponent.prototype, "withFunctions", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-context-menu-demo',
            styles: ["\n.dashboardContainer {\nwidth: 100%;\nheight: 100%;\nposition: fixed;\n}\n\n.componentsContainer {\nposition: fixed;\nbottom: 0;\ntop: 100px;\nwidth: 100%; }\n\n.componentContainer {\noverflow: auto;\nposition: absolute; }\n"],
            template: __webpack_require__(/*! ./app.component.html */ "./src/demo/app.component.html"),
        }),
        __metadata("design:paramtypes", [ngx_contextmenu__WEBPACK_IMPORTED_MODULE_1__["ContextMenuService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/demo/app.module.ts":
/*!********************************!*\
  !*** ./src/demo/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-contextmenu */ "./dist/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/demo/app.component.ts");
/* harmony import */ var _child1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./child1.component */ "./src/demo/child1.component.ts");
/* harmony import */ var _child2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./child2.component */ "./src/demo/child2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _child1_component__WEBPACK_IMPORTED_MODULE_7__["ChildOneComponent"], _child2_component__WEBPACK_IMPORTED_MODULE_8__["ChildTwoComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ContextMenuModule"].forRoot({
                    autoFocus: true,
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: 'two',
                        component: _child2_component__WEBPACK_IMPORTED_MODULE_8__["ChildTwoComponent"],
                    },
                    {
                        path: '**',
                        component: _child1_component__WEBPACK_IMPORTED_MODULE_7__["ChildOneComponent"],
                    }
                ]),
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatchModule"],
            ],
            providers: [],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/demo/child1.component.ts":
/*!**************************************!*\
  !*** ./src/demo/child1.component.ts ***!
  \**************************************/
/*! exports provided: ChildOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildOneComponent", function() { return ChildOneComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildOneComponent = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'child-one',
            template: "\n    <h3>Routing One</h3>\n    <ul>\n      <li *ngFor=\"let item of items\" [contextMenu]=\"routingMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n    </ul>\n    <context-menu #routingMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name); go($event.item)\">\n        Go!\n      </ng-template>\n    </context-menu>\n  "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], ChildOneComponent);
    return ChildOneComponent;
}());



/***/ }),

/***/ "./src/demo/child2.component.ts":
/*!**************************************!*\
  !*** ./src/demo/child2.component.ts ***!
  \**************************************/
/*! exports provided: ChildTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildTwoComponent", function() { return ChildTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildTwoComponent = /** @class */ (function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'child-two',
            template: "\n    <h3>Routing Two</h3>\n    <ul>\n      <li *ngFor=\"let item of items\" [contextMenu]=\"routingMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n    </ul>\n    <context-menu #routingMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name); go($event.item)\">\n        Go!\n      </ng-template>\n    </context-menu>\n  "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChildTwoComponent);
    return ChildTwoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _demo_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo/app.module */ "./src/demo/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_demo_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isaac/Documents/Contributions/ngx-contextmenu/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map