import { Highlightable } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { TemplateRef } from '@angular/core';

export interface ContextMenuItemInterface extends Highlightable {
  divider: boolean;
  enabled: boolean | ((item: any) => boolean);
  passive: boolean;
  visible: boolean | ((item: any) => boolean);
  callback: (item: any, event: MouseEvent | KeyboardEvent) => void;

  subMenu: any;
  currentItem: any;
  isActive: boolean;
  readonly disabled: boolean;

  template?: TemplateRef<{ item: any }>;
  text?: string;

  setActiveStyles(): void;

  setInactiveStyles(): void;
}
