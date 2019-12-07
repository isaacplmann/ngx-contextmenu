(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/lib/__ivy_ngcc__/fesm2015/ngx-contextmenu.js":
/*!***********************************************************!*\
  !*** ./dist/lib/__ivy_ngcc__/fesm2015/ngx-contextmenu.js ***!
  \***********************************************************/
/*! exports provided: ContextMenuComponent, ContextMenuModule, ContextMenuService, ɵa, ɵb, ɵc, ɵd, ContextMenuAttachDirective, ContextMenuItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuModule", function() { return ContextMenuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuService", function() { return ContextMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ContextMenuAttachDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ContextMenuItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CONTEXT_MENU_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ContextMenuContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuAttachDirective", function() { return ContextMenuAttachDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuItemDirective", function() { return ContextMenuItemDirective; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/portal.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/a11y.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



const _c0 = ["menu"];
const _c1 = ["li"];
const _c2 = ["tabindex", "0", 1, "dropdown", "open", "show", "ngx-contextmenu", 3, "ngClass"];
const _c3 = ["tabindex", "0", 1, "dropdown-menu", "show", 2, "position", "static", "float", "none"];
const _c4 = ["menu", ""];
const _c5 = [3, "disabled", "divider", "dropdown-divider", "active", 4, "ngFor", "ngForOf"];
const _c6 = ["li", ""];
const _c7 = ["href", "", 3, "dropdown-item", "active", "disabled", "hasSubMenu", "click", "mouseenter", 4, "ngIf"];
const _c8 = ["class", "passive", 3, "dropdown-item", "disabled", "click", "contextmenu", 4, "ngIf"];
const _c9 = ["href", "", 3, "click", "mouseenter"];
const _c10 = [3, "ngTemplateOutlet", "ngTemplateOutletContext"];
function ContextMenuContentComponent_li_3_a_2_ng_template_1_Template(rf, ctx) { }
const _c11 = function (a0) { return { $implicit: a0 }; };
function ContextMenuContentComponent_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyling"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContextMenuContentComponent_li_3_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onMenuItemSelect(menuItem_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function ContextMenuContentComponent_li_3_a_2_Template_a_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onOpenSubMenu(menuItem_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContextMenuContentComponent_li_3_a_2_ng_template_1_Template, 0, 0, "ng-template", _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dropdown-item", ctx_r5.useBootstrap4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", menuItem_r2.isActive && ctx_r5.isMenuItemEnabled(menuItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx_r5.useBootstrap4 && !ctx_r5.isMenuItemEnabled(menuItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hasSubMenu", !!menuItem_r2.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstylingApply"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c11, ctx_r5.item));
} }
const _c12 = [1, "passive", 3, "click", "contextmenu"];
function ContextMenuContentComponent_li_3_span_3_ng_template_1_Template(rf, ctx) { }
function ContextMenuContentComponent_li_3_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyling"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContextMenuContentComponent_li_3_span_3_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.stopEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function ContextMenuContentComponent_li_3_span_3_Template_span_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.stopEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContextMenuContentComponent_li_3_span_3_ng_template_1_Template, 0, 0, "ng-template", _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dropdown-item", ctx_r6.useBootstrap4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx_r6.useBootstrap4 && !ctx_r6.isMenuItemEnabled(menuItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstylingApply"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c11, ctx_r6.item));
} }
function ContextMenuContentComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", null, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyling"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContextMenuContentComponent_li_3_a_2_Template, 2, 8, "a", _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContextMenuContentComponent_li_3_span_3_Template, 2, 6, "span", _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", !ctx_r1.isMenuItemEnabled(menuItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("divider", menuItem_r2.divider);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dropdown-divider", ctx_r1.useBootstrap4 && menuItem_r2.divider);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", menuItem_r2.isActive && ctx_r1.isMenuItemEnabled(menuItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstylingApply"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", menuItem_r2.divider ? "separator" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵselect"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !menuItem_r2.divider && !menuItem_r2.passive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵselect"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !menuItem_r2.divider && menuItem_r2.passive);
} }
class ContextMenuItemDirective {
    /**
     * @param {?} template
     * @param {?} elementRef
     */
    constructor(template, elementRef) {
        this.template = template;
        this.elementRef = elementRef;
        this.divider = false;
        this.enabled = true;
        this.passive = false;
        this.visible = true;
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isActive = false;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.passive ||
            this.divider ||
            !this.evaluateIfFunction(this.enabled, this.currentItem);
    }
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    evaluateIfFunction(value, item) {
        if (value instanceof Function) {
            return value(item);
        }
        return value;
    }
    /**
     * @return {?}
     */
    setActiveStyles() {
        this.isActive = true;
    }
    /**
     * @return {?}
     */
    setInactiveStyles() {
        this.isActive = false;
    }
    /**
     * @param {?} item
     * @param {?=} $event
     * @return {?}
     */
    triggerExecute(item, $event) {
        if (!this.evaluateIfFunction(this.enabled, item)) {
            return;
        }
        this.execute.emit({ event: $event, item });
    }
}
ContextMenuItemDirective.ngDirectiveDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ContextMenuItemDirective, selectors: [["", "contextMenuItem", ""]], factory: function ContextMenuItemDirective_Factory(t) { return new (t || ContextMenuItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); }, inputs: { divider: "divider", enabled: "enabled", passive: "passive", visible: "visible", subMenu: "subMenu" }, outputs: { execute: "execute" } });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                /* tslint:disable:directive-selector-type */
                selector: '[contextMenuItem]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { constructor: [], template: [], elementRef: [], divider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], passive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], execute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], isActive: [], disabled: [], evaluateIfFunction: [], setActiveStyles: [], setInactiveStyles: [], triggerExecute: [], subMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] });
