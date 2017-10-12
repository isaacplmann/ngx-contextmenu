import { Overlay, ScrollStrategy, ScrollStrategyOptions, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operator/takeUntil';

import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { ContextMenuContentComponent } from './contextMenuContent.component';

export interface IContextMenuClickEvent {
  contextMenu?: ContextMenuComponent;
  event: MouseEvent;
  parentContextMenu?: ContextMenuContentComponent;
  item: any;
  activeMenuItemIndex?: number;
}
export interface IContextMenuContext extends IContextMenuClickEvent {
  menuItems: ContextMenuItemDirective[];
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
    const { event, parentContextMenu } = context;

    if (!parentContextMenu) {
      this.fakeElement.getBoundingClientRect = (): ClientRect => ({
        bottom: event.clientY,
        height: 0,
        left: event.clientX,
        right: event.clientX,
        top: event.clientY,
        width: 0,
      });
      if (!this.overlays[0]) {
        const positionStrategy = this.overlay.position().connectedTo(
          { nativeElement: this.fakeElement },
          { originX: 'end', originY: 'bottom' },
          { overlayX: 'start', overlayY: 'top' })
          .withFallbackPosition(
          { originX: 'start', originY: 'bottom' },
          { overlayX: 'end', overlayY: 'top' })
          .withFallbackPosition(
          { originX: 'end', originY: 'top' },
          { overlayX: 'start', overlayY: 'bottom' })
          .withFallbackPosition(
          { originX: 'start', originY: 'top' },
          { overlayX: 'end', overlayY: 'bottom' })
          ;
        this.overlays = [this.overlay.create({
          positionStrategy,
          panelClass: 'ngx-contextmenu',
          scrollStrategy: this.scrollStrategy.close(),
        })];
      }
      this.closeAllContextMenus();
      this.attachContextMenu(this.overlays[0], context);
    } else {
      const positionStrategy = this.overlay.position().connectedTo(
        { nativeElement: event.target },
        { originX: 'end', originY: 'top' },
        { overlayX: 'start', overlayY: 'top' })
        .withFallbackPosition(
        { originX: 'start', originY: 'top' },
        { overlayX: 'end', overlayY: 'top' })
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

    const contextMenuContent = overlay.attach(new ComponentPortal(ContextMenuContentComponent));
    contextMenuContent.instance.event = event;
    contextMenuContent.instance.item = item;
    contextMenuContent.instance.menuItems = menuItems;
    contextMenuContent.instance.overlay = overlay;
    const detachments = contextMenuContent.instance.overlay.detachments;
    takeUntil.call(contextMenuContent.instance.execute.asObservable(), detachments)
      .subscribe(() => this.closeAllContextMenus());
    takeUntil.call(contextMenuContent.instance.closeSubMenus.asObservable(), detachments)
      .subscribe(() => this.destroySubMenus(contextMenuContent.instance));
    takeUntil.call(contextMenuContent.instance.openSubMenu.asObservable(), detachments)
      .subscribe(subMenuEvent => this.show.next(subMenuEvent));
  }

  public closeAllContextMenus(): void {
    if (this.overlays) {
      this.overlays.forEach((overlay, index) => {
        overlay.detach();
        if (index > 0) {
          overlay.dispose();
        }
      });
    }
  }

  public getLastAttachedOverlay(): OverlayRef {
    let overlay: OverlayRef = this.overlays[this.overlays.length - 1];
    while (this.overlays.length > 1 && !overlay || !overlay.hasAttached()) {
      console.log(this.overlays.length);
      overlay.detach();
      this.overlays = this.overlays.slice(0, -1);
      overlay = this.overlays[this.overlays.length - 1];
    }
    console.log(this.overlays.length);
    return overlay;
  }

  public destroyLeafMenu({ exceptRootMenu }: { exceptRootMenu?: boolean } = {}): void {
    if (this.isDestroyingLeafMenu) {
      return;
    }
    this.isDestroyingLeafMenu = true;

    const overlay = this.getLastAttachedOverlay();
    if (this.overlays.length > (exceptRootMenu ? 1 : 0)) {
      overlay.detach();
    }

    this.isDestroyingLeafMenu = false;
  }

  public destroySubMenus(contextMenu: ContextMenuContentComponent): void {
    console.log(contextMenu);
    const overlay = contextMenu.overlay;
    const index = this.overlays.indexOf(overlay);
    console.log(index);
    this.overlays.slice(index + 1).forEach(subMenuOverlay => {
      subMenuOverlay.detach();
      subMenuOverlay.dispose();
    });
  }

  // public getLeafMenu(): ContextMenuContentComponent {
  //   // const cmContents: ComponentRef<ContextMenuContentComponent>[] = this.contextMenuInjector.getByType(this.contextMenuInjector.type);
  //   // if (cmContents && cmContents.length > 0) {
  //   //   return cmContents[cmContents.length - 1].instance;
  //   // }
  //   return undefined;
  // }

  // public isLeafMenu(cmContent: ContextMenuContentComponent): boolean {
  //   return this.getLeafMenu() === cmContent;
  // }
}
