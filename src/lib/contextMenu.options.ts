import { OpaqueToken } from '@angular/core';

export interface IContextMenuOptions {
  useBootstrap4?: boolean;
  autoFocus?: boolean;
}
export const CONTEXT_MENU_OPTIONS = new OpaqueToken('CONTEXT_MENU_OPTIONS');
