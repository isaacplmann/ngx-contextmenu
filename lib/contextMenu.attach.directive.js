import { ContextMenuService } from './contextMenu.service';
import { Directive, HostListener, Input } from '@angular/core';
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
export { ContextMenuAttachDirective };
ContextMenuAttachDirective.decorators = [
    { type: Directive, args: [{
                selector: '[contextMenu]',
            },] },
];
/** @nocollapse */
ContextMenuAttachDirective.ctorParameters = function () { return [
    { type: ContextMenuService, },
]; };
ContextMenuAttachDirective.propDecorators = {
    'contextMenuSubject': [{ type: Input },],
    'contextMenu': [{ type: Input },],
    'onContextMenu': [{ type: HostListener, args: ['contextmenu', ['$event'],] },],
};
//# sourceMappingURL=contextMenu.attach.directive.js.map