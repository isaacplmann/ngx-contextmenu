import { Overlay, OverlayRef, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, ElementRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { ContextMenuContentComponent } from './contextMenuContent.component';

export interface IContextMenuClickEvent {
  anchorElement?: Element | EventTarget;
  contextMenu?: ContextMenuComponent;
  event?: MouseEvent | KeyboardEvent;
  parentContextMenu?: ContextMenuContentComponent;
  item: any;
  activeMenuItemIndex?: number;
}
export interface IContextMenuContext extends IContextMenuClickEvent {
  menuItems: ContextMenuItemDirective[];
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
  menuItem: ContextMenuItemDirective;
}
export type CloseContextMenuEvent = ExecuteContextMenuEvent | CancelContextMenuEvent;

@Injectable()
export class ContextMenuService {
  public isDestroyingLeafMenu = false;

  public show: Subject<IContextMenuClickEvent> = new Subject<IContextMenuClickEvent>();
  public triggerClose: Subject<ContextMenuContentComponent> = new Subject();
  public close: Subject<CloseContextMenuEvent> = new Subject();

  private contextMenuContent: ComponentRef<ContextMenuContentComponent>;
  private overlays: OverlayRef[] = [];
  private fakeElement: any = {
    getBoundingClientRect: (): ClientRect => ({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    })
  };

  constructor(
    private overlay: Overlay,
    private scrollStrategy: ScrollStrategyOptions,
  ) { }

  public openContextMenu(context: IContextMenuContext) {
    const { anchorElement, event, parentContextMenu } = context;

    if (!parentContextMenu) {
      const mouseEvent = event as MouseEvent;
      this.fakeElement.getBoundingClientRect = (): ClientRect => ({
        bottom: mouseEvent.clientY,
        height: 0,
        left: mouseEvent.clientX,
        right: mouseEvent.clientX,
        top: mouseEvent.clientY,
        width: 0,
      });
      this.closeAllContextMenus({ eventType: 'cancel', event });
      const positionStrategy = this.overlay.position().connectedTo(
        new ElementRef(anchorElement || this.fakeElement),
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' })
        .withFallbackPosition(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' })
        .withFallbackPosition(
        { originX: 'end', originY: 'top' },
        { overlayX: 'start', overlayY: 'top' })
        .withFallbackPosition(
        { originX: 'start', originY: 'top' },
        { overlayX: 'end', overlayY: 'top' })
        .withFallbackPosition(
        { originX: 'end', originY: 'center' },
        { overlayX: 'start', overlayY: 'center' })
        .withFallbackPosition(
        { originX: 'start', originY: 'center' },
        { overlayX: 'end', overlayY: 'center' })
        ;
      this.overlays = [this.overlay.create({
        positionStrategy,
        panelClass: 'ngx-contextmenu',
        scrollStrategy: this.scrollStrategy.close(),
      })];
      this.attachContextMenu(this.overlays[0], context);
    } else {
      const positionStrategy = this.overlay.position().connectedTo(
        new ElementRef(event ? event.target : anchorElement),
        { originX: 'end', originY: 'top' },
        { overlayX: 'start', overlayY: 'top' })
        .withFallbackPosition(
        { originX: 'start', originY: 'top' },
        { overlayX: 'end', overlayY: 'top' })
        .withFallbackPosition(
        { originX: 'end', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'bottom' })
        .withFallbackPosition(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'end', overlayY: 'bottom' })
        ;
      const newOverlay = this.overlay.create({
        positionStrategy,
        panelClass: 'ngx-contextmenu',
        scrollStrategy: this.scrollStrategy.close(),
      });
      this.destroySubMenus(parentContextMenu);
      this.overlays = this.overlays.concat(newOverlay);
      this.attachContextMenu(newOverlay, context);
    }
  }

  public attachContextMenu(overlay: OverlayRef, context: IContextMenuContext): void {
    const { event, item, menuItems, menuClass } = context;

    const contextMenuContent: ComponentRef<ContextMenuContentComponent> = overlay.attach(new ComponentPortal(ContextMenuContentComponent));
    contextMenuContent.instance.event = event;
    contextMenuContent.instance.item = item;
    contextMenuContent.instance.menuItems = menuItems;
    contextMenuContent.instance.overlay = overlay;
    contextMenuContent.instance.isLeaf = true;
    contextMenuContent.instance.menuClass = menuClass;
    (<OverlayRefWithContextMenu>overlay).contextMenu = contextMenuContent.instance;

    const subscriptions: Subscription = new Subscription();
    subscriptions.add(contextMenuContent.instance.execute.asObservable()
      .subscribe((executeEvent) => this.closeAllContextMenus({ eventType: 'execute', ...executeEvent })));
    subscriptions.add(contextMenuContent.instance.closeAllMenus.asObservable()
      .subscribe((closeAllEvent) => this.closeAllContextMenus({ eventType: 'cancel', ...closeAllEvent })));
    subscriptions.add(contextMenuContent.instance.closeLeafMenu.asObservable()
      .subscribe(closeLeafMenuEvent => this.destroyLeafMenu(closeLeafMenuEvent)));
    subscriptions.add(contextMenuContent.instance.openSubMenu.asObservable()
      .subscribe((subMenuEvent: IContextMenuContext) => {
        this.destroySubMenus(contextMenuContent.instance);
        if (!subMenuEvent.contextMenu) {
          contextMenuContent.instance.isLeaf = true;
          return;
        }
        contextMenuContent.instance.isLeaf = false;
        this.show.next(subMenuEvent);
      }));
    contextMenuContent.onDestroy(() => {
      menuItems.forEach(menuItem => menuItem.isActive = false);
      subscriptions.unsubscribe();
    });
    contextMenuContent.changeDetectorRef.detectChanges();
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

  public destroyLeafMenu({ exceptRootMenu, event }: CloseLeafMenuEvent = {}): void {
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
      if (newLeaf) {
        newLeaf.contextMenu.isLeaf = true;
      }

      this.isDestroyingLeafMenu = false;
    });
  }

  public destroySubMenus(contextMenu: ContextMenuContentComponent): void {
    const overlay = contextMenu.overlay;
    const index = this.overlays.indexOf(overlay);
    this.overlays.slice(index + 1).forEach(subMenuOverlay => {
      subMenuOverlay.detach();
      subMenuOverlay.dispose();
    });
  }

  public isLeafMenu(contextMenuContent: ContextMenuContentComponent): boolean {
    const overlay = this.getLastAttachedOverlay();
    return contextMenuContent.overlay === overlay;
  }
}
