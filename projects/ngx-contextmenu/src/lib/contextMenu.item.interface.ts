import {Highlightable} from '@angular/cdk/a11y';
import {Observable, Observer} from 'rxjs';
import {TemplateRef} from '@angular/core';

export interface ContextMenuItemInterface extends  Highlightable {
  divider: boolean;
  enabled: boolean | ((item: any) => boolean);
  passive: boolean;
  visible: boolean | ((item: any) => boolean);
  execute: Observable<{ event: MouseEvent | KeyboardEvent, item: any }>;

  subMenu: any;
  currentItem: any;
  isActive: boolean;
  readonly disabled: boolean;

  template: TemplateRef<{ item: any }>;

  setActiveStyles(): void;
  setInactiveStyles(): void;

  triggerExecute(item: any, $event?: MouseEvent | KeyboardEvent): void;
}
