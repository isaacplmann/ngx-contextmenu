import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, SPACE, ENTER, ESCAPE } from '@angular/cdk/keycodes';
import { OverlayRef } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  ChangeDetectorRef,
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
  Renderer,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { IContextMenuOptions } from './contextMenu.options';
import { CloseLeafMenuEvent, IContextMenuClickEvent } from './contextMenu.service';
import { CONTEXT_MENU_OPTIONS } from './contextMenu.tokens';

export interface ILinkConfig {
  click: (item: any, $event?: MouseEvent) => void;
  enabled?: (item: any) => boolean;
  html: (item: any) => string;
}

@Component({
  selector: 'context-menu-content',
  styles: [
    `.passive {
       display: block;
       padding: 3px 20px;
       clear: both;
       font-weight: normal;
       line-height: @line-height-base;
       white-space: nowrap;
     }
    :dir(ltr) .hasSubMenu:before {
      content: "\u25B6";
      float: right;
    }
    :dir(rtl) .dropdown {
      direction: rtl;
    }
    :dir(rtl) .dropdown-menu {
      text-align: right;
    }
    :dir(rtl) .hasSubMenu:before {
      content: "\u25C0";
      float: left;
    }`,
  ],
  template:
    `<div class="dropdown open show ngx-contextmenu" [ngClass]="menuClass" tabindex="0">
      <ul #menu class="dropdown-menu show" style="position: static; float: none;" tabindex="0">
        <li #li *ngFor="let menuItem of menuItems; let i = index" [class.disabled]="!isMenuItemEnabled(menuItem)"
            [class.divider]="menuItem.divider" [class.dropdown-divider]="useBootstrap4 && menuItem.divider"
            [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
            [attr.role]="menuItem.divider ? 'separator' : undefined">
          <a *ngIf="!menuItem.divider && !menuItem.passive" href [class.dropdown-item]="useBootstrap4"
            [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
            [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)" [class.hasSubMenu]="!!menuItem.subMenu"
            (click)="onMenuItemSelect(menuItem, $event)" (mouseenter)="onOpenSubMenu(menuItem, $event)">
            <ng-template [ngTemplateOutlet]="menuItem.template" [ngTemplateOutletContext]="{ $implicit: item }"></ng-template>
          </a>

          <span (click)="stopEvent($event)" (contextmenu)="stopEvent($event)" class="passive"
                *ngIf="!menuItem.divider && menuItem.passive" [class.dropdown-item]="useBootstrap4"
                [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)">
            <ng-template [ngTemplateOutlet]="menuItem.template" [ngTemplateOutletContext]="{ $implicit: item }"></ng-template>
          </span>
        </li>
      </ul>
    </div>`,
})
export class ContextMenuContentComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() public menuItems: ContextMenuItemDirective[] = [];
  @Input() public item: any;
  @Input() public event: MouseEvent | KeyboardEvent;
  @Input() public parentContextMenu: ContextMenuContentComponent;
  @Input() public menuClass: string;
  @Input() public overlay: OverlayRef;
  @Input() public isLeaf = false;
  @Output() public execute: EventEmitter<{ event: MouseEvent | KeyboardEvent, item: any, menuItem: ContextMenuItemDirective }>
    = new EventEmitter();
  @Output() public openSubMenu: EventEmitter<IContextMenuClickEvent> = new EventEmitter();
  @Output() public closeLeafMenu: EventEmitter<CloseLeafMenuEvent> = new EventEmitter();
  @Output() public closeAllMenus: EventEmitter<{ event: MouseEvent }> = new EventEmitter();
  @ViewChild('menu') public menuElement: ElementRef;
  @ViewChildren('li') public menuItemElements: QueryList<ElementRef>;

  public autoFocus = false;
  public useBootstrap4 = false;
  private _keyManager: ActiveDescendantKeyManager<ContextMenuItemDirective>;
  private subscription: Subscription = new Subscription();

  constructor(
    private changeDetector: ChangeDetectorRef,
    private elementRef: ElementRef,
    @Optional()
    @Inject(CONTEXT_MENU_OPTIONS) private options: IContextMenuOptions,
    public renderer: Renderer,
    public directionality: Directionality,
  ) {
    if (options) {
      this.autoFocus = options.autoFocus;
      this.useBootstrap4 = options.useBootstrap4;
    }
  }

  ngOnInit(): void {
    this.menuItems.forEach(menuItem => {
      menuItem.currentItem = this.item;
      this.subscription.add(menuItem.execute.subscribe(event => this.execute.emit({ ...event, menuItem })));
    });
    const queryList = new QueryList<ContextMenuItemDirective>();
    queryList.reset(this.menuItems);
    this._keyManager = new ActiveDescendantKeyManager<ContextMenuItemDirective>(queryList).withWrap();
  }

  ngAfterViewInit() {
    if (this.autoFocus) {
      setTimeout(() => this.focus());
    }
    this.overlay.updatePosition();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  focus(): void {
    if (this.autoFocus) {
      this.menuElement.nativeElement.focus();
    }
  }

  stopEvent($event: MouseEvent) {
    $event.stopPropagation();
  }

  public isMenuItemEnabled(menuItem: ContextMenuItemDirective): boolean {
    return this.evaluateIfFunction(menuItem && menuItem.enabled);
  }

  public isMenuItemVisible(menuItem: ContextMenuItemDirective): boolean {
    return this.evaluateIfFunction(menuItem && menuItem.visible);
  }

  public evaluateIfFunction(value: any): any {
    if (value instanceof Function) {
      return value(this.item);
    }
    return value;
  }

  public isDisabled(link: ILinkConfig): boolean {
    return link.enabled && !link.enabled(this.item);
  }

  @HostListener('window:keydown', ['$event'])
  public onKeydownEvent(event: KeyboardEvent): void {
    const openSubMenuArrowKeyCode = this.directionality.value === 'ltr' ? RIGHT_ARROW : LEFT_ARROW;
    const closeLeafMenuArrowKeyCode = this.directionality.value === 'ltr' ? LEFT_ARROW : RIGHT_ARROW;
    switch (event.keyCode) {
      case UP_ARROW:
      case DOWN_ARROW: {
        this.onKeyEvent(event);
        break;
      }
      case ENTER:
      case SPACE: {
        this.keyboardMenuItemSelect(event);
        break;
      }
      case openSubMenuArrowKeyCode: {
        this.keyboardOpenSubMenu(event);
        break;
      }
      case ESCAPE:
      case closeLeafMenuArrowKeyCode: {
        this.onCloseLeafMenu(event);
        break;
      }
    }
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:contextmenu', ['$event'])
  public closeMenu(event: MouseEvent): void {
    if (event.type === 'click' && event.button === 2) {
      return;
    }
    this.closeAllMenus.emit({event});
  }

  public onOpenSubMenu(menuItem: ContextMenuItemDirective, event?: MouseEvent | KeyboardEvent): void {
    const anchorElementRef = this.menuItemElements.toArray()[this._keyManager.activeItemIndex];
    const anchorElement = anchorElementRef && anchorElementRef.nativeElement;
    this.openSubMenu.emit({
      anchorElement,
      contextMenu: menuItem.subMenu,
      event,
      item: this.item,
      parentContextMenu: this,
    });
  }

  public onMenuItemSelect(menuItem: ContextMenuItemDirective, event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.onOpenSubMenu(menuItem, event);
    if (!menuItem.subMenu) {
      menuItem.triggerExecute(this.item, event);
    }
  }

  private onKeyEvent(event: KeyboardEvent): void {
    if (!this.isLeaf) {
      return;
    }
    this._keyManager.onKeydown(event);
  }

  private keyboardOpenSubMenu(event?: KeyboardEvent): void {
    if (!this.isLeaf) {
      return;
    }
    this.cancelEvent(event);
    const menuItem = this.menuItems[this._keyManager.activeItemIndex];
    if (menuItem) {
      this.onOpenSubMenu(menuItem);
    }
  }

  private keyboardMenuItemSelect(event?: KeyboardEvent): void {
    if (!this.isLeaf) {
      return;
    }
    this.cancelEvent(event);
    const menuItem = this.menuItems[this._keyManager.activeItemIndex];
    if (menuItem) {
      this.onMenuItemSelect(menuItem, event);
    }
  }

  private onCloseLeafMenu(event: KeyboardEvent): void {
    if (!this.isLeaf) {
      return;
    }
    this.cancelEvent(event);
    this.closeLeafMenu.emit({ exceptRootMenu: event.keyCode === LEFT_ARROW, event });
  }

  private cancelEvent(event): void {
    if (!event) {
      return;
    }

    const target: HTMLElement = event.target;
    if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) > -1 || target.isContentEditable) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }
}