/** @nocollapse */
ContextMenuItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
ContextMenuItemDirective.propDecorators = {
    subMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    divider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    passive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CONTEXT_MENU_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('CONTEXT_MENU_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ILinkConfig() { }
if (false) {}
/** @type {?} */
const ARROW_LEFT_KEYCODE = 37;
class ContextMenuContentComponent {
    /**
     * @param {?} changeDetector
     * @param {?} elementRef
     * @param {?} options
     */
    constructor(changeDetector, elementRef, options) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.menuItems = [];
        this.isLeaf = false;
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.openSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.closeLeafMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.closeAllMenus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
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
    ngOnInit() {
        this.menuItems.forEach((/**
         * @param {?} menuItem
         * @return {?}
         */
        menuItem => {
            menuItem.currentItem = this.item;
            this.subscription.add(menuItem.execute.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => this.execute.emit(Object.assign({}, event, { menuItem })))));
        }));
        /** @type {?} */
        const queryList = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"]();
        queryList.reset(this.menuItems);
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["ActiveDescendantKeyManager"](queryList).withWrap();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autoFocus) {
            setTimeout((/**
             * @return {?}
             */
            () => this.focus()));
        }
        this.overlay.updatePosition();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.autoFocus) {
            this.menuElement.nativeElement.focus();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    stopEvent($event) {
        $event.stopPropagation();
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    isMenuItemEnabled(menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.enabled);
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    isMenuItemVisible(menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.visible);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    evaluateIfFunction(value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    }
    /**
     * @param {?} link
     * @return {?}
     */
    isDisabled(link) {
        return link.enabled && !link.enabled(this.item);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyEvent(event) {
        if (!this.isLeaf) {
            return;
        }
        this._keyManager.onKeydown(event);
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    keyboardOpenSubMenu(event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        /** @type {?} */
        const menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onOpenSubMenu(menuItem);
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    keyboardMenuItemSelect(event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        /** @type {?} */
        const menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onMenuItemSelect(menuItem, event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCloseLeafMenu(event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        this.closeLeafMenu.emit({
            exceptRootMenu: event.keyCode === ARROW_LEFT_KEYCODE,
            event
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closeMenu(event) {
        if (event.type === 'click' && event.button === 2) {
            return;
        }
        this.closeAllMenus.emit({ event });
    }
    /**
     * @param {?} menuItem
     * @param {?=} event
     * @return {?}
     */
    onOpenSubMenu(menuItem, event) {
        /** @type {?} */
        const anchorElementRef = this.menuItemElements.toArray()[this._keyManager.activeItemIndex];
        /** @type {?} */
        const anchorElement = anchorElementRef && anchorElementRef.nativeElement;
        this.openSubMenu.emit({
            anchorElement,
            contextMenu: menuItem.subMenu,
            event,
            item: this.item,
            parentContextMenu: this
        });
    }
    /**
     * @param {?} menuItem
     * @param {?} event
     * @return {?}
     */
    onMenuItemSelect(menuItem, event) {
        event.preventDefault();
        event.stopPropagation();
        this.onOpenSubMenu(menuItem, event);
        if (!menuItem.subMenu) {
            menuItem.triggerExecute(this.item, event);
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    cancelEvent(event) {
        if (!event) {
            return;
        }
        /** @type {?} */
        const target = event.target;
        if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) > -1 ||
            target.isContentEditable) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
    }
}
ContextMenuContentComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContextMenuContentComponent, selectors: [["context-menu-content"]], factory: function ContextMenuContentComponent_Factory(t) { return new (t || ContextMenuContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CONTEXT_MENU_OPTIONS, 8)); }, viewQuery: function ContextMenuContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadViewQuery"]()) && (ctx.menuElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadViewQuery"]()) && (ctx.menuItemElements = _t);
    } }, hostBindings: function ContextMenuContentComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.ArrowDown", function ContextMenuContentComponent_keydown_ArrowDown_HostBindingHandler($event) { return ctx.onKeyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.ArrowUp", function ContextMenuContentComponent_keydown_ArrowUp_HostBindingHandler($event) { return ctx.onKeyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.ArrowRight", function ContextMenuContentComponent_keydown_ArrowRight_HostBindingHandler($event) { return ctx.keyboardOpenSubMenu($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.Enter", function ContextMenuContentComponent_keydown_Enter_HostBindingHandler($event) { return ctx.keyboardMenuItemSelect($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.Space", function ContextMenuContentComponent_keydown_Space_HostBindingHandler($event) { return ctx.keyboardMenuItemSelect($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.Escape", function ContextMenuContentComponent_keydown_Escape_HostBindingHandler($event) { return ctx.onCloseLeafMenu($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.ArrowLeft", function ContextMenuContentComponent_keydown_ArrowLeft_HostBindingHandler($event) { return ctx.onCloseLeafMenu($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContextMenuContentComponent_click_HostBindingHandler($event) { return ctx.closeMenu($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function ContextMenuContentComponent_contextmenu_HostBindingHandler($event) { return ctx.closeMenu($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, inputs: { menuItems: "menuItems", isLeaf: "isLeaf", item: "item", event: "event", parentContextMenu: "parentContextMenu", menuClass: "menuClass", overlay: "overlay" }, outputs: { execute: "execute", openSubMenu: "openSubMenu", closeLeafMenu: "closeLeafMenu", closeAllMenus: "closeAllMenus" }, consts: 4, vars: 2, template: function ContextMenuContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", _c3, _c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContextMenuContentComponent_li_3_Template, 4, 7, "li", _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.menuClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵselect"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: [".passive[_ngcontent-%COMP%] {\n        display: block;\n        padding: 3px 20px;\n        clear: both;\n        font-weight: normal;\n        line-height: @line-height-base;\n        white-space: nowrap;\n      }\n      .hasSubMenu[_ngcontent-%COMP%]:before {\n        content: '\u25B6';\n        float: right;\n      }"] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'context-menu-content',
                template: `
    <div
      class="dropdown open show ngx-contextmenu"
      [ngClass]="menuClass"
      tabindex="0"
    >
      <ul
        #menu
        class="dropdown-menu show"
        style="position: static; float: none;"
        tabindex="0"
      >
        <li
          #li
          *ngFor="let menuItem of menuItems; let i = index"
          [class.disabled]="!isMenuItemEnabled(menuItem)"
          [class.divider]="menuItem.divider"
          [class.dropdown-divider]="useBootstrap4 && menuItem.divider"
          [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
          [attr.role]="menuItem.divider ? 'separator' : undefined"
        >
          <a
            *ngIf="!menuItem.divider && !menuItem.passive"
            href
            [class.dropdown-item]="useBootstrap4"
            [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
            [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)"
            [class.hasSubMenu]="!!menuItem.subMenu"
            (click)="onMenuItemSelect(menuItem, $event)"
            (mouseenter)="onOpenSubMenu(menuItem, $event)"
          >
            <ng-template
              [ngTemplateOutlet]="menuItem.template"
              [ngTemplateOutletContext]="{ $implicit: item }"
            ></ng-template>
          </a>

          <span
            (click)="stopEvent($event)"
            (contextmenu)="stopEvent($event)"
            class="passive"
            *ngIf="!menuItem.divider && menuItem.passive"
            [class.dropdown-item]="useBootstrap4"
            [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)"
          >
            <ng-template
              [ngTemplateOutlet]="menuItem.template"
              [ngTemplateOutletContext]="{ $implicit: item }"
            ></ng-template>
          </span>
        </li>
      </ul>
    </div>
  `,
                styles: [`
      .passive {
        display: block;
        padding: 3px 20px;
        clear: both;
        font-weight: normal;
        line-height: @line-height-base;
        white-space: nowrap;
      }
      .hasSubMenu:before {
        content: '\u25B6';
        float: right;
      }
    `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [CONTEXT_MENU_OPTIONS]
            }] }]; }, { constructor: [], changeDetector: [], elementRef: [], options: [], menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isLeaf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], execute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], openSubMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], closeLeafMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], closeAllMenus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], autoFocus: [], useBootstrap4: [], subscription: [], ngOnInit: [], _keyManager: [], ngAfterViewInit: [], ngOnDestroy: [], focus: [], stopEvent: [], isMenuItemEnabled: [], isMenuItemVisible: [], evaluateIfFunction: [], isDisabled: [], onKeyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.ArrowDown', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.ArrowUp', ['$event']]
        }], keyboardOpenSubMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.ArrowRight', ['$event']]
        }], keyboardMenuItemSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.Enter', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.Space', ['$event']]
        }], onCloseLeafMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.Escape', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:keydown.ArrowLeft', ['$event']]
        }], closeMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['document:click', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['document:contextmenu', ['$event']]
        }], onOpenSubMenu: [], onMenuItemSelect: [], cancelEvent: [], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], parentContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['menu', { static: true }]
        }], menuItemElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
            args: ['li']
        }] });
