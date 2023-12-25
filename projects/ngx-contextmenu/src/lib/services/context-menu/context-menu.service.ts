import {
  Overlay,
  OverlayRef,
  ScrollStrategyOptions,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, ElementRef, Injectable, Inject, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ContextMenuContentComponent } from '../../components/context-menu-content/context-menu-content.component';
import { ContextMenuComponent } from '../../components/context-menu/context-menu.component';
import { IContextMenuOptions } from '../../context-menu.options';
import { CONTEXT_MENU_OPTIONS } from '../../context-menu.tokens';
import { ContextMenuItemInterface } from '../../context-menu-item.interface';
import { ContextMenu } from '../../context-menu';

export interface IContextMenuClickEvent {
  anchorElement?: Element | EventTarget;
  contextMenu?: ContextMenuComponent | ContextMenu;
  event: MouseEvent | KeyboardEvent;
  parentContextMenu?: ContextMenuContentComponent;
  item: any;
  activeMenuItemIndex?: number;
}
export interface IContextMenuContext extends IContextMenuClickEvent {
  menuItems: ContextMenuItemInterface[];
  menuClass: string;
}
export interface CloseLeafMenuEvent {
  exceptRootMenu?: boolean;
  event?: MouseEvent | KeyboardEvent;
}
export interface OverlayRefWithContextMenu extends OverlayRef {
  contextMenu?: ContextMenuContentComponent;
}

export interface CancelContextMenuEvent {
  eventType: 'cancel';
  event?: MouseEvent | KeyboardEvent;
}
export interface ExecuteContextMenuEvent {
  eventType: 'execute';
  event?: MouseEvent | KeyboardEvent;
  item: any;
  menuItem: ContextMenuItemInterface;
}
export type CloseContextMenuEvent =
  | ExecuteContextMenuEvent
  | CancelContextMenuEvent;

@Injectable()
export class ContextMenuService implements OnDestroy {
  public isDestroyingLeafMenu = false;

  public show: Subject<IContextMenuClickEvent> = new Subject();
  public triggerClose: Subject<ContextMenuContentComponent> = new Subject();
  public close: Subject<CloseContextMenuEvent> = new Subject();

  private overlays: OverlayRef[] = [];
  private fakeElement: {
    width?: number;
    height?: number;
    x: number;
    y: number;
  } = {
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  };

  constructor(
    private overlay: Overlay,
    private scrollStrategy: ScrollStrategyOptions,
    @Inject(CONTEXT_MENU_OPTIONS) private options: IContextMenuOptions
  ) {
    this.show.asObservable().subscribe((event => {
      if (event.contextMenu instanceof  ContextMenu) {
        this.showWithoutComponent(event.contextMenu, event);
      }
    }));
  }

