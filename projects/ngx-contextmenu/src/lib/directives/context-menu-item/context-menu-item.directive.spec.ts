import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContextMenuItemDirective } from './context-menu-item.directive';

@Component({
  template: '<div contextMenuItem></div>',
})
class TestHostComponent {}

describe('Directive: ContextMenuItemDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: ContextMenuItemDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContextMenuItemDirective, TestHostComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    const directiveEl = fixture.debugElement.query(
      By.directive(ContextMenuItemDirective)
    );
    directive = directiveEl.injector.get(ContextMenuItemDirective);
  });

  describe('#new', () => {
    it('should create an instance', () => {
      expect(directive).toBeTruthy();
    });
  });

  describe('#disabled', () => {
    beforeEach(() => {
      directive.passive = false;
      directive.divider = false;
      directive.enabled = true;
    });

    it('should be false', () => {
      expect(directive.disabled).toEqual(false);
    });

    it('should be false if enabled evaluate to true', () => {
      directive.enabled = jasmine.createSpy('enabled').and.returnValue(true);
      expect(directive.disabled).toEqual(false);
    });

    it('should be true if directive is passive', () => {
      directive.passive = true;
      expect(directive.disabled).toEqual(true);
    });

    it('should be true if directive is a divider', () => {
      directive.divider = true;
      expect(directive.disabled).toEqual(true);
    });

    it('should be true if directive is not enabled', () => {
      directive.enabled = false;
      expect(directive.disabled).toEqual(true);
    });

    it('should be true if directive is not enabled', () => {
      directive.enabled = false;
      expect(directive.disabled).toEqual(true);
    });

    it('should be true if enabled evaluate to false', () => {
      directive.enabled = jasmine.createSpy('enabled').and.returnValue(false);
      expect(directive.disabled).toEqual(true);
    });
  });

  describe('#evaluateIfFunction', () => {
    it('should return the given value if not a function', () => {
      const item = { id: 'item' };
      const value = { id: 'a' };
      const result = directive.evaluateIfFunction(value, item);
      expect(result).toBe(value);
    });

    it('should return the result of the evaluation of value if it is a function', () => {
      const item = { id: 'item' };
      const actualResult = { id: 'result' };
      const value = jasmine
        .createSpy('functionValue')
        .and.returnValue(actualResult);
      const result = directive.evaluateIfFunction(value, item);
      expect(value).toHaveBeenCalledWith(item);
      expect(result).toBe(actualResult);
    });
  });

  describe('#setActiveStyles', () => {
    it('should activate the directive', () => {
      directive.setActiveStyles();
      expect(directive.isActive).toEqual(true);
    });
  });

  describe('#setInactiveStyles', () => {
    it('should deactivate the directive', () => {
      directive.setInactiveStyles();
      expect(directive.isActive).toEqual(false);
    });
  });

  describe('#triggerExecute', () => {
    let subscriber: jasmine.Spy<jasmine.Func>;

    beforeEach(() => {
      subscriber = jasmine.createSpy('subscriber');
      directive.execute.subscribe(subscriber);
    });

    it('should emit on execute if the result of the evaluation of enabled is truthy', () => {
      const item = { id: 'item' };
      directive.enabled = jasmine.createSpy('enabled').and.returnValue(true);
      const event = new MouseEvent('click');
      directive.triggerExecute(item, event);
      expect(subscriber).toHaveBeenCalledWith({ event, item });
    });

    it('should emit on execute if enabled is truthy', () => {
      const item = { id: 'item' };
      directive.enabled = true;
      const event = new MouseEvent('click');
      directive.triggerExecute(item, event);
      expect(subscriber).toHaveBeenCalledWith({ event, item });
    });

    it('should not emit on execute if enabled is falsy', () => {
      const item = { id: 'item' };
      directive.enabled = false;
      const event = new MouseEvent('click');
      directive.triggerExecute(item, event);
      expect(subscriber).not.toHaveBeenCalled();
    });

    it('should not emit on execute if the result of the evaluation of enabled is falsy', () => {
      const item = { id: 'item' };
      directive.enabled = jasmine.createSpy('enabled').and.returnValue(false);
      const event = new MouseEvent('click');
      directive.triggerExecute(item, event);
      expect(subscriber).not.toHaveBeenCalled();
    });
  });
});
