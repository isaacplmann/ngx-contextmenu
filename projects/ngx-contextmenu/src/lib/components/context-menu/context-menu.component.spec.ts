import { OverlayModule } from '@angular/cdk/overlay';
import { QueryList, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContextMenuItemDirective } from '../../directives/context-menu-item/context-menu-item.directive';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';
import { ContextMenuComponent } from './context-menu.component';

describe('ContextMenuComponent', () => {
  let component: ContextMenuComponent;
  let fixture: ComponentFixture<ContextMenuComponent>;
  let contextMenuService: ContextMenuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayModule],
      providers: [ContextMenuService],
      declarations: [ContextMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenuComponent);
    contextMenuService = TestBed.inject(ContextMenuService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onMenuEvent when contextMenuService notifies show', () => {
    const event = new MouseEvent('click');
    const item = { id: 'a' };
    const showEvent = { event, item };
    spyOn(component, 'onMenuEvent');
    contextMenuService.show.next(showEvent);
    expect(component.onMenuEvent).toHaveBeenCalledWith(showEvent);
  });

  describe('#onMenuEvent', () => {
    let open: jasmine.Spy<jasmine.Func>;
    let close: jasmine.Spy<jasmine.Func>;
    let a: ContextMenuItemDirective;
    let b: ContextMenuItemDirective;
    let event: MouseEvent;
    let item: unknown;

    beforeEach(() => {
      a = {
        visible: true,
      } as ContextMenuItemDirective;
      b = {
        visible: true,
      } as ContextMenuItemDirective;
      spyOn(component, 'setVisibleMenuItems');
      spyOn(contextMenuService, 'openContextMenu');
      open = jasmine.createSpy('open');
      component.open.subscribe(open);
      close = jasmine.createSpy('close');
      component.close.subscribe(close);

      event = new MouseEvent('click');
      item = { id: 'a' };
      component.visibleMenuItems = [a, b];
      component.menuClass = 'custom-class';
    });

    describe('with all required properties', () => {
      beforeEach(() => {
        component.onMenuEvent({ event, item, contextMenu: component });
      });

      it('should set event', () => {
        expect(component.event).toEqual(event);
      });

      it('should set item', () => {
        expect(component.item).toEqual(item);
      });

      it('should set visible items', () => {
        expect(component.setVisibleMenuItems).toHaveBeenCalled();
      });

      it('should open context menu', () => {
        expect(contextMenuService.openContextMenu).toHaveBeenCalledWith({
          event,
          item,
          contextMenu: component,
          menuItems: [a, b],
          menuClass: 'custom-class',
        });
      });

      it('should notify open menu', () => {
        expect(open).toHaveBeenCalledWith({
          event,
          item,
          contextMenu: component,
        });
      });

      it('should notify close only one when service emit close', () => {
        const closeEvent = { eventType: 'cancel' as const };
        contextMenuService.close.next(closeEvent);
        contextMenuService.close.next(closeEvent);
        contextMenuService.close.next(closeEvent);
        contextMenuService.close.next(closeEvent);
        expect(close).toHaveBeenCalledOnceWith(closeEvent);
      });
    });

    describe('with contextMenu not defined', () => {
      beforeEach(() => {
        component.onMenuEvent({ event, item, contextMenu: undefined });
      });

      it('should set event', () => {
        expect(component.event).toEqual(event);
      });

      it('should set item', () => {
        expect(component.item).toEqual(item);
      });

      it('should set visible items', () => {
        expect(component.setVisibleMenuItems).toHaveBeenCalled();
      });

      it('should open context menu', () => {
        expect(contextMenuService.openContextMenu).toHaveBeenCalledWith({
          event,
          item,
          contextMenu: undefined,
          menuItems: [a, b],
          menuClass: 'custom-class',
        });
      });

      it('should notify open menu', () => {
        expect(open).toHaveBeenCalledWith({
          event,
          item,
          contextMenu: undefined,
        });
      });

      it('should notify close only one when service emit close', () => {
        const closeEvent = { eventType: 'cancel' as const };
        contextMenuService.close.next(closeEvent);
        contextMenuService.close.next(closeEvent);
        contextMenuService.close.next(closeEvent);
        contextMenuService.close.next(closeEvent);
        expect(close).toHaveBeenCalledOnceWith(closeEvent);
      });
    });

    describe('when disabled', () => {
      beforeEach(() => {
        component.disabled = true;
        component.onMenuEvent({ event, item, contextMenu: component });
      });

      it('should not set event', () => {
        expect(component.event).toBeUndefined();
      });

      it('should not set item', () => {
        expect(component.item).toBeUndefined();
      });

      it('should set visible items', () => {
        expect(component.setVisibleMenuItems).not.toHaveBeenCalled();
      });

      it('should open context menu', () => {
        expect(contextMenuService.openContextMenu).not.toHaveBeenCalled();
      });

      it('should notify open menu', () => {
        expect(open).not.toHaveBeenCalled();
      });

      it('should not notify close when service emit close', () => {
        const closeEvent = { eventType: 'cancel' as const };
        contextMenuService.close.next(closeEvent);
        expect(close).not.toHaveBeenCalled();
      });
    });

    describe('when contextMenu being another component instance', () => {
      beforeEach(() => {
        const otherComponentInstance: ContextMenuComponent =
          new ContextMenuComponent(contextMenuService, {});
        component.onMenuEvent({
          event,
          item,
          contextMenu: otherComponentInstance,
        });
      });

      it('should not set event', () => {
        expect(component.event).toBeUndefined();
      });

      it('should not set item', () => {
        expect(component.item).toBeUndefined();
      });

      it('should set visible items', () => {
        expect(component.setVisibleMenuItems).not.toHaveBeenCalled();
      });

      it('should open context menu', () => {
        expect(contextMenuService.openContextMenu).not.toHaveBeenCalled();
      });

      it('should notify open menu', () => {
        expect(open).not.toHaveBeenCalled();
      });

      it('should not notify close when service emit close', () => {
        const closeEvent = { eventType: 'cancel' as const };
        contextMenuService.close.next(closeEvent);
        expect(close).not.toHaveBeenCalled();
      });
    });
  });

  describe('#isMenuItemVisible', () => {
    it('should return true if the menu item is visible', () => {
      const directive: ContextMenuItemDirective = {
        visible: true,
      } as ContextMenuItemDirective;
      const result = component.isMenuItemVisible(directive);
      expect(result).toBe(true);
    });

    it('should return false if the menu item is not visible', () => {
      const directive: ContextMenuItemDirective = {
        visible: false,
      } as ContextMenuItemDirective;
      const result = component.isMenuItemVisible(directive);
      expect(result).toBe(false);
    });

    it('should return false if the evaluation of the visibility is false', () => {
      const directive: ContextMenuItemDirective = {
        visible: (item: any) => false,
      } as ContextMenuItemDirective;
      const result = component.isMenuItemVisible(directive);
      expect(result).toBe(false);
    });

    it('should return true if the evaluation of the visibility is true', () => {
      const directive: ContextMenuItemDirective = {
        visible: (item: any) => true,
      } as ContextMenuItemDirective;
      const result = component.isMenuItemVisible(directive);
      expect(result).toBe(true);
    });
  });

  describe('#setVisibleMenuItems', () => {
    it('should set visibleMenuItems from menuItems', () => {
      component.menuItems = new QueryList();
      const a: ContextMenuItemDirective = {
        visible: true,
      } as ContextMenuItemDirective;
      const b: ContextMenuItemDirective = {
        visible: false,
      } as ContextMenuItemDirective;
      const c: ContextMenuItemDirective = {
        visible: false,
      } as ContextMenuItemDirective;
      const d: ContextMenuItemDirective = {
        visible: true,
      } as ContextMenuItemDirective;
      component.menuItems.reset([a, b, c, d]);
      component.setVisibleMenuItems();
      expect(component.visibleMenuItems).toEqual([a, d]);
    });
  });

  describe('#evaluateIfFunction', () => {
    it('should return the given value if not a function', () => {
      const value = { id: 'a' };
      const result = component.evaluateIfFunction(value);
      expect(result).toBe(value);
    });

    it('should return the result of the evaluation of value if it is a function', () => {
      component.item = { id: 'item' };
      const actualResult = { id: 'result' };
      const value = jasmine
        .createSpy('functionValue')
        .and.returnValue(actualResult);
      const result = component.evaluateIfFunction(value);
      expect(value).toHaveBeenCalledWith(component.item);
      expect(result).toBe(actualResult);
    });
  });
});
