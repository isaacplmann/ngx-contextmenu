import { Directive, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
var ContextMenuItemDirective = (function () {
    function ContextMenuItemDirective(template) {
        this.template = template;
        this.divider = false;
        this.passive = false;
        this.enabled = true;
        this.visible = true;
        this.execute = new EventEmitter();
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
export { ContextMenuItemDirective };
ContextMenuItemDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable:directive-selector-type */
                selector: '[contextMenuItem]',
            },] },
];
/** @nocollapse */
ContextMenuItemDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
]; };
ContextMenuItemDirective.propDecorators = {
    'divider': [{ type: Input },],
    'passive': [{ type: Input },],
    'enabled': [{ type: Input },],
    'visible': [{ type: Input },],
    'execute': [{ type: Output },],
};
//# sourceMappingURL=contextMenu.item.directive.js.map