/** @nocollapse */
ContextMenuContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [CONTEXT_MENU_OPTIONS,] }] }
];
ContextMenuContentComponent.propDecorators = {
    menuItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    parentContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isLeaf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    openSubMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    closeLeafMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    closeAllMenus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    menuElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['menu', { static: true },] }],
    menuItemElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: ['li',] }],
    onKeyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.ArrowDown', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.ArrowUp', ['$event'],] }],
    keyboardOpenSubMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.ArrowRight', ['$event'],] }],
    keyboardMenuItemSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.Enter', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.Space', ['$event'],] }],
    onCloseLeafMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.Escape', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keydown.ArrowLeft', ['$event'],] }],
    closeMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['document:click', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['document:contextmenu', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IContextMenuClickEvent() { }
if (false) {}
/**
 * @record
 */
function IContextMenuContext() { }
if (false) {}
/**
 * @record
 */
function CloseLeafMenuEvent() { }
if (false) {}
/**
 * @record
 */
function OverlayRefWithContextMenu() { }
if (false) {}
/**
 * @record
 */
function CancelContextMenuEvent() { }
if (false) {}
/**
 * @record
 */
function ExecuteContextMenuEvent() { }
if (false) {}
class ContextMenuService {
    /**
     * @param {?} overlay
     * @param {?} scrollStrategy
     */
    constructor(overlay, scrollStrategy) {
        this.overlay = overlay;
        this.scrollStrategy = scrollStrategy;
        this.isDestroyingLeafMenu = false;
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.triggerClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.close = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.overlays = [];
        this.fakeElement = {
            getBoundingClientRect: (/**
             * @return {?}
             */
            () => ({
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0,
            }))
        };
    }
    /**
     * @param {?} context
     * @return {?}
     */
    openContextMenu(context) {
        const { anchorElement, event, parentContextMenu } = context;
        if (!parentContextMenu) {
            /** @type {?} */
            const mouseEvent = (/** @type {?} */ (event));
            this.fakeElement.getBoundingClientRect = (/**
             * @return {?}
             */
            () => ({
                bottom: mouseEvent.clientY,
                height: 0,
                left: mouseEvent.clientX,
                right: mouseEvent.clientX,
                top: mouseEvent.clientY,
                width: 0,
            }));
            this.closeAllContextMenus({ eventType: 'cancel', event });
            /** @type {?} */
            const positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"](anchorElement || this.fakeElement), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
                .withFallbackPosition({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' });
            this.overlays = [this.overlay.create({
                    positionStrategy,
                    panelClass: 'ngx-contextmenu',
                    scrollStrategy: this.scrollStrategy.close(),
                })];
            this.attachContextMenu(this.overlays[0], context);
        }
        else {
            /** @type {?} */
            const positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"](event ? event.target : anchorElement), { originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' });
            /** @type {?} */
            const newOverlay = this.overlay.create({
                positionStrategy,
                panelClass: 'ngx-contextmenu',
                scrollStrategy: this.scrollStrategy.close(),
            });
            this.destroySubMenus(parentContextMenu);
            this.overlays = this.overlays.concat(newOverlay);
            this.attachContextMenu(newOverlay, context);
        }
    }
    /**
     * @param {?} overlay
     * @param {?} context
     * @return {?}
     */
    attachContextMenu(overlay, context) {
        const { event, item, menuItems, menuClass } = context;
        /** @type {?} */
        const contextMenuContent = overlay.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["ComponentPortal"](ContextMenuContentComponent));
        contextMenuContent.instance.event = event;
        contextMenuContent.instance.item = item;
        contextMenuContent.instance.menuItems = menuItems;
        contextMenuContent.instance.overlay = overlay;
        contextMenuContent.instance.isLeaf = true;
        contextMenuContent.instance.menuClass = menuClass;
        ((/** @type {?} */ (overlay))).contextMenu = contextMenuContent.instance;
        /** @type {?} */
        const subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        subscriptions.add(contextMenuContent.instance.execute.asObservable()
            .subscribe((/**
         * @param {?} executeEvent
         * @return {?}
         */
        (executeEvent) => this.closeAllContextMenus(Object.assign({ eventType: 'execute' }, executeEvent)))));
        subscriptions.add(contextMenuContent.instance.closeAllMenus.asObservable()
            .subscribe((/**
         * @param {?} closeAllEvent
         * @return {?}
         */
        (closeAllEvent) => this.closeAllContextMenus(Object.assign({ eventType: 'cancel' }, closeAllEvent)))));
        subscriptions.add(contextMenuContent.instance.closeLeafMenu.asObservable()
            .subscribe((/**
         * @param {?} closeLeafMenuEvent
         * @return {?}
         */
        closeLeafMenuEvent => this.destroyLeafMenu(closeLeafMenuEvent))));
        subscriptions.add(contextMenuContent.instance.openSubMenu.asObservable()
            .subscribe((/**
         * @param {?} subMenuEvent
         * @return {?}
         */
        (subMenuEvent) => {
            this.destroySubMenus(contextMenuContent.instance);
            if (!subMenuEvent.contextMenu) {
                contextMenuContent.instance.isLeaf = true;
                return;
            }
            contextMenuContent.instance.isLeaf = false;
            this.show.next(subMenuEvent);
        })));
        contextMenuContent.onDestroy((/**
         * @return {?}
         */
        () => {
            menuItems.forEach((/**
             * @param {?} menuItem
             * @return {?}
             */
            menuItem => menuItem.isActive = false));
            subscriptions.unsubscribe();
        }));
        contextMenuContent.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?} closeEvent
     * @return {?}
     */
    closeAllContextMenus(closeEvent) {
        if (this.overlays) {
            this.close.next(closeEvent);
            this.overlays.forEach((/**
             * @param {?} overlay
             * @param {?} index
             * @return {?}
             */
            (overlay, index) => {
                overlay.detach();
                overlay.dispose();
            }));
        }
        this.overlays = [];
    }
    /**
     * @return {?}
     */
    getLastAttachedOverlay() {
        /** @type {?} */
        let overlay = this.overlays[this.overlays.length - 1];
        while (this.overlays.length > 1 && overlay && !overlay.hasAttached()) {
            overlay.detach();
            overlay.dispose();
            this.overlays = this.overlays.slice(0, -1);
            overlay = this.overlays[this.overlays.length - 1];
        }
        return overlay;
    }
    /**
     * @param {?=} __0
     * @return {?}
     */
    destroyLeafMenu({ exceptRootMenu, event } = {}) {
        if (this.isDestroyingLeafMenu) {
            return;
        }
        this.isDestroyingLeafMenu = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const overlay = this.getLastAttachedOverlay();
            if (this.overlays.length > 1 && overlay) {
                overlay.detach();
                overlay.dispose();
            }
            if (!exceptRootMenu && this.overlays.length > 0 && overlay) {
                this.close.next({ eventType: 'cancel', event });
                overlay.detach();
                overlay.dispose();
            }
            /** @type {?} */
            const newLeaf = this.getLastAttachedOverlay();
            if (newLeaf) {
                newLeaf.contextMenu.isLeaf = true;
            }
            this.isDestroyingLeafMenu = false;
        }));
    }
    /**
     * @param {?} contextMenu
     * @return {?}
     */
    destroySubMenus(contextMenu) {
        /** @type {?} */
        const overlay = contextMenu.overlay;
        /** @type {?} */
        const index = this.overlays.indexOf(overlay);
        this.overlays.slice(index + 1).forEach((/**
         * @param {?} subMenuOverlay
         * @return {?}
         */
        subMenuOverlay => {
            subMenuOverlay.detach();
            subMenuOverlay.dispose();
        }));
    }
    /**
     * @param {?} contextMenuContent
     * @return {?}
     */
    isLeafMenu(contextMenuContent) {
        /** @type {?} */
        const overlay = this.getLastAttachedOverlay();
        return contextMenuContent.overlay === overlay;
    }
}
ContextMenuService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ContextMenuService, factory: function ContextMenuService_Factory(t) { return new (t || ContextMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollStrategyOptions"])); }, providedIn: null });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollStrategyOptions"] }]; }, { constructor: [], overlay: [], scrollStrategy: [], isDestroyingLeafMenu: [], show: [], triggerClose: [], close: [], overlays: [], fakeElement: [], openContextMenu: [], attachContextMenu: [], closeAllContextMenus: [], getLastAttachedOverlay: [], destroyLeafMenu: [], destroySubMenus: [], isLeafMenu: [] });
/** @nocollapse */
ContextMenuService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollStrategyOptions"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ILinkConfig$1() { }
if (false) {}
/**
 * @record
 */
