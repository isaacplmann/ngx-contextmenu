import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
var ContextMenuService = (function () {
    function ContextMenuService() {
        this.show = new Subject();
    }
    return ContextMenuService;
}());
export { ContextMenuService };
ContextMenuService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ContextMenuService.ctorParameters = function () { return []; };
//# sourceMappingURL=contextMenu.service.js.map