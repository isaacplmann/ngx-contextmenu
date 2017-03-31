import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { CONTEXT_MENU_OPTIONS } from './contextMenu.options';
import { ContextMenuService } from './contextMenu.service';
import { ContextMenuInjectorService } from './contextMenuInjector.service';
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Optional, Output, ViewChild } from '@angular/core';
var ContextMenuComponent = (function () {
    function ContextMenuComponent(_contextMenuService, changeDetector, elementRef, options, contextMenuInjector) {
        var _this = this;
        this._contextMenuService = _contextMenuService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.contextMenuInjector = contextMenuInjector;
        this.useBootstrap4 = false;
        this.close = new EventEmitter();
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
export { ContextMenuComponent };
ContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'context-menu',
                template: "",
            },] },
];
/** @nocollapse */
ContextMenuComponent.ctorParameters = function () { return [
    { type: ContextMenuService, },
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CONTEXT_MENU_OPTIONS,] },] },
    { type: ContextMenuInjectorService, },
]; };
ContextMenuComponent.propDecorators = {
    'useBootstrap4': [{ type: Input },],
    'close': [{ type: Output },],
    'menuItems': [{ type: ContentChildren, args: [ContextMenuItemDirective,] },],
    'menuElement': [{ type: ViewChild, args: ['menu',] },],
};
//# sourceMappingURL=contextMenu.component.js.map