function MouseLocation() { }
if (false) {}
class ContextMenuComponent {
    /**
     * @param {?} _contextMenuService
     * @param {?} changeDetector
     * @param {?} elementRef
     * @param {?} options
     */
    constructor(_contextMenuService, changeDetector, elementRef, options) {
        this._contextMenuService = _contextMenuService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.menuClass = "";
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.disabled = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.visibleMenuItems = [];
        this.links = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
        this.subscription.add(_contextMenuService.show.subscribe((/**
         * @param {?} menuEvent
         * @return {?}
         */
        menuEvent => {
            this.onMenuEvent(menuEvent);
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} menuEvent
     * @return {?}
     */
    onMenuEvent(menuEvent) {
        if (this.disabled) {
            return;
        }
        const { contextMenu, event, item } = menuEvent;
        if (contextMenu && contextMenu !== this) {
            return;
        }
        this.event = event;
        this.item = item;
        this.setVisibleMenuItems();
        this._contextMenuService.openContextMenu(Object.assign({}, menuEvent, { menuItems: this.visibleMenuItems, menuClass: this.menuClass }));
        this._contextMenuService.close.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe((/**
         * @param {?} closeEvent
         * @return {?}
         */
        closeEvent => this.close.emit(closeEvent)));
        this.open.next(menuEvent);
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    isMenuItemVisible(menuItem) {
        return this.evaluateIfFunction(menuItem.visible);
    }
    /**
     * @return {?}
     */
    setVisibleMenuItems() {
        this.visibleMenuItems = this.menuItems.filter((/**
         * @param {?} menuItem
         * @return {?}
         */
        menuItem => this.isMenuItemVisible(menuItem)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    evaluateIfFunction(value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    }
}
ContextMenuComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContextMenuComponent, selectors: [["context-menu"]], factory: function ContextMenuComponent_Factory(t) { return new (t || ContextMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ContextMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CONTEXT_MENU_OPTIONS, 8)); }, contentQueries: function ContextMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, ContextMenuItemDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadContentQuery"]()) && (ctx.menuItems = _t);
    } }, viewQuery: function ContextMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadViewQuery"]()) && (ctx.menuElement = _t.first);
    } }, inputs: { menuClass: "menuClass", autoFocus: "autoFocus", useBootstrap4: "useBootstrap4", disabled: "disabled" }, outputs: { close: "close", open: "open" }, consts: 0, vars: 0, template: function ContextMenuComponent_Template(rf, ctx) { }, styles: ["\n    .cdk-overlay-container {\n      position: fixed;\n      z-index: 1000;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .ngx-contextmenu.cdk-overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      box-sizing: border-box;\n    }\n  "], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                selector: 'context-menu',
                template: ` `,
                styles: [`
    .cdk-overlay-container {
      position: fixed;
      z-index: 1000;
      pointer-events: none;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .ngx-contextmenu.cdk-overlay-pane {
      position: absolute;
      pointer-events: auto;
      box-sizing: border-box;
    }
  `]
            }]
    }], function () { return [{ type: ContextMenuService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [CONTEXT_MENU_OPTIONS]
            }] }]; }, { constructor: [], _contextMenuService: [], changeDetector: [], elementRef: [], options: [], menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], autoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], useBootstrap4: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], visibleMenuItems: [], links: [], subscription: [], ngOnDestroy: [], onMenuEvent: [], event: [], item: [], isMenuItemVisible: [], setVisibleMenuItems: [], evaluateIfFunction: [], menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [ContextMenuItemDirective]
        }], menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['menu', { static: false }]
        }] });
