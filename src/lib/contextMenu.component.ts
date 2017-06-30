import { ContextMenuContentComponent } from './contextMenuContent.component';
import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { CONTEXT_MENU_OPTIONS, IContextMenuOptions } from './contextMenu.options';
import { ContextMenuService, IContextMenuClickEvent } from './contextMenu.service';
import { ContextMenuInjectorService } from './contextMenuInjector.service';
import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
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
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

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
  @Input() public autoFocus = false;
  @Input() public useBootstrap4 = false;
  @Input() public disabled = false;
  @Output() public close: EventEmitter<any> = new EventEmitter<any>();
  @Output() public open: EventEmitter<any> = new EventEmitter<any>();
  @ContentChildren(ContextMenuItemDirective) public menuItems: QueryList<ContextMenuItemDirective>;
  @ViewChild('menu') public menuElement: ElementRef;
  public visibleMenuItems: ContextMenuItemDirective[] = [];
  public contextMenuContent: ContextMenuContentComponent;

  public links: ILinkConfig[] = [];
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
      this.autoFocus = options.autoFocus;
      this.useBootstrap4 = options.useBootstrap4;
    }
    this.subscription.add(_contextMenuService.show.subscribe(menuEvent => this.onMenuEvent(menuEvent)));
    this.subscription.add(_contextMenuService.triggerClose.subscribe(contextMenuContent => {
      if (!contextMenuContent) {
        this.contextMenuInjector.destroyAll();
      } else {
        this.destroySubMenus(contextMenuContent);
        this.contextMenuInjector.destroy(contextMenuContent);
      }
    }));
    this.subscription.add(_contextMenuService.close.subscribe(event => this.close.emit(event)));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.contextMenuInjector.destroyAll();
  }

  public onMenuEvent(menuEvent: IContextMenuClickEvent): void {
    if (this.disabled) {
      return;
    }
    const { contextMenu, event, item } = menuEvent;
    if (!menuEvent.parentContextMenu) {
      this.contextMenuInjector.destroyAll();
    } else {
      this.destroySubMenus(menuEvent.parentContextMenu);
    }

    if (contextMenu && contextMenu !== this) {
      return;
    }
    this.event = event;
    this.item = item;
    setTimeout(() => {
      this.setVisibleMenuItems();
      this.contextMenuContent = this.contextMenuInjector.create({
        menuItems: this.visibleMenuItems,
        ...menuEvent,
      });
      this.open.next(menuEvent);
    });
  }

  public destroySubMenus(parent: ContextMenuContentComponent): void {
    const cmContents: ComponentRef<ContextMenuContentComponent>[] = this.contextMenuInjector.getByType(this.contextMenuInjector.type);
    cmContents.filter(content => content.instance.parentContextMenu === parent)
      .forEach(comp => {
        this.destroySubMenus(comp.instance);
        this.contextMenuInjector.destroy(comp);
      });
  }

  @HostListener('window:keydown.Escape')
  public destroyLeafMenu(): void {
    this._contextMenuService.destroyLeafMenu();
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
