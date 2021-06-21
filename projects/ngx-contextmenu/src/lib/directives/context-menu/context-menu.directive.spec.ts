import { OverlayModule } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';
import { ContextMenuAttachDirective } from './context-menu.directive';

@Component({
  template: '<div contextMenu></div>',
})
class TestHostComponent {}

describe('Directive: ContextMenuAttachDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: ContextMenuAttachDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayModule],
      providers: [ContextMenuService],
      declarations: [ContextMenuAttachDirective, TestHostComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    const directiveEl = fixture.debugElement.query(
      By.directive(ContextMenuAttachDirective)
    );
    directive = directiveEl.injector.get(ContextMenuAttachDirective);
  });

  describe('#new', () => {
    it('should create an instance', () => {
      expect(directive).toBeTruthy();
    });
  });
});