/** @nocollapse */
ContextMenuComponent.ctorParameters = () => [
    { type: ContextMenuService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [CONTEXT_MENU_OPTIONS,] }] }
];
ContextMenuComponent.propDecorators = {
    menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    autoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    useBootstrap4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    menuItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [ContextMenuItemDirective,] }],
    menuElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['menu', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContextMenuAttachDirective {
    /**
     * @param {?} contextMenuService
     */
    constructor(contextMenuService) {
        this.contextMenuService = contextMenuService;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContextMenu(event) {
        if (!this.contextMenu.disabled) {
            this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event,
                item: this.contextMenuSubject,
            });
            event.preventDefault();
            event.stopPropagation();
        }
    }
}
ContextMenuAttachDirective.ngDirectiveDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ContextMenuAttachDirective, selectors: [["", "contextMenu", ""]], factory: function ContextMenuAttachDirective_Factory(t) { return new (t || ContextMenuAttachDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ContextMenuService)); }, hostBindings: function ContextMenuAttachDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("contextmenu", function ContextMenuAttachDirective_contextmenu_HostBindingHandler($event) { return ctx.onContextMenu($event); });
    } }, inputs: { contextMenuSubject: "contextMenuSubject", contextMenu: "contextMenu" } });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuAttachDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[contextMenu]'
            }]
    }], function () { return [{ type: ContextMenuService }]; }, { constructor: [], contextMenuService: [], onContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['contextmenu', ['$event']]
        }], contextMenuSubject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] });
