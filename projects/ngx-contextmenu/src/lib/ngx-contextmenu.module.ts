import {
  FullscreenOverlayContainer,
  OverlayContainer,
  OverlayModule,
} from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ContextMenuContentComponent } from './components/context-menu-content/context-menu-content.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { IContextMenuOptions } from './context-menu.options';
import { CONTEXT_MENU_OPTIONS } from './context-menu.tokens';
import { ContextMenuItemDirective } from './directives/context-menu-item/context-menu-item.directive';
import { ContextMenuAttachDirective } from './directives/context-menu/context-menu.directive';
import { ContextMenuService } from './services/context-menu/context-menu.service';

@NgModule({
  declarations: [
    ContextMenuAttachDirective,
    ContextMenuComponent,
    ContextMenuContentComponent,
    ContextMenuItemDirective,
  ],
  exports: [
    ContextMenuAttachDirective,
    ContextMenuComponent,
    ContextMenuItemDirective,
  ],
  imports: [CommonModule, OverlayModule],
})
export class ContextMenuModule {
  public static forRoot(
    options?: IContextMenuOptions
  ): ModuleWithProviders<ContextMenuModule> {
    return {
      ngModule: ContextMenuModule,
      providers: [
        ContextMenuService,
        {
          provide: CONTEXT_MENU_OPTIONS,
          useValue: options,
        },
        { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
      ],
    };
  }
}
