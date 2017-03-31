import { ContextMenuContentComponent } from './contextMenuContent.component';
import { InjectionService } from './injection/injection.service';
import { ContextMenuInjectorService } from './contextMenuInjector.service';
import { CONTEXT_MENU_OPTIONS } from './contextMenu.options';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { ContextMenuService } from './contextMenu.service';
import { ContextMenuAttachDirective } from './contextMenu.attach.directive';
var ContextMenuModule = (function () {
    function ContextMenuModule() {
    }
    ContextMenuModule.forRoot = function (options) {
        return {
            ngModule: ContextMenuModule,
            providers: [
                {
                    provide: CONTEXT_MENU_OPTIONS,
                    useValue: options,
                },
            ],
        };
    };
    return ContextMenuModule;
}());
export { ContextMenuModule };
ContextMenuModule.decorators = [
    { type: NgModule, args: [{
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
                    CommonModule,
                ],
                providers: [
                    ContextMenuService,
                    ContextMenuInjectorService,
                    InjectionService,
                ],
            },] },
];
/** @nocollapse */
ContextMenuModule.ctorParameters = function () { return []; };
export default ContextMenuModule;
//# sourceMappingURL=ngx-contextmenu.js.map