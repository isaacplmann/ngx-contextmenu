import { OverlayModule } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContextMenuComponent } from '../../components/context-menu/context-menu.component';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';
import { ContextMenuAttachDirective } from './context-menu.directive';

@Component({
  template: '<div contextMenu></div>',
})
class TestHostComponent {}

describe('Directive: ContextMenuAttachDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: ContextMenuAttachDirective;
  let contextMenuService: ContextMenuService;
  let show: jasmine.Spy<jasmine.Func>;

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
    contextMenuService = TestBed.inject(ContextMenuService);
    show = jasmine.createSpy('show');
    contextMenuService.show.subscribe(show);
  });

  describe('#new', () => {
    it('should create an instance', () => {
      expect(directive).toBeTruthy();
    });
  });

  describe('#onContextMenu', () => {
    it('should show attached context menu', () => {
      directive.contextMenu = new ContextMenuComponent(contextMenuService, {});
      directive.contextMenuSubject = { id: 'a' };
      const event = new MouseEvent('contextmenu');
      directive.onContextMenu(event);
      expect(show).toHaveBeenCalledWith({
        event,
        contextMenu: directive.contextMenu,
        item: directive.contextMenuSubject,
      });
    });

    it('should not show attached context menu if it is disabled', () => {
      directive.contextMenu = new ContextMenuComponent(contextMenuService, {});
      directive.contextMenu.disabled = true;
      directive.contextMenuSubject = { id: 'a' };
      const event = new MouseEvent('contextmenu');
      directive.onContextMenu(event);
      expect(show).not.toHaveBeenCalled();
    });

    it('should show nothing if not context menu is attached', () => {
      directive.contextMenuSubject = { id: 'a' };
      const event = new MouseEvent('contextmenu');
      directive.onContextMenu(event);
      expect(show).not.toHaveBeenCalled();
    });
  });
});
