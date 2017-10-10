import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ContextMenuAttachDirective } from './contextMenu.attach.directive';
import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { CONTEXT_MENU_OPTIONS, IContextMenuOptions } from './contextMenu.options';
import { ContextMenuService } from './contextMenu.service';
import { ContextMenuContentComponent } from './contextMenuContent.component';
import { ContextMenuInjectorService } from './contextMenuInjector.service';
import { InjectionService } from './injection/injection.service';

@NgModule({
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
    OverlayModule,
  ],
  providers: [
    ContextMenuService,
    ContextMenuInjectorService,
    InjectionService,
  ],
})
export class ContextMenuModule {
  public static forRoot(options: IContextMenuOptions): ModuleWithProviders {
    return {
      ngModule: ContextMenuModule,
      providers: [
        {
          provide: CONTEXT_MENU_OPTIONS,
          useValue: options,
        },
      ],
    };
  }
}
export default ContextMenuModule;
