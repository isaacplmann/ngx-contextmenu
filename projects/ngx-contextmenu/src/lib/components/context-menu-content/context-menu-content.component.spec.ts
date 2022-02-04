import { OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { EventEmitter } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ContextMenuItemDirective } from 'dist/ngx-contextmenu/public-api';
import { Subject } from 'rxjs';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';
import { ContextMenuContentComponent } from './context-menu-content.component';

describe('Component: ContextMenuContentComponent', () => {
  let component: ContextMenuContentComponent;
  let fixture: ComponentFixture<ContextMenuContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayModule],
      providers: [ContextMenuService],
      declarations: [ContextMenuContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenuContentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should set item to each menu currentItem property', () => {
      component.menuItems = [
        { currentItem: undefined, execute: new Subject() },
        { currentItem: undefined, execute: new Subject() },
        { currentItem: undefined, execute: new Subject() },
      ] as ContextMenuItemDirective[];

      component.item = { id: 'a' };
      component.ngOnInit();

      expect(component.menuItems).toEqual([
        jasmine.objectContaining({ currentItem: component.item }),
        jasmine.objectContaining({ currentItem: component.item }),
        jasmine.objectContaining({ currentItem: component.item }),
      ]);
    });

    it('should bind menuItem execution to execute emitter', () => {
      const execute = jasmine.createSpy('execute');
      component.execute.subscribe(execute);

      const emitterA = new EventEmitter();
      const emitterB = new EventEmitter();
      const emitterC = new EventEmitter();

      const menuA: ContextMenuItemDirective = {
        currentItem: undefined,
        execute: emitterA,
      } as ContextMenuItemDirective;
      const menuB: ContextMenuItemDirective = {
        currentItem: undefined,
        execute: emitterB,
      } as ContextMenuItemDirective;
      const menuC: ContextMenuItemDirective = {
        currentItem: undefined,
        execute: emitterC,
      } as ContextMenuItemDirective;
      component.menuItems = [menuA, menuB, menuC];

      component.ngOnInit();
      const eventA = {
        event: new MouseEvent('click'),
        item: { id: 'a' },
      };
      const eventB = {
        event: new MouseEvent('click'),
        item: { id: 'a' },
      };
      const eventC = {
        event: new MouseEvent('click'),
        item: { id: 'a' },
      };
      emitterA.emit(eventA);
      expect(execute).toHaveBeenCalledWith({ ...eventA, menuItem: menuA });
      emitterB.emit(eventB);
      expect(execute).toHaveBeenCalledWith({ ...eventB, menuItem: menuB });
      emitterC.emit(eventC);
      expect(execute).toHaveBeenCalledWith({ ...eventC, menuItem: menuC });
      expect(execute).toHaveBeenCalledTimes(3);
    });
  });

  describe('#ngAfterViewInit', () => {
    it('should autofocus if enabled', fakeAsync(() => {
      spyOn(component, 'focus');
      component.autoFocus = true;
      component.ngAfterViewInit();
      tick(0);
      expect(component.focus).toHaveBeenCalled();
    }));

    it('should not autofocus if disabled', fakeAsync(() => {
      spyOn(component, 'focus');
      component.autoFocus = false;
      component.ngAfterViewInit();
      tick(0);
      expect(component.focus).not.toHaveBeenCalled();
    }));

    it('should update overlay position', () => {
      component.overlay = jasmine.createSpyObj('OverlayRef', [
        'updatePosition',
      ]);
      component.ngAfterViewInit();
      expect(component.overlay.updatePosition).toHaveBeenCalled();
    });

    it('should not fail if overlay is not defined', () => {
      expect(() => component.ngAfterViewInit()).not.toThrow();
    });
  });

  describe('#focus', () => {
    it('should focus if autoFocus is enabled', () => {
      component.autoFocus = true;
      component.menuElement = {
        nativeElement: jasmine.createSpyObj('nativeElement', ['focus']),
      };
      component.focus();
      expect(component.menuElement.nativeElement.focus).toHaveBeenCalled();
    });

    it('should not focus if autoFocus is disabled', () => {
      component.autoFocus = false;
      component.menuElement = {
        nativeElement: jasmine.createSpyObj('nativeElement', ['focus']),
      };
      component.focus();
      expect(component.menuElement.nativeElement.focus).not.toHaveBeenCalled();
    });
  });

  describe('#stopEvent', () => {
    it('should stop event propagation', () => {
      const event = jasmine.createSpyObj('event', ['stopPropagation']);
      component.stopEvent(event);
      expect(event.stopPropagation).toHaveBeenCalled();
    });
  });

  describe('#isMenuItemEnabled', () => {
    it('should return true if menu is enabled', () => {
      const menu: ContextMenuItemDirective = {
        enabled: true,
      } as ContextMenuItemDirective;
      expect(component.isMenuItemEnabled(menu)).toBe(true);
    });

    it('should return false if menu is not enabled', () => {
      const menu: ContextMenuItemDirective = {
        enabled: false,
      } as ContextMenuItemDirective;
      expect(component.isMenuItemEnabled(menu)).toBe(false);
    });

    it('should return true if the evaluation of the menu enabled property is true', () => {
      const menu: ContextMenuItemDirective = {
        enabled: (item) => true,
      } as ContextMenuItemDirective;
      expect(component.isMenuItemEnabled(menu)).toBe(true);
    });

    it('should return false if the evaluation of the menu enabled property is false', () => {
      const menu: ContextMenuItemDirective = {
        enabled: (item) => false,
      } as ContextMenuItemDirective;
      expect(component.isMenuItemEnabled(menu)).toBe(false);
    });
  });

  describe('#isMenuItemVisible', () => {
    it('should return true if menu is visible', () => {
      const menu: ContextMenuItemDirective = {
        visible: true,
      } as ContextMenuItemDirective;
      expect(component.isMenuItemVisible(menu)).toBe(true);
    });

    it('should return false if menu is not visible', () => {
      const menu: ContextMenuItemDirective = {
        visible: false,
      } as ContextMenuItemDirective;
      expect(component.isMenuItemVisible(menu)).toBe(false);
    });

    it('should return true if the evaluation of the menu visible property is true', () => {
      const menu: ContextMenuItemDirective = {
        visible: (item) => true,
      } as ContextMenuItemDirective;
      expect(component.isMenuItemVisible(menu)).toBe(true);
    });

    it('should return false if the evaluation of the menu visible property is false', () => {
      const menu: ContextMenuItemDirective = {
        visible: (item) => false,
      } as ContextMenuItemDirective;
      expect(component.isMenuItemVisible(menu)).toBe(false);
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

  describe('#isDisabled', () => {
    it('should return false if link enabled is undefined', () => {
      const result = component.isDisabled({
        enabled: undefined,
        click: () => {},
        html: (item) => '',
      });

      expect(result).toBe(false);
    });

    it('should return false if link enabled evaluation is true', () => {
      const result = component.isDisabled({
        enabled: () => true,
        click: () => {},
        html: (item) => '',
      });

      expect(result).toBe(false);
    });

    it('should return true if link enabled evaluation is false', () => {
      const result = component.isDisabled({
        enabled: () => false,
        click: () => {},
        html: (item) => '',
      });

      expect(result).toBe(true);
    });
  });

  describe('#onKeyEvent', () => {});

  describe('#keyboardOpenSubMenu', () => {});

  describe('#keyboardMenuItemSelect', () => {});

  describe('#onCloseLeafMenu', () => {
    let event: KeyboardEvent;
    let closeLeafMenu: jasmine.Spy<jasmine.Func>;

    beforeEach(() => {
      closeLeafMenu = jasmine.createSpy('subscriber');
      component.closeLeafMenu.subscribe(closeLeafMenu);
    });

    it('should notify closeLeafMenu', () => {
      event = {
        stopPropagation: jasmine.createSpy('stopPropagation'),
        preventDefault: jasmine.createSpy('preventDefault'),
        target: document.createElement('div'),
      } as unknown as KeyboardEvent;
      component.isLeaf = true;
      component.onCloseLeafMenu(event);
      expect(closeLeafMenu).toHaveBeenCalledWith({
        event,
        exceptRootMenu: false,
      });
    });

    it('should notify closeLeafMenu when key press is arrow left', () => {
      event = {
        stopPropagation: jasmine.createSpy('stopPropagation'),
        preventDefault: jasmine.createSpy('preventDefault'),
        target: document.createElement('div'),
        keyCode: 37,
      } as unknown as KeyboardEvent;
      component.isLeaf = true;
      component.onCloseLeafMenu(event);
      expect(closeLeafMenu).toHaveBeenCalledWith({
        event,
        exceptRootMenu: true,
      });
    });

    it('should not notify closeLeafMenu if not isLeaf', () => {
      event = {
        stopPropagation: jasmine.createSpy('stopPropagation'),
        preventDefault: jasmine.createSpy('preventDefault'),
        target: document.createElement('div'),
      } as unknown as KeyboardEvent;
      component.isLeaf = false;
      component.onCloseLeafMenu(event);
      expect(closeLeafMenu).not.toHaveBeenCalled();
    });

    describe('when event target is an arbitrary html element', () => {
      it('should stop event propagation', () => {
        event = {
          stopPropagation: jasmine.createSpy('stopPropagation'),
          preventDefault: jasmine.createSpy('preventDefault'),
          target: document.createElement('div'),
        } as unknown as KeyboardEvent;
        component.isLeaf = true;
        component.onCloseLeafMenu(event);
        expect(event.stopPropagation).toHaveBeenCalled();
      });

      it('should prevent default event', () => {
        event = {
          stopPropagation: jasmine.createSpy('stopPropagation'),
          preventDefault: jasmine.createSpy('preventDefault'),
          target: document.createElement('div'),
        } as unknown as KeyboardEvent;
        component.isLeaf = true;
        component.onCloseLeafMenu(event);
        expect(event.preventDefault).toHaveBeenCalled();
      });
    });
    describe('when event target is not an arbitrary html element', () => {
      it('should not stop event propagation if event target is undefined', () => {
        event = {
          stopPropagation: jasmine.createSpy('stopPropagation'),
          preventDefault: jasmine.createSpy('preventDefault'),
          target: undefined,
        } as unknown as KeyboardEvent;
        component.isLeaf = true;
        component.onCloseLeafMenu(event);
        expect(event.stopPropagation).not.toHaveBeenCalled();
      });

      it('should not prevent default event if event target is undefined', () => {
        event = {
          stopPropagation: jasmine.createSpy('stopPropagation'),
          preventDefault: jasmine.createSpy('preventDefault'),
          target: undefined,
        } as unknown as KeyboardEvent;
        component.isLeaf = true;
        component.onCloseLeafMenu(event);
        expect(event.preventDefault).not.toHaveBeenCalled();
      });

      it('should not stop event propagation if event target is contentEditable', () => {
        const div = document.createElement('div');
        div.contentEditable = 'true';
        event = {
          stopPropagation: jasmine.createSpy('stopPropagation'),
          preventDefault: jasmine.createSpy('preventDefault'),
          target: div,
        } as unknown as KeyboardEvent;
        component.isLeaf = true;
        component.onCloseLeafMenu(event);
        expect(event.stopPropagation).not.toHaveBeenCalled();
      });

      it('should not prevent default event if event target is contentEditable', () => {
        const div = document.createElement('div');
        div.contentEditable = 'true';
        event = {
          stopPropagation: jasmine.createSpy('stopPropagation'),
          preventDefault: jasmine.createSpy('preventDefault'),
          target: div,
        } as unknown as KeyboardEvent;
        component.isLeaf = true;
        component.onCloseLeafMenu(event);
        expect(event.preventDefault).not.toHaveBeenCalled();
      });

      ['input', 'textarea', 'select'].forEach((tag) => {
        it(`should not stop event propagation if event target is an <${tag}>`, () => {
          event = {
            stopPropagation: jasmine.createSpy('stopPropagation'),
            preventDefault: jasmine.createSpy('preventDefault'),
            target: document.createElement(tag),
          } as unknown as KeyboardEvent;
          component.isLeaf = true;
          component.onCloseLeafMenu(event);
          expect(event.stopPropagation).not.toHaveBeenCalled();
        });

        it(`should not prevent default event if event target is is an <${tag}>`, () => {
          event = {
            stopPropagation: jasmine.createSpy('stopPropagation'),
            preventDefault: jasmine.createSpy('preventDefault'),
            target: document.createElement(tag),
          } as unknown as KeyboardEvent;
          component.isLeaf = true;
          component.onCloseLeafMenu(event);
          expect(event.preventDefault).not.toHaveBeenCalled();
        });
      });
    });

    it('should not stop event propagation if is not isLeaf', () => {
      event = {
        stopPropagation: jasmine.createSpy('stopPropagation'),
        preventDefault: jasmine.createSpy('preventDefault'),
      } as unknown as KeyboardEvent;
      component.isLeaf = false;
      component.onCloseLeafMenu(event);
      expect(event.stopPropagation).not.toHaveBeenCalled();
    });

    it('should not prevent default event if is not isLeaf', () => {
      event = {
        stopPropagation: jasmine.createSpy('stopPropagation'),
        preventDefault: jasmine.createSpy('preventDefault'),
        target: document.createElement('div'),
      } as unknown as KeyboardEvent;
      component.isLeaf = false;
      component.onCloseLeafMenu(event);
      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('#closeMenu', () => {
    let closeAllMenus: jasmine.Spy<jasmine.Func>;

    beforeEach(() => {
      closeAllMenus = jasmine.createSpy('closeAllMenus');
      component.closeAllMenus.subscribe(closeAllMenus);
    });

    it('should not notify close all menus if it is a right click', () => {
      const event = new MouseEvent('click', { button: 2 });
      component.closeMenu(event);
      expect(closeAllMenus).not.toHaveBeenCalled();
    });

    it('should notify close all menus if event is not a click', () => {
      const event = new MouseEvent('mousedown', { button: 2 });
      component.closeMenu(event);
      expect(closeAllMenus).toHaveBeenCalledWith({ event });
    });

    it('should notify close all menus if event is not a right click', () => {
      const event = new MouseEvent('click', { button: 1 });
      component.closeMenu(event);
      expect(closeAllMenus).toHaveBeenCalledWith({ event });
    });
  });

  describe('#onOpenSubMenu', () => {});

  describe('#onMenuItemSelect', () => {
    let menu: ContextMenuItemDirective;
    let event: MouseEvent;

    beforeEach(() => {
      spyOn(component, 'onOpenSubMenu');
      component.item = { id: 'a' };
      menu = jasmine.createSpyObj('menu', ['triggerExecute']);
      event = jasmine.createSpyObj('event', [
        'stopPropagation',
        'preventDefault',
      ]);
    });

    it('should stop event propagation', () => {
      component.onMenuItemSelect(menu, event);
      expect(event.stopPropagation).toHaveBeenCalled();
    });

    it('should preventDefault event', () => {
      component.onMenuItemSelect(menu, event);
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should try to open sub menu', () => {
      component.onMenuItemSelect(menu, event);
      expect(component.onOpenSubMenu).toHaveBeenCalledWith(menu, event);
    });

    it('should execute if there is no sub menu', () => {
      component.onMenuItemSelect(menu, event);
      expect(menu.triggerExecute).toHaveBeenCalledWith(component.item, event);
    });

    it('should not execute if there is sub menu', () => {
      menu.subMenu = {};
      component.onMenuItemSelect(menu, event);
      expect(menu.triggerExecute).not.toHaveBeenCalled();
    });
  });
});
