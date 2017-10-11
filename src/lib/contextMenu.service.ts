import { Overlay, ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

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
  private _overlayRef; OverlayRef;
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
  ) {}

  public openContextMenu(context: IContextMenuContext) {
    const { event, item, menuItems } = context;

    this.fakeElement.getBoundingClientRect = (): ClientRect => ({
      bottom: event.clientY,
      height: 0,
      left: event.clientX,
      right: event.clientX,
      top: event.clientY,
      width: 0,
    });
    if (!this._overlayRef) {
      const positionStrategy = this.overlay.position().connectedTo(
        { nativeElement: this.fakeElement },
        { originX: 'end', originY: 'bottom' },
        { overlayX: 'end', overlayY: 'top' });
      this._overlayRef = this.overlay.create({
        positionStrategy,
        panelClass: 'ngx-contextmenu',
        scrollStrategy: this.scrollStrategy.close(),
      });
    }

    // if (!menuEvent.parentContextMenu) {
    //   this.contextMenuInjector.destroyAll();
    // } else {
    //   this.destroySubMenus(menuEvent.parentContextMenu);
    // }
    this._overlayRef.detach();
    this.contextMenuContent = this._overlayRef.attach(new ComponentPortal(ContextMenuContentComponent));
    console.log(this.contextMenuContent);
    this.contextMenuContent.instance.event = event;
    this.contextMenuContent.instance.item = item;
    this.contextMenuContent.instance.menuItems = menuItems;
    this.contextMenuContent.instance.execute.subscribe(() => this._overlayRef.detach());
  }

  public closeAllContextMenus(): void {
    if (this._overlayRef) {
      this._overlayRef.detach();
    }
  }

  public destroyLeafMenu({exceptRootMenu}: {exceptRootMenu?: boolean} = {}): void {
    if (this.isDestroyingLeafMenu) {
      return;
    }
    this.isDestroyingLeafMenu = true;
    // setTimeout(() => {
    //   const cmContents: ComponentRef<ContextMenuContentComponent>[] = this.contextMenuInjector.getByType(this.contextMenuInjector.type);
    //   if (cmContents && cmContents.length > 1) {
    //     cmContents[cmContents.length - 2].instance.focus();
    //   }
    //   if (cmContents && cmContents.length > (exceptRootMenu ? 1 : 0)) {
    //     this.contextMenuInjector.destroy(cmContents[cmContents.length - 1]);
    //   }
    //   this.isDestroyingLeafMenu = false;
    // });
  }

  public getLeafMenu(): ContextMenuContentComponent {
    // const cmContents: ComponentRef<ContextMenuContentComponent>[] = this.contextMenuInjector.getByType(this.contextMenuInjector.type);
    // if (cmContents && cmContents.length > 0) {
    //   return cmContents[cmContents.length - 1].instance;
    // }
    return undefined;
  }

  public isLeafMenu(cmContent: ContextMenuContentComponent): boolean {
    return this.getLeafMenu() === cmContent;
  }
}
