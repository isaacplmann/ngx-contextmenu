import { OnDestroy } from '@angular/core/core';
import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { CONTEXT_MENU_OPTIONS, IContextMenuOptions } from './contextMenu.options';
import { ContextMenuService, IContextMenuClickEvent } from './contextMenu.service';
import { ContextMenuInjectorService } from './contextMenuInjector.service';
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Optional,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import { Subscription } from "rxjs/Subscription";

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
  selector: 'context-menu',
  template: ``,
})
export class ContextMenuComponent implements OnDestroy {
  @Input() public useBootstrap4 = false;
  @Output() public close: EventEmitter<any> = new EventEmitter<any>();
  @ContentChildren(ContextMenuItemDirective) public menuItems: QueryList<ContextMenuItemDirective>;
  @ViewChild('menu') public menuElement: ElementRef;
  public visibleMenuItems: ContextMenuItemDirective[] = [];

  public links: ILinkConfig[] = [];
  public isShown = false;
  public isOpening = false;
  public item: any;
  public event: MouseEvent;
  private mouseLocation: MouseLocation = { left: '0px', top: '0px' };
  private subscription: Subscription = new Subscription();
  constructor(
    private _contextMenuService: ContextMenuService,
    private changeDetector: ChangeDetectorRef,
    private elementRef: ElementRef,
    @Optional()
    @Inject(CONTEXT_MENU_OPTIONS) private options: IContextMenuOptions,
    private contextMenuInjector: ContextMenuInjectorService,
  ) {
    if (options) {
      this.useBootstrap4 = options.useBootstrap4;
    }
    this.subscription.add(_contextMenuService.show.subscribe(menuEvent => this.onMenuEvent(menuEvent)));
    this.subscription.add(_contextMenuService.close.subscribe(event => this.close.emit(event)));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.contextMenuInjector.destroyAll();
  }

  public onMenuEvent(menuEvent: IContextMenuClickEvent): void {
    const { contextMenu, event, item } = menuEvent;
    this.contextMenuInjector.destroyAll();
    if (contextMenu && contextMenu !== this) {
      return;
    }
    this.event = event;
    this.item = item;
    this.setVisibleMenuItems();
    setTimeout(() => {
      this.contextMenuInjector.create({
        menuItems: this.visibleMenuItems,
        item: this.item,
        event: this.event,
      });
    });
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
