import {
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnDestroy,
    Optional,
    Output,
    QueryList,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { IContextMenuOptions } from './contextMenu.options';
import { ContextMenuService, IContextMenuClickEvent, CloseContextMenuEvent } from './contextMenu.service';
import { CONTEXT_MENU_OPTIONS } from './contextMenu.tokens';

export interface ILinkConfig {
  click: (item: any, $event?: MouseEvent) => void;
  enabled?: (item: any) => boolean;
  html: (item: any) => string;
}
export interface MouseLocation {
  left?: string;
  marginLeft?: string;
  marginTop?: string;
  top?: string;
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'context-menu',
  styles: [`
    .cdk-overlay-container {
      position: fixed;
      z-index: 1000;
      pointer-events: none;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .ngx-contextmenu.cdk-overlay-pane {
      position: absolute;
      pointer-events: auto;
      box-sizing: border-box;
    }
  `],
  template: ` `,
})
export class ContextMenuComponent implements OnDestroy {
  @Input() public menuClass = "";
  @Input() public autoFocus = false;
  @Input() public useBootstrap4 = false;
  @Input() public disabled = false;
  @Output() public close: EventEmitter<CloseContextMenuEvent> = new EventEmitter();
  @Output() public open: EventEmitter<IContextMenuClickEvent> = new EventEmitter();
  @ContentChildren(ContextMenuItemDirective) public menuItems: QueryList<ContextMenuItemDirective>;
  @ViewChild('menu') public menuElement: ElementRef;
  public visibleMenuItems: ContextMenuItemDirective[] = [];

  public links: ILinkConfig[] = [];
  public item: any;
  public event: MouseEvent | KeyboardEvent;
  private subscription: Subscription = new Subscription();

  constructor(
    private _contextMenuService: ContextMenuService,
    private changeDetector: ChangeDetectorRef,
    private elementRef: ElementRef,
    @Optional()
    @Inject(CONTEXT_MENU_OPTIONS) private options: IContextMenuOptions,
  ) {
    if (options) {
      this.autoFocus = options.autoFocus;
      this.useBootstrap4 = options.useBootstrap4;
    }
    this.subscription.add(_contextMenuService.show.subscribe(menuEvent => {
      this.onMenuEvent(menuEvent);
    }));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onMenuEvent(menuEvent: IContextMenuClickEvent): void {
    if (this.disabled) {
      return;
    }
    const { contextMenu, event, item } = menuEvent;
    if (contextMenu && contextMenu !== this) {
      return;
    }
    this.event = event;
    this.item = item;
    this.setVisibleMenuItems();
    this._contextMenuService.openContextMenu({ ...menuEvent, menuItems: this.visibleMenuItems, menuClass: this.menuClass });
    this._contextMenuService.close.asObservable().pipe(first()).subscribe(closeEvent => this.close.emit(closeEvent));
    this.open.next(menuEvent);
  }

  public isMenuItemVisible(menuItem: ContextMenuItemDirective): boolean {
    return this.evaluateIfFunction(menuItem.visible);
  }

  public setVisibleMenuItems(): void {
    this.visibleMenuItems = this.menuItems.filter(menuItem => this.isMenuItemVisible(menuItem));
  }

  public evaluateIfFunction(value: any): any {
    if (value instanceof Function) {
      return value(this.item);
    }
    return value;
  }
}
