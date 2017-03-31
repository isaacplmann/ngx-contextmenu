import { ContextMenuContentComponent } from './contextMenuContent.component';
import { InjectionService } from './injection/injection.service';
import { ContextMenuInjectorService } from './contextMenuInjector.service';
import { CONTEXT_MENU_OPTIONS, IContextMenuOptions } from './contextMenu.options';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { ContextMenuService } from './contextMenu.service';
import { ContextMenuAttachDirective } from './contextMenu.attach.directive';

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
