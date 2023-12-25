import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { IContextMenuOptions } from '../../context-menu.options';
import { CONTEXT_MENU_OPTIONS } from '../../context-menu.tokens';
import {
  CloseLeafMenuEvent,
  IContextMenuClickEvent,
} from '../../services/context-menu/context-menu.service';
import { ContextMenuItemInterface } from '../../context-menu-item.interface';

export interface ILinkConfig {
  click: (item: any, $event?: MouseEvent) => void;
  enabled?: (item: any) => boolean;
  html: (item: any) => string;
}

const ARROW_LEFT_KEYCODE = 37;

@Component({
  selector: 'context-menu-content',
  styles: [
    `
      .passive {
        display: block;
        padding: 3px 20px;
        clear: both;
        font-weight: normal;
        line-height: @line-height-base;
        white-space: nowrap;
      }
      .hasSubMenu:before {
        content: '\u25B6';
        float: right;
      }
    `,
  ],
  template: `
    <div
      class="dropdown open show ngx-contextmenu"
      [ngClass]="menuClass"
      tabindex="0"
    >
      <ul
        #menu
        class="dropdown-menu show"
        style="position: static; float: none;"
        tabindex="0"
      >
        <li
          #li
          *ngFor="let menuItem of menuItems; let i = index"
          [class.disabled]="!isMenuItemEnabled(menuItem)"
          [class.divider]="menuItem.divider"
          [class.dropdown-divider]="useBootstrap4 && menuItem.divider"
          [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
          [attr.role]="menuItem.divider ? 'separator' : undefined"
        >
          <a
            *ngIf="!menuItem.divider && !menuItem.passive"
            href
            [class.dropdown-item]="useBootstrap4"
            [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
            [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)"
            [class.hasSubMenu]="!!menuItem.subMenu"
            (click)="onMenuItemSelect(menuItem, $event)"
            (mouseenter)="onOpenSubMenu(menuItem, $event)"
          >
            <ng-template
              *ngIf="menuItem.template"
              [ngTemplateOutlet]="menuItem.template"
              [ngTemplateOutletContext]="{ $implicit: item }"
            ></ng-template
            >{{ menuItem.text }}
          </a>

          <span
            (click)="stopEvent($event)"
            (contextmenu)="stopEvent($event)"
            class="passive"
            *ngIf="!menuItem.divider && menuItem.passive"
            [class.dropdown-item]="useBootstrap4"
            [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)"
          >
            <ng-template
              *ngIf="menuItem.template"
              [ngTemplateOutlet]="menuItem.template"
              [ngTemplateOutletContext]="{ $implicit: item }"
            ></ng-template
            >{{ menuItem.text }}
          </span>
        </li>
      </ul>
    </div>
  `,
})
export class ContextMenuContentComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input()
  public menuItems: ContextMenuItemInterface[] = [];

  @Input()
  public item: any;

  @Input()
  public event!: MouseEvent | KeyboardEvent;

  @Input()
  public parentContextMenu!: ContextMenuContentComponent;

  @Input()
  public menuClass!: string;

  @Input()
  public overlay!: OverlayRef;

  @Input()
  public isLeaf = false;

  @Output()
  public execute: EventEmitter<{
    event: MouseEvent | KeyboardEvent;
    item: any;
    menuItem: ContextMenuItemInterface;
  }> = new EventEmitter();

  @Output()
  public openSubMenu: EventEmitter<IContextMenuClickEvent> = new EventEmitter();

  @Output()
  public closeLeafMenu: EventEmitter<CloseLeafMenuEvent> = new EventEmitter();

  @Output()
  public closeAllMenus: EventEmitter<{
    event: MouseEvent;
  }> = new EventEmitter();

  @ViewChild('menu', { static: true })
  public menuElement!: ElementRef;

  @ViewChildren('li')
  public menuItemElements!: QueryList<ElementRef>;

  public autoFocus?: boolean = false;
  public useBootstrap4?: boolean = false;
  private _keyManager!: ActiveDescendantKeyManager<ContextMenuItemInterface>;
  private subscription: Subscription = new Subscription();
  constructor(
    @Optional()
    @Inject(CONTEXT_MENU_OPTIONS)
    private options: IContextMenuOptions
  ) {
    if (options) {
      this.autoFocus = options.autoFocus;
      this.useBootstrap4 = options.useBootstrap4;
    }
  }

  /**
   * @internal
   */
  public ngOnInit(): void {
    this.menuItems.forEach((menuItem) => {
      menuItem.currentItem = this.item;
    });
    const queryList = new QueryList<ContextMenuItemInterface>();
    queryList.reset(this.menuItems);
    this._keyManager = new ActiveDescendantKeyManager<ContextMenuItemInterface>(
      queryList
    ).withWrap();
  }

  /**
   * @internal
   */
  public ngAfterViewInit() {
    if (this.autoFocus) {
      setTimeout(() => this.focus());
    }
    this.overlay?.updatePosition();
  }

  /**
   * @internal
   */
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public focus(): void {
    if (this.autoFocus) {
      this.menuElement.nativeElement.focus();
    }
  }

  public stopEvent(event: MouseEvent) {
    event.stopPropagation();
  }

  public isMenuItemEnabled(menuItem: ContextMenuItemInterface): boolean {
    return this.evaluateIfFunction(menuItem && menuItem.enabled);
  }

  public isMenuItemVisible(menuItem: ContextMenuItemInterface): boolean {
    return this.evaluateIfFunction(menuItem && menuItem.visible);
  }

  public evaluateIfFunction(value: any): any {
    if (value instanceof Function) {
      return value(this.item);
    }
    return value;
  }

  public isDisabled(link: ILinkConfig): boolean {
    return !!link.enabled && !link.enabled(this.item);
  }

  @HostListener('window:keydown.ArrowDown', ['$event'])
  @HostListener('window:keydown.ArrowUp', ['$event'])
  public onKeyEvent(event: KeyboardEvent): void {
    if (!this.isLeaf) {
      return;
    }
    this._keyManager.onKeydown(event);
  }

  @HostListener('window:keydown.ArrowRight', ['$event'])
  public keyboardOpenSubMenu(event: KeyboardEvent): void {
    if (!this.isLeaf || this._keyManager.activeItemIndex === null) {
      return;
    }
    this.cancelEvent(event);
    const menuItem = this.menuItems[this._keyManager.activeItemIndex];
    if (menuItem) {
      this.onOpenSubMenu(menuItem, event);
    }
  }

  @HostListener('window:keydown.Enter', ['$event'])
  @HostListener('window:keydown.Space', ['$event'])
  public keyboardMenuItemSelect(event: KeyboardEvent): void {
    if (!this.isLeaf || this._keyManager.activeItemIndex === null) {
      return;
    }
    this.cancelEvent(event);
    const menuItem = this.menuItems[this._keyManager.activeItemIndex];
    if (menuItem) {
      this.onMenuItemSelect(menuItem, event);
    }
  }

  @HostListener('window:keydown.Escape', ['$event'])
  @HostListener('window:keydown.ArrowLeft', ['$event'])
  public onCloseLeafMenu(event: KeyboardEvent): void {
    if (!this.isLeaf) {
      return;
    }
    this.cancelEvent(event);
    this.closeLeafMenu.emit({
      exceptRootMenu: event.keyCode === ARROW_LEFT_KEYCODE,
      event,
    });
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:contextmenu', ['$event'])
  public closeMenu(event: MouseEvent): void {
    if (event.type === 'click' && event.button === 2) {
      return;
    }
    this.closeAllMenus.emit({ event });
  }

  public onOpenSubMenu(
    menuItem: ContextMenuItemInterface,
    event: MouseEvent | KeyboardEvent
  ): void {
    if (this._keyManager.activeItemIndex === null) {
      return;
    }

    const anchorElementRef =
      this.menuItemElements.toArray()[this._keyManager.activeItemIndex];
    const anchorElement = anchorElementRef && anchorElementRef.nativeElement;
    this.openSubMenu.emit({
      anchorElement,
      contextMenu: menuItem.subMenu,
      event,
      item: this.item,
      parentContextMenu: this,
    });
  }

  public onMenuItemSelect(
    menuItem: ContextMenuItemInterface,
    event: MouseEvent | KeyboardEvent
  ): void {
    event.preventDefault();
    event.stopPropagation();
    this.onOpenSubMenu(menuItem, event);
    if (!menuItem.subMenu && !menuItem.disabled) {
      menuItem.callback(this.item, event);
      this.execute.emit({ item: this.item, event: event, menuItem });
    }
  }

  private cancelEvent(event?: KeyboardEvent): void {
    if (!event || !event.target) {
      return;
    }

    const target = event.target as HTMLElement;
    if (
      ['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) > -1 ||
      target.isContentEditable
    ) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }
}
