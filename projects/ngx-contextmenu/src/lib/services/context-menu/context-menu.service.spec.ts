import {
  CloseScrollStrategy,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayModule,
  OverlayRef,
  ScrollStrategyOptions,
} from '@angular/cdk/overlay';
import { ComponentRef, ElementRef } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { ContextMenuContentComponent } from '../../components/context-menu-content/context-menu-content.component';
import { ContextMenuComponent } from '../../components/context-menu/context-menu.component';
import { ContextMenuItemDirective } from '../../directives/context-menu-item/context-menu-item.directive';
import {
  ContextMenuService,
  IContextMenuClickEvent,
  IContextMenuContext,
} from './context-menu.service';

describe('Service: ContextMenuService', () => {
  let service: ContextMenuService;
  let scrollStrategyClose: jasmine.Spy<jasmine.Func>;
  let overlayPosition: jasmine.Spy<jasmine.Func>;
  let overlayFlexibleConnectedTo: jasmine.Spy<jasmine.Func>;
  let overlayWithPositions: jasmine.Spy<jasmine.Func>;
  let overlayCreate: jasmine.Spy<jasmine.Func>;
  let overlayRefAttach: jasmine.Spy<jasmine.Func>;
  let overlayRefDetach: jasmine.Spy<jasmine.Func>;
  let overlayRefDispose: jasmine.Spy<jasmine.Func>;
  let positionStrategy: FlexibleConnectedPositionStrategy;
  let overlayRef: OverlayRef;
  let contextMenuContentRef: ComponentRef<ContextMenuContentComponent>;
  let closeScrollStrategy: CloseScrollStrategy;
  let contextMenuContentComponent: ContextMenuContentComponent;

  beforeEach(() => {
    contextMenuContentRef = {
      instance: {
        execute: new Subject(),
        closeAllMenus: new Subject(),
        closeLeafMenu: new Subject(),
        openSubMenu: new Subject(),
      },
      onDestroy: jasmine.createSpy('onDestroy'),
      changeDetectorRef: {
        detectChanges: jasmine.createSpy('detectChanges'),
      },
    } as unknown as ComponentRef<ContextMenuContentComponent>;
    contextMenuContentComponent = {
      id: 'ContextMenuContentComponent',
    } as unknown as ContextMenuContentComponent;
    overlayRefAttach = jasmine
      .createSpy('attach')
      .and.returnValue(contextMenuContentRef);
    overlayRefDetach = jasmine.createSpy('detach');
    overlayRefDispose = jasmine.createSpy('dispose');
    positionStrategy = {
      id: 'position-strategy',
    } as unknown as FlexibleConnectedPositionStrategy;
    overlayRef = {
      id: 'overlay-ref',
      attach: overlayRefAttach,
      detach: overlayRefDetach,
      dispose: overlayRefDispose,
    } as unknown as OverlayRef;
    overlayWithPositions = jasmine
      .createSpy('withPositions')
      .and.returnValue(positionStrategy);
    overlayCreate = jasmine.createSpy('create').and.returnValue(overlayRef);
    overlayFlexibleConnectedTo = jasmine
      .createSpy('flexibleConnectedTo')
      .and.returnValue({ withPositions: overlayWithPositions });
    overlayPosition = jasmine
      .createSpy('position')
      .and.returnValue({ flexibleConnectedTo: overlayFlexibleConnectedTo });
    closeScrollStrategy = {
      id: 'closeScrollStrategy',
    } as unknown as CloseScrollStrategy;
    scrollStrategyClose = jasmine
      .createSpy('strategyClose')
      .and.returnValue(closeScrollStrategy);
    TestBed.configureTestingModule({
      imports: [OverlayModule],
      providers: [
        ContextMenuService,
        {
          provide: Overlay,
          useValue: {
            position: overlayPosition,
            create: overlayCreate,
          },
        },
        {
          provide: ScrollStrategyOptions,
          useValue: {
            close: scrollStrategyClose,
          },
        },
      ],
    });
    service = TestBed.inject(ContextMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#openContextMenu', () => {
    describe('without parent context menu', () => {
      it('should get a position strategy with fakeElement and create an overlay from it', () => {
        spyOn(service, 'attachContextMenu');
        const context = {
          event: new MouseEvent('click'),
          item: {},
          menuClass: '',
          menuItems: [],
        };
        service.openContextMenu(context);

        expect(overlayPosition).toHaveBeenCalled();
        expect(overlayFlexibleConnectedTo).toHaveBeenCalledWith({
          height: 0,
          width: 0,
          x: 0,
          y: 0,
        });
        expect(overlayWithPositions).toHaveBeenCalledWith([
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
        expect(overlayCreate).toHaveBeenCalledWith({
          positionStrategy,
          panelClass: 'ngx-contextmenu',
          scrollStrategy: closeScrollStrategy,
        });

        expect(service.attachContextMenu).toHaveBeenCalledWith(
          overlayRef,
          context
        );
      });

      it('should get a position strategy with anchorElement and create an overlay from it', () => {
        spyOn(service, 'attachContextMenu');
        let anchorElement = document.createElement('div');
        const context = {
          event: new MouseEvent('click'),
          item: {},
          menuClass: '',
          menuItems: [],
          anchorElement,
        };
        service.openContextMenu(context);

        expect(overlayPosition).toHaveBeenCalled();
        expect(overlayFlexibleConnectedTo).toHaveBeenCalledWith(
          jasmine.any(ElementRef)
        );
        expect(overlayFlexibleConnectedTo).toHaveBeenCalledWith(
          jasmine.objectContaining({ nativeElement: anchorElement })
        );
        expect(overlayWithPositions).toHaveBeenCalledWith([
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
        expect(overlayCreate).toHaveBeenCalledWith({
          positionStrategy,
          panelClass: 'ngx-contextmenu',
          scrollStrategy: closeScrollStrategy,
        });

        expect(service.attachContextMenu).toHaveBeenCalledWith(
          overlayRef,
          context
        );
      });
    });

    describe('with parent context menu', () => {
      it('should get a position strategy with MouseEvent target and create an overlay from it', () => {
        spyOn(service, 'destroySubMenus');
        spyOn(service, 'attachContextMenu');
        const target = document.createElement('div');
        const event = new MouseEvent('click');
        spyOnProperty(event, 'target', 'get').and.returnValue(target);
        const context = {
          event,
          item: {},
          menuClass: '',
          menuItems: [],
          parentContextMenu: contextMenuContentComponent,
        };
        service.openContextMenu(context);

        expect(overlayPosition).toHaveBeenCalled();
        expect(overlayFlexibleConnectedTo).toHaveBeenCalledWith(
          jasmine.any(ElementRef)
        );
        expect(overlayFlexibleConnectedTo).toHaveBeenCalledWith(
          jasmine.objectContaining({
            nativeElement: target,
          })
        );
        expect(overlayWithPositions).toHaveBeenCalledWith([
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
        expect(overlayCreate).toHaveBeenCalledWith({
          positionStrategy,
          panelClass: 'ngx-contextmenu',
          scrollStrategy: closeScrollStrategy,
        });

        expect(service.attachContextMenu).toHaveBeenCalledWith(
          overlayRef,
          context
        );
        expect(service.destroySubMenus).toHaveBeenCalledWith(
          contextMenuContentComponent
        );
      });

      it('should get a position strategy with anchorElement and create an overlay from it', () => {
        spyOn(service, 'destroySubMenus');
        spyOn(service, 'attachContextMenu');
        const anchorElement = document.createElement('div');
        const context = {
          event: undefined,
          item: {},
          menuClass: '',
          menuItems: [],
          parentContextMenu: contextMenuContentComponent,
          anchorElement,
        } as unknown as IContextMenuContext;
        service.openContextMenu(context);

        expect(overlayPosition).toHaveBeenCalled();
        expect(overlayFlexibleConnectedTo).toHaveBeenCalledWith(
          jasmine.any(ElementRef)
        );
        expect(overlayFlexibleConnectedTo).toHaveBeenCalledWith(
          jasmine.objectContaining({
            nativeElement: anchorElement,
          })
        );
        expect(overlayWithPositions).toHaveBeenCalledWith([
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
        expect(overlayCreate).toHaveBeenCalledWith({
          positionStrategy,
          panelClass: 'ngx-contextmenu',
          scrollStrategy: closeScrollStrategy,
        });

        expect(service.attachContextMenu).toHaveBeenCalledWith(
          overlayRef,
          context
        );
        expect(service.destroySubMenus).toHaveBeenCalledWith(
          contextMenuContentComponent
        );
      });

      it('should get a position strategy with anchorElement with KeyboardEvent and create an overlay from it', () => {
        spyOn(service, 'destroySubMenus');
        spyOn(service, 'attachContextMenu');
        const anchorElement = document.createElement('div');
        const context = {
          event: new KeyboardEvent('down'),
          item: {},
          menuClass: '',
          menuItems: [],
          parentContextMenu: contextMenuContentComponent,
          anchorElement,
        } as unknown as IContextMenuContext;
        service.openContextMenu(context);

        expect(overlayPosition).toHaveBeenCalled();
        expect(overlayFlexibleConnectedTo).toHaveBeenCalledWith(
          jasmine.any(ElementRef)
        );
        expect(overlayFlexibleConnectedTo).toHaveBeenCalledWith(
          jasmine.objectContaining({
            nativeElement: anchorElement,
          })
        );
        expect(overlayWithPositions).toHaveBeenCalledWith([
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
        expect(overlayCreate).toHaveBeenCalledWith({
          positionStrategy,
          panelClass: 'ngx-contextmenu',
          scrollStrategy: closeScrollStrategy,
        });

        expect(service.attachContextMenu).toHaveBeenCalledWith(
          overlayRef,
          context
        );
        expect(service.destroySubMenus).toHaveBeenCalledWith(
          contextMenuContentComponent
        );
      });
    });
  });

  describe('#attachContextMenu', () => {
    let overlayRef: OverlayRef;
    let event: MouseEvent;
    let item: unknown;
    let menuItemA: ContextMenuItemDirective;
    let menuItemB: ContextMenuItemDirective;

    beforeEach(() => {
      overlayRef = {
        detach: jasmine.createSpy('detach'),
        attach: jasmine
          .createSpy('attach')
          .and.returnValue(contextMenuContentRef),
        dispose: jasmine.createSpy('dispose'),
        hasAttached: jasmine.createSpy('hasAttached'),
      } as unknown as OverlayRef;
      event = new MouseEvent('click');
      item = { id: 'a' };
      menuItemA = { id: 'menu-a' } as unknown as ContextMenuItemDirective;
      menuItemB = { id: 'menu-b' } as unknown as ContextMenuItemDirective;
      service.attachContextMenu(overlayRef, {
        event,
        item,
        menuClass: 'menu-class',
        menuItems: [menuItemA, menuItemB],
      });
    });

    it('should setup ContextMenuContentComponent', () => {
      expect(contextMenuContentRef.instance.event).toEqual(event);
      expect(contextMenuContentRef.instance.item).toEqual(item);
      expect(contextMenuContentRef.instance.menuItems).toEqual([
        menuItemA,
        menuItemB,
      ]);
      expect(contextMenuContentRef.instance.overlay).toEqual(overlayRef);
      expect(contextMenuContentRef.instance.isLeaf).toEqual(true);
      expect(contextMenuContentRef.instance.menuClass).toEqual('menu-class');
    });

    it('should close all context menus when this menu execute', () => {
      spyOn(service, 'closeAllContextMenus');
      const executeEvent = {
        event: new MouseEvent('click'),
        item: {},
        menuItem: {} as unknown as ContextMenuItemDirective,
      };
      contextMenuContentRef.instance.execute.next(executeEvent);
      expect(service.closeAllContextMenus).toHaveBeenCalledWith({
        eventType: 'execute',
        ...executeEvent,
      });
    });

    it('should close all context menus when this menu closeAllMenus', () => {
      spyOn(service, 'closeAllContextMenus');
      const closeAllEvent = {
        event: new MouseEvent('click'),
        item: {},
        menuItem: {} as unknown as ContextMenuItemDirective,
      };
      contextMenuContentRef.instance.closeAllMenus.next(closeAllEvent);
      expect(service.closeAllContextMenus).toHaveBeenCalledWith({
        eventType: 'cancel',
        ...closeAllEvent,
      });
    });

    it('should close leaf menu when this menu closeLeafMenu', () => {
      spyOn(service, 'destroyLeafMenu');
      const closeLeafMenuEvent = {
        event: new MouseEvent('click'),
        item: {},
        menuItem: {} as unknown as ContextMenuItemDirective,
      };
      contextMenuContentRef.instance.closeLeafMenu.next(closeLeafMenuEvent);
      expect(service.destroyLeafMenu).toHaveBeenCalledWith(closeLeafMenuEvent);
    });

    describe('when this menu openSubMenu', () => {
      it('should destroy all sub menus of this menu', () => {
        spyOn(service, 'destroySubMenus');
        const openSubMenuEvent: IContextMenuClickEvent = {
          event: new MouseEvent('click'),
          item: {},
        };
        contextMenuContentRef.instance.openSubMenu.next(openSubMenuEvent);
        expect(service.destroySubMenus).toHaveBeenCalledWith(
          contextMenuContentRef.instance
        );
      });

      it('should set this menu as leaf if it has no contextMenu', () => {
        const openSubMenuEvent: IContextMenuClickEvent = {
          event: new MouseEvent('click'),
          item: {},
        };
        contextMenuContentRef.instance.openSubMenu.next(openSubMenuEvent);
        expect(contextMenuContentRef.instance.isLeaf).toEqual(true);
      });

      it('should not set this menu as leaf if it has contextMenu', () => {
        const openSubMenuEvent: IContextMenuClickEvent = {
          event: new MouseEvent('click'),
          item: {},
          contextMenu: {} as unknown as ContextMenuComponent,
        };
        contextMenuContentRef.instance.openSubMenu.next(openSubMenuEvent);
        expect(contextMenuContentRef.instance.isLeaf).not.toEqual(true);
      });
    });

    it('should call onDestroy with a function', () => {
      expect(contextMenuContentRef.onDestroy).toHaveBeenCalledWith(
        jasmine.any(Function)
      );
    });

    it('should deactivate menu items when onDestroy is called', () => {
      (contextMenuContentRef.onDestroy as jasmine.Spy).calls.argsFor(0)[0]();
      expect(menuItemA.isActive).toEqual(false);
      expect(menuItemB.isActive).toEqual(false);
    });
  });

  describe('#closeAllContextMenus', () => {
    it('should notify close', () => {
      const close = jasmine.createSpy('subscriber');
      service.close.subscribe(close);
      service.openContextMenu({
        event: new MouseEvent('click'),
        item: {},
        menuClass: '',
        menuItems: [],
      });
      service.closeAllContextMenus({ eventType: 'cancel' });
      expect(close).toHaveBeenCalledWith({ eventType: 'cancel' });
    });
  });

  describe('#getLastAttachedOverlay', () => {
    let overlay1: OverlayRef;
    let overlay2: OverlayRef;
    let overlay3: OverlayRef;

    const openContextMenu = (
      parentContextMenu?: ContextMenuContentComponent
    ) => {
      const context = {
        event: new MouseEvent('click'),
        item: {},
        menuClass: '',
        menuItems: [],
        parentContextMenu,
      };
      service.openContextMenu(context);
    };

    const createOverlay = (id: string, hasAttached = true) => {
      return {
        id,
        detach: jasmine.createSpy('detach'),
        attach: jasmine.createSpy('attach'),
        dispose: jasmine.createSpy('dispose'),
        hasAttached: jasmine
          .createSpy('hasAttached')
          .and.returnValue(hasAttached),
      } as unknown as OverlayRef;
    };

    beforeEach(() => {
      spyOn(service, 'attachContextMenu');
      spyOn(service, 'closeAllContextMenus');
      overlay1 = createOverlay('OverlayRef 1');
      overlay2 = createOverlay('OverlayRef 2', false);
      overlay3 = createOverlay('OverlayRef 3', false);
      overlayCreate.and.returnValues(overlay1, overlay2, overlay3);
    });

    it('should destroy all non attached leaf overlays', () => {
      openContextMenu();
      openContextMenu({
        overlay: overlay1,
      } as unknown as ContextMenuContentComponent);
      openContextMenu({
        overlay: overlay2,
      } as unknown as ContextMenuContentComponent);
      expect(overlayCreate).toHaveBeenCalledTimes(3);
      service.destroySubMenus({
        overlay: overlay1,
      } as unknown as ContextMenuContentComponent);
      const result = service.getLastAttachedOverlay();
      expect(result).toEqual(overlay1);
      expect(overlay2.detach).toHaveBeenCalled();
      expect(overlay2.dispose).toHaveBeenCalled();
      expect(overlay3.detach).toHaveBeenCalled();
      expect(overlay3.dispose).toHaveBeenCalled();
    });
  });

  describe('#destroyLeafMenu', () => {
    let overlay1: OverlayRef;
    let overlay2: OverlayRef;
    let overlay3: OverlayRef;

    const openContextMenu = (
      parentContextMenu?: ContextMenuContentComponent
    ) => {
      const context = {
        event: new MouseEvent('click'),
        item: {},
        menuClass: '',
        menuItems: [],
        parentContextMenu,
      };
      service.openContextMenu(context);
    };

    const createOverlay = (id: string, hasAttached = true) => {
      return {
        id,
        detach: jasmine.createSpy('detach'),
        attach: jasmine.createSpy('attach'),
        dispose: jasmine.createSpy('dispose'),
        hasAttached: jasmine
          .createSpy('hasAttached')
          .and.returnValue(hasAttached),
      } as unknown as OverlayRef;
    };

    beforeEach(() => {
      spyOn(service, 'attachContextMenu');
      spyOn(service, 'closeAllContextMenus');
      overlay1 = createOverlay('OverlayRef 1');
      overlay2 = createOverlay('OverlayRef 2', false);
      overlay3 = createOverlay('OverlayRef 3', false);
      overlayCreate.and.returnValues(overlay1, overlay2, overlay3);
    });

    it('should destroy all non attached leaf overlays', fakeAsync(() => {
      openContextMenu();
      openContextMenu({
        overlay: overlay1,
      } as unknown as ContextMenuContentComponent);
      openContextMenu({
        overlay: overlay2,
      } as unknown as ContextMenuContentComponent);
      expect(overlayCreate).toHaveBeenCalledTimes(3);
      service.destroyLeafMenu();
      tick(0);
      expect(overlay1.detach).toHaveBeenCalledTimes(1);
      expect(overlay1.dispose).toHaveBeenCalledTimes(1);
      expect(overlay2.detach).toHaveBeenCalledTimes(1);
      expect(overlay2.dispose).toHaveBeenCalledTimes(1);
      expect(overlay3.detach).toHaveBeenCalledTimes(1);
      expect(overlay3.dispose).toHaveBeenCalledTimes(1);
    }));

    it('should not destroy while a destroy occurres', fakeAsync(() => {
      openContextMenu();
      openContextMenu({
        overlay: overlay1,
      } as unknown as ContextMenuContentComponent);
      openContextMenu({
        overlay: overlay2,
      } as unknown as ContextMenuContentComponent);
      expect(overlayCreate).toHaveBeenCalledTimes(3);
      service.destroyLeafMenu();
      service.destroyLeafMenu();
      tick(0);
      expect(overlay1.detach).toHaveBeenCalledTimes(1);
      expect(overlay1.dispose).toHaveBeenCalledTimes(1);
      expect(overlay2.detach).toHaveBeenCalledTimes(1);
      expect(overlay2.dispose).toHaveBeenCalledTimes(1);
      expect(overlay3.detach).toHaveBeenCalledTimes(1);
      expect(overlay3.dispose).toHaveBeenCalledTimes(1);
    }));

    it('should notify on close', fakeAsync(() => {
      const close = jasmine.createSpy('subscriber');
      service.close.subscribe(close);
      openContextMenu();
      openContextMenu({
        overlay: overlay1,
      } as unknown as ContextMenuContentComponent);
      openContextMenu({
        overlay: overlay2,
      } as unknown as ContextMenuContentComponent);
      expect(overlayCreate).toHaveBeenCalledTimes(3);
      const event = new MouseEvent('click');
      service.destroyLeafMenu({ event });
      tick(0);
      expect(close).toHaveBeenCalledWith({ eventType: 'cancel', event });
    }));
  });

  describe('#destroySubMenus', () => {
    let overlay1: OverlayRef;
    let overlay2: OverlayRef;
    let overlay3: OverlayRef;

    const openContextMenu = (
      parentContextMenu?: ContextMenuContentComponent
    ) => {
      const context = {
        event: new MouseEvent('click'),
        item: {},
        menuClass: '',
        menuItems: [],
        parentContextMenu,
      };
      service.openContextMenu(context);
    };

    const createOverlay = (id: string) => {
      return {
        id,
        detach: jasmine.createSpy('detach'),
        attach: jasmine.createSpy('attach'),
        dispose: jasmine.createSpy('dispose'),
      } as unknown as OverlayRef;
    };

    beforeEach(() => {
      spyOn(service, 'attachContextMenu');
      spyOn(service, 'closeAllContextMenus');
      overlay1 = createOverlay('OverlayRef 1');
      overlay2 = createOverlay('OverlayRef 2');
      overlay3 = createOverlay('OverlayRef 3');
      overlayCreate.and.returnValues(overlay1, overlay2, overlay3);
    });

    it('should destroy sub menus of the passed menu', () => {
      openContextMenu();
      openContextMenu({
        overlay: overlay1,
      } as unknown as ContextMenuContentComponent);
      openContextMenu({
        overlay: overlay2,
      } as unknown as ContextMenuContentComponent);
      expect(overlayCreate).toHaveBeenCalledTimes(3);
      service.destroySubMenus({
        overlay: overlay1,
      } as unknown as ContextMenuContentComponent);
      expect(overlay1.detach).not.toHaveBeenCalled();
      expect(overlay1.dispose).not.toHaveBeenCalled();
      expect(overlay2.detach).toHaveBeenCalled();
      expect(overlay2.dispose).toHaveBeenCalled();
      expect(overlay3.detach).toHaveBeenCalled();
      expect(overlay3.dispose).toHaveBeenCalled();
    });
  });

  describe('#isLeafMenu', () => {
    it('should return true if the given component overlay is the same as the last one', () => {
      const overlay: OverlayRef = { id: 'OverlayRef' } as unknown as OverlayRef;
      const contextMenuContent: ContextMenuContentComponent = {
        overlay,
      } as unknown as ContextMenuContentComponent;

      spyOn(service, 'getLastAttachedOverlay').and.returnValue(overlay);
      expect(service.isLeafMenu(contextMenuContent)).toEqual(true);
    });

    it('should return true if the given component overlay is different than the last one', () => {
      const overlay1: OverlayRef = {
        id: 'OverlayRef 1',
      } as unknown as OverlayRef;
      const overlay2: OverlayRef = {
        id: 'OverlayRef 2',
      } as unknown as OverlayRef;
      const contextMenuContent: ContextMenuContentComponent = {
        overlay: overlay1,
      } as unknown as ContextMenuContentComponent;

      spyOn(service, 'getLastAttachedOverlay').and.returnValue(overlay2);
      expect(service.isLeafMenu(contextMenuContent)).toEqual(false);
    });
  });
});