/** @nocollapse */
ContextMenuAttachDirective.ctorParameters = () => [
    { type: ContextMenuService }
];
ContextMenuAttachDirective.propDecorators = {
    contextMenuSubject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    contextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['contextmenu', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContextMenuModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
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
    }
}
ContextMenuModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContextMenuModule });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContextMenuModule, { declarations: function () { return [ContextMenuAttachDirective,
        ContextMenuComponent,
        ContextMenuContentComponent,
        ContextMenuItemDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]]; }, exports: function () { return [ContextMenuAttachDirective,
        ContextMenuComponent,
        ContextMenuItemDirective]; } });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContextMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
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
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                ]
            }]
    }], null, null);
ContextMenuModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ContextMenuModule_Factory(t) { return new (t || ContextMenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        ]] });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IContextMenuOptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





//# sourceMappingURL=ngx-contextmenu.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/demo/app.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/demo/app.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Angular2 Context Menu Demo</h1>\n<div (click)=\"$event.preventDefault()\" style=\"margin:20px; padding:20px\">\n  <div style=\"position: relative\">\n    <div style=\"margin:20px; padding:20px;transform: translate3d(0px, 0px, 0px)\">\n      <div (click)=\"$event.preventDefault()\" style=\"transform: translate3d(10px, -10px, 0px)\">\n        <h3>Base Case</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"basicMenu\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <a href (click)=\"disableBasicMenu = !disableBasicMenu\">{{ disableBasicMenu ? 'enable' : 'disable'}} basic menu</a>\n        <h3>Static</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"static\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #static (close)=\"showMessage('closed static', $event)\" (open)=\"showMessage('open', $event)\">\n          <ng-template contextMenuItem [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, someone')\">\n            Say hi\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, someone')\">\n            This will never show...\n          </ng-template>\n          <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n          <ng-template contextMenuItem [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage('Someone said: something')\">\n            Bye, someone\n          </ng-template>\n        </context-menu>\n        <div style=\"height: 100px; border: solid 1px #ccc; overflow: auto;\" cdkScrollable>\n          <h3>Enabled and Visible</h3>\n          <ul>\n            <li *ngFor=\"let item of items\" [contextMenu]=\"enableAndVisible\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n          </ul>\n          <context-menu #enableAndVisible (close)=\"showMessage('closed enableAndVisible', $event)\">\n            <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n              Say hi, {{item?.name}}! With access to the outside context: {{ outsideValue }}\n            </ng-template>\n            <ng-template contextMenuItem [visible]=\"false\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n              This will never show...\n            </ng-template>\n            <ng-template contextMenuItem [divider]=\"true\"></ng-template>\n            <ng-template contextMenuItem let-item [visible]=\"true\" [enabled]=\"true\" (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n              Bye, {{item?.name}}\n            </ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n            <ng-template contextMenuItem>Filler</ng-template>\n          </context-menu>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n          <br>\n        </div>\n        <h3>Enabled and Visible as Functions</h3>\n        <ul>\n          <li *ngFor=\"let item of items\" [contextMenu]=\"withFunctions\" [contextMenuSubject]=\"item\">Right Click: {{item?.name}}</li>\n        </ul>\n        <context-menu #withFunctions>\n          <ng-template contextMenuItem [enabled]=\"onlyJohn\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (enabled for John)\n          </ng-template>\n          <ng-template contextMenuItem [visible]=\"onlyJoe\" (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n            Say hi! (visible for Joe)\n          </ng-template>\n          <ng-template contextMenuItem let-item (execute)=\"showMessage($event.item.name + ' said: ' + $event.item.otherProperty)\">\n            Bye, {{item?.name}}\n          </ng-template>\n        </context-menu>\n        <br>\n        <h3>Custom styling</h3>\n        <ul>\n          <li [contextMenu]=\"customClassMenu\" [contextMenuSubject]=\"item\">Right click to see styled menu</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div style=\"position:fixed;top:35px;height:100%;width:100%;display:table; border-collapse: collapse;border:none;outline:none; pointer-events: none\">\n  <div style=\"display: table-cell;width:200px;vertical-align: top\">\n    <div style=\"position:absolute; top: 20px;\">\n      <div style=\"position:fixed;top:200px;left:-200px\">\n        <context-menu #basicMenu [disabled]=\"disableBasicMenu\" style=\"pointer-events:all\">\n          <ng-template contextMenuItem [subMenu]=\"saySubMenu\">\n            Say...\n          </ng-template>\n          <context-menu #saySubMenu>\n            <ng-template contextMenuItem [subMenu]=\"sayHiSubMenu\">\n              ...hi!\n            </ng-template>\n            <context-menu #sayHiSubMenu>\n              <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n                ...hi!\n              </ng-template>\n              <ng-template contextMenuItem (execute)=\"showMessage('Hola, ' + $event.item.name)\">\n                ...hola!\n              </ng-template>\n              <ng-template contextMenuItem (execute)=\"showMessage('Salut, ' + $event.item.name)\">\n                ...salut!\n              </ng-template>\n            </context-menu>\n            <ng-template contextMenuItem (execute)=\"showMessage('Hola, ' + $event.item.name)\">\n              ...hola!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Salut, ' + $event.item.name)\">\n              ...salut!\n            </ng-template>\n          </context-menu>\n          <ng-template contextMenuItem let-item [subMenu]=\"byeSubMenu\">\n            Bye, {{item?.name}}\n          </ng-template>\n          <context-menu #byeSubMenu>\n            <ng-template contextMenuItem (execute)=\"showMessage('Bye, ' + $event.item.name)\">\n              ...bye!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Ciao, ' + $event.item.name)\">\n              ...ciao!\n            </ng-template>\n            <ng-template contextMenuItem (execute)=\"showMessage('Au revoir, ' + $event.item.name)\">\n              ...au revoir!\n            </ng-template>\n          </context-menu>\n          <ng-template contextMenuItem (execute)=\"showMessage('Simple')\">\n            Simple\n          </ng-template>\n          <ng-template contextMenuItem passive=\"true\">\n            Input something:\n            <input type=\"text\">\n          </ng-template>\n        </context-menu>\n      </div>\n    </div>\n  </div>\n</div>\n\n<context-menu #customClassMenu [menuClass]=\"'mystyle'\" style=\"pointer-events:all\">\n  <ng-template contextMenuItem (execute)=\"showMessage('Styled menu1')\">\n    This menu is styled\n  </ng-template>\n  <ng-template contextMenuItem (execute)=\"showMessage('Styled menu2')\">\n    with a custom class\n  </ng-template>\n  <ng-template contextMenuItem (execute)=\"showMessage('Styled menu3')\">\n    that needs to be global\n  </ng-template>\n</context-menu>\n\n<div class=\"dashboardContainer\" style=\"pointer-events: none\">\n  <div class=\"componentsContainer\">\n    <div class=\"componentContainer\" *ngFor=\"let item of items\" style=\"pointer-events: all\" [ngStyle]=\"item.layout\" [contextMenu]=\"componentMenu\"\n      [contextMenuSubject]=\"item\">\n      {{ item.name }}\n    </div>\n    <context-menu #componentMenu>\n      <ng-template contextMenuItem (execute)=\"showMessage('Hi, ' + $event.item.name)\">\n        Say hi!\n      </ng-template>\n      <ng-template contextMenuItem let-item (execute)=\"showMessage($event.event)\">\n        Bye, {{item?.name}}\n      </ng-template>\n    </context-menu>\n  </div>\n</div>\n<ul>\n  <li *ngFor=\"let item of items\" [contextMenu]=\"itemContextMenu\" [contextMenuSubject]=\"item\">\n    {{item.name}}\n    <context-menu #itemContextMenu>\n      <ng-template *ngFor=\"let action of item.actions\" contextMenuItem let-item [visible]=\"action.visible\" [enabled]=\"action.enabled\"\n        [divider]=\"action.divider\" (execute)=\"action.execute($event.item)\">\n        {{ action.html(item) }}\n      </ng-template>\n      <ng-template contextMenuItem [subMenu]=\"someSubMenu\">\n        Submenu\n      </ng-template>\n      <context-menu #someSubMenu>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n        <ng-template contextMenuItem>Filler</ng-template>\n      </context-menu>\n    </context-menu>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-contextmenu */ "./dist/lib/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");



