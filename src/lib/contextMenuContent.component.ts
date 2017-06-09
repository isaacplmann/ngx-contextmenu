import { Subscription } from 'rxjs/Subscription';
import { ContextMenuInjectorService } from './contextMenuInjector.service';
import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { CONTEXT_MENU_OPTIONS, IContextMenuOptions } from './contextMenu.options';
import { ContextMenuService } from './contextMenu.service';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Optional,
  Output,
  Renderer,
  ViewChild
} from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';

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
     }`
  ],
  template:
  `<div #menuwrapper class="dropdown ngx-contextmenu" tabindex="0">
      <ul #menu [ngStyle]="locationCss" class="dropdown-menu" tabindex="0">
        <li *ngFor="let menuItem of menuItems" [class.disabled]="!isMenuItemEnabled(menuItem)"
            [class.divider]="menuItem.divider" [class.dropdown-divider]="useBootstrap4 && menuItem.divider"
            [attr.role]="menuItem.divider ? 'separator' : undefined">
          <a *ngIf="!menuItem.divider && !menuItem.passive" href [class.dropdown-item]="useBootstrap4"
            [class.disabled]="useBootstrap4 && !isMenuItemEnabled(menuItem)"
            (click)="$event.preventDefault(); $event.stopPropagation(); menuItem.triggerExecute(item, $event);">
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
  @ViewChild('menuwrapper') public menuWrapperElement: ElementRef;
  @ViewChild('menu') public menuElement: ElementRef;

  public autoFocus = false;
  public useBootstrap4 = false;
  public isShown = false;
  public isOpening = false;
  private mouseLocation: MouseLocation = { left: '0px', top: '0px' };
  private subscription: Subscription = new Subscription();
  constructor(
    private _contextMenuService: ContextMenuService,
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

  public ngOnInit(): void {
    this.isOpening = true;
    setTimeout(() => this.isOpening = false, 400);
    if (this.menuItems) {
      // Declarative context menu
      setTimeout(() => {
        if (this.menuItems.length > 0) {
          this.showMenu();
        } else {
          this.hideMenu();
        }
        setTimeout(() => {
          const menuWidth = this.menuElement ? this.menuElement.nativeElement.clientWidth : 100;
          const menuHeight = this.menuElement ? this.menuElement.nativeElement.clientHeight : 100;
          const bodyWidth = this.event.view.document.body.clientWidth;
          const bodyHeight = this.event.view.document.body.clientHeight;
          const distanceFromRight = bodyWidth - (this.event.clientX + menuWidth);
          const distanceFromBottom = bodyHeight - (this.event.clientY + menuHeight);
          let isMenuOutsideBody = false;
          if (distanceFromRight < 0 && this.event.clientX > bodyWidth / 2) {
            this.mouseLocation.marginLeft = '-' + menuWidth + 'px';
            isMenuOutsideBody = true;
          }
          if (distanceFromBottom < 0 && this.event.clientY > bodyHeight / 2) {
            this.mouseLocation.marginTop = '-' + menuHeight + 'px';
            isMenuOutsideBody = true;
          }
          if (isMenuOutsideBody) {
            this.showMenu();
          }
        });
      });
    } else {
      this.hideMenu();
    }
    this.mouseLocation = {
      left: this.event.clientX + 'px',
      top: this.event.clientY + 'px',
    };
    this.menuItems.forEach(menuItem => {
      this.subscription.add(menuItem.execute.subscribe(() => this.hideMenu()));
    });
  }

  ngAfterViewInit() {
    if (this.autoFocus) {
      setTimeout(() => this.menuElement.nativeElement.focus());
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  stopEvent($event: MouseEvent) {
    $event.stopPropagation();
  }

  get locationCss(): any {
    return {
      'position': 'fixed',
      'display': this.isShown ? 'block' : 'none',
      left: this.mouseLocation.left,
      marginLeft: this.mouseLocation.marginLeft,
      marginTop: this.mouseLocation.marginTop,
      top: this.mouseLocation.top,
    };
  }

  @HostListener('document:click')
  @HostListener('document:contextmenu')
  public clickedOutside(): void {
    if (!this.isOpening) {
      this.hideMenu();
    }
  }

  public isMenuItemEnabled(menuItem: ContextMenuItemDirective): boolean {
    return this.evaluateIfFunction(menuItem.enabled);
  }

  public isMenuItemVisible(menuItem: ContextMenuItemDirective): boolean {
    return this.evaluateIfFunction(menuItem.visible);
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

  public execute(link: ILinkConfig, $event?: MouseEvent): void {
    if (this.isDisabled(link)) {
      return;
    }
    this.hideMenu();
    link.click(this.item, $event);
  }

  public showMenu(): void {
    this.isShown = true;
    this.changeDetector.markForCheck();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  @HostListener('document:keydown', ['$event'])
  public hideMenu(event?: KeyboardEvent): void {
    if (event && (event.keyCode && event.keyCode !== 27 || event.key && event.key !== 'Escape')) {
      return;
    }
    if (this.isShown === true) {
      this._contextMenuService.close.next(event);
    }
    this.isShown = false;
    this.changeDetector.markForCheck();
  }
}
