import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  Optional,
  Renderer,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { OnDestroy, OnInit, QueryList, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { IContextMenuOptions } from './contextMenu.options';
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
    .hasSubMenu:before {
      content: "\u25B6";
      float: right;
    }`,
  ],
  template:
  `<div class="dropdown open ngx-contextmenu" tabindex="0">
      <ul #menu class="dropdown-menu" tabindex="0">
        <li #li *ngFor="let menuItem of menuItems; let i = index" [class.disabled]="!isMenuItemEnabled(menuItem)"
            [class.divider]="menuItem.divider" [class.dropdown-divider]="useBootstrap4 && menuItem.divider"
            [class.active]="i === activeMenuItemIndex && isMenuItemEnabled(menuItem)"
            [attr.role]="menuItem.divider ? 'separator' : undefined">
          <a *ngIf="!menuItem.divider && !menuItem.passive" href [class.dropdown-item]="useBootstrap4"
            [class.active]="i === activeMenuItemIndex && isMenuItemEnabled(menuItem)"
            [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)" [class.hasSubMenu]="!!menuItem.subMenu"
            (click)="onMenuItemSelect(menuItem, $event)" (mouseenter)="openSubMenu(menuItem, $event)">
            <ng-template [ngTemplateOutlet]="menuItem.template" [ngOutletContext]="{ $implicit: item }"></ng-template>
          </a>

          <span (click)="stopEvent($event)" (contextmenu)="stopEvent($event)" class="passive"
                *ngIf="!menuItem.divider && menuItem.passive" [class.dropdown-item]="useBootstrap4"
                [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)">
            <ng-template [ngTemplateOutlet]="menuItem.template" [ngOutletContext]="{ $implicit: item }"></ng-template>
          </span>
        </li>
      </ul>
    </div>
  `,
})
export class ContextMenuContentComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() public menuItems: ContextMenuItemDirective[] = [];
  @Input() public item: any;
  @Input() public event: MouseEvent;
  @Input() public parentContextMenu: ContextMenuContentComponent;
  @Input() public activeMenuItemIndex = -1;
  @Output() public execute: EventEmitter<{ event: Event, item: any, menuItem: ContextMenuItemDirective }> = new EventEmitter();
  @ViewChild('menu') public menuElement: ElementRef;
  @ViewChildren('li') public menuItemElements: QueryList<ElementRef>;

  public autoFocus = false;
  public useBootstrap4 = false;
  public isShown = false;
  public isOpening = false;
  private mouseLocation: MouseLocation = { left: '0px', top: '0px' };
  private subscription: Subscription = new Subscription();
  constructor(
    private changeDetector: ChangeDetectorRef,
    private elementRef: ElementRef,
    @Optional()
    @Inject(CONTEXT_MENU_OPTIONS) private options: IContextMenuOptions,
    public renderer: Renderer,
  ) {
    if (options) {
      this.autoFocus = options.autoFocus;
      this.useBootstrap4 = options.useBootstrap4;
    }
  }

  ngOnInit(): void {
    if (this.activeMenuItemIndex === undefined) {
      this.activeMenuItemIndex = -1;
    }
    this.menuItems.forEach(menuItem => {
      this.subscription.add(menuItem.execute.subscribe(event => this.execute.emit({ ...event, menuItem })));
    });
  }

  ngAfterViewInit() {
    if (this.autoFocus) {
      setTimeout(() => this.focus());
    }
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

  public showMenu(): void {
    this.isShown = true;
    this.changeDetector.markForCheck();
  }

  // @HostListener('window:scroll')
  // @HostListener('window:resize')
  // public hideMenu(event?: KeyboardEvent, hideAll?: boolean): void {
  //   if (this.isShown) {
  //     this._contextMenuService.close.next(event);
  //   }
  //   if (hideAll) {
  //     this._contextMenuService.triggerClose.next(undefined);
  //   }
  //   this.isShown = false;
  //   this.changeDetector.markForCheck();
  // }

  // @HostListener('keydown.ArrowDown', ['$event'])
  // public nextItem(event?: KeyboardEvent): void {
  //   if (!this._contextMenuService.isLeafMenu(this)) {
  //     return;
  //   }
  //   this.cancelEvent(event);
  //   if (this.activeMenuItemIndex === this.menuItems.length - 1) {
  //     this.activeMenuItemIndex = 0;
  //   } else {
  //     this.activeMenuItemIndex++;
  //   }
  //   const menuItem = this.menuItems[this.activeMenuItemIndex];
  //   if (!this.isMenuItemEnabled(menuItem) || menuItem.divider || menuItem.passive) {
  //     this.nextItem();
  //   }
  // }

  // @HostListener('keydown.ArrowUp', ['$event'])
  // public prevItem(event?: KeyboardEvent): void {
  //   if (!this._contextMenuService.isLeafMenu(this)) {
  //     return;
  //   }
  //   this.cancelEvent(event);
  //   if (this.activeMenuItemIndex <= 0) {
  //     this.activeMenuItemIndex = this.menuItems.length - 1;
  //   } else {
  //     this.activeMenuItemIndex--;
  //   }
  //   const menuItem = this.menuItems[this.activeMenuItemIndex];
  //   if (!this.isMenuItemEnabled(menuItem) || menuItem.divider || menuItem.passive) {
  //     this.prevItem();
  //   }
  // }

  // @HostListener('keydown.ArrowRight', ['$event'])
  // public keyboardOpenSubMenu(event?: KeyboardEvent): void {
  //   if (!this._contextMenuService.isLeafMenu(this)) {
  //     return;
  //   }
  //   this.cancelEvent(event);
  //   if (this.activeMenuItemIndex >= 0) {
  //     const menuItem = this.menuItems[this.activeMenuItemIndex];
  //     const menuItemElement = this.menuItemElements.toArray()[this.activeMenuItemIndex].nativeElement;
  //     this.openSubMenu(menuItem, <any>event, menuItemElement, 0);
  //   }
  // }

  // @HostListener('keydown.ArrowLeft', ['$event'])
  // public destroyLeafSubMenu(event: KeyboardEvent): void {
  //   if (!this._contextMenuService.isLeafMenu(this)) {
  //     return;
  //   }
  //   this.cancelEvent(event);
  //   this._contextMenuService.destroyLeafMenu({ exceptRootMenu: true });
  // }

  // @HostListener('keydown.Enter', ['$event'])
  // @HostListener('keydown.Space', ['$event'])
  // public keyboardMenuItemSelect(event?: KeyboardEvent): void {
  //   if (!this._contextMenuService.isLeafMenu(this)) {
  //     return;
  //   }
  //   this.cancelEvent(event);
  //   if (this.activeMenuItemIndex >= 0) {
  //     const menuItem = this.menuItems[this.activeMenuItemIndex];
  //     const menuItemElement = this.menuItemElements.toArray()[this.activeMenuItemIndex].nativeElement;
  //     this.onMenuItemSelect(menuItem, <any>event, menuItemElement, 0);
  //   }
  // }

  public openSubMenu(menuItem: ContextMenuItemDirective, event: MouseEvent, target?: HTMLElement, activeMenuItemIndex?: number): void {
    // this._contextMenuService.triggerClose.next(this);
    if (!menuItem.subMenu) {
      return;
    }
    const rect = (target || <HTMLElement>event.target).getBoundingClientRect();
    const newEvent = Object.assign({}, event, { clientX: rect.right, clientY: rect.top, view: event.view });
    // this._contextMenuService.show.next({
    //   contextMenu: menuItem.subMenu,
    //   item: this.item,
    //   event: newEvent,
    //   parentContextMenu: this,
    //   activeMenuItemIndex,
    // });
  }

  public onMenuItemSelect(menuItem: ContextMenuItemDirective, event: MouseEvent, target?: HTMLElement, activeMenuItemIndex?: number): void {
    event.preventDefault();
    event.stopPropagation();
    this.openSubMenu(menuItem, event, target);
    if (!menuItem.subMenu) {
      menuItem.triggerExecute(this.item, event);
    }
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