let AppComponent = class AppComponent {
    constructor(contextMenuService) {
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
                        execute: (item) => console.log(item),
                        html: (item) => `John custom: ${item.name}`,
                        visible: true,
                    }, {
                        divider: true,
                        visible: true,
                    }, {
                        enabled: true,
                        execute: (item) => console.log(item),
                        html: (item) => `John custom: ${item.name}`,
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
                        execute: (item) => { window.fake.doesntexist = 2; },
                        html: (item) => `Joe something: ${item.name}`,
                        visible: true,
                    }],
            },
        ];
        this.outsideValue = 'something';
    }
    onContextMenu($event, item) {
        this.contextMenuService.show.next({ event: $event, item: item });
        $event.preventDefault();
    }
    showMessage(message, data) {
        console.log(message, data);
    }
    onlyJohn(item) {
        return item.name === 'John';
    }
    onlyJoe(item) {
        return item.name === 'Joe';
    }
    log(message) {
        console.log(message);
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__["ContextMenuService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicMenu', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__["ContextMenuComponent"])
], AppComponent.prototype, "basicMenu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('enableAndVisible', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__["ContextMenuComponent"])
], AppComponent.prototype, "enableAndVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('withFunctions', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__["ContextMenuComponent"])
], AppComponent.prototype, "withFunctions", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-context-menu-demo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/demo/app.component.html")).default,
        styles: ["\n.dashboardContainer {\nwidth: 100%;\nheight: 100%;\nposition: fixed;\n}\n\n.componentsContainer {\nposition: fixed;\nbottom: 0;\ntop: 100px;\nwidth: 100%; }\n\n.componentContainer {\noverflow: auto;\nposition: absolute; }\n"]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__["ContextMenuService"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-contextmenu */ "./dist/lib/__ivy_ngcc__/fesm2015/ngx-contextmenu.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/demo/app.component.ts");
