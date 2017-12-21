import { Overlay, OverlayRef, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { ContextMenuContentComponent } from './contextMenuContent.component';

export interface IContextMenuClickEvent {
  anchorElement?: Element;
  contextMenu?: ContextMenuComponent;
  event?: MouseEvent;
  parentContextMenu?: ContextMenuContentComponent;
  item: any;
  activeMenuItemIndex?: number;
}
export interface IContextMenuContext extends IContextMenuClickEvent {
  menuItems: ContextMenuItemDirective[];
}
export interface CloseLeafMenuEvent {
  exceptRootMenu?: boolean;
}
export interface OverlayRefWithContextMenu extends OverlayRef {
  contextMenu?: ContextMenuContentComponent;
}

@Injectable()
export class ContextMenuService {
  public isDestroyingLeafMenu = false;

  public show: Subject<IContextMenuClickEvent> = new Subject<IContextMenuClickEvent>();
  public triggerClose: Subject<ContextMenuContentComponent> = new Subject();
  public close: Subject<Event> = new Subject();

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
      this.fakeElement.getBoundingClientRect = (): ClientRect => ({
        bottom: event.clientY,
        height: 0,
        left: event.clientX,
        right: event.clientX,
        top: event.clientY,
        width: 0,
      });
      this.closeAllContextMenus();
      const positionStrategy = this.overlay.position().connectedTo(
        { nativeElement: anchorElement || this.fakeElement },
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
        { nativeElement: event ? event.target : anchorElement },
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
    const { event, item, menuItems } = context;

    const contextMenuContent: ComponentRef<ContextMenuContentComponent> = overlay.attach(new ComponentPortal(ContextMenuContentComponent));
    contextMenuContent.instance.event = event;
    contextMenuContent.instance.item = item;
    contextMenuContent.instance.menuItems = menuItems;
    contextMenuContent.instance.overlay = overlay;
    contextMenuContent.instance.isLeaf = true;
    (<OverlayRefWithContextMenu>overlay).contextMenu = contextMenuContent.instance;

    const subscriptions: Subscription = new Subscription();
    subscriptions.add(contextMenuContent.instance.execute.asObservable()
      .subscribe(() => this.closeAllContextMenus()));
    subscriptions.add(contextMenuContent.instance.closeAllMenus.asObservable()
      .subscribe(() => this.closeAllContextMenus()));
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
  }

  public closeAllContextMenus(): void {
    if (this.overlays) {
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

  public destroyLeafMenu({ exceptRootMenu }: { exceptRootMenu?: boolean } = {}): void {
    if (this.isDestroyingLeafMenu) {
      return;
    }
    this.isDestroyingLeafMenu = true;

    setTimeout(() => {
      const overlay = this.getLastAttachedOverlay();
      if (this.overlays.length > (exceptRootMenu ? 1 : 0) && overlay) {
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
