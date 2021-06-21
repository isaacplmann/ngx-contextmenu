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
});