/* harmony import */ var _child1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./child1.component */ "./src/demo/child1.component.ts");
/* harmony import */ var _child2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./child2.component */ "./src/demo/child2.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _child1_component__WEBPACK_IMPORTED_MODULE_8__["ChildOneComponent"], _child2_component__WEBPACK_IMPORTED_MODULE_9__["ChildTwoComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuModule"].forRoot({
                autoFocus: true
                // useBootstrap4: true,
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                {
                    path: 'two',
                    component: _child2_component__WEBPACK_IMPORTED_MODULE_9__["ChildTwoComponent"]
                },
                {
                    path: '**',
                    component: _child1_component__WEBPACK_IMPORTED_MODULE_8__["ChildOneComponent"]
                }
            ]),
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatchModule"]
        ],
        providers: [
        /* TODO: Providers go here */
        ]
    })
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ChildOneComponent = class ChildOneComponent {
    constructor(router) {
        this.router = router;
        this.items = [{
                name: 'One',
                url: '/one',
            }, {
                name: 'Two',
                url: '/two',
            }];
    }
    showMessage(message) {
        console.log(message);
    }
    go(item) {
        this.router.navigateByUrl(item.url);
    }
};
ChildOneComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ChildOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'child-one',
        template: `
    <h3>Routing One</h3>
    <ul>
      <li *ngFor="let item of items" [contextMenu]="routingMenu" [contextMenuSubject]="item">Right Click: {{item?.name}}</li>
    </ul>
    <context-menu #routingMenu>
      <ng-template contextMenuItem (execute)="showMessage('Hi, ' + $event.item.name); go($event.item)">
        Go!
      </ng-template>
    </context-menu>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], ChildOneComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ChildTwoComponent = class ChildTwoComponent {
    constructor(router) {
        this.router = router;
        this.items = [{
                name: 'One',
                url: '/one',
            }, {
                name: 'Two',
                url: '/two',
            }];
    }
    showMessage(message) {
        console.log(message);
    }
    go(item) {
        this.router.navigateByUrl(item.url);
    }
};
ChildTwoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChildTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'child-two',
        template: `
    <h3>Routing Two</h3>
    <ul>
      <li *ngFor="let item of items" [contextMenu]="routingMenu" [contextMenuSubject]="item">Right Click: {{item?.name}}</li>
    </ul>
    <context-menu #routingMenu>
      <ng-template contextMenuItem (execute)="showMessage('Hi, ' + $event.item.name); go($event.item)">
        Go!
      </ng-template>
    </context-menu>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ChildTwoComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _demo_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/app.module */ "./src/demo/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_demo_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isaac/Documents/code/ngx-contextmenu/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map