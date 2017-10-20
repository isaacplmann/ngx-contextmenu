<<<<<<< HEAD
export interface IContextMenuOptions {
  useBootstrap4?: boolean;
  autoFocus?: boolean;
}
=======
import { InjectionToken } from '@angular/core';

export const CONTEXT_MENU_OPTIONS = new InjectionToken<IContextMenuOptions>('CONTEXT_MENU_OPTIONS');

export interface IContextMenuOptions {
  useBootstrap4?: boolean;
  autoFocus?: boolean;
}
>>>>>>> master