  public openContextMenu(context: IContextMenuContext): OverlayRefWithContextMenu {
    const { anchorElement, event, parentContextMenu } = context;

    if (!parentContextMenu) {
      const mouseEvent = event as MouseEvent;
      this.fakeElement = {
        height: 0,
        width: 0,
        x: mouseEvent.clientX,
        y: mouseEvent.clientY,
      };
      this.closeAllContextMenus({ eventType: 'cancel', event });
      const positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(
          anchorElement ? new ElementRef(anchorElement) : this.fakeElement
        )
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'top',
          },
          {
            originX: 'end',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'center',
          },
          {
            originX: 'start',
            originY: 'center',
            overlayX: 'end',
            overlayY: 'center',
          },
        ]);
      this.overlays = [
        this.overlay.create({
          positionStrategy,
          panelClass: 'ngx-contextmenu',
          scrollStrategy: this.scrollStrategy.close(),
          hasBackdrop: this.options.useBackdrop,
          backdropClass: this.options.backdropClass === undefined ? '' :  this.options.backdropClass,
        }),
      ];
      this.attachContextMenu(this.overlays[0], context);
      return this.overlays[0];
    } else {
      const positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(
          new ElementRef(
            event instanceof MouseEvent ? event.target : anchorElement
          )
        )
        .withPositions([
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'top',
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'bottom',
          },
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'bottom',
          },
        ]);
      const newOverlay = this.overlay.create({
        positionStrategy,
        panelClass: 'ngx-contextmenu',
        scrollStrategy: this.scrollStrategy.close(),
        hasBackdrop: false,
      });
      this.destroySubMenus(parentContextMenu);
      this.overlays = this.overlays.concat(newOverlay);
      this.attachContextMenu(newOverlay, context);
      return newOverlay;
    }
  }

  public attachContextMenu(
    overlayRef: OverlayRef,
    context: IContextMenuContext
  ): void {
    const { event, item, menuItems, menuClass } = context;
    const contextMenuContentRef = overlayRef.attach(
      new ComponentPortal(ContextMenuContentComponent)
    );
    contextMenuContentRef.instance.event = event;
    contextMenuContentRef.instance.item = item;
    contextMenuContentRef.instance.menuItems = menuItems;
    contextMenuContentRef.instance.overlay = overlayRef;
    contextMenuContentRef.instance.isLeaf = true;
    contextMenuContentRef.instance.menuClass = menuClass;
    (<OverlayRefWithContextMenu>overlayRef).contextMenu =
      contextMenuContentRef.instance;

    const subscriptions: Subscription = new Subscription();
    subscriptions.add(
      contextMenuContentRef.instance.execute
        .asObservable()
        .subscribe((executeEvent) =>
          this.closeAllContextMenus({ eventType: 'execute', ...executeEvent })
        )
    );
    subscriptions.add(
      contextMenuContentRef.instance.closeAllMenus
        .asObservable()
        .subscribe((closeAllEvent) =>
          this.closeAllContextMenus({ eventType: 'cancel', ...closeAllEvent })
        )
    );
    subscriptions.add(
      contextMenuContentRef.instance.closeLeafMenu
        .asObservable()
        .subscribe((closeLeafMenuEvent) =>
          this.destroyLeafMenu(closeLeafMenuEvent)
        )
    );
    subscriptions.add(
      contextMenuContentRef.instance.openSubMenu
        .asObservable()
        .subscribe((subMenuEvent: IContextMenuClickEvent) => {
          this.destroySubMenus(contextMenuContentRef.instance);
          if (!subMenuEvent.contextMenu) {
            contextMenuContentRef.instance.isLeaf = true;
            return;
          }
          contextMenuContentRef.instance.isLeaf = false;
          this.show.next(subMenuEvent);
        })
    );
    contextMenuContentRef.onDestroy(() => {
      menuItems.forEach((menuItem) => (menuItem.isActive = false));
      subscriptions.unsubscribe();
    });
    contextMenuContentRef.changeDetectorRef.detectChanges();
  }

  public closeAllContextMenus(closeEvent: CloseContextMenuEvent): void {
    if (this.overlays) {
      this.close.next(closeEvent);
      this.overlays.forEach((overlay, index) => {
        overlay.detach();
        overlay.dispose();
      });
    }
    this.overlays = [];
  }

  public getLastAttachedOverlay(): OverlayRefWithContextMenu {
    let overlay: OverlayRef = this.overlays[this.overlays.length - 1];
    while (this.overlays.length > 1 && overlay && !overlay.hasAttached()) {
      overlay.detach();
      overlay.dispose();
      this.overlays = this.overlays.slice(0, -1);
      overlay = this.overlays[this.overlays.length - 1];
    }
    return overlay;
  }

  public destroyLeafMenu({
    exceptRootMenu,
    event,
  }: CloseLeafMenuEvent = {}): void {
    if (this.isDestroyingLeafMenu) {
      return;
    }
    this.isDestroyingLeafMenu = true;

    setTimeout(() => {
      const overlay = this.getLastAttachedOverlay();
      if (this.overlays.length > 1 && overlay) {
        overlay.detach();
        overlay.dispose();
      }
      if (!exceptRootMenu && this.overlays.length > 0 && overlay) {
        this.close.next({ eventType: 'cancel', event });
        overlay.detach();
        overlay.dispose();
      }

      const newLeaf = this.getLastAttachedOverlay();
      if (newLeaf && newLeaf.contextMenu) {
        newLeaf.contextMenu.isLeaf = true;
      }

      this.isDestroyingLeafMenu = false;
    });
  }

  public destroySubMenus(contextMenu: ContextMenuContentComponent): void {
    const overlay = contextMenu.overlay;
    const index = this.overlays.indexOf(overlay);
    this.overlays.slice(index + 1).forEach((subMenuOverlay) => {
      subMenuOverlay.detach();
      subMenuOverlay.dispose();
    });
  }

  public isLeafMenu(contextMenuContent: ContextMenuContentComponent): boolean {
    const overlay = this.getLastAttachedOverlay();
    return contextMenuContent.overlay === overlay;
  }

  private showWithoutComponent(
    contextMenu: ContextMenu,
    event: IContextMenuClickEvent
  ): void {
    const ctx = this.openContextMenu({
      ...event,
      menuItems: contextMenu.items.filter((a) =>
        this.evaluateIfFunction(a.visible, event.item)
      ),
      menuClass: contextMenu.menuClass,
    });
  }

  private evaluateIfFunction(value: any, item): any {
    if (value instanceof Function) {
      return value(item);
    }
    return value;
  }

  ngOnDestroy(): void {
    this.show.complete();
  }
}
