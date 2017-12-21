import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ContextMenuAttachDirective } from './contextMenu.attach.directive';
import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { IContextMenuOptions } from './contextMenu.options';
import { ContextMenuService } from './contextMenu.service';
import { CONTEXT_MENU_OPTIONS } from './contextMenu.tokens';
import { ContextMenuContentComponent } from './contextMenuContent.component';

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
})
export class ContextMenuModule {
  public static forRoot(options?: IContextMenuOptions): ModuleWithProviders {
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
